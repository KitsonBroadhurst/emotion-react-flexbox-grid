/* eslint-env jest */
/* eslint-disable no-unused-expressions */

import { BASE_CONF, Grid, Row, Col } from '.';

describe('index', () => {
  it('should correctly export', () => {
    expect(BASE_CONF).toBeTruthy();
    expect(Grid).toBeTruthy();
    expect(Row).toBeTruthy();
    expect(Col).toBeTruthy();
  });
});
