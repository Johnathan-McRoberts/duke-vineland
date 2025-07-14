using DukeVineland.Domain.Books;

using DukeVineland.Dtos.TablesDtos;

using DukeVineland.Repositories;

using DukeVineland.Services.Interfaces;

namespace DukeVineland.Services.Services
{
    public class BookTablesService : IBookTablesService
    {
        public string Name => "BookTablesService";

        private readonly IMongoBooksRepository _booksRepository;

        public BookTablesService(
                IMongoBooksRepository booksRepository)
        {
            _booksRepository = booksRepository;
        }

        public async Task<List<TalliedBook>> GetTalliedBooks()
        {
            // Get the sorted books
            List<BookRead> allBooks =
                (await _booksRepository.GetAllBooksRead())
                    .OrderBy(b => b.Date)
                    .ThenBy(b => b.Author)
                    .ThenBy(b => b.Title)
                    .ToList();

            // convert to tallied books
            List<TalliedBook> talliedBooks = new List<TalliedBook>();

            uint totalBooks = 0;
            uint totalBookFormat = 0;
            uint totalComicFormat = 0;
            uint totalAudioFormat = 0;
            uint totalPagesRead = 0;

            foreach (BookRead book in allBooks)
            {
                UpdateTalliedBooksTotals(
                    ref totalBooks,
                    ref totalPagesRead,
                    ref totalBookFormat,
                    ref totalComicFormat,
                    ref totalAudioFormat,
                    book);

                talliedBooks.Add(
                    new TalliedBook()
                    {
                        DateString = book.Date.ToString("yyyy-MM-dd"),
                        Date = book.Date,
                        Author = book.Author,
                        Title = book.Title,
                        Pages = book.Pages,
                        Format = book.Format.ToString(),
                        TotalBooks = totalBooks,
                        TotalPagesRead = totalPagesRead,
                        TotalBookFormat = totalBookFormat,
                        TotalComicFormat = totalComicFormat,
                        TotalAudioFormat = totalAudioFormat,
                    });
            }

            // Reverse the list to have the most recent books first
            talliedBooks.Reverse();

            // Return the tallied books
            return talliedBooks;
        }

        private static void UpdateTalliedBooksTotals(
            ref uint totalBooks,
            ref uint totalPagesRead,
            ref uint totalBookFormat,
            ref uint totalComicFormat,
            ref uint totalAudioFormat,
            BookRead book)
        {
            totalBooks++;
            totalPagesRead += book.Pages;

            if (book.Format == BookFormat.Book)
            {
                totalBookFormat++;
            }
            else if (book.Format == BookFormat.Comic)
            {
                totalComicFormat++;
            }
            else
            {
                totalAudioFormat++;
            }
        }
    }
}
