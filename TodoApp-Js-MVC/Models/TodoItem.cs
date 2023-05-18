using System.ComponentModel.DataAnnotations;

namespace TodoApp_Js_MVC.Models
{
    public class TodoItem
    {
        [Key]
        public int TodoID { get; set; }
        public string? Title { get; set; }
        public string? Description { get; set; }
        public bool IsCompleted { get; set; }
    }
}
