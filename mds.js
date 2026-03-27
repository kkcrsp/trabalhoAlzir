function mdc(a, b) {
    a = Math.abs(a);
    b = Math.abs(b);

    while (b !== 0) {
        let resto = a % b;
        a = b;
        b = resto;
    }

    return a;
}
// exemplos para teste
let num1 = 48;
let num2 = 18;
