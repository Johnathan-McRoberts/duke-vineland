using DukeVineland.Domain.Books;
using DukeVineland.Domain.Geography;
using DukeVineland.Dtos.BookEditorDtos;

using DukeVineland.Repositories;

using DukeVineland.Services.Interfaces;

namespace DukeVineland.Services.Services
{
    public class BookEditorService : IBookEditorService
    {
        private readonly IMongoGeographyRepository _geography;
        private readonly IMongoBooksRepository _booksRepository;

        public BookEditorService(
                IMongoBooksRepository booksRepository,
                IMongoGeographyRepository geography)
        {
            _booksRepository = booksRepository;
            _geography = geography;
        }

        public async Task<EditorDetailsDto> GetEditorDetails()
        {
            List<string> authorNames = new List<string>();
            List<string> countryNames = new List<string>();
            List<string> languages = new List<string>();
            List<string> tags = new List<string>();

            List<BookRead> allBooks = await _booksRepository.GetAllBooksRead();

            foreach (BookRead book in allBooks)
            {
                authorNames.Add(book.Author);
                languages.Add(book.OriginalLanguage);
                tags.AddRange(book.Tags);
            }

            List<Nation> nations = await _geography.GetNations();

            foreach (Nation nation in nations)
            {
                countryNames.Add(nation.Name);
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
            List<string> trimmed = new List<string>();
            foreach (string item in items)
            {
                trimmed.Add(item.Trim());
            }

            return trimmed.Distinct().OrderBy(x => x).ToList().ToArray();
        }
    }
}
