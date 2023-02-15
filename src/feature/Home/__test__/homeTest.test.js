/* eslint-disable prettier/prettier */
import * as React from 'react';
import renderer from 'react-test-renderer';
import {
  cleanup,
  fireEvent,
  render,
  screen,
  debug,
} from '@testing-library/react-native';
import store from '../../../app/store';
import {Provider} from 'react-redux';
// import Home from 'feature/Home/containers/Home';
import {NavigationContainer} from '@react-navigation/native';
// import FormEditTodo, {Props} from 'feature/EditTodo/components/FormEditTodo'; // FORMA DE IMPORT TYPES
import Home from '../containers/Home';

const navigate = jest.fn();
const setup = () => {
  render(
    <Provider store={store}>
      <NavigationContainer>
        <Home navigation={{navigate}} />
      </NavigationContainer>
    </Provider>,
  );
};
describe('Home Screen ', () => {
  beforeEach(() => {
    navigate.mockClear();
  });
  it('Debe navegar a AddTodo', () => {
    setup();
    fireEvent.press(screen.getByTestId('test_btn_add'));
    expect(navigate).toHaveBeenCalledWith('AddTodo');
  });

  it('Navigate DeleteTodo', () => {
    const saveNewListTodo = [
      {
        id: 2,
        title: 'Pepas',
        isFinish: false,
      },
      {
        id: 3,
        title: 'Tomate',
        isFinish: false,
      },
      {
        id: 4,
        title: 'Agua',
        isFinish: false,
      },
    ];
    setup();
    fireEvent.press(screen.getAllByTestId('test_delete_todo')[0]);

    expect(navigate).toHaveBeenCalledWith('DeleteTodo', {saveNewListTodo});
  });

  it('Navigate EditTodo', () => {
    const item = {id: 1, title: 'Compras', isFinish: false};

    setup();
    fireEvent.press(screen.getAllByTestId('test_edit_todo')[0]);

    expect(navigate).toHaveBeenCalledWith('EditTodo', {item});
  });
});
