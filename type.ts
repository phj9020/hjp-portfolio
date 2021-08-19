import React from 'react';
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

export type Category = "All" | "React" | "Expo" | "Next" | "Express";

export interface IProject {
    id: number,
    name: string,
    description: string,
    image_path: string,
    github_url: string,
    category: Category[],
    key_stacks: string[],
}
