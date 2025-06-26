using Microsoft.AspNetCore.Mvc;

using DukeVineland.Dtos.Configuration;

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

        public WeatherForecastController(
            MongoDatabaseConfig mongoDatabaseConfig,
            ILogger<WeatherForecastController> logger)
        {
            _mongoDatabaseConfig = mongoDatabaseConfig;
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
                        + _mongoDatabaseConfig.RemoteUserName

            })
            .ToArray();
        }
    }
}
