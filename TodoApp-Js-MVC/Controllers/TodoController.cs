using Microsoft.AspNetCore.Mvc;
using TodoApp_Js_MVC.Models;
using TodoApp_Js_MVC.Services;

namespace TodoApp_Js_MVC.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class TodoController : ControllerBase
    {
        private readonly ITodoService _todoService;

        public TodoController(ITodoService todoService)
        {
            _todoService = todoService;
        }

        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            var result = await _todoService.GetAllItems();

            if(result == null)
            {
                return StatusCode(StatusCodes.Status404NotFound, "No authors in database");
            }

            return StatusCode(StatusCodes.Status200OK, result);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetItemId(int id)
        {
            var result = await _todoService.GetItemId(id);

            return StatusCode(StatusCodes.Status200OK, result);
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteItem(int id)
        {
            var result = await _todoService.DeleteItem(id);

            return StatusCode(StatusCodes.Status200OK, result);
        }

        [HttpPost]
        public async Task<IActionResult> AddItem(TodoItem item)
        {
            var result = await _todoService.AddItem(item);

            return StatusCode(StatusCodes.Status200OK, result);
        }
    }
}
