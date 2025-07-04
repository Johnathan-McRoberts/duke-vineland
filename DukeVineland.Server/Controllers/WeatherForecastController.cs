using Microsoft.AspNetCore.Mvc;

using DukeVineland.Dtos.Configuration;

using DukeVineland.Services.Interfaces;
using DukeVineland.Dtos.LoginDtos;

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
        private readonly IUserLoginService _userLoginService;

        public WeatherForecastController(
            MongoDatabaseConfig mongoDatabaseConfig,
            IBookReaderService bookReaderService,
            IUserLoginService userLoginService,
            ILogger<WeatherForecastController> logger)
        {
            _mongoDatabaseConfig = mongoDatabaseConfig;
            _bookReaderService = bookReaderService;
            _userLoginService = userLoginService;
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




        /// <summary>
        /// Tries to log in a user.
        /// </summary>
        /// <param name="request">The check new user login to try to add.</param>
        /// <returns>The action result.</returns>
        [HttpGet]
        [Route("log-in")]
        public async Task<IActionResult> GetLogin([FromQuery] UserLoginRequest request)
        {
            _logger.LogInformation($"Logging In {request.Name}");

            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            UserLoginResponse response =
                await _userLoginService.UserLogin(request);

            _logger.LogInformation($"Log In result code: {response.ErrorCode}");

            return Ok(response);
        }
    }
}
