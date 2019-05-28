import React from 'react';
// import { mount } from 'enzyme';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import { BrowserRouter as Router } from 'react-router-dom';

import HeaderLink from '../HeaderLink';

describe('<HeaderLink/>', () => {
  it('should match the snapshot', () => {
    const renderedComponent = renderer
      .create(
        <Router>
          <HeaderLink to="whatever" />
        </Router>,
      )
      .toJSON();
    expect(renderedComponent).toMatchSnapshot();
  });
});
