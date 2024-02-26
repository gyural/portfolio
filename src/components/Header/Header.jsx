import React, {useState, useEffect} from 'react';
import styled, {keyframes} from 'styled-components';
import Inner from '../Commons/Inner';

const Background = styled.div`
  margin-top: 0;
  width: 100%;
  height: 400px;
  position: relative;
  box-sizing: border-box;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
                url('./images/candi1.jpg');
    background-size: cover;
    backdrop-filter: blur(10px);
    opacity: 0.8;
  }
`;

const Navigation = styled.div`
  width: 100vw;
  height: auto;
  margin: 0 auto;
  box-sizing: border-box;
  position: fixed;
  top: 0;
  background-color: ${(props) => props.scroll > 1 ? '#ffffff' : 'transparent'};
  color: ${(props)=> props.scroll > 1 ? 'black' : 'white'};
  transition: background-color 0.3s ease; /* 부드러운 색상 전환을 위한 transition */
  border-radius: 0 0 14px 14px;
  z-index: 2;
  transition: .4s;
`;
const NavigationItems = styled.ul`
  height: auto;
  display: flex;
  font-size: 23px;
  gap: 44px;
  padding: 14px 0px;

`

const NavigationItem = styled.li`
  cursor: pointer;

  
  
  &:hover {
    color: ${(props) => props.hoverColor};
  }
  @media (max-width: 740px) {
    display: none
  }
`
const NavigationItemMain = styled.li`
  flex-grow: 1;
  @media (max-width: 740px) {
    text-align: center;
    font-size: 32px;
  }
`
const ContentContainer = styled.div`
  margin-top: 66px;
  width: 100%;
  position: absolute;
  z-index: 1;
`
const StrongString = styled.strong`
  color: #E35F00;
`
// 애니매이션
const bounceAnimation = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-4px); /* 위로 4px 이동 */
  }
`;
const Btn = styled.button`
  margin: 0 auto;
  background-color: #E35F00;
  color: white; 
  font-size: 24px;
  border-radius: 8px;
  padding: 4px 10px;
  transition: .4s;
  animation: ${bounceAnimation} 1s infinite;

  &:hover {
    background-color: #AD4300; /* 문자열로 감싸지 않아야 합니다. */
  }
`
function Header({scrollToSkillSection, scrollToProjectSection}) {

  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <Background>
      <ContentContainer>
        <Navigation scroll={scroll}>
          <Inner>
            <NavigationItems>
              <NavigationItemMain>LimGyuSeong's Portofolio</NavigationItemMain>
              <NavigationItem hoverColor={"#E1A660"} onClick={scrollToSkillSection}>Skills</NavigationItem>
              <NavigationItem hoverColor={"#E1A660"} onClick={scrollToProjectSection}>Projects</NavigationItem>
              <NavigationItem hoverColor={"#E1A660"}> About</NavigationItem>
            </NavigationItems>
          </Inner>
        </Navigation>
        <Inner>
          <p style={{
            textAlign: 'center',
            fontSize: '24px',
            color: 'white',  
          }}>
          <p
            style={{
              fontSize: '32px',
              margin: '11px',
            }}
          >임규성</p>
          <hr
          style={{
            width: '400px',
            margin: '0 auto',
            border: '2px solid rgb(255 224 224)'}}
          />
          <br />
          100명 이상 규모 해커톤 <StrongString>대상 수상</StrongString><br />
          BOJ <StrongString>Gold3</StrongString><br />
          교내 농구 커뮤니티 앱 PlayStore출시</p>
          
          <div style={{width: '100%', display: 'flex', justifyContent: 'center'}}>
            <Btn style={{margin: '0 auto', backgroundColor: '##E35F00', color: 'white', 
              fontSize: '24px', borderRadius: '8px', padding: '4px 10px'
              }}
            >
              more &darr;
            </Btn>
          </div>
        </Inner>

      </ContentContainer>
    </Background>
  );
}

export default Header;
