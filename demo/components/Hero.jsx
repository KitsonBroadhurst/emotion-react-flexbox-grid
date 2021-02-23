import React from 'react';
import styled from 'react-emotion';
import { Row, Col } from '../../src/index';

const Headline = styled.h1`
  font-size: 2.5rem;

  @media only screen and (min-width: 48rem) {
    font-size: 4rem;
    margin-bottom: 2rem;
  }
`;

const Description = styled((p) => (
  <Row center="xs">
    <Col>{p.children}</Col>
  </Row>
))`
  font-size: 0.95rem;
  margin-bottom: 2rem;

  @media only screen and (min-width: 48rem) {
    font-size: 1.35rem;
  }
`;

const Button = styled.a`
  position: relative;
  display: inline-block;
  box-sizing: border-box;
  min-width: 11rem;
  padding: 0 4rem;
  margin: 1rem;
  height: 3rem;
  line-height: 3rem;
  border: 1px solid #007fff;
  border-radius: 2px;
  color: #007fff;
  font-size: 1.25rem;
  transition: background-color, 0.15s;
  text-decoration: none;

  &:hover {
    background: #39f;
    border-color: #39f;
    color: #fff;
    text-shadow: 0 1px #007fff;
  }
`;

const Hero = styled((props) => (
  <header className={props.className}>
    <Row center="xs">
      <Headline>React Styled Flexboxgrid</Headline>
    </Row>
    <Description>
      <p>
        <code>
          Grid system based on{' '}
          <a href="https://github.com/emotion-js/emotion">emotion</a> and
          flexbox
        </code>
      </p>
      <p>
        <code>
          Forked from{' '}
          <a href="https://github.com/SimeonC/react-emotion-flexboxgrid">
            react-emotion-flexboxgrid
          </a>
        </code>
      </p>
      <p>
        <code>
          Forked from{' '}
          <a href="https://github.com/LoicMahieu/react-styled-flexboxgrid">
            react-styled-flexboxgrid
          </a>
        </code>
      </p>
      <p>
        <code>
          Highly inspired by{' '}
          <a href="https://github.com/roylee0704/react-flexbox-grid">
            react-flexbox-grid
          </a>{' '}
          and{' '}
          <a href="https://github.com/kristoferjoseph/flexboxgrid">
            flexboxgrid.css
          </a>
        </code>
      </p>
    </Description>
    <Row center="xs">
      <Button href="https://github.com/KitsonBroadhurst/emotion-react-flexbox-grid">
        Github
      </Button>
    </Row>
  </header>
))`
  background: white;
  box-sizing: border-box;
  padding: 2rem;
  border: 1px solid white;
  border-radius: 2px;
`;

export default Hero;
