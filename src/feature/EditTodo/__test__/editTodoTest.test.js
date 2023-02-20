import React from 'react';
import {act, fireEvent, render, screen} from '@testing-library/react-native';
import {Provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import FormEditTodo from '../components/FormEditTodo';
import store from '../../../app/store';

const mockRoute = {
  params: {
    item: {
      title: 'Todo 1',
      id: 1,
      isFinish: false,
    },
  },
};

jest.spyOn(store, 'dispatch').mockReturnValue({
  type: 'EDIT_TODO',
  payload: {id: 1, title: 'NuevaTodo'},
});

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
  it('Se modifica la todo ', () => {
    setup();
    const input = screen.getByPlaceholderText('Agrega una TODO');
    fireEvent.changeText(input, 'NuevaTodo');
    const editButton = screen.getByText('Editar TODO');
    fireEvent.press(editButton);
    const actions = [store.dispatch.mock.results[0].value];
    expect(actions).toEqual([
      {type: 'EDIT_TODO', payload: {id: 1, title: 'NuevaTodo'}},
    ]);
  });
});
