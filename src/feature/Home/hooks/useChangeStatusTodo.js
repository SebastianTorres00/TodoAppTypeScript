import {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {addTodoToStore} from '../../../app/actions';
import todoListDummy from '../dummyData/dummyDataTodos';

const useChangeStatusTodo = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(addTodoToStore([...todoListDummy]));
  }, [dispatch]);
};
export default useChangeStatusTodo;
