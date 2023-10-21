import React from 'react';
import styled from 'styled-components';

import projectImg1 from '../assets/images/image1.png';
import projectImg2 from '../assets/images/image2.png';
import projectImg3 from '../assets/images/image3.png';
import projectImg4 from '../assets/images/image4.png';
import projectImg5 from '../assets/images/image5.png';
import projectImg6 from '../assets/images/image6.png';

const PortWrapper = styled.section`
  position: relative;
  width: 100%;
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

const PortTitle = styled.h1`
  position: relative;
  font-size: 100px;
  font-weight: 800;
  text-align: left;
  margin-bottom: 40px;

  &::after {
    position: absolute;
    content: '';
    display: block;
    width: 100%;
    height: 5px;
    background-color: #000;
  }

  @media (max-width: 1024px) {
    font-size: 80px;

    &::after {
      bottom: 0;
    }
  }  
  @media (max-width: 640px) {
    font-size: 60px;
    text-align: center;
    margin-bottom: 30px;
  }
`;

const Project = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  .project-img {
    width: 30%;
    height: 200px;
    background-color: #fff;
    border-radius: 20px;
    box-shadow: 15px 15px #000;
    margin-right: 30px;
    margin-bottom: 40px;
    transition: opacity 0.3s ease-in-out;

    &:nth-child(3n) {
      margin-right: 0;
    }

    &:hover {
      cursor: pointer;
      opacity: 0.7;
    }

    img {
      display: block;
      width: 100%;
      height: 100%;
    }
  }

  @media (max-width: 640px) {
    justify-content: space-between;

    .project-img {
      width: 45%;
      height: 160px;
      box-shadow: 10px 10px #000;
      margin-right: 0;
      margin-bottom: 40px;

      &:nth-child(5),
      &:nth-child(6) {
        margin-bottom: 0;
      }
    }
  }
`;

const Port = () => {
  return (
    <PortWrapper id="port" role="port">
      <PortTitle># PROJECTS</PortTitle>
      <Project>
          <div className="project-img">
            <img src={projectImg1} alt="프로젝트 예시 이미지1" />
          </div>
          <div className="project-img">
            <img src={projectImg2} alt="프로젝트 예시 이미지2" />              
          </div>
          <div className="project-img">
            <img src={projectImg3} alt="프로젝트 예시 이미지3" />
          </div>
          <div className="project-img">
            <img src={projectImg4} alt="프로젝트 예시 이미지4" />
          </div>
          <div className="project-img">
            <img src={projectImg5} alt="프로젝트 예시 이미지5" />
          </div>
          <div className="project-img">
            <img src={projectImg6} alt="프로젝트 예시 이미지6" />
          </div>
      </Project>
    </PortWrapper>
  );
}

export default Port;