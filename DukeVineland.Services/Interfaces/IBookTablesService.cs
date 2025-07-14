using DukeVineland.Dtos.TablesDtos;

namespace DukeVineland.Services.Interfaces
{
    public interface IBookTablesService
    {
        Task<List<TalliedBook>> GetTalliedBooks();
    }
}
