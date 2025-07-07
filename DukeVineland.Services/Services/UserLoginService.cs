using DukeVineland.Domain.Users;
using DukeVineland.Dtos.LoginDtos;
using DukeVineland.Repositories;
using DukeVineland.Services.Interfaces;

namespace DukeVineland.Services.Services
{
    public class UserLoginService : IUserLoginService
    {
        public IMongoUsersRepository _usersRepository;

        public UserLoginService(
            IMongoUsersRepository usersRepository)
        {
            _usersRepository = usersRepository;
        }

        public async Task<UserLoginResponse> UserLogin(
            UserLoginRequest loginRequest)
        {
            UserLoginResponse response = new UserLoginResponse { Name = loginRequest.Name };

            // First check that the user exists
            User? userLogin =
                await _usersRepository.GetUser(loginRequest.Name);

            if (userLogin == null)
            {
                response.ErrorCode = (int)UserLoginResponseCode.UnknownUser;
                response.FailReason = "Could not find this user.";
                return response;
            }

            // Check the password
            if (!userLogin.VerifyPassword(loginRequest.Password))
            {
                response.ErrorCode = (int)UserLoginResponseCode.IncorrectPassword;
                response.FailReason = "Incorrect password please try again.";
                return response;
            }

            // Correct password so populate the login response
            response.UserId = userLogin.Id.ToString();
            response.Description = userLogin.Description;
            response.Email = userLogin.Email;

            return response;
        }
    }
}
