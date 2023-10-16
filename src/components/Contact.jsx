import React from 'react';
import styled from 'styled-components';
import callImg from '../assets/images/phone-call.png';

const ContactWrapper = styled.section`
  height: 100vh;
  padding: 16px 16px 16px calc(100px + 16px);

  @media (max-width: 1024px) {
    width: 100%;
    padding: 16px 16px calc(80px + 16px) 16px;
  }
  @media (max-width: 640px) {
    padding: 16px 16px calc(70px + 16px) 16px;
  }
`;

const ContactTitle= styled.h1`
  position: relative;
  font-size: 100px;
  font-weight: 800;
  text-align: left;
  margin-bottom: 40px;

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
    font-size: 80px;
  }

  @media (max-width: 640px) {
    font-size: 60px;
    text-align: center;
    margin-bottom: 30px;

    &::after {
      bottom: 0;
    }
  }
`;

const ContactContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 300px;
  background-color: #000;
  color: #fff;
  margin-bottom: 40px;

  h2 {
    font-size: 50px;
    font-weight: 700;
    margin-bottom: 20px;
    transition: all 0.5s ease-in-out;

    &:last-child {
      margin-bottom: 0;
    }

    &:hover {
      color: #F8E86D;
    }
  }

  @media (max-width: 1024px) {
    h2 {
      font-size: 30px;
      margin-bottom: 10px;
    }
  }

  @media (max-width: 640px) {
    height: 350px;

    h2 {
      font-size: 20px;
    }
  }
`;

const ImgWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;

  img {
    display: block;
    width: 200px;
    height: 200px;
  }

  &::before {
    position: absolute;
    top: -40px;
    display: block;
    content: '';
    width: 0px;
    height: 0px;
    border-top: 20px solid #000;
    border-left: 20px solid transparent;
    border-right: 20px solid transparent;
  }

  @media (max-width: 1024px) {
    img {
      width: 180px;
      height: 180px;
    }
  }
`;

const Contact = () => {
  return (
    <ContactWrapper id="contact">
      <ContactTitle># CONTACT</ContactTitle>
        <ContactContent>
          <h2>
            <a href="/" target="_blank">KAKAOTALK : KIMHYESOM</a>
          </h2>
          <h2>
            <a href="mailto:MAIL : kimhyesom1202@gmail.com">MAIL : kimhyesom1202@gmail.com</a>
          </h2>
        </ContactContent>
        <ImgWrapper>
          <img src={callImg} alt="전화주세요 이미지" />
        </ImgWrapper>
    </ContactWrapper>
  );
}

export default Contact;