import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { GrabHubSVG } from '../GrabHubSVG';

describe('<GrabHubSVG />', () => {
  it('should match the snapshot', () => {
    const renderedComponent = renderer.create(<GrabHubSVG />).toJSON();
    expect(renderedComponent).toMatchSnapshot();
  });
});
