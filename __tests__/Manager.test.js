const Manager = require('../lib/Manager');

test("get the manager's object: name, id, email and office number", () => {
    const manager = new Manager('John', '12345', 'email@gmail.com', '000-000-0000');

    expect(manager.name).toBe('John');
    expect(manager.id).toBe('12345');
    expect(manager.email).toBe('email@gmail.com');
    expect(manager.officeNumber).toBe('000-000-0000');

});

test("get the team's office number", () => {
    const manager = new Manager('John', '12345', 'email@gmail.com', '000-000-0000');

    expect(manager.getOfficeNumber()).toBe('000-000-0000');
})

test("get the manager's role", () => {
    const manager = new Manager('John', '12345', 'email@gmail.com', '000-000-0000');

    expect(manager.getRole()).toBe('Manager');
})