import React from 'react'
import styled from 'styled-components'
import Inner from '../Commons/Inner';
import title from '../../assets/skillsTitle.png'; 

const knwoledgePath = [
  './/images/knowledgeable1.png',
  './images/knowledgeable2.png',
  './images/knowledgeable3.png',
]
const strongPath = [
  './images/strong1.png',
  './images/strong2.png',
  './images/strong3.png',
  './images/strong4.png'
]
const etcPath = [
  './images/etc1.png',
  './images/etc2.png',
  './images/etc3.png',
  './images/etc4.png'
]
const Container = styled.div`
  width: 100%;
  
  background-color: #E1A660;
  padding: 100px 0;
  box-sizing: border-box;
`;
const Title = styled.div`
  width: 100%;
  font-size: 32px;
  font-weight: 700;
  text-align: center;
  margin-bottom: 80px;
`;
const SkillsContainer = styled.div`
  display: flex;
  justify-content: space-around;

  @media (max-width: 740px){
    flex-direction: column;
    align-items: center;
  }
`
const WhiteBoxContainer = styled.div`
  width: 28%;
  text-align: center;
  font-size: 30px;
  font-weight: 700;
/* 
  @media (max-width: 1000px) {
    width: 210px;
    font-size: 25px;
  } */

  @media (max-width: 740px) {
    width: 400px;
    font-size: 36px;
  }
`
const WhiteBox =styled.div`
  width: 100%;
  /* 임시 높이 */
  padding: 24px;
  box-sizing: border-box;
  background-color: #fff;
  border-radius: 15px;
  margin-top: 30px;
  display: flex;
  justify-content: center;
  gap: 10px;
  flex-wrap : wrap;
`
const StackIcon = styled.div`
  width: ${(props) => (props.large === true ? '90%' : '40%')};
  height: ${(props) => (props.large === true ? '140px' : '100px')};
  background-image: ${(props) => `url(${props.path})`};
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
`
const SkillSection = React.forwardRef((props, ref) => {
  return (
    <Container ref={ref}>
      <Inner>
        {'\n'}
        <Title>
          {' '}
          <img src={title} alt="Skills Title" />
          Skills
        </Title>
        <SkillsContainer>
          <WhiteBoxContainer>
            Knowledgeable{' '}
            <WhiteBox>
              {knwoledgePath.map((item, idx) => {
                return <StackIcon key={idx} path={item}></StackIcon>;
              })}
            </WhiteBox>
          </WhiteBoxContainer>
          <WhiteBoxContainer>
            Strong{' '}
            <WhiteBox>
              {strongPath.map((item, idx) => {
                return <StackIcon key={idx} path={item} large={true}></StackIcon>;
              })}
            </WhiteBox>{' '}
          </WhiteBoxContainer>
          <WhiteBoxContainer>
            Etc{' '}
            <WhiteBox>
              {etcPath.map((item, idx) => {
                return <StackIcon key={idx} path={item}></StackIcon>;
              })}
            </WhiteBox>{' '}
          </WhiteBoxContainer>
        </SkillsContainer>
      </Inner>
    </Container>
  );
});


export default SkillSection