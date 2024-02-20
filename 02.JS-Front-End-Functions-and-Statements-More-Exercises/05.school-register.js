function solve(students) {
    const grades = {};

    for (const student of students) {
        studentInfo = student.split(', ');
        let studentName = studentInfo[0].split(': ')[1];
        let grade = Number(studentInfo[1].split(': ')[1]) + 1;
        let studentGrade = Number(studentInfo[2].split(': ')[1]);

        if (!(grade in grades)) {
            grades[grade] = [];
        }

        if (studentGrade >= 3) {
            grades[grade].push({studentName, studentGrade});
        }
    }

    for (const [grade, studentsInGrade] of Object.entries(grades)) {
        let gradesSum = 0;
        let gradesLength = 0;
        let studentsArr = [];
        for (const student of studentsInGrade) {
            gradesLength++;
            gradesSum += student['studentGrade'];
            studentsArr.push(student['studentName']);
        }
        if (grades[grade].length > 0) {
            console.log(`${grade} Grade`);
            console.log(`List of students: ${studentsArr.join(', ')}`);
            console.log(`Average annual score from last year: ${(gradesSum / gradesLength).toFixed(2)}\n`);
        }
    }
}