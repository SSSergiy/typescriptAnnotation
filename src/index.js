var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var PreHiredEmployee = /** @class */ (function () {
    function PreHiredEmployee(firstName, lastName, bankAccountNumber) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.bankAccountNumber = bankAccountNumber;
    }
    return PreHiredEmployee;
}());
var Employee = /** @class */ (function () {
    function Employee(firstName, lastName, paymentInfo, salary, status, department) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.paymentInfo = paymentInfo;
        this.salary = salary;
        this.status = status;
        this.department = department;
    }
    return Employee;
}());
var Department = /** @class */ (function () {
    function Department(name, domain, budget) {
        this.name = name;
        this.domain = domain;
        this.budget = budget;
        this.balance = 0;
        this.employees = [];
    }
    Department.prototype.calculateBalance = function () {
        return this.balance + this.budget.debit - this.budget.credit;
    };
    Department.prototype.addPreHiredEmployee = function (preHiredEmployee) {
        if (this.isEmployee(preHiredEmployee)) {
            var employee_1 = this.convertToEmployee(preHiredEmployee);
            this.addEmployee(employee_1);
        }
        else {
            throw new Error('Error: object is not a type Employee.');
        }
    };
    Department.prototype.addEmployee = function (employee) {
        this.employees.push(employee);
        this.subtractFromBalance(employee.salary);
    };
    Department.prototype.removeEmployee = function (employee) {
        if (!this.isEmployeeActive(employee)) {
            throw new Error('Error: object Employee inactive.');
        }
        var index = this.employees.indexOf(employee);
        if (index !== -1) {
            this.employees.splice(index, 1);
            this.balance += employee.salary;
        }
    };
    // Protected method to access employees
    Department.prototype.getEmployees = function () {
        return this.employees;
    };
    // Protected method to subtract from the balance
    Department.prototype.subtractFromBalance = function (amount) {
        this.balance -= amount;
    };
    // Method to convert PreHiredEmployee to Employee
    Department.prototype.convertToEmployee = function (preHiredEmployee) {
        var employee = new Employee(preHiredEmployee.firstName, preHiredEmployee.lastName, '', 0, 'active', this);
        this.addEmployee(employee);
        return employee;
    };
    Department.prototype.isEmployeeActive = function (employee) {
        return employee.status === 'active';
    };
    Department.prototype.isEmployee = function (employee) {
        return employee.paymentInfo !== undefined;
    };
    return Department;
}());
var AccountingDepartment = /** @class */ (function (_super) {
    __extends(AccountingDepartment, _super);
    function AccountingDepartment() {
        return _super.call(this, 'ACCOUNTING', 'accounting', { debit: 0, credit: 0 }) || this;
    }
    AccountingDepartment.prototype.paySalaries = function () {
        var _this = this;
        this.getEmployees().forEach(function (employee) {
            if (employee.status === 'active') {
                _this.subtractFromBalance(employee.salary);
                // Your code to pay the employee's salary
            }
        });
    };
    return AccountingDepartment;
}(Department));
var Company = /** @class */ (function () {
    function Company(name) {
        this.name = name;
        this.departments = [];
        this.employees = [];
    }
    Company.prototype.addDepartment = function (department) {
        this.departments.push(department);
    };
    Company.prototype.addEmployee = function (employee) {
        this.employees.push(employee);
    };
    return Company;
}());

// Example usage
var company = new Company('My company');
var accounting = new AccountingDepartment();
var itDepartment = new Department('IT', 'it', { debit: 10000, credit: 5000 });
company.addDepartment(accounting);
company.addDepartment(itDepartment);
var preHiredEmployee = new PreHiredEmployee('Donald', 'Moriarty', '1234567890');
var employee = itDepartment.convertToEmployee(preHiredEmployee);
company.addEmployee(employee);
console.log('IT department balance sheet:', itDepartment.calculateBalance());
console.log('Salaries of all staff before payment:', accounting.calculateBalance());
accounting.paySalaries();
console.log('Salary of all staff:', accounting.calculateBalance());
