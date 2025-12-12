namespace DukeVineland.Dtos.ImportExportDtos
{
    public class ExportResponseDto
    {
        public Stream ExportContent { get; set; }

        public string ContentType { get; set; } = string.Empty;

        public string FileDownloadName { get; set; } = string.Empty;
    }
}
