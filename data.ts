import {RiComputerFill, RiDatabase2Fill} from 'react-icons/ri';
import {AiFillMobile} from 'react-icons/ai'
import {GrDeploy} from 'react-icons/gr';
import { IService } from './type';



export const services:IService[] = [
    {   
        id:1,
        title: "Frontend Development",
        description: "<b>HTML, CSS, JavaScript, React.js</b>를 이용한 SPA 웹페이지 제작 가능",
        Icon: RiComputerFill
    },
    {
        id:2,
        title: "Backend Development",
        description: "<b>Node.js, Express.js, apollo-server</b>를 이용한 서버 구현 및 DB연결 및 기능 개발",
        Icon: RiDatabase2Fill
    },
    {
        id:3,
        title: "App Development",
        description: "<b>Expo</b>를 이용한 react 앱 개발",
        Icon: AiFillMobile
    },
    {
        id:4,
        title: "Deployment",
        description: "Heroku, Netlify, firebase 등을 이용한 프론트, 백엔드 배포",
        Icon: GrDeploy
    },

];