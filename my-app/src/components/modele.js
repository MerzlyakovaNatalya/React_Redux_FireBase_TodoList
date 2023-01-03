export const createTodoEntity = (title, content) => ({
  title,
  content,
  isDone: false,
  redaction: false,
  data: "",
  clickData: false
})

export const firstTodo = {
  id: 1234,
  title: "Создание TodoList",
  content: "Создание, просмотр, редактирование (изменение полей или то, что задача выполнена) и удаление задачи. Возможность прикрепления файлов к запис. Поля в задаче: заголовок, описание, дата завершения, прикрепление файла.Если дата завершения истекла или задача выполнена, это должно быть визуально отмечено. Все изменения в реальном времени. Откомментировать код в JSDoc и выложить на gitlab.",
  isDone: true, 
  redaction: false, 
  data: "1, 2023",
  clickData: false
}