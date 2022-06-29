const frutas = ['Pera', 'Maçã', 'Goiaba']; // Vetor de única dimensão;

for(let i = 0; i < frutas.length; i++){ // Iteração sobre for clássico
    console.log(frutas[i]);
};

/* For in - Itera sobre indices ou chaves de um objeto; */
// Para utilizar o for in fazemos que:
for(let index in frutas){
    console.log(index);
} 

// iterando sobre objetos:
