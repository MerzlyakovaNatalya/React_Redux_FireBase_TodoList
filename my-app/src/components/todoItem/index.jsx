import React, { useRef } from 'react'
import style from './TodoItem.module.scss'
import { useSelector } from 'react-redux'
import { getTodos } from '../../store/todos/selectors'
import { EditForm } from '../editForm'

export const TodoItem = ({
  handleOnChangeData,
  onChangeData,
  removeTodo,
  onChangeCheckbox,
  handleOnChangeRedaction,
  onChangeTitleRedaction,
  onChangeContentRedaction,
  onSendChange, 
  valueContentRedaction, 
  valueTitleRedaction,
}) => {
  const todo = useSelector(getTodos)
  console.log(typeof onChangeTitleRedaction)

  return (
    <div className={style.wrap_todos}>
      {todo.map((item) => (
        <div className={style.wrap_todo} key={item.id}>
          <div className={item.redaction ? style.todo_redaction : style.todo}>
            {
              <div>
                <EditForm
                onChangeTitleRedaction={onChangeTitleRedaction}
                onChangeContentRedaction={onChangeContentRedaction}
                onSendChange={onSendChange}
                valueTitleRedaction={valueTitleRedaction}
                valueContentRedaction={valueContentRedaction}
                 {...item}
                 >
                </EditForm>
              </div>
            }
          </div>
          <div className={style.wrapper}>
            <label className={style.label_data}>
              Дата завершения задачи <span>{item.data}</span>
            </label>
            <label>
            {item.clickData && (
                <input
                id={item.id}
                type="checkbox"
                checked={item.clickData}
                onChange={() => onChangeData(item.id)}
                className={style.checkbox_data}
                />
              )}
              <input 
                type="date" 
                onChange={(event) => handleOnChangeData(event, item.id)}
               />
            </label>
            <label>
              <input
                type="checkbox"
                id={item.id}
                checked={item.isDone}
                onChange={() => onChangeCheckbox(item.id, !item.isDone)}
              />&#32;Отметить, как выполнено
            </label>
            {item.id === 1234 ? (
              <label>
                <button
                  className={style.input_redaction}
                  checked={item.redaction}
                />&#32;Редактировать
              </label>
            ) : (
              <label>
                <input
                  type="checkbox"
                  checked={item.redaction}
                  onChange={() =>
                    handleOnChangeRedaction(item.id, !item.redaction)
                  }
                />&#32;Редактировать
              </label>
            )}
            <label>
              <button
                className={style.button}
                onClick={() => removeTodo(item.id)}
              >
                Удалить
              </button>
            </label>
          </div>
        </div>
      ))}
    </div>
  )
}
