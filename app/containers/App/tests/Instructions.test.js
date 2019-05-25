import React from 'react';
import { shallow } from 'enzyme';
import Instructions from '../Instructions';

describe('<Instructions />', () => {
  it('should render Instructions', () => {
    const renderedComponent = shallow(<Instructions />);
    expect(renderedComponent.contains(<h1>Instructions</h1>));
  });
});
