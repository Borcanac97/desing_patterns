interface Employee {
    getName(): string;
    setSalary(salary: number): void;
    getSalary(): number;
    getRoles(): Array<string>;
  }
  
  class Developer implements Employee {
    protected salary: number;
    protected name: string;
    protected roles: Array<string> = [];
  
    constructor(name: string, salary: number) {
      this.name = name;
      this.salary = salary;
    }
  
    public getName(): string {
      return this.name;
    }
  
    public setSalary(salary: number): void {
      this.salary = salary;
    }
  
    public getSalary(): number {
      return this.salary;
    }
  
    public getRoles(): Array<string> {
      return this.roles;
    }
  }
  
  class Designer implements Employee {
    protected salary: number;
    protected name: string;
    protected roles: Array<string> = [];
  
    constructor(name: string, salary: number) {
      this.name = name;
      this.salary = salary;
    }
    public getName(): string {
      return this.name;
    }
  
    public setSalary(salary: number): void {
      this.salary = salary;
    }
  
    public getSalary(): number {
      return this.salary;
    }
  
    public getRoles(): Array<string> {
      return this.roles;
    }
  }
  class Organization {
    protected employees: Array<Employee> = [];
  
    public addEmployee(employee: Employee) {
      this.employees.push(employee);
    }
  
    public getNetSalaries(): number {
      var netSalary: number = 0;
      this.employees.forEach((employee) => {
        netSalary += employee.getSalary();
      });
      return netSalary;
    }
  }
  export{
    Developer,
    Designer,
    Organization
  }