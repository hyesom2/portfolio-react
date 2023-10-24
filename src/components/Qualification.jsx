import React from 'react';
import styled from 'styled-components';

const QualificationWrapper = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: #eee;
  padding: 16px 16px 16px calc(100px + 16px);

  @media (max-width: 1024px) {
    width: 100%;
    padding: 16px 16px calc(80px + 16px) 16px;
  }
  @media (max-width: 640px) {
    padding: 16px 16px calc(70px + 16px) 16px;
  }
`;

const Title = styled.h1`
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
    margin-bottom: 0;

    &::after {
      bottom: 0;
    }
  }
  @media (max-width: 640px) {
    font-size: 40px;
    text-align: center;
    margin-bottom: 30px;

    &::after {
      height: 3px;
    }
  }
`;

const Desc = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;

  .content {
    display: flex;
    width: 100%;
    height: 100%;
    margin-bottom: 20px;

    &:last-child {
      margin-bottom: 0;
    }

    h3 {
      position: relative;
      display: block;
      width: 300px;
      font-size: 50px;
      font-weight: 700;
      margin-right: 40px;
      margin-bottom: 10px;

      &::after {
        position: absolute;
        display: block;
        content: '';
        width: 100%;
        height: 5px;
        background-color: #000;
      }
    }

    p {
      font-size: 16px;
    }
  }

  @media (max-width: 1024px) {
    .content {
      align-items: center;
    }
  }
  @media (max-width: 760px) {
    .content {
      flex-direction: column;
      justify-content: flex-start;

      h3 {
        font-size: 35px;
        width: 100%;
        margin-right: 0;
        text-align: center;

        &::after {
          height: 3px;
        }
      }

      p {
        text-align: center;
      }
    }
  }
`;

const Qualification = () => {
  return (
    <>
      <QualificationWrapper id="qualify" role="qualify">
        <Title aria-label="qualification 제목"># QUALIFICATION</Title>
        <Desc aria-label="qualification 내용">
          <div className="content">
            <h3>Education</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores labore velit esse molestiae repellat sequi rerum. Temporibus, mollitia repellat sed obcaecati quam aliquid totam corporis rem assumenda omnis veniam ea?
            </p>
          </div>
          <div className="content">
            <h3>Skills</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis fuga fugit rerum, deleniti architecto unde numquam culpa corporis voluptate dolorem assumenda quae sequi similique voluptatibus animi eius quasi quia consequuntur non maiores iusto? Explicabo omnis eaque suscipit itaque accusantium voluptatum sequi, deserunt eius iste aliquid accusamus, inventore fugit, qui dolorem.
            </p>
          </div>
          <div className="content">
            <h3>Language</h3>
            <p>
              ilique voluptatibus animi eius quasi quia consequuntur non maiores iusto? Explicabo omnis eaque suscipit itaque accusantium voluptatum sequi, deserunt eius iste aliquid accusamus, inventore fugit, qui dolorem.
            </p>
          </div>
        </Desc>
      </QualificationWrapper>
    </>
  );
}

export default Qualification;