import React from "react";
import { useState } from "react";
import style from "./TodoList.module.scss";
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
        <label>
          <input type="file" />
        </label>
      </form>
      <div className={style.wrap_todo}>
      <div className={style.todo}>tttttt</div>
        <div className={style.wrapper}>
          <label className={style.label_data}>
            Дата завершения задачи <span>{getDateFormat()}</span>
          </label>
          <label>
            <input type="date" onChange={handleOnChange} />
          </label>
          <label>
            <input type="checkbox" />&#32;Отметить, как выполнено
          </label>
          <label>
            <button>Редактировать</button>
          </label>
          <label>
            <button>Удалить</button>
          </label>
        </div>
      </div>
    </div>
  );
};
