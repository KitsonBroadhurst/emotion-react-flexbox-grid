/* eslint-env jest */
/* eslint-disable no-unused-expressions */

import React from 'react';
import { shallow } from 'enzyme';

import Grid from './Grid';

describe('Grid', () => {
  it('should work', () => {
    expect(<Grid />).toBeTruthy();
    expect(shallow(<Grid />)).toMatchSnapshot();
  });
});
