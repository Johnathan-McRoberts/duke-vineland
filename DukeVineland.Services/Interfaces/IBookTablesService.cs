using DukeVineland.Dtos.TablesDtos;

namespace DukeVineland.Services.Interfaces
{
    public interface IBookTablesService
    {
        Task<List<ReadBook>> GetReadBooks();
        Task<List<TalliedBook>> GetTalliedBooks();
    }
}
