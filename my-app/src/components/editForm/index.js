import React from "react";
import style from './EditForm.module.scss'

export const EditForm = (
     {onChangeTitleRedaction,
     onChangeContentRedaction,
     onSendChange, 
     valueContentRedaction, 
     valueTitleRedaction,
     isDone,
     redaction,
     id,
     title,
     content}
    ) => {
  return (
    <form
      className={isDone ? style.form_done : style.form}
      onSubmit={(event) => onSendChange(event, id, !redaction)}
    >
      <div
        className={
            redaction ? style.wrap_title_redaction : style.wrap_title
        }
      >
        <label htmlFor="title" className={style.label_title}>
          {title}
        </label>
        <input
          id="title"
          type="text"
          className={redaction ? style.input_title : style.title_none}
          placeholder="Задача"
          value={valueTitleRedaction}
          onChange={onChangeTitleRedaction}
        />
      </div>
      <div
        className={
          redaction ? style.wrap_content_redaction : style.wrap_content
        }
      >
        <label htmlFor="content" className={style.label_content}>
          {content}
        </label>
        <textarea
          id="content"
          type="text"
          className={
            redaction ? style.textarea_content : style.content_none
          }
          placeholder="Описание задачи"
          value={valueContentRedaction}
          onChange={onChangeContentRedaction}
        />
      </div>
      {redaction && (
        <div className={style.wrap_button_redaction}>
          <button className={style.button_redaction} type="submit">
            Изменить
          </button>
        </div>
      )}
    </form>
  );
};
