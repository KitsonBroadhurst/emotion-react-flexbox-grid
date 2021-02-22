/* eslint-env jest */
/* eslint-disable no-unused-expressions */

import React from 'react';
import { shallow } from 'enzyme';

import Col from './Col';

describe('Col', () => {
  it('should work', () => {
    expect(<Col />).toBeTruthy();
    expect(shallow(<Col />)).toMatchSnapshot();
  });

  it('should be responsive', () => {
    expect(shallow(<Col xs={3} md={4} />)).toMatchSnapshot();
  });
});
