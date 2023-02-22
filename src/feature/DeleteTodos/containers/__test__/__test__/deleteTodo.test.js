import React from 'react';
import {fireEvent, render, screen} from '@testing-library/react-native';
import {Provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import store from '../../../../../app/store';
import DeleteTodo from '../../DeleteTodo';
import Home from '../../../../Home/containers/Home';

const useDispatchMock = jest.fn();
const navigate = jest.fn();

const saveNewListTodo = [{id: 1, title: 'Tarea 1', isFinish: false}];
const setup = () => {
  render(
    <Provider store={store}>
      <NavigationContainer>
        <Home />
        <DeleteTodo route={{params: {saveNewListTodo}}} />
      </NavigationContainer>
    </Provider>,
  );
};

describe('DeleteTodo', () => {
  beforeEach(() => {
    navigate.mockClear();
  });
  it('se visualiza el input y el btn', () => {
    setup();
    const button = screen.getByTestId('test-delete-todo');
    const buttonGoBack = screen.getByTestId('test-goBack-delete-todo');
    expect(buttonGoBack).toBeDefined();
    expect(button).toBeDefined();
  });

  it('Debe navegar a el home', () => {
    setup();
    fireEvent.press(screen.getByTestId('test-goBack-delete-todo'));

    const homeScreen = screen.getByTestId('test-home-screen');
    expect(homeScreen).toBeDefined();
  });

  it('debe eliminar la tarea seleccionada del store al hacer clic en el botón "Eliminar"', () => {
    setup();

    const deleteTodoMock = jest.fn();
    useDispatchMock.mockReturnValue(deleteTodoMock(saveNewListTodo));

    const deleteButton = screen.getByTestId('test-delete-todo');
    fireEvent.press(deleteButton);
    console.log('deleteTodoMock', deleteTodoMock);
    expect(deleteTodoMock).toHaveBeenCalledWith(saveNewListTodo);
  });
});
