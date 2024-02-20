function login(inputArray) {
    let userName = inputArray[0];
    let correctPassword = '';
  
    for (let i = userName.length - 1; i >= 0; i--) {
      correctPassword += userName[i];
    }
  
    for (let i = 1; i <= inputArray.length - 1; i++) {
      if (inputArray[i] === correctPassword) {
        console.log(`User ${userName} logged in.`);
        break;
      } else if (i === 4) {
        console.log(`User ${userName} blocked!`);
        break;
      } else {
        console.log('Incorrect password. Try again.');
      }
    }
  }


  function login(array) {
    let username = array.shift();
    let counter = 0;

    for (word of array) {
        counter++;

        if (username.split('').reverse().join('') === word) {
            console.log(`User ${username} logged in.`);
        } else {
            if (counter === 4) {
                console.log(`User ${username} blocked!`)
                break;
            }
            console.log("Incorrect password. Try again.");
        } 
   
    }

}