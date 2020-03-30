using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Application.Abstract;
using API.Infrastructure.Repository;
using API.Middleware;
using API.Persistence;
using FluentValidation.AspNetCore;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using AutoMapper;
using API.Domain;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc.Authorization;
using Microsoft.IdentityModel.Tokens;
using API.Application.Constants;
using System.Text;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using API.Infrastructure.Security;
using API.Infrastructure.Services;

namespace API
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddDbContext<DataContext>(opt =>
             opt.UseSqlite(Configuration.GetConnectionString("DefaultConnection")));
            services.AddCors(opt =>
            {
                opt.AddPolicy("CorsPolicy", policy =>
                {
                    policy.AllowAnyHeader().AllowAnyMethod().WithOrigins("http://localhost:3000");
                });
            });
            // Adding Automapper service
            services.AddAutoMapper(AppDomain.CurrentDomain.GetAssemblies());
            services.AddControllers(opt => {
                // Add Authorization Policy for Endpoints
                var policy = new AuthorizationPolicyBuilder().RequireAuthenticatedUser().Build();
                opt.Filters.Add(new AuthorizeFilter(policy));
             })
             // Adding FluentVlaidation
                  .AddFluentValidation(cfg => cfg.RegisterValidatorsFromAssemblyContaining<Startup>());

            var builder = services.AddIdentityCore<AppUser>();
            var identityBuilder = new IdentityBuilder(builder.UserType, builder.Services);
            identityBuilder.AddEntityFrameworkStores<DataContext>();

            //  Add Login and Sign In Manager services
            identityBuilder.AddSignInManager<SignInManager<AppUser>>();

            // Add JwtBearerToken configuration to use with appSettings
            var key = new SymmetricSecurityKey(
                Encoding.UTF8.GetBytes(Configuration[GlobalConstants.TOKEN_KEY_SECTION]));
            services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
                .AddJwtBearer(opt =>
                {
                    opt.TokenValidationParameters = new TokenValidationParameters
                    {
                        ValidateIssuerSigningKey = true,
                        IssuerSigningKey = key,
                        ValidateAudience = false,
                        ValidateIssuer = false,
                        // To Handler token exp
                        ValidateLifetime = true,
                        ClockSkew = TimeSpan.Zero
                    };
                });

                 // Add services for dependency Injection
            services.AddScoped<IRecipeRepository, RecipeRepository>();
            services.AddScoped<IJwtGenerator, JwtGenerator>();
            services.AddScoped<IUserAccessor, UserAccessor>();
            services.AddScoped<IIdentityService, IdentityService>();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseMiddleware<ErrorHandlingMiddleware>();

            //app.UseHttpsRedirection();

            app.UseRouting();

            app.UseCors("CorsPolicy");

            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
        }
    }
}
