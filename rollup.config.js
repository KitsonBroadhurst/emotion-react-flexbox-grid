import babel from 'rollup-plugin-babel';
import uglify from 'rollup-plugin-uglify';
import visualizer from 'rollup-plugin-visualizer';

const globals = {
  react: 'React',
  'react-emotion': 'styled',
  'prop-types': 'PropTypes',
  'lodash.isinteger': '_.isInteger'
};
const name = 'emotion-react-flexbox-grid';

const plugins = [
  babel({
    plugins: ['external-helpers']
  })
];

const base = {
  input: 'src/index.js',
  external: ['react', 'react-emotion', 'prop-types', 'lodash.isinteger'],
  plugins
};

export default [
  Object.assign({}, base, {
    output: [
      {
        file: 'dist/emotion-react-flexbox-grid.js',
        format: 'umd',
        exports: 'named',
        name,
        globals
      },
      {
        file: 'dist/emotion-react-flexbox-grid.es.js',
        format: 'es',
        exports: 'named',
        name,
        globals
      }
    ]
  }),
  Object.assign({}, base, {
    output: [
      {
        file: 'dist/emotion-react-flexbox-grid.min.js',
        format: 'umd',
        exports: 'named',
        name,
        globals
      }
    ],
    plugins: base.plugins.concat([
      uglify(),
      visualizer({ filename: './bundle-stats.html' })
    ])
  })
];
