using DukeVineland.Dtos.TablesDtos;

namespace DukeVineland.Services.Interfaces
{
    public interface IBookTablesService
    {
        Task<List<BookAuthor>> GetBookAuthors();

        Task<List<ReadBook>> GetReadBooks();

        Task<List<TalliedBook>> GetTalliedBooks();
    }
}
