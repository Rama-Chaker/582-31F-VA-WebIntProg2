const passwordInput = "H3ll0W03ld";
function checkPassword(password) {
    const promise = new Promise((resolve, reject) => {
        if (password == passwordInput) {
            setTimeout(() => {
                resolve("Password is valid");
            }, 2000);
        } else {
            reject("Invalid password");
        }
    });
    return promise;
}

checkPassword("H3ll)W03ld").then((message) => {
    console.log(message);
}).catch((error) => {
    console.error(error);
});

checkPassword("WrongPassword").then((message) => {
    console.log(message);
}).catch((error) => {
    console.error(error);
});

checkPassword("H3ll0W03ld").then((message) => {
    console.log(message);
}).catch((error) => {
    console.error(error);
});
