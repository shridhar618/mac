function getUsers() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve([
                { id: 1, name: 'Alice' },
                { id: 2, name: 'Bob' },
                { id: 3, name: 'Charlie' }
            ]);
        }, 2000);
    });
}


function getUsers(success = true) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (success) {
                resolve([
                    { id: 1, name: 'Alice' },
                    { id: 2, name: 'Bob' },
                    { id: 3, name: 'Charlie' }
                ]);
            } else {
                reject('Failed to fetch users');
            }
        }, 1000);
    });
}

//map created 3 objects with id and name properties
let john={ id: 4, name: 'John' },
    jane={ id: 5, name: 'Jane' },
    doe={ id: 6, name: 'Doe' };


let userRoles= new Map([
    [john, 'Admin'],
    [jane, 'Editor'],
    [doe, 'Viewer'],
]);


for(const [user, role] of userRoles) {
    console.log(`${user.name} has the role of ${role}`);
}



function filterNames(names, letter) {
    return names.filter(name => name.startsWith(letter));
}

console.log(filterNames(['Alice', 'Bob', 'Charlie', 'David'], 'A')); // Output: ['Alice']

//sort an array of objects by a specific property
function sortByAge(arr){
    return arr.sort((a,b) => a.age - b.age);
}

const people = [
    { name: 'Alice', age: 30 },
    { name: 'Bob', age: 25 },
    { name: 'Charlie', age: 35 }
];

console.log(sortByAge(people));