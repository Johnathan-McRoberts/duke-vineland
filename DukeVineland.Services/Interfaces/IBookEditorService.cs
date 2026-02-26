using DukeVineland.Dtos.BookEditorDtos;

namespace DukeVineland.Services.Interfaces
{
    public interface IBookEditorService
    {
        Task<AddBookResponseDto> AddNewBookRead(AddBookRequestDto bookReadAddRequest);

        Task<EditorDetailsDto> GetEditorDetails();
    }
}
