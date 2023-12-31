import styled from "@emotion/styled";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import AnAImg from '../assets/clubs/AnA.png'
import AppplePiImg from '../assets/clubs/AppplePi.png';
import EDCANImg from '../assets/clubs/EDCAN.png';
import EmotionImg from '../assets/clubs/Emotion.png';
import IWOPImg from '../assets/clubs/IWOP.png'
import Layer7Img from '../assets/clubs/Layer7.png';
import NEFUSImg from '../assets/clubs/NEFUS.png';
import RGImg from '../assets/clubs/RG.png'
import TeamLogImg from '../assets/clubs/TeamLog.png';
import UniFoxImg from '../assets/clubs/UniFox.png';
import Zer0penImg from '../assets/clubs/Zer0pen.png';
import CampCard from "./CampCard.tsx";
import {Container, SectionDescription, SectionTop, SubTitle, Title, TitleContainer, Wrapper} from "./Atomic.tsx";

const campInfo = [
  {clubName: 'AnA',
    img: AnAImg,
   campTitle: 'Socket.io를 이용한\n나만의 카톡방 만들기',
    color: '#EDA12F',
    clubIntroduce: 'AnA는 Application과 Architecture를 합쳐서 탄생하게 된 이름입니다.\n' +
      'AnA는 백엔드 개발 동아리로서 Node.js와 Linux서버 구축, MySQL DB 등을 이용해서 웹 서버 구축하는 동아리입니다. \n' +
      '이 밖에도 심화 과정을 통해 Python, Rust 등 다양한 기술을 직접 배울 수 있습니다.',
    campIntroduce: 'Node.js와 Socket을 이용하여 카톡방과 유사한 환경을 구축해보고 작동원리를 이용할 수 있다.',
    tag: [
      '',
      '',
      '',
    ],
    clubSns: {
    instagram: 'https://www.instagram.com/ana_kr_corp/',
      homepage: 'https://www.sunrin-ana.kr/',
    },
    // clubVideo: AnAVideo,
  },
  {
    clubName: 'App:ple PI',
    img: AppplePiImg,
    campTitle: 'Android Studio를이용한\n심리테스트 앱 만들기',
    color: '#D1272A',
    clubIntroduce: 'App:ple Pi는 소프트웨어과 앱 개발 동아리입니다. 주로 안드로이드 스튜디오를 활용한 \n' +
      '앱 개발과 UI/UX 디자인을 공부하고, 이를 통해 활발한 교내외 대회 및 활동을 하여 \n' +
      '53개의 많은 수상실적을 가지고 있습니다.',
    campIntroduce: '이번캠프에서 XML과 Kotlin에 대해 배운뒤 Android Studio를 이용해 교내의 여러동아리중 가장 어울리는 동아리를 찾아주는 \n' +
      '심리테스트 앱을 만들어볼 예정입니다.',
    tag: [
      '',
      '',
      '',
    ],
    clubSns: {
      instagram: 'https://www.instagram.com/appple.pi.official/',
      homepage: 'https://appplepi.com/',
    },
    // clubVideo: AppplePiVideo,
  },
  {
    clubName: 'EDCAN',
    img: EDCANImg,
    campTitle: 'Android Studio로\n나만의 퀴즈 앱 만들기',
    color: '#00A9CE',
    clubIntroduce: 'EDCAN은 2015년에 만들어진 소프트웨어과 소속의 모바일 콘텐츠 개발 동아리로,\n' +
      '안드로이드 앱 개발, 크로스 플랫폼 서비스 개발, UI/UX 디자인을 공부합니다.\n' +
      '타 학교, 타 동아리와 협업을 중심으로 다양한 경험을 쌓을 수 있습니다.',
    campIntroduce: '',
    tag: [
      '',
      '',
      '',
    ],
    clubSns: {
      instagram: 'https://www.instagram.com/sunrin_edcan/',
      homepage: 'https://edcan.kr',
    },
    // clubVideo: Video,
  },
  {
    clubName: 'Emotion',
    img: EmotionImg,
    campTitle: '외국에서 살아남자!\n:사진번역 AI모델 제작하기',
    color: '#3198D4',
    clubIntroduce: 'Emotion은 인공지능 개발에 관심을 가진 학생들이 모여 활동하는 동아리입니다. 선린인터넷고등학교에\n' +
      '서 활동하며, 파이썬 프로그래밍 언어를 학습하고 데이터 분석 및 인공지능 개발의 기본 개념들을 배우며, \n' +
      '이를 활용하여 인공지능 모델을 개발합니다. Emotion 동아리는 학생들에게 인공지능 분야에서 필요한 기\n' +
      '술과 지식을 전달하고, 창의적인 활동을 지원하며, 학생들의 성장과 발전을 돕는 역할을 합니다.',
    campIntroduce: '요즘 정말 핫한 인공지능을 배워보고 싶지 않나요? Emotion에서 Python과 인공지능의 기초부터 응용까지 차근차근 \n' +
      '알아보고 이해하며, 직접 인공지능 모델까지 만들어 볼 수 있어요. 어렵고 재미없는 수업이 아닌 처음 배우는 사람들도 \n' +
      '재밌고 흥미롭게 들을 수 있는 수업입니다. Emotion과 함께라면 여러분도 인공지능과 친해질 수 있어요!',
    tag: [
      '',
      '',
      '',
    ],
    clubSns: {
      instagram: '',
      homepage: '',
    },
    // clubVideo: EmotionVideo,
  },
  {
    clubName: 'IWOP',
    img: IWOPImg,
    campTitle: '웹을 나만의\n무대로 만들기',
    color: '#66DC3D',
    clubIntroduce: '',
    campIntroduce: '',
    tag: [
      '',
      '',
      '',
    ],
    clubSns: {
      instagram: '',
      homepage: '',
    },
    // clubVideo: Video,
  },
  {
    clubName: 'Layer7',
    img: Layer7Img,
    campTitle: 'USB로 친구\n컴퓨터 해킹하기',
    color: '#666476',
    clubIntroduce: ' Layer7은 선린인터넷고등학교 정보보호과의 자랑스러운 동아리로써.\n' +
      '정보보호 분야에 대한 관심과 열정을 가진 학생들이 모여 시스템 해킹, 웹 해킹, 리버싱 등 다양한 분야에서 활동하고 있습니다.\n' +
      '2001년 설립된 Layer7은 선린인터넷고등학교 정보보호과 동아리 중에서 가장 긴 역사를 지니며, 수 많은 수상 실적들과 활동으로\n' +
      '정보보호과를 대표하는 동아리 중 하나입니다. 정보보호에 대한 전문적인 지식과 기술을 배우고, 이를 실제로 활용해보며 끊임없이 \n' +
      '발전하는 동아리로, 정보보호 분야에 관심이 있는 학생들에게 매우 유용한 동아리입니다.',
    campIntroduce: 'USB를 통한 해킹의 위험성과 이에 대한 대응 방법을 실습을 통해 알아보자',
    tag: [
      '',
      '',
      '',
    ],
    clubSns: {
      instagram: '',
      homepage: '',
    },
    // clubVideo: Layer7Video,
  },
  {
    clubName: 'NEFUS',
    img: NEFUSImg,
    campTitle: '누가봐도 좀~~멋있는\n투석기 RC카 만들기',
    color: '#3565DA',
    clubIntroduce: 'NEFUS는 2003년 개설된 정보보호과 전공 동아리로, IoT와 Network 분야를 연구하는 전\n' +
      '공 동아리입니다.',
    campIntroduce: 'Arduino를 활용하여 “누가 봐도 좀~~ 멋있는 투석기 RC카”를 직접 만들\n' +
      '어보고, 나만의 부품을 추가하여 커스텀 해보는 활동 캠프입니다.',
    tag: [
      '',
      '',
      '',
    ],
    clubSns: {
      instagram: '',
      homepage: '',
    },
    // clubVideo: NEFUSVideo,
  },
  {clubName: 'RG',
    img: RGImg,
   campTitle: 'RG와 함께하는\n유니티의 슈팅게임',
    color: '#666CC1',
    clubIntroduce: '소프트웨어과 전공 동아리인 RG는 게임개발 전문 동아리로,\n' +
      ' Unity 등의 게임엔진을 이용해 기초 기본 심화 과정을 거쳐서 직접 개발하고\n' +
      '다양한 디자인 도구를 활용해 게임을 제작합니다.',
    campIntroduce: 'Unity 엔진과 C#을 활용해 직접 게임을 제작해보며, 게임에 필요한 요소들\n' +
    '과 알고리즘을 체험해보고 더욱 가까워지는 시간을 가져봅시다. ',
    tag: [
      '',
      '',
      '',
    ],
    clubSns: {
    instagram: '',
      homepage: '',
    },
    // clubVideo: RGVideo,
  },
  {
    clubName: 'TeamLog',
    img: TeamLogImg,
    campTitle: 'Javacsript로 검 강화\n게임 만들기',
    color: '#F25827',
    clubIntroduce: 'Teamlog는 서버 프로그래밍, 네트워크, 그리고 웹 개발에 관심 있는 학생들이 모여 함께 동아리 활동을 합니다. 이 동아리에서는 \n' +
      'HTML, CSS, JavaScript, Node.js, Vue, React와 같은 프론트엔드와 백엔드 기술을 배울 수 있어요. 또한, TCP/IP, HTTP, \n' +
      'Socket 등의 네트워크 분야와 서버 프로그래밍 분야에도 중점을 두어 이를 학습하고, 실제 서버를 구축해보며 이를 적용하는 방법을 익\n' +
      '힐 수 있습니다. Teamlog에서는 학생들이 현대적인 IT 기술을 습득하고, 다양한 분야에 대한 지식을 습득할 수 있는 기회를 제공합니다.',
    campIntroduce: ' 저희 TeamLog에서는 Web 개발의 기초인 HTML, CSS, JavaScript를 학습하는 과정을 제공합니다. 캠프를 \n' +
      '통해 Web에 처음으로 관심을 가지는 분들도 많습니다. 이번에는 재미있는 웹 게임인 "검 강화 하기"를 직접 구현\n' +
      '해보며 Web 개발의 기초를 배우고 즐겁게 이해할 수 있는 시간을 마련할 예정입니다!',
    tag: [
      '',
      '',
      '',
    ],
    clubSns: {
      instagram: '',
      homepage: '',
    },
    // clubVideo: TeamLogVideo,
  },
  {
    clubName: 'UniFox',
    img: UniFoxImg,
    campTitle: 'Python으로 만드는\n테트리스 게임',
    color: '#EC851A',
    clubIntroduce: 'Unifox는 선린인터넷고등학교 정보보호과 전공동아리로서 설립되어 개발과 보안 프로그래밍 분야에서 활동하고 있습니다.\n' +
      '보안 프로그래밍의 기본이 되는 알고리즘과 웹, 그리고 해킹을 공부하여 보안에 최적화된 개발을 할 수 있도록 돕습니다.\n' +
      '풍부한 경험을 쌓는 다양한 대회와 컨퍼런스 참여, 각자의 분야에서 깊은 탐구, 지식의 깊이를 더해주는 논문 작성 등\n' +
      '우리는 꿈과 미래에 대한 확신으로 가득 찬 친구들이 모여 함께 만들어 갑니다.',
    campIntroduce: '오랜 역사와 전통이 있는 게임 테트리스! Unifox와 함께하는 소프트웨어 나눔축제에서는 테트리스를 개발해 볼 겁니다.\n' +
      '세계에서 가장 인기 있는 언어 중 하나인 Python과 Python의 게임 개발 라이브러리 Pygame, 테트리스의 동작 과정\n' +
      '과 알고리즘을 배우고 이를 활용해 테트리스를 만드는 실습을 합니다. 평소에 게임 개발에 관심이 있으셨던 분들이나, 게\n' +
      '임을 좋아하시는 분들이 신청하시면 좋은 기회가 될 것 같습니다. 그럼 당일 날 뵙겠습니다!',
    tag: [
      '',
      '',
      '',
    ],
    clubSns: {
      instagram: '',
      homepage: '',
    },
    // clubVideo: UniFoxVideo,
  },
  {
    clubName: 'Zer0pen',
    img: Zer0penImg,
    campTitle: '유니티로 만드는\n스릴있는 점프게임',
    color: '#FFDA18',
    clubIntroduce: '저희 제로픈은 게임 개발 동아리로서 C, C++, Unity를 활용해서 게임개발을 배우고 동아리 자체제작엔진 zero엔진을 활용하\n' +
      '여 다양한 게임개발엔진을 체험할 수 있습니다. 또한 사운드, 애니매이션, 기획등 쉽게 배울 수 없는 다양한 심화 수업도 진행하\n' +
      '고 있습니다. 그리고 저희는 게임 디자이너도 함께 수업하며 협동 조금더 완성도 있는 게임 개발 환경을 만들어 주고 여기서 게임\n' +
      '디자니어들은 게임개발에 필요한 캐릭터 디자인, 모델링을 공부합니다.',
    campIntroduce: "",
    tag: [
      '',
      '',
      '',
    ],
    clubSns: {
      instagram: '',
      homepage: '',
    },
    // clubVideo: Zer0penVideo,
  },
];

