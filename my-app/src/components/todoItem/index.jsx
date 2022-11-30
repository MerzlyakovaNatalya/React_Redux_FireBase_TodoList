import React from 'react'
import style from "./TodoItem.module.scss"

export const TodoItem = ({handleOnChangeData, getDateFormat}) => {
  return (
    <div className={style.wrap_todo}>
      <div className={style.todo}></div>
      <div className={style.wrapper}>
        <label className={style.label_data}>
          Дата завершения задачи <span>{getDateFormat()}</span>
        </label>
        <label>
          <input type="date" onChange={handleOnChangeData} />
        </label>
        <label>
          <input type="checkbox" />&#32;Отметить, как выполнено
        </label>
        <label>
          <button>Редактировать</button>
        </label>
        <label>
          <button className={style.button}>Удалить</button>
        </label>
      </div>
    </div>
  )
}
