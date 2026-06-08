import { ReactNode } from 'react';
import { LuBriefcaseBusiness, LuGraduationCap } from 'react-icons/lu';

export type ExperienceItem = {
    id: string;
};

export type ExperienceData = {
    id: string;
    icon: ReactNode;
    technologies?: { name: string; icon: string }[];
};

export const experienceData: ExperienceData[] = [
    {
        id: 'tiendatec',
        icon: <LuBriefcaseBusiness />,
        technologies: [
            {
                name: 'React',
                icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg',
            },
            {
                name: 'PostgreSQL',
                icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg',
            },
            {
                name: 'Node',
                icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg',
            },
            {
                name: 'TypeScript',
                icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-plain.svg',
            },
            {
                name: 'Microsoft SQL Server',
                icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/microsoftsqlserver/microsoftsqlserver-original.svg',
            },
            {
                name: '.NET',
                icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dotnetcore/dotnetcore-original.svg',
            },
            {
                name: 'Git',
                icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg',
            },
            {
                name: 'Go',
                icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/go/go-original-wordmark.svg',
            },
        ],
    },
    {
        id: 'dapper-ci-cd-2025',
        icon: <LuGraduationCap />,
        technologies: [
            {
                name: 'Angular',
                icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angular/angular-original.svg',
            },
            {
                name: 'TypeScript',
                icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-plain.svg',
            },
            {
                name: 'MongoDB',
                icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg',
            },
            {
                name: 'Node',
                icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg',
            },
            {
                name: 'Firebase',
                icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg',
            },
            {
                name: 'Git',
                icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg',
            },
        ],
    },
    {
        id: 'dotnet-dev-systems',
        icon: <LuGraduationCap />,
        technologies: [
            {
                name: 'React',
                icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg',
            },
            {
                name: 'Node',
                icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg',
            },
            {
                name: 'TypeScript',
                icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-plain.svg',
            },
            {
                name: 'Microsoft Azure',
                icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azure/azure-original.svg',
            },
            {
                name: 'Azure DevOps',
                icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuredevops/azuredevops-original.svg',
            },
            {
                name: 'Git',
                icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg',
            },
        ],
    },
    {
        id: 'dapper-fullstack-2021',
        icon: <LuBriefcaseBusiness />,
        technologies: [
            {
                name: 'Angular',
                icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angular/angular-original.svg',
            },
            {
                name: 'TypeScript',
                icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-plain.svg',
            },
            {
                name: 'MongoDB',
                icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg',
            },
            {
                name: 'Node',
                icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg',
            },
            {
                name: 'Firebase',
                icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg',
            },
            {
                name: 'Git',
                icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg',
            },
            {
                name: 'Flutter',
                icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg',
            },
        ],
    },
];
