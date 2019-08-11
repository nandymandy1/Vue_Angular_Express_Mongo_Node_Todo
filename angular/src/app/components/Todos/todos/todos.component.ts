import { Component, OnInit } from "@angular/core";
import { TodoService } from "src/app/services/todo.service";

@Component({
  selector: "app-todos",
  templateUrl: "./todos.component.html",
  styleUrls: ["./todos.component.css"]
})
export class TodosComponent implements OnInit {
  todos: any[] = [];
  success: Boolean = false;
  message: string = "";

  constructor(private todoService: TodoService) {}

  ngOnInit() {
    this.getTodos();
  }

  // Initial Message states
  initNotification = res => {
    this.success = res.status;
    this.message = res.message;
    setTimeout(() => {
      this.message = "";
      this.success = false;
    }, 3000);
  };

  /**
   * Fetch all the todos from the database
   */
  getTodos = async () => {
    let data = await this.todoService.getTodos();
    data.subscribe((res: any) => {
      if (res.status) {
        this.todos = res.todos;
      } else {
        // Error
        this.initNotification(res);
      }
    });
  };

  /**
   * Delete Todo
   */
  deleteTodo = async id => {
    let data = await this.todoService.todoDelete(id);
    data.subscribe((res: any) => {
      if (res.status) {
        this.todos = this.todos.filter(todo => todo._id != res.todo._id);
      }
      this.initNotification(res);
    });
  };

  /**
   * New Todo Add
   */
  newTodoAdd(res) {
    if (res.status) {
      this.todos = [res.todo, ...this.todos];
    }
    this.initNotification(res);
  }
}
