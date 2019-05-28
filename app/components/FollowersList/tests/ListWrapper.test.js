import React from 'react';
import { shallow } from 'enzyme';

import ListWrapper from '../ListWrapper';

describe('<ListWrapper />', () => {
  it('should render the component', () => {
    const renderedComponent = shallow(<ListWrapper />);
    expect(renderedComponent.find(ListWrapper)).toBeDefined();
  });
});
