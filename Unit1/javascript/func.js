function params(a, b) {
    console.log("The value of a is: " + a);

    for (let i = 0; i < arguments.length; i++) {
        console.log("The value of argument " + i + " is: " + arguments[i]);
    }
    console.log("");
}

// function call
params("Nivedita");
params("Nivedita", "JavaScript");
params("Nivedita", "JavaScript", 2024);
