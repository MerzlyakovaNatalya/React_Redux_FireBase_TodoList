import React from 'react'
import style from './TodoList.module.scss'

export const TodoList = () => {
    return (
        <div className={style.wrap}>
            <div className={style.wrap_todo}>
               <input type='text' placeholder='Задача'/>
               <input type='text' placeholder='Описание задачи'/>
            </div>
            <div className={style.wrapper}>
               <label>Дата завершения задачи</label>
               <label><input type='date'/></label>
               <label><input type='checkbox'/>Отметить, как выполнено</label>
               <button>Редактировать</button>
               <button>Удалить</button>
            </div>
        </div>
    )
}
