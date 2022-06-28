class Employee {
    constructor(name,id,email){
        this.id = id;
        this.name = name;
        this.email = email;
    };

    getId = () => this.id;
    getName = () => this.name;
    getEmail = () => this.email;
    getRole = () => 'Employee';
};

export default Employee;