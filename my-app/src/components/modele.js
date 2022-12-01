import { nanoid } from 'nanoid'

export const createTodoEntity = (id, title, content) => ({
  id,
  title,
  content,
  isDone: false
})

export const firstTodo = {
  id: nanoid(),
  title: "Создание TodoList",
  content: "Создание, просмотр, редактирование (изменение полей или то, что задача выполнена) и удаление задачи. Возможность прикрепления файлов к запис. Поля в задаче: заголовок, описание, дата завершения, прикрепление файла.Если дата завершения истекла или задача выполнена, это должно быть визуально отмечено. Откомментировать код в JSDoc и выложить на gitlab.",
  isDone: false 
}