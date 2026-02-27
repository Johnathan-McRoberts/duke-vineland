using DukeVineland.Domain.Books;
using DukeVineland.Dtos.TablesDtos;

namespace DukeVineland.Services.Utilities
{
    public static class BooksUtilities
    {

        public static ReadBook GetReadBook(BookRead book)
        {
            return new ReadBook()
            {
                Date = book.Date,
                DateString = book.DateString,
                Author = book.Author,
                Title = book.Title,
                Pages = book.Pages,
                Format = book.Format.ToString(),
                ImageUrl = book.ImageUrl,
                Nationality = book.Nationality,
                OriginalLanguage = book.OriginalLanguage,
                Notes = book.Note,
                Tags = book.Tags.ToArray(),
                User = book.User,
                Id = book.Id.ToString()
            };
        }
    }
}
