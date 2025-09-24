using Microsoft.AspNetCore.Identity;

namespace MBL.Data
{
    // Add profile data for application users by adding properties to the ApplicationUser class
    public class ApplicationUser : IdentityUser
    {
        public string? FirstName { get; set; }
        public string? LastName { get; set; }

        public int? EmployeeId { get; set; }
    }

}
