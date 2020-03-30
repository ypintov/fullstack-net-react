using System.Threading.Tasks;
using API.Application.Abstract;
using API.Application.Contracts.Request;
using API.Application.Contracts.Response;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AuthController : ControllerBase
    {
        private readonly IIdentityService _identityService;
        public AuthController(IIdentityService identityService)
        {
            _identityService = identityService;
        }

        [HttpGet]
        public async Task<ActionResult<UserResponse>> GetCurrentUser()
        {
            return await _identityService.GetCurrentUser();
        }

        [AllowAnonymous]
        [HttpPost("login")]
        public async Task<ActionResult<UserResponse>> Login([FromBody]LoginUserRequest request)
        {
            return await _identityService.Login(request);
        }

        [AllowAnonymous]
        [HttpPost("register")]
        public async Task<ActionResult<UserResponse>> Register([FromBody]RegisterUserRequest request)
        {
            return await _identityService.Register(request);
        }
    }
}