import styled from 'styled-components';
import React, { useRef, useEffect } from 'react';
import Rellax from 'rellax';

const Container = styled.div`
  width: 100vw;
  height: -webkit-fill-available;
  overflow-x: hidden;

  .background {
    width: 100%;
    height: 100%;
    background-image: url('/background.png');
    position: absolute;
    z-index: 1;
  }
  .stripes {
    width: 100%;
    height: 100%;
    background-image: url('/stripes.png');
    background-repeat: no-repeat;
    background-size: cover;
    position: absolute;
    z-index: 2;
  }
  .grid {
    width: 100%;
    height: 100%;
    background-image: url('/grid.png');
    background-repeat: no-repeat;
    background-size: cover;
    position: absolute;
    z-index: 11;
  }
  .mask {
    width: 100%;
    height: 100%;
    background-image: url('/mask.png');
    background-repeat: no-repeat;
    background-size: cover;
    position: absolute;
    z-index: 10;
  }
  .trees {
    width: 100%;
    height: 100%;
    background-image: url('/trees.png');
    background-repeat: no-repeat;
    background-size: cover;
    position: absolute;
    z-index: 10;
  }
  .sun {
    width: 100%;
    height: 100%;
    background-image: url('/sun.png');
    background-repeat: no-repeat;
    background-size: contain;
    position: absolute;
    z-index: 5;
    background-position: center;
    @media screen and (max-width: 1000px) {
      top: -10%;
      background-size: cover;
      height: 80%;
    }
    @media screen and (max-width: 500px) {
      top: 0;
      background-size: cover;
      height: 60%;
    }
  }
  .stars {
    width: 100%;
    height: 100%;
    background-image: url('/stars.png');
    background-repeat: no-repeat;
    background-size: cover;
    position: absolute;
    z-index: 4;
  }
`;

const SecondContainer = styled.div`
  width: 100vw;
  height: 2000px;
  background: #4a0379;
  z-index: 6;
  position: absolute;
  top: 100vh;
`;

export default function Home() {
  const rellaxRef = useRef();

  useEffect(() => {
    new Rellax('.stars', {
      // <---- Via class name
      speed: -10,
      center: false,
      wrapper: null,
      round: true,
      vertical: true,
      horizontal: false,
    });

    new Rellax('.sun', {
      // <---- Via class name
      speed: -12,
      center: false,
      wrapper: null,
      round: true,
      vertical: true,
      horizontal: false,
    });

    new Rellax(rellaxRef.current, {
      // <---- Via useRef element
      speed: -5,
      center: false,
      wrapper: null,
      round: true,
      vertical: true,
      horizontal: false,
    });
  }, []);

  return (
    <>
      <Container>
        <div className='trees' />
        <div className='background' />
        <div className='stars' />
        <div className='sun' />
        <div className='stripes' />
        <div className='mask' />
        <div className='grid' />
      </Container>
      <SecondContainer />
    </>
  );
}
