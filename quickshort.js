function quicksort(array) {
    if (array.length <= 1) {
        return array;
    }
    let pivo = array[array.length - 1];
    let esquerda = [];
    let direita = [];

    for (let i = 0; i < array.length - 1; i++) {
        if (array[i] < pivo) {
            esquerda.push(array[i]);
        } else {
            direita.push(array[i]);
        }
    }
    return [...quicksort(esquerda), pivo, ...quicksort(direita)];
}

// Exemplo de uso:
let numeros = [10, 7, 8, 9, 1, 5];
console.log("Array original:", numeros);
console.log("Array ordenado:", quicksort(numeros));
