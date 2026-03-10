type Salary = number | string;

type Programmer = {
    name: string;
    age?: number;
    skills?: string[];
    contact: { email: string; phone: string };
    salary?: Salary;
};

export function showProgrammer(programmer: Programmer) {
    console.log(programmer);
}

showProgrammer({
    name: 'Carlos',
    skills: ['PHP'],
    contact: { email: 'userprogram.com', phone: '40028922' },
    salary: 2340,
});
