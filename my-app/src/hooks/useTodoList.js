import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import {
  pushTodoToFb,
  onTrackingAddedTodos,
  offTrackingAddedTodos,
  removeTodofromFb,
  onTrackingRemovedTodos,
  offTrackingRemovedTodos,
  updateTodoInFb,
  onTrackingChangedTodos,
  offTrackingChangedTodos,
  changeTodo,
  putFileToFb,
} from '../store/todos/actions'
import { createTodoEntity } from '../components/modele'
const dayjs = require('dayjs')
let localizedFormat = require('dayjs/plugin/localizedFormat')

export const useTodoList = () => {

  const [data, setData] = useState('')
  const [valueTitle, setValueTitle] = useState('')
  const [valueContent, setValueContent] = useState('')
  const [valueFile, setValueFile] = useState()
  const [valueTitleRedaction, setValueTitleRedaction] = useState('')
  const [valueContentRedaction, setValueContentRedaction] = useState('')
  const dispatch = useDispatch()

  const handleOnChangeData = (event, id) => {
    event.preventDefault()
    setData(event.target.value)
    dispatch(
      updateTodoInFb(id, {
        clickData: true,
      }))
  }

  const onChangeData = (id) => {
    if (data === '') {
      return
    } else {
      dayjs.extend(localizedFormat)
      const formatData = dayjs(data).format('D/MM/YYYY')
      dispatch(
        updateTodoInFb(id, {
          data: formatData,
        }),
      )
      dispatch(
        updateTodoInFb(id, {
          clickData: false,
        }))
    }
  }

  const onChangeTitle = (event) => {
    event.preventDefault()
    setValueTitle(event.target.value)
  }

  const onChangeContent = (event) => {
    event.preventDefault()
    setValueContent(event.target.value)
  }

  const onChangeFile = (event) => {
    event.preventDefault()
    const file = event.target.files[0]
    setValueFile(file)
  }

  const onSend = (event) => {
    event.preventDefault()
    dispatch(pushTodoToFb(createTodoEntity(valueTitle, valueContent)))
    if(valueFile !== undefined) {
        dispatch(putFileToFb(valueFile))
    }
    resetForm()
  }

  const resetForm = () => {
    setValueTitle('')
    setValueContent('')
    setValueFile('')
  }

  const removeTodo = (todoId) => {
    dispatch(removeTodofromFb(todoId))
  }

  const onChangeCheckbox = (todoId, isDone) => {
    if (todoId === 1234) {
      dispatch(
        changeTodo(todoId, {
          isDone,
        }),
      )
    } else {
      dispatch(
        updateTodoInFb(todoId, {
          isDone,
        }),
      )
    }
  }

  const handleOnChangeRedaction = (todoId, redaction) => {
    if (todoId === 1234) {
      dispatch(
        changeTodo(todoId, {
          redaction,
        }),
      )
    } else {
      dispatch(
        updateTodoInFb(todoId, {
          redaction,
        }),
      )
    }
  }

  const onChangeTitleRedaction = (event) => {
    event.preventDefault()
    setValueTitleRedaction(event.target.value)
  }

  const onChangeContentRedaction = (event) => {
    event.preventDefault()
    setValueContentRedaction(event.target.value)
  }

  const onSendChange = (event, todoId, redaction) => {
    event.preventDefault()
      dispatch(
        updateTodoInFb(todoId, {
          title: valueTitleRedaction,
          content: valueContentRedaction,
        }),
      )
      dispatch(
        updateTodoInFb(todoId, {
          redaction,
        }),
      )
  }

  useEffect(() => {
    dispatch(onTrackingAddedTodos)
    dispatch(onTrackingRemovedTodos)
    dispatch(onTrackingChangedTodos)

    return () => {
      dispatch(offTrackingAddedTodos)
      dispatch(offTrackingRemovedTodos)
      dispatch(offTrackingChangedTodos)
    }
  }, [])
    return [
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
    ]
}

