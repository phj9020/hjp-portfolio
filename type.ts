import { IconType } from 'react-icons';

export interface IService {
    id: number;
    title: string;
    description: string;
    Icon: IconType
}

export interface ISKill {
    id: number,
    name: string,
    level: string,
    Icon: IconType
}