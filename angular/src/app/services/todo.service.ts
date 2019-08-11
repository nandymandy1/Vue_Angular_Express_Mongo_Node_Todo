import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class TodoService {
  BASEURL: string = "http://localhost:5000";

  constructor(private http: HttpClient) {}

  // Add a new Todo
  addNewTodo = async newTodo => {
    return this.http.post(`${this.BASEURL}/todos`, { description: newTodo });
  };
  // Get all the todos from backend
  getTodos = async () => {
    return this.http.get(`${this.BASEURL}/todos`);
  };

  //Complete Todo
  completeTodo = async id => {
    return this.http.put(`${this.BASEURL}/todos?id=${id}`, { id: id });
  };

  // Delete Todo
  todoDelete = async id => {
    return this.http.delete(`${this.BASEURL}/todos?id=${id}`);
  };
}
