export const bootstrap = (): void => {
    type Font = 'roboto' | 'open sans' | 'poppins';
    type ColorScheme = 'light' | 'dark';
    type Layout = 'one-column' | 'two-column';

    class MyResume implements Resume {
        constructor(
            public fullName: string,
            public email: string,
            public skills: Skill[],
            public font: Font,
            public colorScheme: ColorScheme,
            public layout: Layout,
            public dateOfBirth: Date,
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
        new Date('2003-01-03'),
    );

    myResume.addSkill({ name: 'Javascript', level: 'advanced' });
    myResume.addSkill({ name: 'Typescript', level: 'advanced' });
    console.log(myResume);
};
