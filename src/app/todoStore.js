import create from "zustand";

import { devtools, persist } from "zustand/middleware";

const todoStore = (set) => ({
  todos: [],
  addTodo: (todo) => {
    set((state) => ({
      todos: [todo, ...state.todos],
    }));
  },
  deleteTodo: (todo) => {
    set((state) => ({
      todos: state.todos.filter((t) => t.id !== todo.id),
    }));
  },
  toggleComplete: (todoId) => {
    set((state) => ({
      todos: state.todos.map((todo) =>
        todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
      ),
    }));
  },
  todosLeft: (todo) => {
    set((state) => ({
      
    }))
  }
  activeTodos: (state) => state.todos.filter((todo) => !todo.completed),
  clearCompletedTodos: (completed) => {
    set((state) => ({
      todos: state.todos.filter((todo) => !todo.completed),
    }));
  },
});

const useTodoStore = create(
  devtools(
    persist(todoStore, {
      name: "todos",
    })
  )
);

export default useTodoStore;
