using Microsoft.EntityFrameworkCore;
using TodoApp_Js_MVC.Models;

namespace TodoApp_Js_MVC.Data
{
    public class TodoDbContext : DbContext
    {
        public TodoDbContext(DbContextOptions<TodoDbContext> options ) : base(options)
        {
            
        }

        public DbSet<TodoItem> TodoItems { get; set; }
    }
}
