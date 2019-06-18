import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';
import { authServices } from 'services';
import Home from './Home';

const props = {
  history: []
}

it('should render correctly', () => {
  const wrapper = renderer.create(<Home {...props}/>).toJSON();
  expect(wrapper).toMatchSnapshot();
});

it('has 2 buttons', () => {
  const wrapper = mount(<Home {...props}/>);
  expect(wrapper.find('button')).toHaveLength(2);
  wrapper.unmount();
});
