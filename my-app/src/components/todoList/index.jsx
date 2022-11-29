import React from "react";
import style from "./TodoList.module.scss";
import { useState } from "react";
import { TodoItem } from '../todoItem';
const dayjs = require("dayjs");
let localizedFormat = require("dayjs/plugin/localizedFormat");

export const TodoList = () => {
  const [data, setData] = useState("");

  const handleOnChange = (event) => {
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

  return (
    <div className={style.wrap}>
      <form className={style.wrap_form}>
        <input type="text" placeholder="Задача" />
        <textarea
          name="text"
          placeholder="Описание задачи"
        ></textarea>
        <label htmlFor="file-loader-button" className={style.label_file}>Выбрать файл</label>
        <input type="file" id="file-loader-button" className={style.label_button}/>
        <button className={style.buttons} >Отправить</button>
      </form>
      <TodoItem
      handleOnChange={handleOnChange}
      getDateFormat={getDateFormat}
      />
    </div>
  );
};
