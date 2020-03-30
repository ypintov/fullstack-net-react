using System;
using System.Net;
using System.Threading.Tasks;
using API.Application.Abstract;
using API.Application.Constants;
using API.Application.Contracts.Request;
using API.Application.Contracts.Response;
using API.Application.Errors;
using API.Domain;
using Microsoft.AspNetCore.Identity;

namespace API.Infrastructure.Services
{
    public class IdentityService : IIdentityService
    {
        private readonly UserManager<AppUser> userManager;
        private readonly IJwtGenerator jwtGenerator;
        private readonly IUserAccessor userAccesor;
        private readonly SignInManager<AppUser> signInManager;
        public IdentityService(UserManager<AppUser> userManager, IJwtGenerator jwtGenerator,
        IUserAccessor userAccesor, SignInManager<AppUser> signInManager)
        {
            this.signInManager = signInManager;
            this.userAccesor = userAccesor;
            this.jwtGenerator = jwtGenerator;
            this.userManager = userManager;

        }
        public async Task<UserResponse> GetCurrentUser()
        {
            var user = await userManager.FindByNameAsync(userAccesor.GetCurrentUserName());

            if (user == null)
                throw new RestException(HttpStatusCode.Unauthorized);

            return new UserResponse
            {
                DisplayName = user.DisplayName,
                UserName = user.UserName,
                Token = jwtGenerator.CreateToken(user),
                Image = null
            };

        }

        public async Task<UserResponse> Login(LoginUserRequest request)
        {
            var user = await userManager.FindByEmailAsync(request.Email);

            if (user == null)
                throw new RestException(HttpStatusCode.Unauthorized);

            var result = await signInManager.CheckPasswordSignInAsync(user, request.Password, false);

            if (result.Succeeded)
            {
                return new UserResponse
                {
                    DisplayName = user.DisplayName,
                    Token = jwtGenerator.CreateToken(user),
                    UserName = user.UserName,
                    Image = null
                };
            }

            throw new RestException(HttpStatusCode.Unauthorized);
        }

        public async Task<UserResponse> Register(RegisterUserRequest request)
        {
             if (await userManager.FindByEmailAsync(request.Email) != null)
                throw new RestException(HttpStatusCode.BadRequest, new { Email = "Email already Exists" });

            if (await userManager.FindByNameAsync(request.UserName) != null)
                throw new RestException(HttpStatusCode.BadRequest, new { UserName = "Username is already taken" });

            var user = new AppUser
            {
                DisplayName = request.DisplayName,
                Email = request.Email,
                UserName = request.UserName
            };

            var result = await userManager.CreateAsync(user, request.Password);

            if (result.Succeeded)
            {
                return new UserResponse
                {
                    DisplayName = user.DisplayName,
                    UserName = user.UserName,
                    Token = jwtGenerator.CreateToken(user),
                    Image = null
                };
            }

            throw new Exception(GlobalConstants.ERROR_CREATING_USER);
        }
    }
}