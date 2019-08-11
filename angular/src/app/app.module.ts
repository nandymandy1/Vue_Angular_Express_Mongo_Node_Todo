import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { NavbarComponent } from "./components/Layouts/navbar/navbar.component";
import { FooterComponent } from "./components/Layouts/footer/footer.component";
import { AddComponent } from "./components/Todos/add/add.component";
import { TodoComponent } from "./components/Todos/todo/todo.component";
import { TodosComponent } from "./components/Todos/todos/todos.component";
import { TodoService } from "./services/todo.service";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    AddComponent,
    TodoComponent,
    TodosComponent
  ],
  imports: [BrowserModule, FormsModule, HttpClientModule],
  providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule {}
