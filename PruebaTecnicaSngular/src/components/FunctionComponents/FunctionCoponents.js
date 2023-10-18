export class NSerie {
    static nTriangular(n) {
        return n * (n + 1) / 2
    }

    static nPrimos(n) {
        function esPrimo(n) {
            let numFactores = 0;
            for (let i = 1; i <= n; i++) {
                if (n % i === 0) numFactores = numFactores + 1;
            }

            if (numFactores === 2) return 'si';
            else return 'no';

        }

        let numPrimos = 0;
        let j = 0;
        while (numPrimos < n) {
            if (esPrimo(j) === 'si') numPrimos = numPrimos + 1;
            j = j + 1;
        }
        return j - 1;
    }

    static nFibonacci(n) {
        if (n <= 1) return n; 
 
        let a = 0; 
        let b = 1; 
        for (let i = 2; i <= n; i++) { 
            const temp = a + b; 
            a = b; 
            b = temp; 
        } 
 
        return b; 
    }

    static serieResultados (n) {
        const sTriangular = NSerie.nTriangular(n+1);
        const sPrimos = NSerie.nPrimos(n);
        const sFibonacci = NSerie.nFibonacci(n+1);
        
        return (2* sTriangular) - (2* sPrimos) + sFibonacci;
    }

}
