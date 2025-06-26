using DukeVineland.Repositories;

using DukeVineland.Services.Interfaces;

namespace DukeVineland.Services.Services
{
    public class BookReaderService : IBookReaderService
    {
        public string Name => "Repo[" + _booksRepository.Name + "]";

        IMongoBooksRepository _booksRepository;

        public BookReaderService(
            IMongoBooksRepository booksRepository)
        {
            _booksRepository = booksRepository;
        }
    }
}
