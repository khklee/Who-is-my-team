const Engineer = require('../lib/Engineer');

test("get the engineer's object: name, id, email and github", () => {
    const engineer = new Engineer('John', '12345', 'email@gmail.com', 'githubID');

    expect(engineer.name).toBe('John');
    expect(engineer.id).toBe('12345');
    expect(engineer.email).toBe('email@gmail.com');
    expect(engineer.github).toBe('githubID');

})

test("get the engineer's github ID", () => {
    const engineer = new Engineer('John', '12345', 'email@gmail.com','githubID');

    expect(engineer.getGithub()).toBe('githubID');
})

test("get the engineer's role", () => {
    const engineer = new Engineer('John', '12345', 'email@gmail.com', 'githubID');

    expect(engineer.getRole()).toBe('Engineer');
})