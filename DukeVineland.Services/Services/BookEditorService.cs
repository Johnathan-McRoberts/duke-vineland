using DukeVineland.Domain.Books;

using DukeVineland.Dtos.BookEditorDtos;

using DukeVineland.Repositories;

using DukeVineland.Services.Interfaces;

namespace DukeVineland.Services.Services
{
    public class BookEditorService : IBookEditorService
    {

        private readonly IMongoBooksRepository _booksRepository;

        public BookEditorService(
                IMongoBooksRepository booksRepository)
        {
            _booksRepository = booksRepository;
        }

        public async Task<EditorDetailsDto> GetEditorDetails()
        {
            List<string> authorNames = new List<string>();
            List<string> countryNames = new List<string>();
            List<string> languages = new List<string>();
            List<string> tags = new List<string>();

            List<BookRead> allBooks =
                await _booksRepository.GetAllBooksRead();

            foreach (BookRead book in allBooks)
            {
                authorNames.Add(book.Author);
                countryNames.Add(book.Nationality);
                languages.Add(book.OriginalLanguage);
                tags.AddRange(book.Tags);
            }

            return
                new EditorDetailsDto()
                {
                    AuthorNames = GetSortedDistinct(authorNames),
                    CountryNames = GetSortedDistinct(countryNames),
                    Languages = GetSortedDistinct(languages),
                    Tags = GetSortedDistinct(tags),
                };
        }

        private static string[] GetSortedDistinct(List<string> items)
        {
            return items.Distinct().OrderBy(x => x).ToList().ToArray();
        }
    }
}
