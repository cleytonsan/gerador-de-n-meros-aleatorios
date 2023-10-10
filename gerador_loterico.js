document.getElementById('gerar').addEventListener('click', function() {
    var jogo = document.getElementById('jogo').value;
    var quantidade = parseInt(document.getElementById('quantidade').value);
    
    var numeros = gerarNumerosLotericos(jogo, quantidade);
    exibirResultado(numeros);
  });
  
  function gerarNumerosLotericos(jogo, quantidade) {
    var numeros = [];
  
    if (jogo === 'megasena') {
      while (numeros.length < quantidade) {
        var numero = Math.floor(Math.random() * 60) + 1;
        if (numeros.indexOf(numero) === -1) {
          numeros.push(numero);
        }
      }
    } else if (jogo === 'quina') {
      while (numeros.length < quantidade) {
        var numero = Math.floor(Math.random() * 80) + 1;
        if (numeros.indexOf(numero) === -1) {
          numeros.push(numero);
        }
      }
    } else if (jogo === 'lotofacil') {
      while (numeros.length < quantidade) {
        var numero = Math.floor(Math.random() * 25) + 1;
        if (numeros.indexOf(numero) === -1) {
          numeros.push(numero);
        }
      }
    } else {
      console.log('Jogo não suportado.');
      return [];
    }
  
    numeros.sort(function(a, b) {
      return a - b;
    });
  
    return numeros;
  }
  
  function exibirResultado(numeros) {
    var resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = 'Números gerados: ' + numeros.join(', ');
  }
  