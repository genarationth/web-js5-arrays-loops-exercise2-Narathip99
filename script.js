let peopleInLine = ['Sofia', 'David', 'Juan'];  // 1. Create an array that has these three names in order

peopleInLine.push('Sara', 'Augustin');  // 2. Two more people get added to the back of the line - Sara and Augustin

peopleInLine.splice(1,1,'Renata' ); // 3. David leaves the line and Renata to take his place.

peopleInLine.push('Elena');  // 4. Elena goes to the end of the line

console.log(peopleInLine);