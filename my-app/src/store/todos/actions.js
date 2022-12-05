import { todosRef } from '../../firebase'

export const ADD_TODO = "ADD_TODO"
export const ADD_TODOS = "ADD_TODOS"
export const CHANGE_TODO = "CHANGE_TODO"
export const DELETE_TODO = "DELETE_TODO"

/**
 * createAction добавления todo
 * @param {object} todo 
 * @returns {object} {
    type: ADD_TODO,
    payload: todo,
}
 */
export const addTodo = (todo) => ({
    type: ADD_TODO,
    payload: todo,
})

export const addTodos = (todos) => ({
    type: ADD_TODOS,
    payload: todos,
})

/**
 * createAction изменения todo
 * @param {*} todoId 
 * @param {object} todo 
 * @returns {object} {
    type: CHANGE_TODO,
    payload: {
        todoId, 
        todo
    },
}
 */
export const changeTodo = (todoId, todo) => ({
    type: CHANGE_TODO,
    payload: {
        todoId, 
        todo
    },
})

/**
 * createAction удаление todo
 * @param {*} todoId 
 * @returns {object} {
    type: DELETE_TODO,
    payload: todoId,
}
 */
export const deleteTodo = (todoId) => ({
    type: DELETE_TODO,
    payload: todoId,
})

/**
 * Добавление  todo в Firebase
 * @param {object} todo
 */
export const pushTodoToFb = (todo) => () => {
    todosRef.push(todo, (error) => {
        console.log("Error: ", error)
    })
}

/**
 * Удаление todo из Firebase
 * @param {*} todoId 
 * @returns если произойдёт ощибка вернёт error
 */
 export const removeTodofromFb = (todoId) => () => {
    todosRef.child(todoId).remove((error) => {
        console.log("error", error)
    })
}

/**
 * Обновление todo в Firebase
 * @param {*} todoId 
 * @param {object} todo 
 */
 export const updateTodoInFb = (todoId, isDone) => () => {
    todosRef.child(todoId).update(isDone, (error) => {
        console.log("error", error)
    })
}

/**
 *Прослушивание изменений добавления todo в Firebase, добавление изменённых данных в Redux
 */
export const onTrackingAddedTodos = (dispatch) => {
     todosRef.on('child_added', (snapshot) => {
        dispatch(addTodo({
            ...snapshot.val(),
            id: snapshot.key
        }))
     })
}

/**
 * Отписка от прослушивания добавления todo в Firebase
 */
export const offTrackingAddedTodos = () => {
    todosRef.off('child_added')
}


/**
 * Прослушивание изменений Удалений todo в Firebase, удаление todo в Redux по ключу
 * @param {*} dispatch 
 */
export const onTrackingRemovedTodos = (dispatch) => {
    todosRef.on('child_removed', (snapshot) => {
        dispatch(deleteTodo(snapshot.key)
        )
     })
}

/**
 * Отписка от прослушивания удаления todo в Firebase
 */
export const offTrackingRemovedTodos = () => {
    todosRef.off('child_removed')
}

/**
 * Прослушивание изменений обновлений todo в Firebase
 * @param {*} dispatch 
 */
 export const onTrackingChangedTodos = (dispatch) => {
    todosRef.on('child_changed', (snapshot) => {
        dispatch(changeTodo(snapshot.key, snapshot.val())
        )
     })
}

/**
 * Отписка от прослушивания обновлений todo в Firebase
 */
 export const offTrackingChangedTodos = () => {
    todosRef.off('child_changed')
}

