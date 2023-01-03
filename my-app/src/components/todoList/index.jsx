import React from 'react'
import style from './TodoList.module.scss'
import { Form } from '../form'
import { TodoItem } from '../todoItem'
import { useTodoList } from '../../hooks/useTodoList'

export const TodoList = () => {

  const [
    onSend,
    onChangeTitle,
    valueTitle,
    onChangeContent,
    valueContent,
    valueFile,
    onChangeFile,
    handleOnChangeData,
    onChangeData,
    removeTodo,
    onChangeCheckbox,
    handleOnChangeRedaction,
    onChangeTitleRedaction,
    onChangeContentRedaction,
    onSendChange,
    valueTitleRedaction,
    valueContentRedaction
] = useTodoList();

  return (
    <div className={style.wrap}>
      <Form
        onSend={onSend}
        onChangeTitle={onChangeTitle}
        valueTitle={valueTitle}
        onChangeContent={onChangeContent}
        valueContent={valueContent}
        valueFile={valueFile}
        onChangeFile={onChangeFile}
      />
      <TodoItem
        handleOnChangeData={handleOnChangeData}
        onChangeData={onChangeData}
        removeTodo={removeTodo}
        onChangeCheckbox={onChangeCheckbox}
        handleOnChangeRedaction={handleOnChangeRedaction}
        onChangeTitleRedaction={onChangeTitleRedaction}
        onChangeContentRedaction={onChangeContentRedaction}
        onSendChange={onSendChange}
        valueTitleRedaction={valueTitleRedaction}
        valueContentRedaction={valueContentRedaction}
      />
    </div>
  )
}
