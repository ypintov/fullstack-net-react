namespace API.Application.Contracts.Request
{
    public class LoginUserRequest
    {
        public string Email { get; set; }
        public string Password { get; set; }
    }
}