enum Position {
  Professor = 'Professor',
  AssociateProfessor = 'Associate Professor',
  AssistantProfessor = 'Assistant Professor',
  Lecturer = 'Lecturer',
}

type Lecturer = {
  name: string;
  surname: string;
  position: Position;
  company: string;
  experience: number;
  courses: string[];
  contacts: string[];
}

class School {
  // implement 'add area', 'remove area', 'add lecturer', and 'remove lecturer' methods

  private _areas: Area[] = [];
  private _lecturers: Lecturer[] = []; // Name, surname, position, company, experience, courses, contacts

  get areas(): Area[] {
     return this._areas;
  }

  get lecturers(): Lecturer[] {
    return this._lecturers;
  }

  addArea(area:Area): void {
    this._areas.push(area)
  }

  removeArea(areaName: string): void {
    this._areas = this._areas.filter(
      (area): boolean => area.name !== areaName
    );
  }

  addLecturer(lecturer: Lecturer): void {
    this._lecturers.push(lecturer);
  }

  removeLecturer(lecturerName: string): void {
    this._lecturers = this._lecturers.filter(
      (lecturer): boolean => lecturer.name !== lecturerName
    );
  }
}

class Area {
  // implement getters for fields and 'add/remove level' methods
  private _levels: Level[] = [];
  private _name: string;

  constructor(name: string) {
    this._name = name;
  }

  get levels(): Level[] {
    return this._levels;
  }

  get name(): string {
    return this._name;
  }

  addLevel(level: Level): void {
    this._levels.push(level)
  }

  removeLevel(levelName: string): void {
    this._levels = this._levels.filter(
      (filterLevel): boolean => filterLevel.name !== levelName
    );
  }

}

class Level {
  // implement getters for fields and 'add/remove group' methods
  private _groups: Group[] = [];
  private _name!: never;
  private _description: string;
  public name: string;

  constructor(name: string, description: string) {
    this.name = name;
    this._description = description;
  }

  get groups(): Group[]  {
    return this._groups;
  }
 
  get description(): string {
    return this._description;
  }

  addGroups(group: Group): void {
    this._groups.push(group)
  }

  removeGroups(groupName: string): void {
    this._groups = this._groups.filter(
      (filterGroup): boolean => filterGroup.directionName !== groupName
    );
  }
}

enum Status {
  ACTIVE = "Active",
  INACTIVE = "Inactive",
  GRADUATED = "Graduated",
}

class Group {
  // implement getters for fields and 'add/remove student' and 'set status' methods
  directionName;
  levelName;
  private _area: Area[] = [];
  private _status;
  private _students: Student[] = []; // Modify the array so that it has a valid toSorted method*

  constructor(directionName: string, levelName: string) {
    this.directionName = directionName;
    this.levelName = levelName;
    this._status = Status.ACTIVE;
  }

  addStudent(student: Student ): void {
    this._students.push(student)
  }

  removeStudent(studentName: string): void {
    this._students = this._students.filter(
      (student) => student.fullName !== studentName
    );
  }

  get area(): Area[] {
    return this._area;
  }

  get status(): Status {
    return this._status;
  }

  get students(): Student[] {
    return this._students;
  }

  setStatus(status: Status): void {
    if (Object.values(Status).includes(status)) {
      this._status = status;
    } else {
      console.error("Invalid status");
    }
  }

  showPerformance(): Student[] {
    const sortedStudents = this._students.toSorted(
      (a, b): number => b.getPerformanceRating() - a.getPerformanceRating()
    );
    return sortedStudents;
  }
}



enum Attendance {
  Present = 'Present',
  Absent = 'Absent',
}

class Student {
  // implement 'set grade' and 'set visit' methods
 
  private _firstName: string;
  private _lastName: string;
  private _birthYear: number;
  private _grades: number[] = [];
  private _visits: { lesson: string; attendance: Attendance }[] = [];

  constructor(firstName:string, lastName:string, birthYear:number) {
    this._firstName = firstName;
    this._lastName = lastName;
    this._birthYear = birthYear;
  }

  getPerformanceRating(): number {
    const gradeValues = Object.values(this._grades);

    if (!gradeValues.length) return 0;
    const averageGrade = gradeValues.reduce(
      (sum, grade): number => sum + grade, 0) / gradeValues.length;

    const attendancePercentage = (this._visits.filter(present => present).length / this._visits.length) * 100;

    return (averageGrade + attendancePercentage) / 2;
  }
  setVisit(lesson: string, attendance: Attendance): void {
    this._visits.push(
      { lesson, attendance }
    );
  }

  setGrade(grade: number): void {
    if (grade < 0 && grade > 100) {
      throw new Error('The score must be a number between 0 and 100.');
    }

    this._grades.push(grade);
  }

  get fullName(): string {
    return `${this._lastName} ${this._firstName}`;
  }

  set fullName(value) {
    [this._lastName, this._firstName] = value.split(' ');
  }

  get age(): number {
    return new Date().getFullYear() - this._birthYear;
  }

}