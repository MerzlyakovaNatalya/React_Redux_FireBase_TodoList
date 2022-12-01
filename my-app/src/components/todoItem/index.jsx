import React from 'react'
import style from'./TodoItem.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import { getTodos } from '../../store/todos/selectors'
import { changeTodo } from '../../store/todos/actions'

export const TodoItem = ({handleOnChangeData, getDateFormat}) => {

  const todo = useSelector(getTodos);
  const dispatch = useDispatch();

  const onChangeCheckbox = (todoId, isDone) => {
    dispatch(changeTodo(todoId, {
      isDone
    }))
  }
  
  return (
    <div>
        {todo.map((item) => (
          <div className={style.wrap_todo} key={item.id}>
          <div className={style.todo}>
           <div>
             <h3>{item.title}</h3>
             <p className={style.content}>{item.content}</p>
           </div>
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
          <button>Редактировать</button>
        </label>
        <label>
          <button className={style.button}>Удалить</button>
        </label>
      </div>
          </div>)
        )
      }
    </div>
  )
}
