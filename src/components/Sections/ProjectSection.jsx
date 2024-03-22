import styled, {keyframes} from 'styled-components';
import Inner from '../Commons/Inner';
import React, {useState} from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';

import './styles.css';

// import required modules
import { EffectCards } from 'swiper/modules';


const bounceAnimation = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-4px); /* 위로 4px 이동 */
  }
`;

const basePath = [
  './images/weMap/',
  './images/BuzzerBeater/',
  './images/lettuce/',
]
const lettucePath =[
  basePath[2] + 'thumb1.png',
  basePath[2] + 'thumb2.png',
  basePath[2] + 'thumb3.png',
  basePath[2] + 'thumb4.png',
  basePath[2] + 'thumb5.png',
  basePath[2] + 'thumb6.png',
]
const weMapPath = [
  basePath[0] +  'thumb1.png',
  basePath[0] +  'thumb2.png',
  basePath[0] +  'thumb3.png',
  basePath[0] +  'thumb4.png',
  basePath[0] +  'thumb5.png',
  basePath[0] +  'thumb6.png',
  basePath[0] +  'thumb7.png',
  basePath[0] +  'thumb8.png',
]
const buzzerBeaterPath = [
  basePath[1] +  'thumb1.png',
  basePath[1] +  'thumb2.png',
  basePath[1] +  'thumb3.png',
  basePath[1] +  'thumb4.png',
  basePath[1] +  'thumb5.png',
  basePath[1] +  'thumb6.png',
  basePath[1] +  'thumb7.png',
  basePath[1] +  'thumb8.png',
  basePath[1] +  'thumb9.png',
  basePath[1] +  'thumb10.png',
  basePath[1] +  'thumb11.png',
  basePath[1] +  'thumb12.png',
  basePath[1] +  'thumb13.png',
]
const moreAboutPath=[
  './images/githubIcon.png',
  './images/rotate.png',
]
function ProjectImages({ imgPath, row }) {
  return (
    <>
      {row ? (
        <Swiper
          effect={'cards'}
          grabCursor={true}
          modules={[EffectCards]}
          className="mySwiper row"
          autoHeight={false}
        >
          {imgPath.map((item, idx) => (
            <SwiperSlide key={idx}>
              <img className='row' src={item} alt={`weMap-${idx}`} />
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <Swiper
          effect={'cards'}
          grabCursor={true}
          modules={[EffectCards]}
          className="mySwiper"
          autoHeight={false}
        >
          {imgPath.map((item, idx) => (
            <SwiperSlide key={idx}>
              <img src={item} alt={`weMap-${idx}`} />
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </>
  );
}



const Container = styled.div`
  width: 100%;
  /* 임시 높이 */
  /* height: 1000px; */
  background-color: #91C7EE;
  padding: 100px 0;
  box-sizing: border-box;
`;
const Title = styled.div`
  width: 100%;
  font-size: 32px;
  font-weight: 700;
  text-align: center;
  margin-bottom: 80px;

  & img{
    width: 50px;
  }
`;
const ProjectContainer = styled.div`
  display: flex;
  justify-content: space-around;

  @media (max-width: 740px){
    flex-direction: column;
    align-items: center;
  }
`
// WhiteBox
const WhiteBoxContainer = styled.div`
  width: 100%;
  height: ${(props)=>(props.row === true? (`auto`):('auto'))};
  margin-bottom: 30px;
  text-align: center;
  font-size: 30px;
  font-weight: 700;
  z-index: 0;
  position: relative;

  @media (max-width: 1000px) {
  height: ${(props)=>(props.row === true? (`auto`):('auto'))};

    font-size: 24px;
  }

  @media (max-width: 740px) {
    width: 100%;
    height: ${(props)=>(props.row === true? (`auto`):('auto'))};
    font-size: 36px;
  }
`
const WhiteBox =styled.div`
    width: 100%;
    padding: 24px;
    box-sizing: border-box;
    background-color: #fff;
    border-radius: 15px;
    display: flex;
    flex-direction: ${(props)=>(props.row ? 'column' : 'row')};
    justify-content: space-around;
    align-items: center;
    gap: 20px;
    position: relative;
    
    /* 3D 회전 효과 */
    transform: ${(props) => (props.isBack ? 'rotateY(180deg)' : 'rotateY(0deg)')};
    opacity: ${(props) => (props.isBack ? '0' : '1')};
    transition: 1s ease; /* 애니메이션을 부드럽게 만들기 위해 트랜지션 추가 */
    visibility: ${(props) => (props.isBack ? 'hidden' : 'visible')};

    @media (max-width: 740px) {
      padding-top: 80px;
      flex-direction: column;
      justify-content: center;
      gap: 0;

    }
 `

const WhiteBox__back =styled.div`
  width: 100%;
  padding: 24px;
  box-sizing: border-box;
  background-color: #fff;
  align-items: center;
  border-radius: 15px;
  margin-bottom: 10px;
  display: flex;
  justify-content: space-around;
  gap: 20px;
  position: absolute;
  top: 0;
  backface-visibility: hidden;
  @media (max-width: 1000px) {
    flex-direction: column
  }

  /* 3D 회전 효과 */
  transform: ${(props) => (props.isBack ? 'rotateY(0deg)' : 'rotateY(-180deg)')};
  opacity: ${(props) => (props.isBack ? '1' : '0')};
  transition: 1s ease; /* 애니메이션을 부드럽게 만들기 위해 트랜지션 추가 */
  visibility: ${(props) => (props.isBack ? 'visible' : 'hidden')};
  

