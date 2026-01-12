using DukeVineland.Dtos.BookEditorDtos;

namespace DukeVineland.Services.Interfaces
{
    public interface IBookEditorService
    {
        Task<EditorDetailsDto> GetEditorDetails();
    }
}
