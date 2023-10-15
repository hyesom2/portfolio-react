import React from 'react';
import styled from 'styled-components';

// menu icon(svg)
import {ReactComponent as HomeIcon} from '../assets/images/icon_home.svg';
import {ReactComponent as UserIcon} from '../assets/images/icon_user.svg';
import {ReactComponent as StackIcon} from '../assets/images/icon_stack.svg';
import {ReactComponent as SchoolIcon} from '../assets/images/icon_school.svg';
import {ReactComponent as MailIcon} from '../assets/images/icon_mail.svg';

const HeaderWrapper =  styled.header`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100px;
  height: 100%;
  background-color: #000;
  z-index: 100;

  @media (max-width: 1200px) {
    width: 80px;
  }
  @media (max-width: 768px) {
    bottom: 0;
    width: 100%;
    height: 70px;
    border-radius: 40px;
  }
`;

const HeaderNav = styled.nav`
  width: 100%;
  height: 100%;
  
  ul {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;

    @media (max-width: 768px) {
      flex-direction: row;
    }
  }

  li {
    width: 50px;
    height: 50px;
    margin-bottom: 25px;
    transition: opacity 0.3s ease-in-out;

    &:last-child {
      margin-bottom: 0;
    }

    &:hover {
      opacity: 0.7;
    }

    a {
      display: block;
      width: 100%;
      height: 100%;
    }

    @media (max-width: 768px) {
      width: 40px;
      height: 40px;
      margin-bottom: 0;
      margin-right: 16px;
      transition: all 0.3s ease-in-out;

      &:last-child {
        margin-right: 0;
      }

      &:hover {
        transform: translateY(-10px);
      }

      .icons {
        width: 100%;
        height: 100%;
      }
    }
  }
`;

const Header = () => {
  return (
    <HeaderWrapper id="header">
      <HeaderNav className="header-nav" aria-label="메인메뉴">
        <ul>
          <li>
            <a href="/">
              <HomeIcon className="homeIcon icons" />
            </a>
          </li>
          <li>
            <a href="/">
              <UserIcon className="userIcon icons"/>
            </a>
          </li>
          <li>
            <a href="/">
              <StackIcon className="stackIcon icons"/>
            </a>
          </li>
          <li>
            <a href="/">
              <SchoolIcon className="schoolIcon icons"/>
            </a>
          </li>
          <li>
            <a href="/">
              <MailIcon className="mailIcon icons"/>
            </a>
          </li>
        </ul>
      </HeaderNav>
    </HeaderWrapper>
  );
};

export default Header;