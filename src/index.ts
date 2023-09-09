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
    public status: 'активний' | 'неактивний' | 'у неоплачуваній відпустці',
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

  addEmployee(employee: Employee): void {
    this.employees.push(employee);
    this.balance -= employee.salary;
  }

  removeEmployee(employee: Employee): void {
    const index = this.employees.indexOf(employee);
    if (index !== -1) {
      this.employees.splice(index, 1);
      this.balance += employee.salary;
    }
  }

  // Protected method to access employees
  protected getEmployees(): Employee[] {
    return this.employees;
  }

  // Protected method to subtract from the balance
  protected subtractFromBalance(amount: number): void {
    this.balance -= amount;
  }

  // Method to convert PreHiredEmployee to Employee
  convertToEmployee(preHiredEmployee: PreHiredEmployee): Employee {
    const employee = new Employee(preHiredEmployee.firstName, preHiredEmployee.lastName, '', 0, 'активний', this);
    this.addEmployee(employee);
    return employee;
  }
}

class AccountingDepartment extends Department {
  constructor() {
    super('Бухгалтерія', 'accounting', { debit: 0, credit: 0 });
  }

  paySalaries(): void {
    this.getEmployees().forEach((employee): void => {
      if (employee.status === 'активний') {
        this.subtractFromBalance(employee.salary);
        // Your code to pay the employee's salary
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

// Example usage
const company = new Company('Моя Компанія');
const accounting = new AccountingDepartment();
const itDepartment = new Department('IT', 'it', { debit: 10000, credit: 5000 });

company.addDepartment(accounting);
company.addDepartment(itDepartment);

const preHiredEmployee = new PreHiredEmployee('Ім\'я', 'Прізвище', '1234567890');
const employee = itDepartment.convertToEmployee(preHiredEmployee);
company.addEmployee(employee);

console.log('Баланс IT-департаменту:', itDepartment.calculateBalance());
console.log('Зарплата всього персоналу до виплати:', accounting.calculateBalance());

accounting.paySalaries();

console.log('Зарплата всього персоналу після виплати:', accounting.calculateBalance());