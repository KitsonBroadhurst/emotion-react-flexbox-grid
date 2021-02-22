/* eslint-env jest */
/* eslint-disable import/no-extraneous-dependencies */

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import * as emotion from 'emotion';
import { createSerializer as createEmotionSerializer } from 'jest-emotion';
import toBeType from 'jest-tobetype';
import { createSerializer as createEnzymeSerializer } from 'enzyme-to-json';

Enzyme.configure({ adapter: new Adapter() });
expect.addSnapshotSerializer(createEmotionSerializer(emotion));
expect.addSnapshotSerializer(createEnzymeSerializer({ mode: 'deep' }));
expect.extend(toBeType);
