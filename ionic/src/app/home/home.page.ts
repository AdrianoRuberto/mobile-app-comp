import {Component} from "@angular/core";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"]
})
export class HomePage {
  public todos = [];
  public onlyShowNotDone = false;

  constructor() {
    this.todos = [
      this.makeTodo(1),
      this.makeTodo(2, true),
      this.makeTodo(3),
    ];
  }

  addTodo() {
    this.todos = [...this.todos, this.makeTodo()];
  }

  makeTodo(number?: Number, done?: Boolean) {
    const id = number ? number : this.todos.length + 1;
    return {
      id: id,
      done: done ? true : false,
      text: "Todo Item #" + id
    };
  }

  toggleTodo(todo) {
    todo.done = !todo.done;
  }

  filteredTodos() {
    return this.todos.filter((todo) => !(todo.done && this.onlyShowNotDone));
  }
}
