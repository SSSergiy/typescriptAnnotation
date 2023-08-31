class School {
  directions = [];

  addDirection(direction: never): void {
    this.directions.push(direction);
  }
}

class Direction {
  levels: never[];
  private _name: string;

  get name(): string {
    return this._name;
  }

  constructor(name: string) {
    this._name = name;
    this.levels = [];
  }

  addLevel(level: never): void {
    this.levels.push(level);
  }
}

class Level {
  private _name: string;
  private _program: string;
  groups: never[];

  constructor(name: string, program: string) {
    this._name = name;
    this._program = program;
    this.groups = [];
  }

  get name(): string {
    return this._name;
  }

  get program(): string {
    return this._program;
  }

  addGroup(group: never): void {
    this.groups.push(group);
  }
}

class Group {
  private _students: never[];
  directionName: string;
  levelName: string;

  constructor(directionName: string, levelName: string) {
    this.directionName = directionName;
    this.levelName = levelName;
    this._students = [];
  }
  get students(): never[] {
    return this._students;
  }

  addStudent(student: never): void {
    this._students.push(student);
  }

  showPerformance(): never[] {
    const sortedStudents = this.students.toSorted(
      (a, b) => b.getPerformanceRating() - a.getPerformanceRating()
    );

    return sortedStudents;
  }
}

class Student {
  grades = {};
  attendance = [];
  firstName: string;
  lastName: string;
  birthYear: number;
  constructor(firstName: string, lastName: string, birthYear: number) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthYear = birthYear;
  }

  get fullName(): string {
    return `${this.lastName} ${this.firstName}`;
  }

  set fullName(value: string): void {
    [this.lastName, this.firstName] = value.split(' ');
  }

  get age(): number {
    return new Date().getFullYear() - this.birthYear;
  }

  setGrade(subject: string, grade: string): void {
    this.grades[subject] = grade;
  }

  markAttendance(present: never): void {
    this.attendance.push(present);
  }

  getPerformanceRating(): number {
    const gradeValues: number[] = Object.values(this.grades);

    if (gradeValues.length === 0) return 0;

    const averageGrade =
      gradeValues.reduce((sum, grade): any => sum + grade, 0) /
      gradeValues.length;

    const attendancePercentage =
      (this.attendance.filter((present): never => present).length /
        this.attendance.length) *
      100;

    return (averageGrade + attendancePercentage) / 2;
  }
}
