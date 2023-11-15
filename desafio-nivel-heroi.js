let nomeDoHeroi = ['Homem Aranha', 'Super man', 'Batman', 'Capitão America'];
let xpDoHeroi = [2000, 12000, 7500, 9045];

// Utilizando uma estrutura de decisão para determinar o nível do herói
for (let i = 0; i < xpDoHeroi.length; i++) {
    let nivelDoHeroi;

    if (xpDoHeroi[i] < 1000) {
        nivelDoHeroi = "Ferro";
    } else if (xpDoHeroi[i] >= 1001 && xpDoHeroi[i] <= 2000) {
        nivelDoHeroi = "Bronze";
    } else if (xpDoHeroi[i] >= 2001 && xpDoHeroi[i] <= 5000) {
        nivelDoHeroi = "Prata";
    } else if (xpDoHeroi[i] >= 6001 && xpDoHeroi[i] <= 7000) {
        nivelDoHeroi = "Ouro";
    } else if (xpDoHeroi[i] >= 7001 && xpDoHeroi[i] <= 8000) {
        nivelDoHeroi = "Platina";
    } else if (xpDoHeroi[i] >= 8001 && xpDoHeroi[i] <= 9000) {
        nivelDoHeroi = "Ascendente";
    } else if (xpDoHeroi[i] >= 9001 && xpDoHeroi[i] <= 10000) {
        nivelDoHeroi = "Imortal";
    } else {
        nivelDoHeroi = "Radiante";
    }

    // Exibindo a mensagem
    console.log("O Herói de nome " + nomeDoHeroi[i] + " está no nível de " + nivelDoHeroi);
}