using System;
using Microsoft.AspNetCore.Identity;

namespace API.Domain
{
    public class AppUser : IdentityUser
    {
        public string DisplayName { get; set; }
        public string AboutMe { get; set; }
        public string Gender { get; set; }
        public string Interest { get; set; }
        public string Country { get; set; }
        public string City { get; set; }
    }
}