import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.section`
  padding: 16px 16px 16px calc(100px + 16px);
  border-top: 1px solid #000;
  text-align: center;

  h3 {
    margin-bottom: 10px;
  }

  @media (max-width: 1024px) {
    padding: 16px 16px calc(80px + 16px) 16px;  
  }
  @media (max-width: 640px) {
    padding: 16px 16px calc(70px + 16px) 16px;

    h3 {
      font-size: 16px;
      margin-bottom: 8px;
    }
    p {
      font-size: 14px;
    }
  }
`;

const Footer = () => {
  return (
    <>
      <FooterWrapper>
        <h3>© 2023 KimHyeonJu</h3>
        <p>
          이 사이트는 리액트를 이용하여 제작하였습니다.
        </p>
      </FooterWrapper>
    </>
  );
}

export default Footer;