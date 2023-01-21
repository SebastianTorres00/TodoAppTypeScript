import React from 'react';
import TodoList from './containers/TodoList';

const Home = ({navigation}) => {
  return (<TodoList navigation={navigation} />);
};

export default Home;
