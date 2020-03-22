using System.Threading.Tasks;
namespace API.Application.Abstract
{
    public interface IRepository
    {
         void Add<T>(T entity) where T : class;

         void Delete<T>(T enetity) where T : class;

         Task<bool> SaveAll();

         
    }
}