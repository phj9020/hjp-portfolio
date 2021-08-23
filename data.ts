import {AiOutlineMobile, AiOutlineDeploymentUnit,AiOutlineDatabase, AiOutlineGithub} from 'react-icons/ai'
import { IProject, IService, ISKill } from './type';
import {FiMonitor, FiFigma, FiFramer} from 'react-icons/fi';
import {DiJavascript1, DiReact, DiVisualstudio} from 'react-icons/di';
import {GrGraphQl} from 'react-icons/gr';
import {SiExpo, SiApollographql, SiMaterialUi, SiPostman} from 'react-icons/si';

export const services:IService[] = [
    {   
        id:1,
        title: "Frontend Development",
        description: "<b>HTML, CSS, JavaScript, React.js(+Next.js)</b>를 이용한 반응형 SPA 웹페이지 제작 가능",
        Icon: FiMonitor
    },
    {
        id:2,
        title: "Backend Development",
        description: "<b>Node.js, Express.js, apollo-server</b>를 이용한 서버 구축 및 데이터베이스 연동 구현",
        Icon: AiOutlineDatabase
    },
    {
        id:3,
        title: "App Development",
        description: "<b>Expo</b>를 이용한 react 앱 개발 경험, 구글 플레이 스토어 앱 출시",
        Icon: AiOutlineMobile
    },
    {
        id:4,
        title: "Deployment",
        description: "<b>Heroku, Netlify, firebase</b> 등을 이용한 서버, 클라이언트 배포",
        Icon: AiOutlineDeploymentUnit
    },
    {
        id:5,
        title: "Design",
        description: "<b>Figma</b>를 이용한 UI/UX 디자인 및 와이어프레임 제작",
        Icon: FiFigma
    },
];

export const languages:ISKill[] = [
    {
        id:1,
        name:"Javascript",
        level:"70%",
        Icon:DiJavascript1
    },
    {
        id:2,
        name:"React.js",
        level:"65%",
        Icon:DiReact
    },
    {
        id:3,
        name:"Expo",
        level:"50%",
        Icon:SiExpo
    },
    {
        id:4,
        name:"GraphQL",
        level:"50%",
        Icon:GrGraphQl
    },
    {
        id:5,
        name:"Apollo",
        level:"50%",
        Icon:SiApollographql
    },
    {
        id:6,
        name:"Material UI",
        level:"60%",
        Icon:SiMaterialUi
    },
];


export const tools:ISKill[] = [
    {
        id:1,
        name:"Github",
        level:"60%",
        Icon:AiOutlineGithub
    },
    {
        id:2,
        name:"VS Code",
        level:"80%",
        Icon:DiVisualstudio
    },
    {
        id:3,
        name:"Postman",
        level:"50%",
        Icon:SiPostman
    },
    {
        id:4,
        name:"Figma",
        level:"70%",
        Icon:FiFigma
    },
    {
        id:5,
        name:"Framer",
        level:"35%",
        Icon:FiFramer
    },
]


export const projects:IProject[] = [
    {
        id:1,
        name: "이커머스 웹사이트",
        description: "리액트, 파이어베이스, Context API로 구현한 아마존 이커머스 웹사이트. 로그인, 로그아웃, 장바구니 담기 및 스트라이프 결제 기능 구현",
        image_path: "/images/amazon.png",
        github_url:"https://github.com/phj9020/amazon-clone",
        deployed_url: "https://clone-f8fa9.web.app",
        category:["All","React"],
        key_stacks: ["react.js", "firebase-auth", "firestore", "stripe-payment", "styled-components", "context API"]
    },
    {
        id:2,
        name: "디즈니 플러스 클론",
        description: "리액트, 파이어베이스와 리덕스로 구현한 디즈니 플러스 웹사이트",
        image_path: "/images/disney.png",
        github_url:"https://github.com/phj9020/disney-clone",
        deployed_url: "https://disney-clone-6f652.web.app",
        category:["All","React"],
        key_stacks: ["react.js", "firebase-auth", "firestore", "styled-components", "redux"]
    },
    {
        id:3,
        name: "유튜브 클론",
        description: "express와 pug템플릿으로 구현한 유튜브 웹사이트, MVC패턴을 이용한 CRUD 구현",
        image_path: "/images/youtube.png",
        github_url:"https://github.com/phj9020/youtube-reloaded",
        deployed_url: "https://wetube-reload.herokuapp.com/",
        category:["All","Express"],
        key_stacks: ["node.js", "express.js", "pug", "scss", "webpack", "mongoDB", "mvc"]
    },
    {
        id:4,
        name: "무비 타임",
        description: "최신 영화 및 TV드라마 정보를 볼 수 있는 앱. TMDb 영화 API와 expo로 구현한 movie-time 어플리케이션",
        image_path: "/images/movie-native.png",
        github_url:"https://github.com/phj9020/movies-native",
        deployed_url: "https://play.google.com/store/apps/details?id=com.phj9020.movietime",
        category:["All","Expo"],
        key_stacks: ["expo", "react-native", "styled-components", "TMDb API"]
    },
    {
        id:5,
        name: "HJP 채널 슬랙 채팅방",
        description: "리액트와 파이어베이스로 구현한 Slack 채팅 앱",
        image_path: "/images/slack.png",
        github_url:"https://github.com/phj9020/slack-clone",
        deployed_url: "https://slack-clone-redux-c4dfa.web.app/#/",
        category:["All","React"],
        key_stacks: ["react.js", "firebase-auth", "firestore", "firebase-hosting", "redux", "material-ui"]
    },
    {
        id:6,
        name: "Hulu 클론",
        description: "next.js와 tailwind Css, TMDb 영화 API로 구현한 반응형 Hulu 웹사이트",
        image_path: "/images/hulu.png",
        github_url:"https://github.com/phj9020/next-hulu",
        deployed_url: "https://next-hulu-one.vercel.app/",
        category:["All","Next"],
        key_stacks: ["next.js", "tailwind CSS", "TMDb API"]
    },
    {
        id:7,
        name: "소셜미디어 앱(클라이언트)",
        description: "포스트로 생각을 공유하는 소셜 미디어 앱",
        image_path: "/images/socialMedia_client.png",
        github_url:"https://github.com/phj9020/phj9020-socialMedia-merng-client",
        deployed_url: "https://6108ff3d036a2900089b0f80--practical-kalam-b3d878.netlify.app",
        category:["All","React"],
        key_stacks: ["react.js", "apollo-client", "graphQL", "semantic-ui"]
    },
    {
        id:8,
        name: "소셜미디어 앱(백엔드)",
        description: "데이터베이스(MongoDB)에 기반한 로그인, 로그아웃, 포스트 생성 및 삭제, 댓글생성 및 삭제, 좋아요 토글 기능 구현",
        image_path: "/images/socialMedia_back.png",
        github_url:"https://github.com/phj9020/socialMedia-merng-backend",
        deployed_url: "https://social-media-app-merng.herokuapp.com/graphql",
        category:["All","Express"],
        key_stacks: ["node.js","express.js", "apollo-server", "graphQL", "mongoDB"]
    },
    {
        id:9,
        name: "트위터 클론",
        description: "리액트, 파이어베이스로 구현한 트위터 웹사이트 클론",
        image_path: "/images/twitter.png",
        github_url:"https://github.com/phj9020/twitter-clone",
        deployed_url: "https://phj9020.github.io/twitter-clone",
        category:["All","React"],
        key_stacks: ["react.js", "firebase-auth", "firebase-storage", "firestore"]
    },
]