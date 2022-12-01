import { todosRef } from '../../firebase'

export const ADD_TODO = "ADD_TODO"
export const ADD_TODOS = "ADD_TODOS"
export const CHANGE_TODO = "CHANGE_TODO"
export const DELETE_TODO = "DELETE_TODO"

export const addTodo = (todo) => ({
    type: ADD_TODO,
    payload: todo,
})

export const addTodos = (todos) => ({
    type: ADD_TODOS,
    payload: todos,
})

export const changeTodo = (todoId, todo) => ({
    type: CHANGE_TODO,
    payload: {
        todoId, 
        todo
    },
})

export const deleteTodo = (todoId) => ({
    type: DELETE_TODO,
    payload: todoId,
})

export const pushTodoToFb = (todo) => () => {
    todosRef.push(todo)
}

export const onTrackingAddedTodos = () => {
    todosRef.on('child_added', (snapshot) => {
      console.log(snapshot, snapshot.val())
    })
}