class PreHiredEmployee {
  constructor(
    public firstName: string,
    public lastName: string,
    public bankAccountNumber: string
  ) { }
}

class Employee {
  constructor(
    public firstName: string,
    public lastName: string,
    public paymentInfo: string,
    public salary: number,
    public status: 'active' | 'inactive' | 'On unpaid leave',
    public department: Department
  ) {}
}

class Department {
  protected balance: number = 0;
  protected employees: Employee[] = [];

  constructor(
    public name: string,
    public domain: string,
    public budget: {
      debit: number
      credit: number
    }
  ) { }

  calculateBalance(): number {
    return this.balance + this.budget.debit - this.budget.credit;
  }

  addPreHiredEmployee(preHiredEmployee: PreHiredEmployee): void {
    this.assertEmployee(preHiredEmployee);
    const employee = this.convertToEmployee(preHiredEmployee);
    this.addEmployee(employee);
  }

  addEmployee(employee: Employee): void {
    this.employees.push(employee);
    this.subtractFromBalance(employee.salary);
  }

  removeEmployee(employee: Employee): void {
    this.assertEmployeeActive(employee);

    const index = this.employees.indexOf(employee);
    if (index !== -1) {
      this.employees.splice(index, 1);
      this.balance += employee.salary;
    }
  }

  protected getEmployees(): Employee[] {
    return this.employees;
  }

  protected subtractFromBalance(amount: number): void {
    this.balance -= amount;
  }

  convertToEmployee(preHiredEmployee: PreHiredEmployee): Employee {
    const employee = new Employee(
      preHiredEmployee.firstName,
      preHiredEmployee.lastName,
      '',
      0,
      'active',
      this
    );
    this.addEmployee(employee);
    return employee;
  }

  assertEmployeeActive(employee: Employee): asserts employee is Employee {
    if (employee.status !== 'active') {
      throw new Error('Error: object Employee inactive.');
    }
  }

  assertEmployee(employee: Employee | PreHiredEmployee): asserts employee is Employee {
    if (!(employee as Employee).paymentInfo) {
      throw new Error('Error: object is not a type Employee.');
    }
  }
}

class AccountingDepartment extends Department {
  constructor() {
    super('ACCOUNTING', 'accounting', { debit: 0, credit: 0 });
  }

  paySalaries(): void {
    this.getEmployees().forEach((employee): void => {
      if (employee.status === 'active') {
        this.subtractFromBalance(employee.salary);
      }
    });
  }
}

class Company {
  private departments: Department[] = [];
  private employees: (Employee | PreHiredEmployee)[] = [];

  constructor(public name: string) {}

  addDepartment(department: Department): void {
    this.departments.push(department);
  }

  addEmployee(employee: Employee | PreHiredEmployee): void {
    this.employees.push(employee);
  }
}

const company = new Company('My company');
const accounting = new AccountingDepartment();
const itDepartment = new Department('IT', 'it', { debit: 10000, credit: 5000 });

company.addDepartment(accounting);
company.addDepartment(itDepartment);

const preHiredEmployee = new PreHiredEmployee('Donald', 'Moriarty', '1234567890');
const employee = itDepartment.convertToEmployee(preHiredEmployee);
company.addEmployee(employee);

console.log('IT department balance sheet:', itDepartment.calculateBalance());
console.log('Salaries of all staff before payment:', accounting.calculateBalance());

accounting.paySalaries();

console.log('Salary of all staff:', accounting.calculateBalance());






