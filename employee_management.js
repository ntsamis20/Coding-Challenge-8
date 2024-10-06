// Create departments
const engineering = new Department("Engineering");
const marketing = new Department("Marketing");

// Create employees
const Wade = new Employee("Wade", 80000, "Developer", "Engineering");
const paul = new Employee("Paul", 75000, "Designer", "Marketing");
const clark = new Manager("Clark", 120000, "Engineering Manager", "Engineering", 20000);
const diana = new Manager("Diana", 130000, "Marketing Manager", "Marketing", 25000);

// Add employees to departments
engineering.addEmployee(Wade);
engineering.addEmployee(clark);
marketing.addEmployee(paul);
marketing.addEmployee(diana);

// Calculate total salary for each department
console.log(`Total salary for Engineering: $${engineering.getDepartmentSalary()}`);
console.log(`Total salary with bonuses for Engineering: $${engineering.calculateTotalSalaryWithBonus()}`);
console.log(`Total salary for Marketing: $${marketing.getDepartmentSalary()}`);
console.log(`Total salary with bonuses for Marketing: $${marketing.calculateTotalSalaryWithBonus()}`);

//Task 2 Create department Class

class Employee {
    constructor(name, salary) {
      this.name = name;
      this.salary = salary;
    }
  }
  
  class Department {
    constructor(name) {
      this.name = name;
      this.employees = []; 
    }
  
    addEmployee(employee) {
      this.employees.push(employee);
    }
  
    getDepartmentSalary() {
      return this.employees.reduce((total, employee) => total + employee.salary, 0);
    }
  }
  
  const dept = new Department('Engineering');
  const emp1 = new Employee('Wade', 50000);
  const emp2 = new Employee('Paul', 60000);
  
  dept.addEmployee(emp1);
  dept.addEmployee(emp2);
  
  console.log(dept.getDepartmentSalary());
  
  //Task 3 Create a Manager Class that Inherits from Employee

class Employee {
    constructor(name, salary) {
      this.name = name;
      this.salary = salary;
    }
  
    getDetails() {
      return `Name: ${this.name}, Salary: ${this.salary}`;
    }
  }

  class Manager extends Employee {
    constructor(name, salary, bonus) {
      super(name, salary); 
      this.bonus = bonus;   
    }
  
    getDetails() {
      return `${super.getDetails()}, Bonus: ${this.bonus}`;
    }
  }
  
  const manager1 = new Manager('Paul', 80000, 10000);
  console.log(manager1.getDetails()); 

  //Task 4 Handle Bonuses for Managers

class Employee {
    constructor(name, salary) {
      this.name = name;
      this.salary = salary;
    }
  
    getDetails() {
      return `Name: ${this.name}, Salary: ${this.salary}`;
    }
  }
  
  class Manager extends Employee {
    constructor(name, salary, bonus) {
      super(name, salary); 
      this.bonus = bonus;  
    }
  
    getDetails() {
      return `${super.getDetails()}, Bonus: ${this.bonus}`;
    }
  }
  
  class Department {
    constructor(name) {
      this.name = name;
      this.employees = [];
    }
  
    addEmployee(employee) {
      this.employees.push(employee);
    }
  
    getDepartmentSalary() {
      return this.employees.reduce((total, employee) => total + employee.salary, 0);
    }
  
    calculateTotalSalaryWithBonus() {
      return this.employees.reduce((total, employee) => {
        if (employee instanceof Manager) {
          return total + employee.salary + employee.bonus;
        } else {
          return total + employee.salary;
        }
      }, 0);
    }
  }
  
  dept.addEmployee(emp1);
  dept.addEmployee(emp2);
  
  console.log(dept.getDepartmentSalary());
  console.log(dept.calculateTotalSalaryWithBonus());
  
  // Task 5 Create and Manage Departments and Employees

class Employee {
    constructor(name, salary) {
      this.name = name;
      this.salary = salary;
    }
  
    getDetails() {
      return `Name: ${this.name}, Salary: ${this.salary}`;
    }
  }
  
  class Manager extends Employee {
    constructor(name, salary, bonus) {
      super(name, salary);
      this.bonus = bonus;
    }
  
    getDetails() {
      return `${super.getDetails()}, Bonus: ${this.bonus}`;
    }
  }
  
  class Department {
    constructor(name) {
      this.name = name;
      this.employees = [];
    }
  
    addEmployee(employee) {
      this.employees.push(employee);
    }
  
    getDepartmentSalary() {
      return this.employees.reduce((total, employee) => total + employee.salary, 0);
    }
  
    calculateTotalSalaryWithBonus() {
      return this.employees.reduce((total, employee) => {
        if (employee instanceof Manager) {
          return total + employee.salary + employee.bonus;
        } else {
          return total + employee.salary;
        }
      }, 0);
    }
  }
  
  const accounting = new Department('Accounting');
  const sales = new Department('Sales');
  
  const accountant1 = new Employee('Spongebob', 70000);
  const accountant2 = new Employee('Patrick', 50000);
  const accountingManager = new Manager('Krabs', 95000, 15000);
  
  const sales1 = new Employee('Squidward', 75000);
  const sales2 = new Employee('Gary', 45000);
  const salesManager = new Manager('Sandy', 85000, 12000);
  
  accounting.addEmployee(accountant1);
  accounting.addEmployee(accountant22);
  accounting.addEmployee(accountingManagerManager);
  
  sales.addEmployee(sales1);
  sales.addEmployee(sales2);
  sales.addEmployee(salesManager);
  
  console.log(`Total salary for Accounting (without bonuses): ${accounting.getDepartmentSalary()}`);
  console.log(`Total salary for Accounting (with bonuses): ${accounting.calculateTotalSalaryWithBonus()}`);
  
  console.log(`Total salary for Sales (without bonuses): ${sales.getDepartmentSalary()}`);
  console.log(`Total salary for Sales (with bonuses): ${sales.calculateTotalSalaryWithBonus()}`);
  