const CampList = () => {
  return (
      <Container gray>
        <Wrapper flexable>
          <CampTexts>
            <SectionTop>
              <TitleContainer>
                <SubTitle>캠프 목록</SubTitle>
                <Title>어떤 캠프가 있을까요?</Title>
              </TitleContainer>
              <SectionDescription>
                웹, 게임, 인공지능, IoT, 해킹까지 여러 분야의 멘토와 함께 소프트웨어 나눔 축제를 즐겨보세요!<br/>소프트웨어과, 정보보호과의 11개의 동아리 캠프가 준비되어있습니다!
              </SectionDescription>
            </SectionTop>
          </CampTexts>
          <Desktop/>
          <Tablet/>
          <Tablet2/>
          <Mobile/>
        </Wrapper>
      </Container>
  );
};

const CampTexts = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: auto;
  height: auto;
`;




const StyledSwiper = styled(Swiper)`
  max-width: 1280px;
  width: 95vw;
  height: 574px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  @media (max-width: 1130px) {
    width: 900px;
  }
  @media (max-width: 900px) {
    width: 800px;
    height: 500px;
  }
  @media (max-width: 800px){
    width: 700px;
  }
  @media (max-width: 740px) {
    width: 570px;
  }
  @media (max-width: 590px){
    width: 530px;
  }
  @media (max-width: 550px){
    width: 336px;
    height: 450px;
  }
