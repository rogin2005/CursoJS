export const bootstrap = (): void => {
    interface Resume {
        fullName: string;
        email: string;
        skills: Skill[];
        addSkill: (skill: Skill) => boolean;
    }

    interface Skill {
        name: string;
        level: 'beginner' | 'intermediate' | 'advanced';
    }

    class MyResume implements Resume {
        constructor(
            public fullName: string,
            public email: string,
            public skills: Skill[],
        ) {}

        addSkill(skill: Skill): boolean {
            const initialLength = this.skills.length;
            this.skills.push(skill);

            return this.skills.length > initialLength;
        }
    }

    const myResume = new MyResume(
        'Roger Ferreira',
        'uwerghggewrg@gmail.com',
        [],
    );

    myResume.addSkill({ name: 'Javascript', level: 'advanced' });
    myResume.addSkill({ name: 'Typescript', level: 'advanced' });
    console.log(myResume);

    /*
    const MyResume: Resume = {
        fullName: 'Roger Ferreira',
        email: 'rogerrandom123@gmail.com',
        skills: [
            { name: 'Javascript', level: 'advanced' },
            { name: 'Typescript', level: 'advanced' },
        ],
    };

    console.log(MyResume);
    */
};
