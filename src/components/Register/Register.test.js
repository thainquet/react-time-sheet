import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';
import { authServices } from 'services';
import Register from './Register';

const props = {
  initParams: {
    username: 'thainq02',
    email: 'thainq00@gmail.com',
    password: 'Hihi1234'
  },
  initMessage: {
    messageUsername: '',
    messagePassword: '',
    emailMessage: ''
  },
  history: [],
  res: ''
}

it('should render correctly', () => {
  const wrapper = renderer.create(<Register {...props} />).toJSON();
  expect(wrapper).toMatchSnapshot();
});

it('has 3 inputs and 2 buttons', () => {
  const wrapper = mount(<Register {...props} />);
  expect(wrapper.find('input')).toHaveLength(3);
  expect(wrapper.find('button')).toHaveLength(2);
  wrapper.unmount();
});

it('send request for forgot password success', () => {
  const wrapper = mount(<Register {...props} />);
  const RegFunc = jest.spyOn(authServices, 'register').mockImplementation(() => Promise.resolve({ data: { code: 200, message: 'Thanh cong' } }));
  wrapper.find('button#register-btn').simulate('click')
  expect(RegFunc).toHaveBeenCalledWith(
    props.initParams
  );
  wrapper.unmount();
});
