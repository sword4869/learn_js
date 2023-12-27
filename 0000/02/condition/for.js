const names = ['Alice', 'Bob', 'Charlie', 'Deborah', 'Evan'];

/* for and let */
for (let i = 0; i < names.length; i++) {
    console.log(names[i]);
}


/* forEarch */
names.forEach(name => {
    console.log(name);
});


/* for of */
for (const name of names) {
    console.log(name);
}