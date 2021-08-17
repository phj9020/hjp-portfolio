import {AiOutlineMobile, AiOutlineDeploymentUnit,AiOutlineDatabase} from 'react-icons/ai'
import { IService } from './type';
import {FiMonitor, FiFigma} from 'react-icons/fi';


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
        description: "<b>Node.js, Express.js, apollo-server</b>를 이용한 서버 구현, MongoDB, PostgreSQL 와 연동 및 기능 구현 경험 있음",
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
        description: "<b>Heroku, Netlify, firebase</b> 등을 이용한 프론트, 백엔드 배포",
        Icon: AiOutlineDeploymentUnit
    },
    {
        id:5,
        title: "Design",
        description: "<b>Figma</b>를 이용한 UI/UX 디자인 및 와이어프레임 제작",
        Icon: FiFigma
    },
];