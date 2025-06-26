using Microsoft.AspNetCore.Mvc;

using DukeVineland.Dtos.Configuration;

using DukeVineland.Services.Interfaces;

namespace DukeVineland.Server.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class WeatherForecastController : ControllerBase
    {
        private static readonly string[] Summaries = new[]
        {
            "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
        };

        private readonly ILogger<WeatherForecastController> _logger;
        private readonly MongoDatabaseConfig _mongoDatabaseConfig;
        private readonly IBookReaderService _bookReaderService;

        public WeatherForecastController(
            MongoDatabaseConfig mongoDatabaseConfig,
            IBookReaderService bookReaderService,
            ILogger<WeatherForecastController> logger)
        {
            _mongoDatabaseConfig = mongoDatabaseConfig;
            _bookReaderService = bookReaderService;
            _logger = logger;
        }

        [HttpGet(Name = "GetWeatherForecast")]
        public IEnumerable<WeatherForecast> Get()
        {
            return Enumerable.Range(1, 5).Select(index => new WeatherForecast
            {
                Date = DateOnly.FromDateTime(DateTime.Now.AddDays(index)),
                TemperatureC = Random.Shared.Next(-20, 55),
                Summary =
                    Summaries[Random.Shared.Next(Summaries.Length)]
                        + " - "
                        + _bookReaderService.Name

            })
            .ToArray();
        }
    }
}
