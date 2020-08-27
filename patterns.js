/***
 *  *
 *  * *
 *  * * *
 *  * * * *
 * 
 */

(() =>{
    let s = "";
    for (let i = 0; i < 5; i++){
         for (let j = 0; j < i; j ++){
             s += "* ";
         }
         s += "\n";
    }
    console.log(s);
});

/**
 * Factorial
 * 
 */

 let factorial = (n) => {
    if (n == 1){
        return 1;
    }else{
        return factorial(n - 1) * n
    }
 };

 console.log(" Factorial => " + factorial(5));

 /**
  * Fibo series
  * 
  * 0 1 1 2 3 5
  */

  let fibo = (n) => {
      if (n == 1){
          return 1;
      }
      if (n == 0){
          return 0;
      }
      return fibo(n-1) + fibo(n-2);
  };

  console.log("Fibo of 6 : " + fibo(6) );

  /*
  find 3 no from array such that their sum will be close given target
  eg. [1, 2, -3, 2, 4]

  target 2 -> 4, -3, 1
  target 3 -> 2, 2, -3

  */

  