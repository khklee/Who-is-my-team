const Employee = require('../lib/Employee');

test("get the employee's object: name, id, and email", () => {
    const employee = new Employee('John', '12345', 'email@gmail.com');

    expect(employee.name).toBe('John');
    expect(employee.id).toBe('12345');
    expect(employee.email).toBe('email@gmail.com');
})