const S = (function () {
  function serialize(items) {
    return JSON.stringify(items.map((item) => item.text));
  }

  function deserialize(items) {
    return JSON.parse(items)?.map((text, index) => ({
      text,
      order: index,
    }));
  }

  function move(list, from, to) {
    const item = list.splice(from, 1)[0];
    if (!item) {
      return;
    }

    list.splice(to, 0, item);
  }

  function fixOrder(list) {
    list.forEach((item, index) => {
      item.order = index;
    });
  }

  class TodoList {
    constructor() {
      this.todo = [];
      this.done = [];
    }

    add(text) {
      this.todo.push({
        text,
        order: this.todo.length,
      });
    }

    markAsDone(orderIndex) {
      const item = this.todo.splice(orderIndex, 1)[0];
      if (!item) {
        return;
      }

      this.done.push(item);
      fixOrder(this.todo);
      fixOrder(this.done);
    }

    removeDoneItem(orderIndex) {
      this.done.splice(orderIndex, 1);
      fixOrder(this.done);
    }

    moveTodoItem(from, to) {
      move(this.todo, from, to);
      fixOrder(this.todo);
    }

    moveDoneItem(from, to) {
      move(this.done, from, to);
      fixOrder(this.done);
    }

    save() {
      localStorage.setItem("todo", serialize(this.todo));
      localStorage.setItem("done", serialize(this.done));
    }

    load() {
      const todoData = deserialize(localStorage.getItem("todo"));
      if (todoData) {
        this.todo = todoData;
      }
      const doneData = deserialize(localStorage.getItem("done"));
      if (doneData) {
        this.done = doneData;
      }

      const legacyData = JSON.parse(localStorage.getItem("notes"));
      if (legacyData) {
        legacyData.forEach((text) => this.add(text));
        localStorage.removeItem("notes");
      }
    }
  }

  return new TodoList();
})();
