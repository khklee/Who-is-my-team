const Employee = require('../lib/Employee');

test("get the employee's object: name, id, and email", () => {
    const employee = new Employee('John', '12345', 'email@gmail.com');

    expect(employee.name).toBe('John');
    expect(employee.id).toBe('12345');
    expect(employee.email).toBe('email@gmail.com');
})

test("get the employee's name", () => {
    const employee = new Employee('John', '12345', 'email@gmail.com');

    expect(employee.getName()).toBe('John');
})

test("get the employee's id", () => {
    const employee = new Employee('John', '12345', 'email@gmail.com');

    expect(employee.getId()).toBe('12345');
})

test("get the employee's email", () => {
    const employee = new Employee('John', '12345', 'email@gmail.com');

    expect(employee.getEmail()).toBe('email@gmail.com');
})

test("get the employee's role", () => {
    const employee = new Employee('John', '12345', 'email@gmail.com');

    expect(employee.getRole()).toBe('Employee');
})