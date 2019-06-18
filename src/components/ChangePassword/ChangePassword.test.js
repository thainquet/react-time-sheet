import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';
import { authServices } from 'services';
import ChangePassword from './ChangePassword';

const props = {
  initFormParams: {
    username: 'thainq00',
    password: '1',
    newpassword: '12'
  },
  history: [],
  res: ''
}

it('should render correctly', () => {
  const wrapper = renderer.create(<ChangePassword {...props} />).toJSON();
  expect(wrapper).toMatchSnapshot();
});

it('has 3 inputs and 2 buttons', () => {
  const wrapper = mount(<ChangePassword {...props} />);
  expect(wrapper.find('input')).toHaveLength(3);
  expect(wrapper.find('button')).toHaveLength(2);
  wrapper.unmount();
});

it('change password success', () => {
  const wrapper = mount(<ChangePassword {...props} />);
  const changePasswordFunc = jest.spyOn(authServices, 'changePassword').mockImplementation(() => Promise.resolve({ data: { code: 200, message: 'Thanh cong' } }));
  // wrapper.find('input#username').simulate('change', { target: { value: props.initFormParams.username } })
  // wrapper.find('input#password').simulate('change', { target: { value: props.initFormParams.password } })
  // wrapper.find('input#newpassword').simulate('change', { target: { value: props.initFormParams.newpassword } })
  wrapper.find('button#change-passw-btn').simulate('click')
  expect(changePasswordFunc).toHaveBeenCalledWith(
    props.initFormParams
  );
  wrapper.unmount();
});
