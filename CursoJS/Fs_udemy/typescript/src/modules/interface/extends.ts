export const bootstrap = (): void => {
    interface PersonalInfo {
        fullName: string;
        email: string;
        dateOfBirth?: Date;
        sumary?: string;
    }

    interface Resume extends PersonalInfo, Theme {
        skills: Skill[];
        addSkill: (skill: Skill) => boolean;
    }

    interface Skill {
        name: string;
        level: 'beginner' | 'intermediate' | 'advanced';
    }

    type Font = 'roboto' | 'open sans' | 'poppins';
    type ColorScheme = 'light' | 'dark';
    type Layout = 'one-column' | 'two-column';

    interface Theme {
        font: Font;
        colorScheme: ColorScheme;
        layout: Layout;
    }

    class MyResume implements Resume {
        constructor(
            public fullName: string,
            public email: string,
            public skills: Skill[],
            public font: Font,
            public colorScheme: ColorScheme,
            public layout: Layout,
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
        'poppins',
        'light',
        'two-column',
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
