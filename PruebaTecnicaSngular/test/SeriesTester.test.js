import { describe, expect, it } from 'vitest' 
 
import { NSerie } from '../src/components/FunctionComponents/FunctionCoponents' 
 
describe("Calculadora serie n", () => { 
    it("Cuando n=1 el resultado esperado es: 3", () => { 
        expect(NSerie.serieResultados(1)).toBe(3) 
    }) 
    it("Cuando n=3 el resultado esperado es: 13", () => { 
        expect(NSerie.serieResultados(3)).toBe(13) 
    }) 
    it("Cuando n=5 el resultado esperado es: 28", () => { 
        expect(NSerie.serieResultados(5)).toBe(28) 
    }) 
    it("Cuando n=7 el resultado esperado es: 59", () => { 
        expect(NSerie.serieResultados(7)).toBe(59) 
    }) 
    it("Cuando n=9 el resultado esperado es: 119", () => { 
        expect(NSerie.serieResultados(9)).toBe(119) 
    }) 
    it("Cuando n=11 el resultado esperado es: 238", () => { 
        expect(NSerie.serieResultados(11)).toBe(238) 
    }) 
    it("Cuando n=13 el resultado esperado es: 505", () => { 
        expect(NSerie.serieResultados(13)).toBe(505) 
    }) 
    it("Cuando n=15 el resultado esperado es: 1165", () => { 
        expect(NSerie.serieResultados(15)).toBe(1165) 
    }) 
    it("Cuando n=17 el resultado esperado es: 2808", () => { 
        expect(NSerie.serieResultados(17)).toBe(2808) 
    }) 
    it("Cuando n=19 el resultado esperado es: 7051", () => { 
        expect(NSerie.serieResultados(19)).toBe(7051) 
    }) 
})