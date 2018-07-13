/// Javascript code to print fiz buzz

// while loop
var idx = 1;
while(idx <= 100){
    // check if number is div by 3 or 5 or by both
    if(idx % 3 == 0 && idx %5 == 0){
        console.log(idx+'  FizzBuzz');    
    }else if(idx % 3 == 0){
        console.log(idx+'  Fizz');    
    }else if(idx % 5 == 0){
        console.log(idx+'  Buzz');    
    }else {
        console.log(idx);    
    }

    ++idx;
}
