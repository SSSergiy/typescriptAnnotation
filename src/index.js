var Position;
(function (Position) {
    Position["Professor"] = "Professor";
    Position["AssociateProfessor"] = "Associate Professor";
    Position["AssistantProfessor"] = "Assistant Professor";
    Position["Lecturer"] = "Lecturer";
})(Position || (Position = {}));
var School = /** @class */ (function () {
    function School() {
        // implement 'add area', 'remove area', 'add lecturer', and 'remove lecturer' methods
        this._areas = [];
        this._lecturers = []; // Name, surname, position, company, experience, courses, contacts
    }
    Object.defineProperty(School.prototype, "areas", {
        get: function () {
            return this._areas;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(School.prototype, "lecturers", {
        get: function () {
            return this._lecturers;
        },
        enumerable: false,
        configurable: true
    });
    School.prototype.addArea = function (area) {
        this._areas.push(area);
    };
    School.prototype.removeArea = function (areaName) {
        this._areas = this._areas.filter(function (area) { return area.name !== areaName; });
    };
    School.prototype.addLecturer = function (lecturer) {
        this._lecturers.push(lecturer);
    };
    School.prototype.removeLecturer = function (lecturerName) {
        this._lecturers = this._lecturers.filter(function (lecturer) { return lecturer.name !== lecturerName; });
    };
    return School;
}());
var Area = /** @class */ (function () {
    function Area(name) {
        // implement getters for fields and 'add/remove level' methods
        this._levels = [];
        this._name = name;
    }
    Object.defineProperty(Area.prototype, "levels", {
        get: function () {
            return this._levels;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Area.prototype, "name", {
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Area.prototype.addLevel = function (level) {
        this._levels.push(level);
    };
    Area.prototype.removeLevel = function (levelName) {
        this._levels = this._levels.filter(function (filterLevel) { return filterLevel.name !== levelName; });
    };
    return Area;
}());
var Level = /** @class */ (function () {
    function Level(name, description) {
        // implement getters for fields and 'add/remove group' methods
        this._groups = [];
        this.name = name;
        this._description = description;
    }
    Object.defineProperty(Level.prototype, "groups", {
        get: function () {
            return this._groups;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Level.prototype, "description", {
        get: function () {
            return this._description;
        },
        enumerable: false,
        configurable: true
    });
    Level.prototype.addGroups = function (group) {
        this._groups.push(group);
    };
    Level.prototype.removeGroups = function (groupName) {
        this._groups = this._groups.filter(function (filterGroup) { return filterGroup.directionName !== groupName; });
    };
    return Level;
}());
var Status;
(function (Status) {
    Status["ACTIVE"] = "Active";
    Status["INACTIVE"] = "Inactive";
    Status["GRADUATED"] = "Graduated";
})(Status || (Status = {}));
var Group = /** @class */ (function () {
    function Group(directionName, levelName) {
        this._area = [];
        this._students = []; // Modify the array so that it has a valid toSorted method*
        this.directionName = directionName;
        this.levelName = levelName;
        this._status = Status.ACTIVE;
    }
    Group.prototype.addStudent = function (student) {
        this._students.push(student);
    };
    Group.prototype.removeStudent = function (studentName) {
        this._students = this._students.filter(function (student) { return student.fullName !== studentName; });
    };
    Object.defineProperty(Group.prototype, "area", {
        get: function () {
            return this._area;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Group.prototype, "status", {
        get: function () {
            return this._status;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Group.prototype, "students", {
        get: function () {
            return this._students;
        },
        enumerable: false,
        configurable: true
    });
    Group.prototype.setStatus = function (status) {
        if (Object.values(Status).includes(status)) {
            this._status = status;
        }
        else {
            console.error("Invalid status");
        }
    };
    Group.prototype.showPerformance = function () {
        var sortedStudents = this._students.toSorted(function (a, b) { return b.getPerformanceRating() - a.getPerformanceRating(); });
        return sortedStudents;
    };
    return Group;
}());
var Attendance;
(function (Attendance) {
    Attendance["Present"] = "Present";
    Attendance["Absent"] = "Absent";
})(Attendance || (Attendance = {}));
var Student = /** @class */ (function () {
    function Student(firstName, lastName, birthYear) {
        this._grades = [];
        this._visits = [];
        this._firstName = firstName;
        this._lastName = lastName;
        this._birthYear = birthYear;
    }
    Student.prototype.getPerformanceRating = function () {
        var gradeValues = Object.values(this._grades);
        if (!gradeValues.length)
            return 0;
        var averageGrade = gradeValues.reduce(function (sum, grade) { return sum + grade; }, 0) / gradeValues.length;
        var attendancePercentage = (this._visits.filter(function (present) { return present; }).length / this._visits.length) * 100;
        return (averageGrade + attendancePercentage) / 2;
    };
    Student.prototype.setVisit = function (lesson, attendance) {
        this._visits.push({ lesson: lesson, attendance: attendance });
    };
    Student.prototype.setGrade = function (grade) {
        if (typeof grade === 'number' && grade >= 0 && grade <= 100) {
            this._grades.push(grade);
        }
        else {
            throw new Error('The score must be a number between 0 and 100.');
        }
    };
    Object.defineProperty(Student.prototype, "fullName", {
        get: function () {
            return "".concat(this._lastName, " ").concat(this._firstName);
        },
        set: function (value) {
            var _a;
            _a = value.split(' '), this._lastName = _a[0], this._firstName = _a[1];
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Student.prototype, "age", {
        get: function () {
            return new Date().getFullYear() - this._birthYear;
        },
        enumerable: false,
        configurable: true
    });
    return Student;
}());
