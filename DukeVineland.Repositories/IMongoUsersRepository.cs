using DukeVineland.Domain.Users;

namespace DukeVineland.Repositories
{
    public interface IMongoUsersRepository
    {
        Task<User?> GetUser(string name);
    }
}
