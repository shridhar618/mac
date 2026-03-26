function params(a, b){
    document.write("The value of a is: " + a + "<br>");

    for(let i=0; i<arguments.length; i++){
        document.write("The value of argument " + i + " is: " + arguments[i] + "<br>");
    }
    document.write("<br>");
}

// function call
params("Nivedita");
params("Nivedita", "JavaScript");
params("Nivedita", "JavaScript", 2024);