import React from 'react';
import { mount } from 'enzyme';
import Input, { validator } from './Input';

describe('<Input />', () => {
  it('calls onChange', () => {
    const onChange = jest.fn();

    const value = 'HELLO_WORLD';

    const wrapper = mount(<Input value="" onChange={onChange} />);
    wrapper.find('input').simulate('change', { target: { value } })
    expect(onChange).toBeCalled();
    // expect(onChange).toBeCalledWith({ target: { value } }, expect.anything());
  });

  it('renders error by calling validations', () => {

  });

  it('sets dirty', () => {

  });

  it('uses props value as input value', () => {

  });

  it('renders label', () => {

  });
});
