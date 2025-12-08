using DukeVineland.Dtos.ImportExportDtos;

namespace DukeVineland.Services.Interfaces
{
    public interface IExportService
    {
        public Task<ExportOptionsResponseDto> GetExportOptions();
        public Task<ExportResponseDto?> Export(ExportRequestDto exportRequest);
    }
}
