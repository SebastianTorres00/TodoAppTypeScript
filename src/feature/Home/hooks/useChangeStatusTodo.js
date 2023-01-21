import {useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodoToStore } from '../../../app/actions';
import todoListDummy from '../dummyData/dummyDataTodos';

const useChangeStatusTodo = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(addTodoToStore([...todoListDummy]))
  }, []);
};
export default useChangeStatusTodo;
