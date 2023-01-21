import React from 'react';
import FormEditTodo from './components/FormEditTodo';

const EditTodo = ({navigation, route}) => {
  return (<FormEditTodo navigation={navigation} route={route} />);
};

export default EditTodo;
