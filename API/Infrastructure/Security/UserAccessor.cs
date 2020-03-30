using System.Linq;
using System.Security.Claims;
using API.Application.Abstract;
using Microsoft.AspNetCore.Http;

namespace API.Infrastructure.Security
{
    public class UserAccessor : IUserAccessor
    {
        private readonly IHttpContextAccessor _httpContextAccessor;
        public UserAccessor(IHttpContextAccessor httpContextAccesor)
        {
            _httpContextAccessor = httpContextAccesor;
        }
        public string GetCurrentUserName()
        {
            var username = _httpContextAccessor.HttpContext.User?
                           .Claims.FirstOrDefault(u => u.Type == ClaimTypes.NameIdentifier)?.Value;

            return username;
        }
    }
}