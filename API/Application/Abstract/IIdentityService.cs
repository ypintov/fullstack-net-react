using System.Threading.Tasks;
using API.Application.Contracts.Request;
using API.Application.Contracts.Response;

namespace API.Application.Abstract
{
    public interface IIdentityService
    {
        Task<UserResponse> Login(LoginUserRequest request);
        Task<UserResponse> Register(RegisterUserRequest request);
        Task<UserResponse> GetCurrentUser();
    }
}