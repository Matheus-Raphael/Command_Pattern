
//Fazer a soma de dois numeros
function calculo1(x, y) {
    return x + y;
}

//Fazer a subtracao de dois numeros
function calculo2(x, y) {
    return x - y;
}

//Fazer a multiplicacao de dois numeros
function calculo3(x, y) {
    return x * y;
}

//Fazer a divisao de dois numeros
function calculo4(x, y) {
    return x / y;
}

var manager = {
  execute: function(name, x, y) {
    if (name == "calculo1") {
      return calculo1(x, y);
    } else if (name == "calculo2") {
        return calculo2(x, y);
    }else if (name == "calculo3") {
        return calculo3(x, y);
    } else if (name == "calculo4") {
        return calculo4(x, y);
    }
    return false;
  }
};


console.log(manager.execute("calculo1", 10, 5));

console.log(manager.execute("calculo2", 10, 5));

console.log(manager.execute("calculo3", 10, 5));

console.log(manager.execute("calculo4", 10, 5));

