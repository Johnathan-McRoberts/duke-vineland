using Microsoft.AspNetCore.Mvc;

using DukeVineland.Dtos.Configuration;
using DukeVineland.Dtos.LoginDtos;

using DukeVineland.Services.Interfaces;
using System;

namespace DukeVineland.Server.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class UserLoginController : ControllerBase
    {
        private IUserLoginService _userLoginService;
        private ILogger<UserLoginController> _logger;

        public UserLoginController(
            IUserLoginService userLoginService,
            ILogger<UserLoginController> logger)
        {
            _userLoginService = userLoginService;
            _logger = logger;
        }

        /// <summary>
        /// Tries to log in a user.
        /// </summary>
        /// <param name="request">The check new user login to try to add.</param>
        /// <returns>The action result.</returns>
        [HttpPost]
        public async Task<IActionResult> Post([FromBody] UserLoginRequest request)
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
