import React from 'react';
import styled from 'styled-components';

const AboutWrapper = styled.section`
  position: relative;
  height: 100vh;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 16px 16px 16px calc(100px + 16px);

  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    width: 100%;
    padding: 16px 16px calc(80px + 16px) 16px;
  }
  @media (max-width: 640px) {
    padding: 16px 16px calc(70px + 16px) 16px;
  }
`;

const AboutTitle = styled.h1`
  position: sticky;
  top: 70px;
  left: 0;
  width: 60%;
  font-size: 100px;
  font-weight: 800;
  text-align: left;
  margin-right: 10px;

  &::after {
    position: absolute;
    bottom: 3px;
    display: block;
    content: '';
    width: 100%;
    height: 5px;
    background-color: #000;
  }

  @media (max-width: 1024px) {
    top: 0;
    width: 100%;
    font-size: 80px;
    margin-right: 0;
    margin-bottom: 40px;
    background-color: #eee;

    &::after {
      bottom: 0;
    }
  }
  @media (max-width: 640px) {
    font-size: 55px;
    text-align: center;
    margin-bottom: 30px;
  }
`;

const AboutDesc = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 40%;
  height: 100%;

  @media (max-width: 1024px) {
    width: 100%;
  }

  .box {
    width: 100%;
    height: 100%;
    margin-bottom: 20px;

    &:last-child {
      margin-bottom: 0;
    }

    span {
      display: block;
      font-size: 50px;
      font-weight: 700;
      margin-bottom: 10px;
    }

    h3 {
      font-size: 32px;
      margin-bottom: 10px;
    }

    p {
      font-size: 16px;
    }

    @media (max-width: 640px) {
      margin-bottom: 10px;

      h3 {
        font-size: 24px;
      }
    }
  }
`;

const About = () => {
  return (
    <AboutWrapper id="about" role="about">
      <AboutTitle># ABOUT ME</AboutTitle>
      <AboutDesc>
        <div className="box">
          <span>1.</span>
          <h3>나에대한특징1</h3>
          <p>
            나에대한특징1 - 설명
          </p>
        </div>
        <div className="box">
          <span>2.</span>
          <h3>나에대한특징2</h3>
          <p>
            나에대한특징2 - 설명
          </p>
        </div>
        <div className="box">
          <span>3.</span>
          <h3>나에대한특징3</h3>
          <p>
            나에대한특징3 - 설명
          </p>
        </div>
      </AboutDesc>
    </AboutWrapper>
  );
}

export default About;