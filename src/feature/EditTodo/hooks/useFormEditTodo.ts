import {useState} from 'react';
import {Keyboard} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {editTodo} from '../../../app/actions';

type Todo = {
  title: string;
  id: number;
  isFinish: boolean;
};

type TodosStore = {
  listTodoReducer: Todo[];
};

const useFormAddTodo = (todoSelected: Todo) => {
  const [isTodoEdit, setIsTodoEdit] = useState(false);
  const listTodoReducer = useSelector(
    (state: TodosStore) => state.listTodoReducer,
  );
  const {title} = todoSelected;
  const [text, onChangeText] = useState(title);
  const allTodos = listTodoReducer;
  const dispatch = useDispatch();

  if (Array.isArray(listTodoReducer)) {
    listTodoReducer.map((item, index) => {
      if (todoSelected.id === item.id) {
        allTodos[index].title = text;
      }
    });
  }
  const onPressEditTodo = () => {
    dispatch(editTodo(allTodos));
    setIsTodoEdit(true);
    setTimeout(() => {
      setIsTodoEdit(false);
    }, 3000);
    Keyboard.dismiss();
  };

  return {text, onChangeText, onPressEditTodo, isTodoEdit};
};

export default useFormAddTodo;
