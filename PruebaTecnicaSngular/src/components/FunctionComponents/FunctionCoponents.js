//Fibonacci function
// function nFibonacci(n) {
//     if(n < 2) return n;
//     return nFibonacci(n-1) + nFibonacci(n-2);
// }


// Número triangular serie 
// function nTriangular(n) {
//     return n*(n + 1) / 2
// }

// Primos Function
// function nPrimos(n) {
//     function esPrimo(n) {
//         let numFactores = 0;
//         for (let i = 1; i <= n; i++) {
//             if (n % i === 0) numFactores = numFactores + 1;
//         }

//         if (numFactores === 2) return 'si';
//         else return 'no';

//     }

//     let numPrimos = 0;
//     let j = 0;
//     while (numPrimos < n) {
//         if (esPrimo(j) === 'si') numPrimos = numPrimos + 1;
//         j = j + 1;
//     }
//     return j - 1;
// }

// console.log(nPrimos(11));