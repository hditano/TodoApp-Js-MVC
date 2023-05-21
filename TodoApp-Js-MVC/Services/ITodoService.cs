using System.Runtime.CompilerServices;
using TodoApp_Js_MVC.Models;

namespace TodoApp_Js_MVC.Services
{
    public interface ITodoService
    {
        Task<List<TodoItem>> GetAllItems();
        Task<TodoItem> GetItemId(int id);
        Task<TodoItem> ModifyItem(int id, TodoItem item);
        Task<TodoItem> DeleteItem(int id);
        Task<TodoItem> AddItem (TodoItem item);
    }
}
