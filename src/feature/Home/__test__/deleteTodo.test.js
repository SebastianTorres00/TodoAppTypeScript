/* eslint-disable prettier/prettier */
import * as React from 'react';
import {fireEvent, render, screen} from '@testing-library/react-native';
import store from '../../../app/store';
import {Provider} from 'react-redux';
import Home from '../containers/Home';
import { NavigationContainer } from '@react-navigation/native';
import ScreenTest from '../../ScreenTest/screenTest';
// const storeMock =
describe('TodoAppComponet ', () => {
  it('go screen Add Todo', () => {
    const navigate = jest.fn();
      const {getByTestId} = render(
      <Provider store={store}>
        <NavigationContainer>
          <Home navigation={{navigate}}/>
        </NavigationContainer>
      </Provider>,
    );
     fireEvent.press(getByTestId('test_btn_add'));
     expect(navigate).toHaveBeenCalledWith('AddTodo');
  });
});

