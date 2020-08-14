// objeto com funções
var calculos = {
    somar: function(x, y) {
      return x + y;
    },
    subtrair: function(x, y) {
      return x - y;
    },
    multiplicar: function(x, y) {
      return x * y;
    },
    dividir: function(x, y) {
      return x / y;
    }
  };
  
  var manager = {
    execute: function(name) {
      if (name in calculos) {
        return calculos[name].apply(calculos, [].slice.call(arguments, 1));
      }
      return false;
    }
  };
  

  console.log(manager.execute("somar", 10, 5));
 
  console.log(manager.execute("subtrair", 10, 5));

  console.log(manager.execute("multiplicar", 10, 5));

  console.log(manager.execute("dividir", 10, 5));
  
  // correto com o uso do objeto podemos transportar os argumentos restantes invocando as funções. com uma execução mais simples.