using DukeVineland.Dtos.ImportExportDtos;

using DukeVineland.Repositories;

using DukeVineland.Services.Interfaces;

namespace DukeVineland.Services.Services
{
    public class ExportService : IExportService
    {
        public string Name => "ExportService";

        public readonly static DocumentType[] DocumentTypesn =
            {
                new DocumentType()
                {
                    Name = "CSV",
                    Description = "Comma Separated Values"
                },
                new DocumentType()
                {
                    Name = "JSON",
                    Description = "JavaScript Object Notation"
                }
            };

        public readonly static ExportOption[] ExportOptions =
            {
                new ExportOption()
                {
                    Name = "All Books",
                    Description = "Export all books",
                    SupportedDocumentTypes = [ "CSV", "JSON" ]
                },
                new ExportOption()
                {
                    Name = "This Year",
                    Description = "Export only this years books",
                    SupportedDocumentTypes = [ "CSV" ]
                }
            };

        private readonly IMongoBooksRepository _booksRepository;

        public ExportService(
                IMongoBooksRepository booksRepository)
        {
            _booksRepository = booksRepository;
        }

        public async Task<ExportOptionsResponseDto> GetExportOptions()
        {
            ExportOptionsResponseDto exportOptions =
                new ExportOptionsResponseDto()
                {
                    DocumentTypes = DocumentTypesn,
                    ExportOptions = ExportOptions
                };

            return exportOptions;
        }

        public Task<ExportResponseDto?> Export(ExportRequestDto exportRequest)
        {
            throw new NotImplementedException();
        }
    }
}
