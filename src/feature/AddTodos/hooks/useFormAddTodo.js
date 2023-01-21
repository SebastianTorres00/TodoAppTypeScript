import React, { useEffect, useState } from "react";
import { Keyboard } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../../../app/actions";

const useFormAddTodo = () => {
    const { listTodoReducer } = useSelector((state) => state)
    const [text, onChangeText] = useState("");
    const idNew = Math.floor(Math. random() * 100) 
    const newTodo = {title: text, isFinish: false, id: idNew }
    const dispatch = useDispatch();
    const onPressTodoList = () => {
      dispatch(addTodo([...listTodoReducer, newTodo]))
      onChangeText("")
      Keyboard.dismiss()
      alert("Tarea Agregada")
    };

    return {text, onChangeText, onPressTodoList}
}

export default useFormAddTodo;
