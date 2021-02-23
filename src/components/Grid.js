import PropTypes from 'prop-types';
import styled, { css } from 'react-emotion';

import config, { DIMENSION_NAMES } from '../config';

const fluidGridStyles = (props) => {
  const { outerMargin } = config(props);
  return css`
    padding-right: ${outerMargin}rem;
    padding-left: ${outerMargin}rem;
  `;
};

const dynamicStyles = (props) =>
  DIMENSION_NAMES.map(
    (dim) =>
      config(props).container[dim] &&
      config(props).media[dim]`
  width: ${config(props).container[dim]}rem;
`
  );

const Grid = styled('div')`
  margin-right: auto;
  margin-left: auto;
  ${(gridProps) => {
    if (gridProps.fluid) {
      return css`
        ${fluidGridStyles(gridProps)}
      `;
    }
    return css`
      ${dynamicStyles(gridProps)}
    `;
  }};
`;

Grid.displayName = 'Grid';

Grid.propTypes = {
  fluid: PropTypes.bool,
  children: PropTypes.node
};

export default Grid;
