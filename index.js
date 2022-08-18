//The Fibonacci formula is given as, Fn = Fn-1 + Fn-2, where n > 1.
//let  FibonacciSeries = [];
//for (let i = 1; i < 100; i++) {
    //FibonacciSeries[i] = FibonacciSeries[i-1] + FibonacciSeries[i-2];
//}
//console.log("FibonacciSeries:" + FibonacciSeries[i]);

// i don't know why the upper program didn't work.
//that is why i tried the lower program.






//declaration of the variables  
var n1 = 0,  n2 = 1, next_num, i;  
var num = parseInt (prompt (" Enter the limit for Fibonacci Series "));  
document.write( "Fibonacci Series: ");  
for ( i = 1; i <= num; i++)  
{  document.write (" <br> " +  n1); // print the n1  
    next_num = n1 + n2; // sum of n1 and n2 into the next_num  
      
    n1 = n2; // assign the n2 value into n2  
    n2 = next_num; // assign the next_num into n2  
}  