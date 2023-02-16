/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, TextInput, TouchableOpacity} from 'react-native';
import {View} from 'react-native';
import styles from '../styles';
import useFormAddTodo from '../hooks/useFormAddTodo';

const FormAddTodo = () => {
  const {text, onChangeText, onPressTodoList, isTodoAdd} = useFormAddTodo();
  return (
    <View>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
        placeholder="Tarea nueva"
        testID="input-text-add-todo-test"
      />
      {isTodoAdd && (
        <Text style={{textAlign: 'center', fontSize: 22, color: '#000'}}>
          Tarea agregada!!!
        </Text>
      )}
      <TouchableOpacity style={styles.buttonForm} onPress={onPressTodoList}>
        <Text>Add TODO</Text>
      </TouchableOpacity>
    </View>
  );
};
export default FormAddTodo;
