using Microsoft.EntityFrameworkCore;
using System.Reflection.Metadata.Ecma335;
using TodoApp_Js_MVC.Data;
using TodoApp_Js_MVC.Models;

namespace TodoApp_Js_MVC.Services
{
    public class TodoService : ITodoService
    {
        private readonly TodoDbContext _dbContext;

        public TodoService(TodoDbContext dbcontext)
        {
            _dbContext = dbcontext;
        }


        public async Task<List<TodoItem>> GetAllItems()
        {
            try
            {
                return await _dbContext.TodoItems.ToListAsync();
            }
            catch (Exception ex)
            {
                return null;
            }
        }

        public async Task<List<TodoItem>> GetItemId(int id)
        {
            try
            {
                return await _dbContext.TodoItems.Where(t => t.TodoID == id).ToListAsync();
            }
            catch (Exception ex)
            {
                return null;
            }
        }
    }
}
