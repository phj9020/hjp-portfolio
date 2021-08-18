import {AiOutlineMobile, AiOutlineDeploymentUnit,AiOutlineDatabase, AiOutlineGithub} from 'react-icons/ai'
import { IService, ISKill } from './type';
import {FiMonitor, FiFigma, FiFramer} from 'react-icons/fi';
import {DiJavascript1, DiReact, DiVisualstudio} from 'react-icons/di';
import {GrGraphQl} from 'react-icons/gr';
import {SiExpo, SiApollographql, SiMaterialUi} from 'react-icons/si';

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

export const language:ISKill[] = [
    {
        id:1,
        name:"Javascript",
        level:"75%",
        Icon:DiJavascript1
    },
    {
        id:2,
        name:"React.js",
        level:"70%",
        Icon:DiReact
    },
    {
        id:3,
        name:"React Native(expo)",
        level:"60%",
        Icon:SiExpo
    },
    {
        id:4,
        name:"GraphQL",
        level:"65%",
        Icon:GrGraphQl
    },
    {
        id:5,
        name:"Apollo",
        level:"65%",
        Icon:SiApollographql
    },
    {
        id:6,
        name:"Material UI",
        level:"70%",
        Icon:SiMaterialUi
    },
];


export const tools:ISKill[] = [
    {
        id:1,
        name:"Github",
        level:"70%",
        Icon:AiOutlineGithub
    },
    {
        id:2,
        name:"VS Code",
        level:"85%",
        Icon:DiVisualstudio
    },
    {
        id:3,
        name:"Figma",
        level:"70%",
        Icon:FiFigma
    },
    {
        id:4,
        name:"Framer",
        level:"40%",
        Icon:FiFramer
    },
]