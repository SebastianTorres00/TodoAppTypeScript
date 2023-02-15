import React from 'react';
import {act, fireEvent, render, screen} from '@testing-library/react-native';
import {Provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import FormEditTodo, {Props} from '../components/FormEditTodo';
import store from '../../../app/store';
import {EDIT_TODO} from '../../../app/types';
const mockRoute = {
  params: {
    item: {
      title: 'Todo 1',
      id: 1,
      isFinish: false,
    },
  },
};

const setup = () => {
  render(
    <Provider store={store}>
      <NavigationContainer>
        <FormEditTodo route={mockRoute} />
      </NavigationContainer>
    </Provider>,
  );
};

describe('FormEditTodo', () => {
  it('Se visualiza el INPUT y  el btn', () => {
    setup();

    const input = screen.getByPlaceholderText('Agrega una TODO');

    expect(input).toBeDefined();

    const editButton = screen.getByText('Editar TODO');

    expect(editButton).toBeDefined();
  });

  it('Se modifica la todo', () => {
    setup();

    const input = screen.getByPlaceholderText('Agrega una TODO');

    act(() => {
      fireEvent.changeText(input, 'Sandia y Melon <3');
    });

    expect(input.props.value).toEqual('Sandia y Melon <3');
  });
});
