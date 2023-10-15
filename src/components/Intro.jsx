import React from 'react';
import styled from 'styled-components';
import profileImg from '../assets/images/해바라기.jpg';

const IntroWrapper = styled.div`
  position: relative;
  height: 100vh;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const ProfileWrapper = styled.div`
  width: 400px;
  height: 400px;
  background-color: #fff;
  border-radius: 20px;
  padding: 30px;
  margin-right: 100px;
  box-shadow: 15px 15px #000;

  @media (max-width: 1200px) {
    width: 350px;
    height: 350px;
    padding: 20px;
  }
  @media (max-width: 768px) {
    width: 300px;
    height: 300px;
    margin-right: 0;
    margin-bottom: 30px;
  }
`;

const ProfileImg = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  border-radius: 50%;
`;

const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    font-size: 60px;
    font-weight: bold;
    margin-bottom: 20px;
  }

  p {
    font-size: 30px;
    margin-bottom: 20px;
  }

  button {
    width: 200px;
    background-color: #fff;
    padding: 15px;
    margin-right: 50px;
    border: 1px solid #000;
    box-shadow: 10px 10px #000;
    transition: all 0.3s ease-in-out;

    &:last-child {
      margin-right: 0;
    }

    &:hover {
      background-color: #F8E86D;

      a {
        font-weight: bold;
      }
    }

    a {
      font-size: 20px;
      transition: all 0.3s ease-in-out;
    }
  }

  @media (max-width: 1200px) {
    h1 {
      font-size: 50px;
    }

    button {
      width: 170px;
      margin-right: 20px;
    }
  }
  @media (max-width: 768px) {
    h1 {
      font-size: 35px;
    }

    p {
      font-size: 25px;
      margin-bottom: 20px;
    }

    button {
      width: 150px;
      margin-right: 40px;
      box-shadow: 6px 6px #000;
      
      a {
        font-size: 16px;
      }
    }
  }
`;

const Intro = () => {
  return (
    <IntroWrapper>
      <Wrapper>
        <ProfileWrapper>
          <ProfileImg src={ profileImg } alt="프로필 사진 임시용" />
        </ProfileWrapper>
        <InfoWrapper>
          <h1>KIM HYEON JU</h1>
          <p>FRONT DEVELOPER</p>
          <div>
            <button>
              <a href="/">RESUME</a>
            </button>
            <button>
              <a href="#contact">CONTACT</a>
            </button>
          </div>
        </InfoWrapper>
      </Wrapper>
    </IntroWrapper>
  );
} 

export default Intro;