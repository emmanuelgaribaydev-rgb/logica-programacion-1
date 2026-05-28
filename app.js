let numero1 = Number(prompt("Ingresa el primer número:"));
let numero2 = Number(prompt("Ingresa el segundo número:"));
let numero3 = Number(prompt("Ingresa el tercer número:"));

if (isNaN(numero1) || isNaN(numero2) || isNaN(numero3)) {
    console.log("Debes ingresar únicamente números");
} else if (numero1 === numero2 || numero1 === numero3 || numero2 === numero3) {
    console.log("Los números deben ser diferentes");
} else {
    let mayor;
    let medio;
    let menor;
    
    if (numero1 > numero2 && numero1 > numero3) {
        mayor = numero1;
        if (numero2 > numero3) {
            medio = numero2;
            menor = numero3;
        } else {
            medio = numero3;
            menor = numero2;
        }
    } else if (numero2 > numero1 && numero2 > numero3) {
        mayor = numero2;
        if (numero1 > numero3) {
            medio = numero1;
            menor = numero3;
        } else {
            medio = numero3;
            menor = numero1;
        }
    } else {
        mayor = numero3;
        if (numero1 > numero2) {
            medio = numero1;
            menor = numero2;
        } else {
            medio = numero2;
            menor = numero1;
        }
    }
    console.log(`Número mayor: ${mayor}`);
    console.log(`Número medio: ${medio}`);
    console.log(`Número menor: ${menor}`);
    console.log(`Ordenados de mayor a menor: ${mayor}, ${medio}, ${menor}`);
    console.log(`Ordenados de menor a mayor: ${menor}, ${medio}, ${mayor}`);}