using DukeVineland.Domain.Books;

namespace DukeVineland.Repositories
{
    public interface IMongoBooksRepository
    {
        public string Name { get; }

        Task<List<BookRead>> GetAllBooksRead();
    }
}
