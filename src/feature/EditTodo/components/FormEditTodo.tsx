import React, {FC} from 'react';
import {Text, TextInput, TouchableOpacity} from 'react-native';
import {View} from 'react-native';
import styles from '../../AddTodos/styles';
import useFormEditTodo from '../hooks/useFormEditTodo';

type Todo = {
  title: string;
  id: number;
  isFinish: boolean;
};

export type Props = {
  route: {
    params: {
      item: Todo;
    };
  };
};
// FC<Props> Tipeo componentes
const FormEditTodo: FC<Props> = ({route}) => {
  console.log('ROUTUTUU', route);

  const {text, onChangeText, onPressEditTodo, isTodoEdit} = useFormEditTodo(
    route.params.item,
  );
  return (
    <View>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
        placeholder={'Agrega una TODO'}
      />
      {isTodoEdit && (
        <Text style={{textAlign: 'center', fontSize: 22, color: '#000'}}>
          Tarea Editada!!!
        </Text>
      )}
      <TouchableOpacity style={styles.buttonForm} onPress={onPressEditTodo}>
        <Text>Editar TODO</Text>
      </TouchableOpacity>
    </View>
  );
};
export default FormEditTodo;