`
const Architecture = styled.div`
  width: 80%;
  height: 100%;
  & img{
    width: 100%;
    object-fit: contain;
  }
  @media (max-width: 1000px) {
    margin-top: 48px;
    width: 90%;
  }
`
const ProjThumnailContainer = styled.div`
  width: ${(props)=>(props.row? '90%' : '25%')};
  transform: ${(props) => (props.isBack ? 'rotateY(180deg)' : 'rotateY(0deg)')};
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 14px;
  transition: .4s;
  
  @media (max-width: 1000px) {
    width: ${(props)=>(props.row? '90%' : '33%')};
    
  }
  @media (max-width: 740px) {
    width: ${(props)=>(props.row? '100%' : '60%')};
  } 
`
const ProjThumnail = styled.div`
  width: 94%;
  height: 90%;

  /* overflow: hidden; */

`
const ProjDetail = styled.div`
    width: ${(props)=>(props.row? '90%' : '44%')};
    height: 100%;
    font-size: 17px;
    padding-top: 48px;
    text-align: start;
    display: flex;
    gap: 20px;

    & strong{
    color: #bb0000;
    }
    & h3{
      font-size: 22px;
      margin-bottom: 1px;
      padding: 0;

      
    }
    
    @media (max-width: 1000px) {
      font-size: 15px;
      height: 90%;

      & h3{
        font-size: 19px;
      }
    }
    @media (max-width: 740px) {
      width: 90%;
      display: block;
    }
`
const ProjDetail_back = styled.div`
    width: ${(props)=>(props.row? '90%' : '44%')};
    height: 100%;
    font-size: 17px;
    padding-top: 48px;
    text-align: start;
    display: flex;
    gap: 20px;

    & strong{
    color: #bb0000;
    }
    & h3{
      font-size: 22px;
      margin-bottom: 1px;
      padding: 0;
    }

    @media (max-width: 1000px) {
    width: 90%;
    padding-top: 0;
    gap: 0;

  }
`
const MoreAbout = styled.div`
    display: flex;
    height: 36px;
    position: absolute;
    top: 24px;
    right: 2%;
    gap: 8px;
  & img {
    height: 100%;
    object-fit: cover;
    cursor: pointer;
  }
  animation: ${bounceAnimation} 1s infinite;
