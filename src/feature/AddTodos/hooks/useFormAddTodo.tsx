import {useState} from 'react';
import {Keyboard} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {addTodo} from '../../../app/actions';

type Todo = {
  title: string;
  id: number;
  isFinish: boolean;
};

type TodosStore = {
  listTodoReducer: Todo[];
};

const useFormAddTodo = () => {
  const listTodoReducer = useSelector(
    (state: TodosStore) => state.listTodoReducer,
  );
  const [text, onChangeText] = useState('');
  const [isTodoAdd, setIsTodoAdd] = useState(false);
  const idNew = Math.floor(Math.random() * 100);
  const newTodo = {title: text, isFinish: false, id: 444};
  const dispatch = useDispatch();
  const onPressTodoList = () => {
    dispatch(addTodo([...listTodoReducer, newTodo]));
    setIsTodoAdd(true);

    setTimeout(() => {
      setIsTodoAdd(false);
    }, 3000);
    onChangeText('');
    Keyboard.dismiss();
  };

  return {text, onChangeText, onPressTodoList, isTodoAdd};
};

export default useFormAddTodo;
