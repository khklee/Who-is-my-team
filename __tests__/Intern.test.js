const Intern = require('../lib/Intern');

test("get the intern's object: name, id, email and school", () => {
    const intern = new Intern('John', '12345', 'email@gmail.com', 'university');

    expect(intern.name).toBe('John');
    expect(intern.id).toBe('12345');
    expect(intern.email).toBe('email@gmail.com');
    expect(intern.school).toBe('university');

})