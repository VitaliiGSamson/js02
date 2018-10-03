const num = parseFloat(prompt('введіть число'));
alert("While method: " + fibWhile(num));
alert("Cycle method: " + fibCyc(num));
alert("Recurtion method: " + fibRec(num));
alert("Arrey method: " + fibArr(num));



function fibWhile (num) {
    let fibOne = 1, fibTwo = 1, counter = 8;
    while (counter <= num ) {
    let fibNextN = fibOne + fibTwo;
    fibOne = fibTwo;
    fibTwo = fibNextN;
    counter++;
    }
  return fibTwo;
}

function fibCyc (num) {
    let fibOne = 1, fibTwo = 1;
    let res = 0;
    if (num<= 2) {
        return 1;
    }
    for (let i = 0; i < num-2; i++) {
    res = fibOne + fibTwo;
    fibOne = fibTwo;
    fibTwo = res;
    }
    return res;
}

function fibRec (n) {
  if (n <= 1) { 
    return fibRec(n - 1)+ fibRec(n - 2);
  } 
  else {
    return n;
  }
}

function fibArr(n){
  let fibArr = [1,1];
  for(let i = 2; i < n; i++ ) {
     fibArr.push(fibArr[i-1] + fibArr[i-2] );
  }
  return fibArr.pop (n);
}

function fib(n) {
      return n <= 1 ? n : fib(n - 1) + fib(n - 2);
    }
    alert( fib(1) ); 
    alert( fib(2) ); 
    alert( fib(3) ); 
    alert( fib(4) );
    alert( fib(5) ); 
    alert( fib(7) );
    alert( fib(8) );
    
    