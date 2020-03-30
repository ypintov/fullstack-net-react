using API.Domain;

namespace API.Application.Abstract
{
    public interface IJwtGenerator
    {
        string CreateToken(AppUser user);
    }
}