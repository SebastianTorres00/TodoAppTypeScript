import React from 'react';
import {fireEvent, render, screen} from '@testing-library/react-native';
import {Provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import FormAddTodo from '../components/FormAddTodo';
// Crear un store de prueba
const mockStore = configureMockStore([thunk]);
const initialState = {listTodoReducer: []};
// Crear un nuevo todo para agregar
const idNew = Math.floor(Math.random() * 100);
const newTodo = {title: '', isFinish: false, id: 444};
const store = mockStore(initialState);

const setup = () => {
  render(
    <Provider store={store}>
      <NavigationContainer>
        <FormAddTodo listTodoReducer={[]} />
      </NavigationContainer>
    </Provider>,
  );
};
//

describe('FormAddTodo', () => {
  it('should render the input and button', () => {
    setup();
    const input = screen.getByTestId('input-text-add-todo-test');
    const button = screen.getByText('Add TODO');

    expect(input).toBeDefined();
    expect(button).toBeDefined();
  });

  it('should update the text input on change', () => {
    setup();
    const input = screen.getByTestId('input-text-add-todo-test');

    fireEvent.changeText(input, 'New task');

    expect(input.props.value).toBe('New task');
  });

  it('should call onPressTodoList when button is pressed', () => {
    setup();
    const button = screen.getByTestId('btn-add-todo');
    fireEvent.press(button);
    // Verificar que la acción addTodo fue llamada con la lista de todos actualizada
    expect(store.getActions()).toEqual([
      {type: 'ADD_TODO', payload: [newTodo]},
    ]);
  });
});
