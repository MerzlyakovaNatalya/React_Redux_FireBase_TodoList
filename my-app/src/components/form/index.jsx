import React from 'react'
import style from './Form.module.scss'

export const Form = ({onSend,
    onChangeTitle,
    valueTitle,
    onChangeContent,
    valueContent,
    valueFile,
    onChangeFile}) => {
    return (
        <>
        <form className={style.wrap_form} onSubmit={(event) => onSend(event)}>
        <input 
          type="text" 
          placeholder="Задача"
          onChange={onChangeTitle}
          value={valueTitle}
          />
        <textarea
          name="text"
          placeholder="Описание задачи"
          onChange={onChangeContent}
          value={valueContent}
        ></textarea>
        <label htmlFor="file-loader-button" className={style.label_file}>{valueFile?valueFile.name:"Выбрать файл"}</label>
        <input 
        type="file" 
        id="file-loader-button" 
        className={style.label_button}
        onChange={onChangeFile}
        />
        <button className={style.buttons} type="submit">Отправить</button>
      </form>
        </>
    )
}
