using Microsoft.AspNetCore.Mvc;

using DukeVineland.Dtos.TablesDtos;

using DukeVineland.Services.Interfaces;

namespace DukeVineland.Server.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class BookTablesController
    {
        private readonly IBookTablesService _bookTablesService;

        public BookTablesController(IBookTablesService bookTablesService)
        {
            _bookTablesService = bookTablesService;
        }

        /// <summary>
        /// Tries to log in a user.
        /// </summary>
        /// <returns>The action result.</returns>
        [HttpGet]
        [Route("tallied-books")]
        public async Task<List<TalliedBook>> GetTalliedBooks()
        {
            List<TalliedBook> talliedBooks =
                await _bookTablesService.GetTalliedBooks();

            return talliedBooks;
        }
    }
}
