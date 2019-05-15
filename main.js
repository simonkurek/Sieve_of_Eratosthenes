//definiowanie tablic
var table = [];
var tablePoz = [];
var tableBan = [];
var valueBan = 0;

function main(){
    //Pobranie liczby do ktorej maja byc znajdowane liczby pierwsze
    var number = document.getElementById("input").value;
    var num = parseFloat(number);
    //generowanie liczb
    for (i=2; i <= num; i++){
        table.push(i);
    }
    //wykluczanie liczb
    for (x=0; x < table.length; x++){
        //sprawdzenie czy liczba jest wykluczona
        checkban(table[x]);
        if(valueBan > 0){
            valueBan = 0;
        } else {
            //jezeli nie jest wykluczona:
            //1.dodajemy do listy liczb do wyswietlenia
            tablePoz.push(table[x]);
            //2.wykluczamy wielokrotnosci
            for (y = 2; y <= num/table[x]; y++){
                tableBan.push(table[x]*y);
            }
        }
    }
    
    //wyswieltenie tablicy
    var answer = "<p>";
    for(z=0; z < tablePoz.length; z++){
        answer = answer + tablePoz[z] + ", ";
    }
    answer = answer + "</p>";
    document.getElementById("answer").innerHTML = answer;
}
//sprawdzenie czy liczba jest wykluczona
function checkban(numb){
    for(i=0; i<tableBan.length; i++){
        if(tableBan[i] == numb){
            valueBan++
        }
    }
}

//funkcja init
function init(){
    var button = document.getElementById("button");
    button.addEventListener("click", function(){
      main();
    });
  }

  window.onload = init;
