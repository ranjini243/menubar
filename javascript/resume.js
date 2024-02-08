class Resume {
    constructor(name, age, education, experience, skills) {
        this.name = name;
        this.age = age;
        this.education = education;
        this.experience = experience;
        this.skills = skills;
    }

    final_resume() {
        console.log(`Name: ${this.name}`);
        console.log(`Age: ${this.age}`);
        console.log(`Education: ${this.education}`);
        console.log(`Experience: ${this.experience}`);
        console.log(`Skills: ${this.skills.join(', ')}`);
    }
}

const myResume = new Resume(
    'Ranjini Gupta',
    24,
    "Bachelor's degree in Computer Science",
    'Some experience details',
    ['JavaScript', 'HTML', 'CSS', 'React']
);

myResume.final_resume();
