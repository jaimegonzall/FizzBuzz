const { mirarNumero } = require('./index');



describe.skip('Cata Fizz Buzz', () => {

// PROBANDO INDEPENDIENTEMENTE

    test("devuelve fizz si multiplo tres", () => {
        expect(multiploTres(9)).toBe("Fizz")
    });

    test("devuelve buzz si multiple cinco", () => {
        expect(multiploCinco(5)).toBe("Buzz")
    });

    test("devuelve fizzbuzz si multiple de tres y cinco", () => {
        expect(multipleTresCinco(15)).toBe("FizzBuzz")
    });

    test("devuelve numero", () => {
        expect(nomultiplo(8)).toBe(8)
    });
    
});

test("FizzBuzz", () => {
    expect(mirarNumero(15)).toBe("fizzbuzz")
});
