let studentData = {
    id:1,
    name: "John Doe",
    program: "Computer Science",
    semester: "Winter 2024",
    bio: "John is a passionate computer science student with a keen interest in web development and artificial intelligence."
};

function getStudentData() {
    let promise = new Promise((resolve, reject) => {
         setTimeout(() => {
            resolve(studentData); 
        }, 1000);
    });
    promise.then(student => {
        renderStudent(student);
    });

    return promise;
}

function renderStudent(student){
    const studentContainer = document.getElementById("student-container");
    studentContainer.innerHTML = `
        <h2>${student.name}</h2>
        <p>Program: ${student.program}</p>
        <p>Semester: ${student.semester}</p>
         <p>Bio: ${student.bio}</p>
         `;
}