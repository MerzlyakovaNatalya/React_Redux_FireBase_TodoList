import React, { useEffect } from "react";
//import { Form } from "../form";
import { useState } from "react";
//import { TodoItem } from "../todoItem";
import { useDispatch } from "react-redux";
import { pushTodoToFb,
  onTrackingAddedTodos, 
  offTrackingAddedTodos,
  removeTodofromFb,
  onTrackingRemovedTodos,
  offTrackingRemovedTodos,
  updateTodoInFb,
  onTrackingChangedTodos,
  offTrackingChangedTodos,
  changeTodo
 } from "../store/todos/actions";
import { createTodoEntity } from "../components/modele";
const dayjs = require("dayjs");
let localizedFormat = require("dayjs/plugin/localizedFormat");

export const useForm = () => {

  const [data, setData] = useState("");
  const [valueTitle, setValueTitle] = useState("");
  const [valueContent, setValueContent] = useState("");
  const [valueFile, setValueFile] = useState();
  const dispatch = useDispatch();

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
    
   const onSend = (event) => {
     event.preventDefault();
     dispatch(pushTodoToFb
      (createTodoEntity(valueTitle, valueContent)));
     resetForm();
   }

  const resetForm = () => {
    setValueTitle("");
    setValueContent("");
    setValueFile("");
  }

  const removeTodo = (todoId) => {
    dispatch(removeTodofromFb(todoId));
  }

  const onChangeCheckbox = (todoId, isDone) => {
    if(todoId === 123) {
      dispatch(changeTodo(todoId, {
        isDone
      }))
    }else{
      dispatch(updateTodoInFb(todoId, {
        isDone
      }))
    }
    }

    const handleOnChangeRedaction = (todoId, redaction) => {
      dispatch(changeTodo(todoId, {
        redaction
      }))
    }

   useEffect(() => {
     dispatch(onTrackingAddedTodos);
     dispatch(onTrackingRemovedTodos);
     dispatch(onTrackingChangedTodos);
    }, []);

    return [
        valueTitle,
        valueContent,
        valueFile,
        onSend,
      onChangeTitle,
      onChangeContent,
      onChangeFile,
      handleOnChangeData,
      getDateFormat,
      removeTodo,
      onChangeCheckbox,
      handleOnChangeRedaction,
    ]
}
