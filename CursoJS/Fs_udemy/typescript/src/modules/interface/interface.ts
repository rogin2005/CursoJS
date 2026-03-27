export const bootstrap = (): void => {
    interface Resume {
        fullName: string;
        email: string;
        skills: Skill[];
        addSkill?: (skill: Skill) => boolean;
    }

    interface Skill {
        name: string;
        level: 'beginner' | 'intermediate' | 'advanced';
    }

    const MyResume: Resume = {
        fullName: 'Roger Ferreira',
        email: 'rogerrandom123@gmail.com',
        skills: [
            { name: 'Javascript', level: 'advanced' },
            { name: 'Typescript', level: 'advanced' },
        ],
    };

    console.log(MyResume);
};
