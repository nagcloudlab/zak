import { Component } from '@angular/core';
import { Todo } from './todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todos';
  todos: Array<Todo> = [
    { id: 1, title: 'Learn Angular', completed: true },
    { id: 2, title: 'Learn React', completed: false },
    { id: 3, title: 'Learn Vue', completed: false }
  ]
  filteredTodos: Array<Todo> = []
  currentFilter: string = 'ALL'
  activeTodosCount = 0;

  ngOnInit() {
    this.filteredTodos = this.todos;
    this.activeTodosCount = this.todos.filter(this.FILTERS['ACTIVE']).length;
  }

  handleKeyup(event: any) {
    let { key } = event
    if (key === 'Enter') {
      let newTodo = {
        id: this.todos.length + 1,
        title: event.target.value,
        completed: false
      }
      this.todos.push(newTodo)
      event.target.value = ''
    }
  }
  handleCompleteAll() {
    let areAllCompleted = this.todos.every(todo => todo.completed)
    this.todos.forEach(todo => todo.completed = !areAllCompleted)
  }

  handleComplete(id: number) {
    let todo = this.todos.find(todo => todo.id === id)
    if (todo)
      todo.completed = !todo.completed
    this.activeTodosCount = this.todos.filter(this.FILTERS['ACTIVE']).length;
  }

  handleDelete(id: number) {
    let idx = this.todos.findIndex(todo => todo.id === id)
    this.todos.splice(idx, 1)
  }


  FILTERS: any = {
    'ALL': () => true,
    'ACTIVE': (todo: Todo) => !todo.completed,
    'COMPLETED': (todo: Todo) => todo.completed

  }

  handleFilterChange(filter: string) {
    this.currentFilter = filter;
    this.filteredTodos = this.todos.filter(this.FILTERS[filter]);
  }

  handleClearCompleted() {
    this.todos = this.todos.filter(todo => !todo.completed)
    this.filteredTodos = this.todos
  }



}