`;

const ProjectSection = React.forwardRef((props, ref)=>{
  const [isBack, setIsBack] = useState([false, false, false]);

  const handleIsBack = (idx) => {
    setIsBack((prevIsBack) => prevIsBack.map((val, i) => (i === idx ? !val : val)));
    };
    return (
      <Container ref={ref}>
        <Inner>
          <Title> {' '}<img src="./images/Group.png" alt="프로제그 아이콘" />Project</Title>
          {/* 상추 프로젝트 */}
          <ProjectContainer>
            <WhiteBoxContainer row={true}>
              <WhiteBox isBack={isBack[0]} row={true}>
                <MoreAbout>
                  <a href="https://github.com/gyural/lettuce-frontend"><img src={moreAboutPath[0]}alt="깃허브 아이콘" /></a>
                  <a onClick={()=>{handleIsBack(0)}}>
                    <img src={moreAboutPath[1]} alt="회전 아이콘" />
                  </a>
                </MoreAbout>
                <ProjThumnailContainer row={true}>
                  상추
                  <ProjThumnail><ProjectImages row={true} imgPath={lettucePath}></ProjectImages></ProjThumnail>
                </ProjThumnailContainer>
                <ProjDetail row={true}>
                  
                  <div className='left'>
                    <p>
                      <h3>✔️기간 :<br/></h3>
                      23년 7/31 ~ 23년 9/3<br/>
                      <h3>✔️ 핵심 기능 :<br/></h3>
                      ChatGPT API를 이용해 비슷한 상품들을 비교해주는 서비스<br/>
                      상품을 검색하면 상품의 네이버 평점 여러 조건들을 확인 가능<br/>
                      비교했던 이력 조회 가능<br/>
                      <h3>✔️기술 :<br/></h3>
                        FE : ReactJS html, css, JS <br/>
                        BE : Python, DRF<br/>
                        Etc : ChatGPTAPI, Naver OCR API, 네이버 검색API, 네이버쇼핑 크롤링<br/>
                    </p>
                  </div>
                  <div className='right'>
                    <p>
                      <h3>✔️개발 동기 :<br/></h3>
                      너무많은 상품들은 사람이 비교하기 힘들어 AI가 대신 비교해주고 싶어 개발함 <br/>
                      <h3>✔️역할 :<br/></h3>
                      프론트엔드 팀원 <br/><br/>
                    </p>
                  </div>
                </ProjDetail>

              </WhiteBox>
              <WhiteBox__back isBack={isBack[0]}>
                  <MoreAbout>
                    <a href="https://github.com/gyural/lettuce-frontend"><img src={moreAboutPath[0]}alt="깃허브 아이콘" /></a>
                    <a onClick={()=>{handleIsBack(0)}}>
                      <img src={moreAboutPath[1]} alt="회전 아이콘" />
                    </a>
                  </MoreAbout>
                  <Architecture><img src="./images/lettuce/architecture.png" alt="architecture그림"/></Architecture>
                  <ProjDetail_back>
                    <p>
                      <h3>✔  내가 맡은 부분 :<br/></h3>
                      <strong>React Component</strong>를 통해 UI를 구현했습니다. <br /><strong>네이버검색 API</strong>를 통해서 상품 검색시 상위 100개의 상품을 화면에 나타냈습니다.
                      이 때 상품의 별점, 리뷰같은 구체적인 정보는 네이버 OpenAPI에서 제공하지 않아서 <strong>웹 크롤링</strong>을 통해 상품의 구체적인 정보를 가져왔습니다.
                      이 때 모든 상품들에 대해 크롤링을 하면 네이버에서 차단을 했습니다.  <br />이 문제를 해결하기 위해 유저가 상품을 클릭했을때 이벤트 핸들링으로 상품의 구체적인 정보를 가져와 해당 문제를
                      해결할 수 있었습니다. 
                    </p>
                  </ProjDetail_back>
              </WhiteBox__back>
            </WhiteBoxContainer>
          </ProjectContainer>

          {/* WEMAP 프로젝트 */}
          <ProjectContainer>
            <WhiteBoxContainer>
              <WhiteBox isBack={isBack[1]}>
                <MoreAbout>
                    <a href="https://github.com/gyural/WeMap-Frontend"><img src={moreAboutPath[0]}alt="깃허브 아이콘" /></a>
                    <a onClick={()=>{handleIsBack(1)}}>
                      <img src={moreAboutPath[1]} alt="회전 아이콘" />
                    </a>
                </MoreAbout>
                <ProjThumnailContainer>
                  WeMap
                  <ProjThumnail><ProjectImages imgPath={weMapPath}></ProjectImages></ProjThumnail>
                </ProjThumnailContainer>
                <ProjDetail>
                  <p>
                  <h3>✔️기간 :<br/></h3>
                  23년 9/4 ~ 23년 10/10<br/>
                  <h3>✔️개발 동기 :<br/></h3>
                    펜데믹 이후 131배 폭증한 재난문자를 보기쉬운 지도 형태로 전달<br/><br/>

                  <h3>✔️ 핵심 기능 :<br/></h3>
                  실시간 재난 문자 지도위에 시각화<br/>
                  재난 매뉴얼 / 문자내용 / 대피소 찾기 기능 제공<br/>
                  주변 대피소 찾기 기능<br/><br/>

                  <h3>✔️역할 :<br/></h3>
                  프론트엔드 리드 <br/><br/>

                  <h3>✔️기술 :<br/></h3>
                    FE : React <br/>
                    BE : DRF, AWS Lambda<br/>
                    Etc : kakaoMap, kakao mobilitySGIS통계지리, 세종시 대피소 데이터, 재난관리 포털 크롤링<br/>
                  </p>
                </ProjDetail>

              </WhiteBox>
              <WhiteBox__back isBack={isBack[1]}>
                    <MoreAbout>
                      <a href="https://github.com/gyural/WeMap-Frontend"><img src={moreAboutPath[0]}alt="깃허브 아이콘" /></a>
                      <a onClick={()=>{handleIsBack(1)}}>
                        <img src={moreAboutPath[1]} alt="회전 아이콘" />
                      </a>
                    </MoreAbout>
                  <Architecture><img src="./images/weMap/WeMap-Architechture2.png" alt="architecture그림"/></Architecture>
                  <ProjDetail_back>
                      <p>
                        <h3>✔ 내가 맡은 부분 :<br/></h3>
                        처음으로 배포에 성공한 프로젝트 입니다.<br/>
                        <strong>webSocket</strong>을 통해 실시간 재난문자를 화면상에 표시하는 기능을 구현했습니다.<br/>
                        지도위에 어떻게 하면 효과적으로 전달할지 고민 후 <strong>kakaoMap API</strong>를 통해 폴리곤형태의 행정구역 경계를 구현했습니다. 
                        이 때 행정구역 경계값은 <strong>SGIS지리정보 API</strong>를 통해 가져온 후 4차원 이상 배열을 전처리 하는 것을 담당했습니다.<br/> 
                        또 전처리 까지는 했지만 kakaoMap에서 쓰는 좌표단위를 맞춰주기 위해 <strong>Proj4</strong>라는 라이브러리를 사용해 좌표를 맞추는 함수를 구현했습니다.<br/> 
                        <strong>JWT</strong>를 통해 유저 인증을 구현했습니다. 개발버전에서는 성공적으로 작동했습니다. 하지만 배포 버전에서의 cookie접근 CORS에러로 인해 배포버전에는 반영하지 못했습니다. 
                      </p>
                  </ProjDetail_back>
              </WhiteBox__back>
            </WhiteBoxContainer>
          </ProjectContainer>

          {/* BUZZERBEATER 프로젝트 */}
          <ProjectContainer>
            <WhiteBoxContainer>
              <WhiteBox isBack={isBack[2]}>
                <MoreAbout>
                  <a href="https://github.com/TEAM-REDCODE/buzzer-beater-frontend"><img src={moreAboutPath[0]}alt="깃허브 아이콘" /></a>
                  <a onClick={()=>{handleIsBack(2)}}>
                    <img src={moreAboutPath[1]} alt="회전 아이콘" />
                  </a>
                </MoreAbout>
                <ProjThumnailContainer>
                  BuzzerBeater
                  <ProjThumnail><ProjectImages imgPath={buzzerBeaterPath}></ProjectImages></ProjThumnail>
                </ProjThumnailContainer>
                <ProjDetail>
                  <p>
                  <h3>✔️기간 :<br/></h3>
                  23년 11/27 ~ 24년 2/2<br/>
                  <h3>✔️개발 동기 :<br/></h3>
                  교내 학생들끼리 농구를 쉽게 즐기기 위해 개발한 서비스<br/><br/>

                  <h3>✔️ 핵심 기능 :<br/></h3>
                  누구나 쉽게 만들 수 있는 농구파티<br/>
                  농구파티에 누구나 쉽게 참여 가능<br/>
                  용병 시스템을 통한 참여자 증가 가능<br/><br/>

                  <h3>✔️역할 :<br/></h3>
                  프론트엔드 리드 <br/><br/>

                  <h3>✔️기술 :<br/></h3>
                    FE : ReactNative <br/>
                    BE : NodeJS, express, mySQL<br/>
                    Etc : JWT인증, expo <br/>
                  </p>
                </ProjDetail>

              </WhiteBox>
              <WhiteBox__back isBack={isBack[2]}>
                  <MoreAbout>
                    <a href="https://github.com/TEAM-REDCODE/buzzer-beater-frontend.git"><img src={moreAboutPath[0]}alt="깃허브 아이콘" /></a>
                    <a onClick={()=>{handleIsBack(2)}}>
                      <img src={moreAboutPath[1]} alt="회전 아이콘" />
                    </a>
                  </MoreAbout>
                  <Architecture><img src="./images/BuzzerBeater/BuzzerBeater-Architechtur2.png" alt="architecture그림"/></Architecture>
                  <ProjDetail_back>
                    <p>
                      <h3>✔ 내가 맡은 부분 :<br/></h3>
                      <strong>JWT 인증</strong>을 통해 유저 인증을 완료했고 해당 토큰을 통해 여러 API 접근을 제어했습니다. 이때
                      쿠키를 사용하여 안전하게 토큰을 관리했습니다. 전체적인으로
                      <strong>expo</strong>를 통해 까다로운 ReactNative 의 테스팅과 빌드를 쉽게할 수 있었습니다.<br/>
                      <strong>axios</strong>를 통해 백엔드 DB에 Get/Post/Delete/Put등 여러 API를 만들었습니다.
                      <strong>reactNavigation</strong>을 통해 화면간 이동을 구현했습니다. <strong>contextAPI</strong>를 통해 유저정보를 
                      컴포넌트 전역적으로 관리하여 어디서든 접근할 수 있게 설계하고 구현했습니다.
                      배포에서 <strong>PlayConsole</strong>을 이용해 배포를 완료했습니다.(테스트 버전)

                    </p>
                  </ProjDetail_back>
              </WhiteBox__back>
            </WhiteBoxContainer>
          </ProjectContainer>
          
        </Inner>
      </Container>
    )
  }

) 

export default ProjectSection