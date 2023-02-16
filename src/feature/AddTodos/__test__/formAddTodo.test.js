import React from 'react';
import {fireEvent, render, screen} from '@testing-library/react-native';
import {Provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import store from '../../../app/store';
import FormAddTodo from '../components/FormAddTodo';

const setup = () => {
  render(
    <Provider store={store}>
      <NavigationContainer>
        <FormAddTodo />
      </NavigationContainer>
    </Provider>,
  );
};

describe('FormAddTodo', () => {
  it('se visualiza el input y el btn', () => {
    setup();
    const textInput = screen.getByTestId('input-text-add-todo-test');
    const button = screen.getByText('Add TODO');
    expect(textInput).toBeDefined();
    expect(button).toBeDefined();
  });

  it('el input se modifica', () => {
    setup();
    const textInput = screen.getByTestId('input-text-add-todo-test');
    fireEvent.changeText(textInput, 'Test TODO');
    expect(textInput.props.value).toBe('Test TODO');
  });
});
