class School {
  // implement 'add area', 'remove area', 'add lecturer', and 'remove lecturer' methods

  private _areas:Area[] = [];
  private _lecturers = []; // Name, surname, position, company, experience, courses, contacts

  get areas() {
    this._areas;
  }

  get lecturers() {
    this._lecturers;
  }
}

class Area {
  // implement getters for fields and 'add/remove level' methods
  _levels = [];
  _name;

  constructor(name:string) {
    this._name = name;
  }
}

class Level {
  // implement getters for fields and 'add/remove group' methods

  private _groups:Group[];
  
  private _description: string;
  name: string;

  constructor(name:string, description:string) {
    this.name = name;
    this._description = description;
  }
}

class Group {
  // implement getters for fields and 'add/remove student' and 'set status' methods
  directionName: string;
  levelName: string;
  _area;
  _status;
  private _students:Student[] = []; // Modify the array so that it has a valid toSorted method*

  constructor(directionName:string, levelName:string) {
    this.directionName = directionName;
    this.levelName = levelName;
  }

  showPerformance():Student[] {
    const sortedStudents = this._students.toSorted((a, b):number => b.getPerformanceRating() - a.getPerformanceRating());
    return sortedStudents;
  }
}

class Student {
  // implement 'set grade' and 'set visit' methods

  private _firstName:string;
  private _lastName:string;
  private _birthYear:number;
  private _grades = []; // workName: mark
  private _visits = []; // lesson: present

  constructor(firstName:string, lastName:string, birthYear:number) {
    this._firstName = firstName;
    this._lastName = lastName;
    this._birthYear = birthYear;
  }

  get fullName():string {
    return `${this._lastName} ${this._firstName}`;
  }

  set fullName(value):void {
    [this._lastName, this._firstName] = value.split(' ');
  }

  get age():number {
    return new Date().getFullYear() - this._birthYear;
  }

  getPerformanceRating():number {
    const gradeValues = Object.values(this._grades);

    if (!gradeValues.length) return 0;

    const averageGrade = gradeValues.reduce((sum, grade):number => sum + grade, 0) / gradeValues.length;
    const attendancePercentage = (this._visits.filter(present => present).length / this._visits.length) * 100;

    return (averageGrade + attendancePercentage) / 2;
  }
}