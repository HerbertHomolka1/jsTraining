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
