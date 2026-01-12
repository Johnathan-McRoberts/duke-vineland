using Microsoft.AspNetCore.Mvc;

using DukeVineland.Dtos.BookEditorDtos;

using DukeVineland.Services.Interfaces;

namespace DukeVineland.Server.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class BookEditorController : ControllerBase
    {
        private readonly IBookEditorService _bookEditorService;

        public BookEditorController(IBookEditorService bookEditorService)
        {
            _bookEditorService = bookEditorService;
        }

        [HttpGet]
        [Route("editor-details")]
        public async Task<IActionResult> GetEditorDetails()
        {
            EditorDetailsDto editorDetails =
                await _bookEditorService.GetEditorDetails();

            return Ok(editorDetails);
        }
    }
}
