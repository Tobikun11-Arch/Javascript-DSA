//Data structure is for organizing, storing and accessing data
const students = ['Joenel', 'May anne', 'Gabriel', 'Christian', 'Adrian']

//Algorithm for finding a specific user - Step by step solution
function findStudents(Allstudents, studentName) {
    for (let i = 0; i < Allstudents.length; i++) {
        if(Allstudents[i] === studentName) {
            console.log(`Student found: ${studentName}`)
            return
        } else {
            return console.log("Student not found")
        }
    }
}

findStudents(students, 'Joenel')


//Install code runner on vscode extensions, F1 search Open shorcuts keybord and search code runner make it Alt + Enter