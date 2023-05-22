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

        public async Task<TodoItem> AddItem(TodoItem item)
        {
            await _dbContext.TodoItems.AddAsync(item);
            await _dbContext.SaveChangesAsync();

            return item;
        }

        public async Task<TodoItem> DeleteItem(int id)
        {
            try
            {
                var result = await _dbContext.TodoItems.FindAsync(id);
                _dbContext.TodoItems.Remove(result);
                _dbContext.SaveChanges();
                return result;

            }
            catch (Exception ex) 
            {
                return null;
            }
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

        public async Task<TodoItem> GetItemId(int id)
        {
            try
            {
                return await _dbContext.TodoItems.FindAsync(id);
            }
            catch (Exception ex)
            {
                return null;
            }
        }

        public async Task<TodoItem> ModifyItem(TodoItem item)
        {
            try
            {
                _dbContext.Entry(item).State = EntityState.Modified;
                await _dbContext.SaveChangesAsync();
                return item;
                
            }
            catch (Exception ex)
            {
                return null;
            }
        }
    }
}
