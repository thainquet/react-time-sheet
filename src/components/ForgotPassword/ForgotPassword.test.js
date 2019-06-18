import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';
import { authServices } from 'services';
import ForgotPassword from './ForgotPassword';

const props = {
  initFormParams: {
    username: 'thainq00',
    email: 'thainq00@gmail.com',
  },
  history: [],
  res: ''
}

it('should render correctly', () => {
  const wrapper = renderer.create(<ForgotPassword {...props} />).toJSON();
  expect(wrapper).toMatchSnapshot();
});

it('has 2 inputs and 2 buttons', () => {
  const wrapper = mount(<ForgotPassword {...props} />);
  expect(wrapper.find('input')).toHaveLength(2);
  expect(wrapper.find('button')).toHaveLength(2);
  wrapper.unmount();
});

it('send request for forgot password success', () => {
  const wrapper = mount(<ForgotPassword {...props} />);
  const changePasswordFunc = jest.spyOn(authServices, 'forgotPassword').mockImplementation(() => Promise.resolve({ data: { code: 200, message: 'Thanh cong' } }));
  wrapper.find('button#forgot-pass-btn').simulate('click')
  expect(changePasswordFunc).toHaveBeenCalledWith(
    props.initFormParams
  );
  wrapper.unmount();
});
