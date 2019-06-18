import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';
import { authServices } from 'services';
import Login from './Login';

const props = {
  initFormParams: {
    username: 'thainq00',
    password: '1'
  },
  history: []
}

it('should render correctly', () => {
  const wrapper = renderer.create(<Login />).toJSON();
  expect(wrapper).toMatchSnapshot();
});

it('has 2 inputs and 3 buttons', () => {
  const wrapper = mount(<Login />);
  expect(wrapper.find('input')).toHaveLength(2);
  expect(wrapper.find('button')).toHaveLength(3);
  wrapper.unmount();
});

it('Login success - change username, password and submit form', () => {
  const wrapper = mount(<Login {...props} />);
  const loginFn = jest.spyOn(authServices, 'login').mockImplementation(() => Promise.resolve({ data: { code: 200, message: 'Thanh cong' } }));
  wrapper.find('input#username').simulate('change', { target: { value: props.initFormParams.username } })
  wrapper.find('input#password').simulate('change', { target: { value: props.initFormParams.password } })
  wrapper.find('button#login-btn').simulate('click')
  expect(loginFn).toHaveBeenCalledWith(
    props.initFormParams
  );
  wrapper.unmount();
});
