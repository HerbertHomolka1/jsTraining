const students = [
  {
    name: "Alice",
    gender: "F",
    classes: ["Math", "Science", "English"],
    age: 18,
    grade: "A"
  },
  {
    name: "Bob",
    gender: "M",
    classes: ["Math", "History", "Physics"],
    age: 17,
    grade: "B"
  },
  {
    name: "Charlie",
    gender: "M",
    classes: ["Math", "Chemistry", "English"],
    age: 16,
    grade: "B"
  },
  {
    name: "David",
    gender: "M",
    classes: ["Math", "Science", "Geography"],
    age: 18,
    grade: "A"
  },
  {
    name: "Emily",
    gender: "F",
    classes: ["Math", "Biology", "English"],
    age: 17,
    grade: "B"
  },
  {
    name: "Frank",
    gender: "M",
    classes: ["Math", "Physics", "History"],
    age: 16,
    grade: "C"
  },
  {
    name: "Grace",
    gender: "F",
    classes: ["Math", "Chemistry", "English"],
    age: 18,
    grade: "A"
  },
  {
    name: "Henry",
    gender: "M",
    classes: ["Math", "Science", "Geography"],
    age: 17,
    grade: "B"
  },
  {
    name: "Isabella",
    gender: "F",
    classes: ["Math", "Biology", "English"],
    age: 16,
    grade: "B"
  },
  {
    name: "Jack",
    gender: "M",
    classes: ["Math", "Physics", "History"],
    age: 18,
    grade: "C"
  },
  {
    name: "Katherine",
    gender: "F",
    classes: ["Math", "Chemistry", "English"],
    age: 17,
    grade: "A"
  },
  {
    name: "Leo",
    gender: "M",
    classes: ["Math", "Science", "Geography"],
    age: 16,
    grade: "B"
  },
  {
    name: "Mia",
    gender: "F",
    classes: ["Math", "Biology", "English"],
    age: 18,
    grade: "A"
  },
  {
    name: "Nathan",
    gender: "M",
    classes: ["Math", "Physics", "History"],
    age: 17,
    grade: "B"
  },
  {
    name: "Olivia",
    gender: "F",
    classes: ["Math", "Chemistry", "English"],
    age: 16,
    grade: "B"
  },
  {
    name: "Patrick",
    gender: "M",
    classes: ["Math", "Science", "Geography"],
    age: 18,
    grade: "A"
  },
  {
    name: "Quinn",
    gender: "F",
    classes: ["Math", "Biology", "English"],
    age: 17,
    grade: "B"
  },
  {
    name: "Ryan",
    gender: "M",
    classes: ["Math", "Physics", "History"],
    age: 16,
    grade: "C"
  },
  {
    name: "Sophia",
    gender: "F",
    classes: ["Math", "Chemistry", "English"],
    age: 18,
    grade: "A"
  },
  {
    name: "Tyler",
    gender: "M",
    classes: ["Math", "Science", "Geography"],
    age: 17,
    grade: "B"
  }
];



let siblings = []

function createNewSibling(student) {
    siblingGender = student.gender === 'F' ? 'M':'F';
    let siblingName = student.name.toLowerCase().split('').reverse();
    siblingName[0] = siblingName[0].toUpperCase(); 
    const newSibling = {
        name: siblingName.join(''),
        gender: siblingGender,
        classes: student.classes,
        age: student.age-1,
        grade: student.grade
        } ;
    return newSibling
}

students.forEach(  
    student => {
                newSibling = createNewSibling(student)
                students.push(newSibling)
            }
)

newStudentsArr = [...students, ...siblings]

console.log(newStudentsArr.map(sibling => sibling.name))

// this will work too
// students.forEach(   student => {
//     // siblingName = 
//     siblingGender = student.gender === 'F' ? 'M':'F';
//     siblingName = ''
//     lastIndex = student.name.length-1
//     for (index = lastIndex; index >= 0 ; index-- ) {
        
//         let letter = student.name[index];
//         if (index === lastIndex) {
//           letter = letter.toUpperCase();
          
//         }
//         else {
//           letter = letter.toLowerCase();
//         }
     
//         siblingName += letter;
//     }
//     const newSibling = {
//         name: siblingName,
//         gender: siblingGender,
//         classes: student.classes,
//         age: student.age-1,
//         grade: student.grade
//         } ;
//     students.push(newSibling)
//     }
// )

// console.log(students.map(student => student.name))
