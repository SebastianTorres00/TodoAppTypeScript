import React, { useEffect, useState } from "react";
import { Keyboard } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { editTodo } from "../../../app/actions";

const useFormAddTodo = ({item: todoSelected}) => {
    const { listTodoReducer } = useSelector((state) => state)
    const {title} = todoSelected
    const [text, onChangeText] = useState(title);
    const allTodos = listTodoReducer;
    const dispatch = useDispatch();
    listTodoReducer.map((item, index) => {
      if(todoSelected.id === item.id){
        allTodos[index].title = text
      }
    })
    const onPressEditTodo = () => {
      dispatch(editTodo(allTodos))
      Keyboard.dismiss()
      alert("Tarea Editada")
    };

    return {text, onChangeText, onPressEditTodo}
}

export default useFormAddTodo;
