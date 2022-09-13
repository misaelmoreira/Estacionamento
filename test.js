var texto = '';
var texto2 = '';

for(var i = 1; i <= 39; i++ ){
    var traco = '-';
    texto = texto + traco; 
}

console.log(texto);

for(var i = 0; i <= 4; i++ ){ 
    for(var a = 1; a <= 39; a++ ){
        if(a == 1){
            var traco1 = '|';
            texto2 = traco1; 
        } else {
            if(a == 39 ){
                texto2 = texto2 + '|';            
            } else {
                var traco2 = ' ';
                texto2 = texto2 + traco2; 
            }
        }
    } 
    console.log(texto2);
}

console.log(texto);

