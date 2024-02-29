import React, {useState, useEffect} from 'react';
import styled, {keyframes} from 'styled-components';
import Inner from '../Commons/Inner';

const Background = styled.div`
  margin-top: 0;
  width: 100%;
  box-sizing: border-box;
  background: linear-gradient(rgba(100, 100, 100, 0.8), rgba(100, 100, 100, 0.589)),
              url('./images/candi1.jpg');
  background-size: cover;
  padding: 55px 0 ;
  font-size: 2.1rem;
  @media(max-width: 1000px){
    font-size: 2rem;
  }
  @media(max-width: 740px){
    font-size: 1.5rem;
  }
`;

const Navigation = styled.div`
  width: 100vw;
  height: auto;
  box-sizing: border-box;
  position: fixed;
  top: 0;
  background-color: ${(props) => props.scroll > 1 ? '#ffffff' : 'transparent'};
  color: ${(props)=> props.scroll > 1 ? 'black' : 'white'};
  transition: background-color 0.3s ease; /* 부드러운 색상 전환을 위한 transition */
  border-radius: 0 0 14px 14px;
  z-index: 10;
  font-size: 1.8rem;
`;
const NavigationItems = styled.ul`
  height: auto;
  display: flex;
  font-size: 1.8rem;
  gap: 44px;
  padding: 14px 0px;
  @media (max-width: 1000px) {
    font-size: 1.6rem;
    
  }
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
  text-align: start;
  flex-grow: 1;
  height: 100%;
  white-space: nowrap; /* 텍스트 줄 바꿈 방지 */
  @media (max-width: 1000px) {
    
  }
  @media (max-width: 740px) {
    text-align: center;
    
  }
`
const ContentContainer = styled.div`
  width: 100%;
  color: white; 
  text-align: center;
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
          <div>
            <p>
            <p
            >임규성</p>
            <hr
            style={{
              width: '80%',
              margin: '0 auto',
              border: '2px solid rgb(255 224 224)'}}
            />
            <br />
            100명 이상 규모 해커톤 <StrongString>대상 수상</StrongString><br />
            BOJ <StrongString>Gold3</StrongString><br />
            교내 농구 커뮤니티 앱 <StrongString>PlayStore출시</StrongString></p>
          </div>
          <div style={{width: '100%', display: 'flex', justifyContent: 'center'}}>
            <Btn 
              onClick={scrollToSkillSection} 
              style={{margin: '0 auto', backgroundColor: '##E35F00', color: 'white', 
                fontSize: '28px', borderRadius: '8px', padding: '4px 10px'
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
