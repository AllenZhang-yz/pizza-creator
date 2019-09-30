import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
import App from './App';
import EnterYourDetails from './components/EnterYourDetails';
import SelectYourSize from './components/SelectYourSize';
import ChooseYourToppings from './components/ChooseYourToppings';
import Summary from './components/Summary';
import Submit from './components/Submit';

describe('<App />', () => {
  it('renders <EnterYourDetails />', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(EnterYourDetails)).toHaveLength(1);
  });

  it('renders <SelectYourSize />', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(SelectYourSize)).toHaveLength(1);
  });

  it('renders <ChooseYourToppings />', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(ChooseYourToppings)).toHaveLength(1);
  });

  it('renders <Summary />', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Summary)).toHaveLength(1);
  });

  it('renders <Submit />', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Submit)).toHaveLength(1);
  });
});
