using System;
using System.Collections.Concurrent;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.SignalR;
using server.Hubs;

namespace server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TodosController : ControllerBase
    {
        private ConcurrentDictionary<Guid, TodoItem> _store = new ConcurrentDictionary<Guid, TodoItem>();

        private readonly IHubContext<TodoHub> _todoHubContext;

        public TodosController(IHubContext<TodoHub> todoHubContext)
        {
            _todoHubContext = todoHubContext;
        }

        [HttpGet]
        public ActionResult<IEnumerable<TodoItem>> Get()
        {
            return Ok(_store.Values);
        }

        [HttpPost]
        public ActionResult<TodoItem> Post([FromBody] TodoItem todoItem)
        {
            Guid key = Guid.NewGuid();
            todoItem.Id = key;
            _store.TryAdd(key, todoItem);

            _todoHubContext.Clients.All.SendAsync("itemAdded", todoItem);

            return Ok(todoItem);
        }

        [HttpPut("{id}")]
        public ActionResult<TodoItem> Put(Guid id, [FromBody] TodoItem todoItem)
        {
            _store.TryGetValue(todoItem.Id, out TodoItem oldValue);
            _store.TryUpdate(todoItem.Id, todoItem, oldValue);

            _todoHubContext.Clients.All.SendAsync("itemUpdated", todoItem);

            return Ok(todoItem);
        }
    }

    public class TodoItem
    {
        public Guid Id { get; set; }
        public string Value { get; set; }
        public bool Done { get; set; }
    }
}
