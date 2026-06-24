import { nanoid } from "nanoid";
import React, { createContext } from "react";
import { useLocalStorage } from "usehooks-ts";

interface TodoContextProps {
  todos: Todo[]
  addTodo           : (text : string) => void;
  deleteTodo        : (id : string) => void;
  editTodo          : (id : string, text: string) => void
  updateTodoStatus  : (id: string) => void 
}

interface Todo {
  id : string,
  text : string,
  status : 'undone' | 'complete'
}

const TodoContext = createContext<TodoContextProps | undefined>(undefined);

const TodoProvider = (props : { children : React.ReactNode }) => {
  const [todos, setTodo] = useLocalStorage<Todo[]>('todos', [])

  const addTodo = (text: string) => {
    const newTodo : Todo = {
      id: nanoid(),
      text : text,
      status : 'undone'
    }

    setTodo([...todos, newTodo])
  }

  const deleteTodo = (id: string) => {
    setTodo(prevTodos => prevTodos.filter(todo => todo.id !== id))
  }

  const editTodo = (id: string, text: string) => {
    setTodo(prevTodo => {
      return prevTodo.map(todo => {
        if (todo.id === id) {
          return { ...todo, text }
        }
        return todo;
      })
    })
  }

  const updateTodoStatus = (id : string) => {
    setTodo(prevTodo => {
      return prevTodo.map(todo => {
        if (todo.id === id) {
          return {
            ...todo,
            status: todo.status === 'undone' ? 'completed' : 'undone'
          }
        }
      })
    })
  }

  const value : TodoContextProps = {
    todos,
    addTodo,
    deleteTodo,
    editTodo,
    updateTodoStatus
  }

  return (
    <TodoContext.Provider value={value}>{props.children}</TodoContext.Provider>
  )

}

export {
  TodoContext,
  TodoProvider
};
export type { Todo };

