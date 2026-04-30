let studentData = {
    id: 1,
    name: "John Doe",
    program: "Computer Science",
    semester: "Winter 2024",
    bio: "John is a passionate computer science student with a keen interest in web development and artificial intelligence.",
};

function getStudentData() {
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(studentData);
        }, 1000);
    });
    promise.then((student) => {
        renderStudent(student);
    });

    return promise;
}

function renderStudent(student) {
    const studentContainer = document.getElementById("student-container");
    studentContainer.innerHTML = `
        <h2>${student.name}</h2>
        <p>Program: ${student.program}</p>
        <p>Semester: ${student.semester}</p>
         <p>Bio: ${student.bio}</p>
         `;
}

function getCoursesData() {
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve([
                { code: "WIP2", title: "Web Interface Programming 2" },
                { code: "AWP", title: "Advanced Programming" },
                { code: "DB2", title: "Database Management Systems 2" },
            ]);
        }, 1000);
    });
    return promise;
}

function renderCourses(courses) {
    const coursesContainer = document.getElementById("courses-container");
    coursesContainer.innerHTML = "<h2>Enrolled Courses</h2>";
    courses.forEach((course) => {
        coursesContainer.innerHTML += `
          <ul>
            <li>${course.code}: ${course.title}</li>
          </ul>
        `;
    });
}

function connectLoadCoursesButton() {
document.getElementById("btnCourses").addEventListener("click", () => {
    
    document.getElementById("status").textContent = "Loading courses...";
    
    // clear old data
    document.getElementById("courses-container").innerHTML = "";

    getCoursesData()
        .then((courses) => {
            renderCourses(courses);
            document.getElementById("status").textContent = "Courses loaded!";
        })
        .catch((error) => {
            document.getElementById("status").textContent = "Failed to load courses.";
            console.error(error);
        });
});
}

function clearButton() {
    document.getElementById("clear").addEventListener("click", () => {
        document.getElementById("student-container").innerHTML = "";
        document.getElementById("courses-container").innerHTML = "";
        document.getElementById("status").textContent = "Ready.";
    });
}