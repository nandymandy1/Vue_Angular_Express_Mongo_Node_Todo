import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { TodoService } from "src/app/services/todo.service";

@Component({
  selector: "app-todo",
  templateUrl: "./todo.component.html",
  styleUrls: ["./todo.component.css"]
})
export class TodoComponent implements OnInit {
  @Input() todo: any;
  @Output() todoDelete: EventEmitter<any> = new EventEmitter();
  @Output() todoEdit: EventEmitter<any> = new EventEmitter();
  constructor(private todoService: TodoService) {}
  ngOnInit() {}

  completeTodo = async () => {
    let data = await this.todoService.completeTodo(this.todo._id);
    data.subscribe((res: any) => {
      this.todo = res.updatedTodo;
      this.todoEdit.emit(res);
    });
  };

  deleteTodo = async () => {
    this.todoDelete.emit(this.todo._id);
  };
}
