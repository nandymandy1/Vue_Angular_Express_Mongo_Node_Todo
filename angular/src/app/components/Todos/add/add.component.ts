import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { TodoService } from "src/app/services/todo.service";

@Component({
  selector: "app-add",
  templateUrl: "./add.component.html",
  styleUrls: ["./add.component.css"]
})
export class AddComponent implements OnInit {
  newTodo: string = "";
  @Output() addedTodo: EventEmitter<any> = new EventEmitter();

  constructor(private todoService: TodoService) {}
  ngOnInit() {}

  addTodo = async () => {
    let data = await this.todoService.addNewTodo(this.newTodo);
    data.subscribe((res: any) => {
      console.log(res);
      if (res.status) {
        this.newTodo = "";
      }
      this.addedTodo.emit(res);
    });
  };
}
