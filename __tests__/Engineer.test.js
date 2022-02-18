const Engineer = require('../lib/Engineer');

test("get the engineer's object: name, id, email and github", () => {
    const engineer = new Engineer('John', '12345', 'email@gmail.com', 'githubID');

    expect(engineer.name).toBe('John');
    expect(engineer.id).toBe('12345');
    expect(engineer.email).toBe('email@gmail.com');
    expect(engineer.github).toBe('githubID');

})