import React from 'react';
import { shallow } from 'enzyme';
import Input, { validator } from './Input';
import Section from '../Section';
import EnterYourDetails from './EnterYourDetails';

describe('<EnterYourDetails />', () => {
  it('renders <Section />', () => {
    const wrapper = shallow(<EnterYourDetails />);
    expect(wrapper.find(Section)).toHaveLength(1);
    expect(wrapper.find(Section).props()).toHaveProperty('title', 'Enter your details');
  });

  it('renders <Input />', () => {
    const wrapper = shallow(<EnterYourDetails />);

    wrapper.state().formFields.forEach((formField, i) => {
      expect(wrapper.find(Input).at(i).props()).toEqual(expect.objectContaining(formField));
    });
  });

  it('calls handleInputChange', () => {
    const wrapper = shallow(<EnterYourDetails />);

    const value = 'HELLO_WORLD';

    wrapper.find(Input).first().prop('onChange')({ target: { value } });
    expect(wrapper.state().formFields[0].value).toBe(value);
  });

  // it('gets confirmEmail\'s target', () => {
  //   const wrapper = shallow(<EnterYourDetails />);
  //   const value = 'HELLO_WORLD';

  //   wrapper.instance().handleInputChange('email')({ target: { value } });
  //   const confirmEmailFormField = wrapper.state().formFields.find(({ label }) => label === 'confirmEmail');
  //   const validation = confirmEmailFormField.validations.find(({ validator: thisValidator }) => thisValidator === validator.isIdentical)
  //   expect(validation.options.target()).toBe(value);
  // });
});