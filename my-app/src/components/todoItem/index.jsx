import React from 'react'
import style from'./TodoItem.module.scss'
import { useSelector } from 'react-redux'
import { getTodos } from '../../store/todos/selectors'
import { Form } from "../form";

export const TodoItem = ({
  handleOnChangeData, 
  getDateFormat, 
  removeTodo,
  onChangeCheckbox,
  handleOnChangeRedaction}) => {

  const todo = useSelector(getTodos);
  
  return (
    <div>
        {todo.map((item) => (
          <div className={style.wrap_todo} key={item.id}>
          <div className={style.todo}>
            {
              item.redaction ? (
                 <Form />
              ) : (
                <div>
                <h3>{item.title}</h3>
                <p className={style.content}>{item.content}</p>
              </div>
              )
            }
          </div>
          <div className={style.wrapper}>
        <label className={style.label_data}>
          Дата завершения задачи <span>{getDateFormat()}</span>
        </label>
        <label>
          <input type="date" onChange={handleOnChangeData} />
        </label>
        <label>
          <input 
             type="checkbox"
             id={item.id}
             checked={item.isDone}
             onChange={() => onChangeCheckbox(item.id, !item.isDone)}
              />&#32;Отметить, как выполнено
        </label>
        <label>
          <input 
          type="checkbox" 
          checked={item.redaction}
          onChange={() => handleOnChangeRedaction(item.id, !item.redaction)}/>Редактировать
        </label>
        <label>
          <button 
          className={style.button}
          onClick={() => removeTodo(item.id)}>Удалить</button>
        </label>
      </div>
          </div>)
        )
      }
    </div>
  )
}
