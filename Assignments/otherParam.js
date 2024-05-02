//
function empHobbies(fistName,lastName,...hobbies) {
    
    console.log(fistName + lastName + " => "+ hobbies[0]); 
    console.log(fistName + lastName + "=>" + hobbies[1]); 
    
    const empArrary = [fistName,lastName,...hobbies];
    console.log (empArrary);
}

 let result = empHobbies("Suresh","Natarajan","Playing Games","Listening Music","long Drive");
