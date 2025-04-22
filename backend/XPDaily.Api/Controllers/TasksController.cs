using Microsoft.AspNetCore.Mvc;

[ApiController]
[Route("api/[controller]")]
public class TasksController : ControllerBase
{
    private static List<TaskItem> tasks = new List<TaskItem>
    {
        new TaskItem { Id = 1, Title = "Exemplo de Tarefa ||", IsCompleted = false }
    };

    [HttpGet]
    public IActionResult GetTasks()
    {
        var notCompleted = tasks.Where(t => !t.IsCompleted).ToList();
        var completed = tasks.Where(t => t.IsCompleted).ToList();
        return Ok(new { notCompleted, completed });
    }

    [HttpPost]
    public IActionResult AddTask([FromBody] TaskItem newTask)
    {
        if (string.IsNullOrWhiteSpace(newTask.Title))
        {
            return BadRequest("O título da tarefa não pode estar vazio.");
        }

        newTask.Id = tasks.Count > 0 ? tasks.Max(t => t.Id) + 1 : 1;
        newTask.IsCompleted = false;
        tasks.Add(newTask);
        return Ok(new { notCompleted = tasks.Where(t => !t.IsCompleted), completed = tasks.Where(t => t.IsCompleted) });
    }

    [HttpPut("{id}/complete")]
    public IActionResult CompleteTask(int id)
    {
        var task = tasks.FirstOrDefault(t => t.Id == id);
        if (task == null) return NotFound();

        task.IsCompleted = true;
        return Ok(new { notCompleted = tasks.Where(t => !t.IsCompleted), completed = tasks.Where(t => t.IsCompleted) });
    }
}

public class TaskItem
{
    public int Id { get; set; }
    public string Title { get; set; } = string.Empty; // Inicializador padrão para evitar o aviso CS8618
    public bool IsCompleted { get; set; }
}