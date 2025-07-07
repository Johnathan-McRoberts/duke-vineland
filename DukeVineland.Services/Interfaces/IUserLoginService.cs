using DukeVineland.Dtos.LoginDtos;

namespace DukeVineland.Services.Interfaces
{
    public interface IUserLoginService
    {
        public Task<UserLoginResponse> UserLogin(UserLoginRequest loginRequest);
    }
}