`;
const Desktop = () => {
  return(
      <DesktopContainer>
        <StyledSwiper
            modules={[Pagination, Navigation]}
            className="banner"
            spaceBetween={3}
            slidesPerView={1}
            navigation={true}
            pagination={{clickable: true}}
        >
          {[...Array(3)].map((_, i) => {
            return( <CardList key={i}
                              style={{
                                display:'flex',
                                gap:'25px',
                                justifyContent:'center'
                              }}
            >
              {[...Array(4)].map((_, j) => {
                const info = campInfo[i * 4 + j];
                if(!info) return null;
                return (
                    <CampCard info={info}/>
                );
              })}
            </CardList>)
          })}
        </StyledSwiper>
      </DesktopContainer>
  )
};

const Tablet = () => {
  return(
    <TableContainer>
      <StyledSwiper
        modules={[Pagination, Navigation]}
        className="banner"
        slidesPerView={1}
        navigation={true}
        pagination={{clickable: true}}
      >
        {[...Array(4)].map((_, i) => {
          return( <CardList key={i}
                            style={{
                              display:'flex',
                              gap:'25px',
                              justifyContent:'center'
                            }}
          >
            {[...Array(3)].map((_, j) => {
              const info = campInfo[i * 3 + j];
              if(!info) return null;
              return (
                <CampCard info={info}/>
              );
            })}
          </CardList>)
        })}
      </StyledSwiper>
    </TableContainer>
  )
}
const Tablet2 = () => {
  return (
    <Tablet2Container>
      <StyledSwiper
        modules={[Pagination, Navigation]}
        className="banner"
        slidesPerView={1}
        navigation={true}
        pagination={{clickable: true}}
      >
        {[...Array(6)].map((_, i) => {
          return( <CardList key={i}
                            style={{
                              display:'flex',
                              gap:'25px',
                              justifyContent:'center'
                            }}
          >
            {[...Array(2)].map((_, j) => {
              const info = campInfo[i * 2 + j];
              if(!info) return null;
              return (
                <CampCard info={info}/>
              );
            })}
          </CardList>)
        })}
      </StyledSwiper>
    </Tablet2Container>
  )
}
const Mobile = () => {
  return (
    <MobileContainer>
      <StyledSwiper
        modules={[Pagination, Navigation]}
        className="banner"
        slidesPerView={1}
        navigation={true}
        pagination={{clickable: true}}
      >
        {[...Array(11)].map((_, i) => {
          return( <CardList key={i}
                            style={{
                              display:'flex',
                              gap:'25px',
                              justifyContent:'center',
                            }}
          >
            {[...Array(1)].map((_, j) => {
              const info = campInfo[i + j];
              if(!info) return null;
              return (
                <CampCard info={info}/>
              );
            })}
          </CardList>)
        })}
      </StyledSwiper>
    </MobileContainer>
  )
}

const TableContainer = styled.div`
  display: none;
  @media (max-width: 1130px) {display: block}
  @media(max-width:840px){display: none}
`;

const DesktopContainer = styled.div`
  display: none;
  @media (min-width: 1130px) {display: block}
`;
const Tablet2Container = styled.div`
  display: none;
  @media(max-width:840px){display: block}
  @media(max-width:550px){display: none}
`;
const MobileContainer = styled.div`
  display: none;
  @media(max-width:550px){display: block}
`;

const CardList = styled(SwiperSlide)`
  display: flex;
  align-items: flex-start;

`;


export default CampList;
