import Employee from "../lib/Employee.js";


const name="John", id=1, email='test@test.com', office=1 ;
const e = new Employee(name,id,email);
const type = Employee;

test('Testing for object', ()=>expect(type).toBe(Employee));
test('Testing the getName method', ()=>expect(e.getName()).toBe(name));
test('Testing the getId method', ()=>expect(e.getId()).toBe(id));
test('Testing the getEmail method', ()=>expect(e.getEmail()).toBe(email));
test('Testing the getRole method', ()=>expect(e.getRole()).toBe('Employee'));