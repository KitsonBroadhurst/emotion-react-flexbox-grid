/* eslint-env jest */
/* eslint-disable no-unused-expressions */

import React from 'react';
import { shallow } from 'enzyme';

import Row from './Row';

describe('Row', () => {
  it('should work', () => {
    expect(<Row />).toBeTruthy();
    expect(shallow(<Row />)).toMatchSnapshot();
  });
});
