using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DukeVineland.Dtos.LoginDtos
{
    public class UserLoginResponse
    {
        public string Name { get; set; } = string.Empty;

        public int ErrorCode { get; set; } = (int)UserLoginResponseCode.Success;

        public string FailReason { get; set; } = string.Empty;

        public string UserId { get; set; } = string.Empty;

        public string Description { get; set; } = string.Empty;

        public string Email { get; set; } = string.Empty;
    }
}
