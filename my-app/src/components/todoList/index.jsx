import React from "react";
import style from "./TodoList.module.scss";
import { useState } from "react";
import { TodoItem } from '../todoItem';
const dayjs = require("dayjs");
let localizedFormat = require("dayjs/plugin/localizedFormat");

export const TodoList = () => {
  const [data, setData] = useState("");
  const [valueTitle, setValueTitle] = useState("");
  const [valueContent, setValueContent] = useState("");
  const [valueFile, setValueFile] = useState();

  const handleOnChangeData = (event) => {
    event.preventDefault();
    setData(event.target.value);
  };

  const getDateFormat = () => {
    if (data === "") {
      return "";
    } else {
      dayjs.extend(localizedFormat);
      const formatData = dayjs(data).format("D, YYYY");
      return formatData;
    }
  };

  const onChangeTitle = (event) => {
    event.preventDefault();
    setValueTitle(event.target.value);
  }

  const onChangeContent = (event) => {
    event.preventDefault();
    setValueContent(event.target.value);
  }

  const onChangeFile = (event) => {
    event.preventDefault();
    const file = event.target.files[0]
    setValueFile(file);
  }
  const onSend = () => {

  }

  const resetForm = () => {

  }

  return (
    <div className={style.wrap}>
      <form className={style.wrap_form} onSubmit={() => {
        onSend()
        resetForm()}}>
        <input 
          type="text" 
          placeholder="Задача" 
          onChange={onChangeTitle}/>
        <textarea
          name="text"
          placeholder="Описание задачи"
          onChange={onChangeContent}
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
      <TodoItem
      handleOnChangeData={handleOnChangeData}
      getDateFormat={getDateFormat}
      />
    </div>
  );
};
