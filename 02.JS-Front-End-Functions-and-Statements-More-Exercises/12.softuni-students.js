function softUniStudents(array) {
    let courses = {};
    for (let index = 0; index < array.length; index++) {
      if (array[index].includes(":")) {
        const [courseName, capacity] = array[index].split(": ");
        if (!courses.hasOwnProperty(courseName)) {
          courses[courseName] = { name: courseName, capacity: Number(capacity),  students:[] };
        } else {
          courses[courseName].capacity += Number(capacity);
        }
      } else {
        const tokens = array[index].split(" ");
        let openBracketIndex = array[index].indexOf("[");
        let closeBracketIndex = array[index].indexOf("]");
        const studentUsername = array[index].slice(0, openBracketIndex);
        const credits = array[index].slice(
          openBracketIndex + 1,
          closeBracketIndex
        );
        const email = tokens[3];
        const courseToFind = tokens[5];
        addStudentToCourse(studentUsername, credits, email, courseToFind);
      }
    }
    printResult();
  
  
  
    function addStudentToCourse(studentUsername, credits, email, courseToFind) {
      const studentObject = {
        username: studentUsername,
        credits: credits,
        email: email,
      };
      for (const course in courses) {
        if (course === courseToFind) {
          if (courses[course].capacity > 0) {
              courses[course].students.push(studentObject);
              courses[course].capacity--;
              break;
          }
        }
      }
    }
  
    function printResult(){
      const keys = Object.keys(courses).sort((courseA, courseB)=> courses[courseB].students.length - courses[courseA].students.length);
      for (let index = 0; index < keys.length; index++) {
          console.log(`${keys[index]}: ${courses[keys[index]].capacity} places left`);
          courses[keys[index]].students.sort((studentA, studentB)=>studentB.credits-studentA.credits).forEach(student => {
              console.log(`--- ${student.credits}: ${student.username}, ${student.email}`);
          });
      }
    }
  }