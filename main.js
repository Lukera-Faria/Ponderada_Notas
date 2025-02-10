var notas = [ 5.0, 6.0, 6.0 ];
var soma = 0;
for (var i = 0; i < notas.length; i++) {
    soma += notas[i];
}

var media = soma/notas.length;
console.log("sua notas foram", notas);

if (media >= 6){
    console.log("Parabéns você passou com uma média de:", media);
}
else {
    console.log("Infelizmente você não passou com sua média de:", media);
}
