function bestelling(){

    var fris = 2.50;
    var aantalFris = 0;

    var bier = 3.00;
    var aantalBier = 0;

    var wijn = 4.00;
    var aantalWijn = 0;

    var bitterballen8 = 5.00;
    var aantalBitterballen8 = 0;

    var bitterballen16 = 9.00;
    var aantalBitterballen16 = 0;

    while(true){
        var question = prompt("Welke bestelling wilt u toevoegen? \nU kunt kiezen uit: \nFris\nBier\nWijn\nSnack");
        if(question == 'fris' || question == "Fris"){
            do{
                aantalFris = parseInt(prompt('Hoeveel fris wilt u toevoegen aan uw bestelling?'));
            }while(!isNumber(aantalFris));
            totaalFris();
        }
        else if (question == 'bier' || question == "Bier"){
            do{
                aantalBier = parseInt(prompt('Hoeveel bier wilt u toevoegen aan uw bestelling?'));
            }while(!isNumber(aantalBier));
            totaalBier();
        }
        else if(question == 'wijn' || question == "Wijn"){
            do{
                aantalWijn = prompt('Hoeveel wijn wilt u toevoegen aan uw bestelling?');
            }while(!isNumber(aantalWijn));
            totaalWijn();
        }
        else if(question== 'snack' || question == "Snack"){
            var orderBitterballen = prompt('Hoeveel bitterballen wilt u toevoegen?\nKies uit 8 of 16 stuks.');
            if (orderBitterballen == 8){
                do{
                    aantalBitterballen8 = prompt('Hoeveel bitterbalschalen van 8 stuks wilt u bestellen?');
                }while(!isNumber(aantalBitterballen8));
                totaalBitter8();
            }
            else if(orderBitterballen == 16){
                do{
                    aantalBitterballen16 = prompt('Hoeveel bitterbalschalen van 16 stuks wilt u bestellen?');
                }while(!isNumber(aantalBitterballen16));
                totaalBitter16();
            }
            else{
                alert('U kunt alleen een keuze maken tussen 8 en 16. De snacks zijn niet toegevoegd aan de bestelling.')
            
        }
        }
        else if(question == "stop"){
            break;
        }
        else{
            alert('U heeft een ongeldige invoer gedaan. \nUw bestelling kan niet worden toegevoegd.')
        }
    }


    function isNumber(value) {
        var numberPattern = /^[0-9]+$/;
        return numberPattern.test(value);
    }

    
    function totaalFris(){
        return fris * aantalFris;
    }

    function totaalBier(){
        return bier * aantalBier;
    }

    function totaalWijn(){
        return wijn * aantalWijn;
    }

    function totaalBitter8(){
        return bitterballen8 * aantalBitterballen8;
    }

    function totaalBitter16(){
        return bitterballen16 * aantalBitterballen16;
    }

    function totaal(){
        totalOrder = 0.0;
        return totalOrder + totaalFris() + totaalBier() + totaalWijn() + totaalBitter8() + totaalBitter16();  
    }

    alert('Het totaal wordt: €' + totaal().toFixed(2));

    document.write('Aantal fris: ' + aantalFris + ' = €'+ totaalFris().toFixed(2)+'<br>' );
    document.write('Aantal bier: ' + aantalBier + ' = €'+ totaalBier().toFixed(2)+'<br>' );
    document.write('Aantal wijn: ' + aantalWijn + ' = €'+ totaalWijn().toFixed(2)+'<br>' );
    document.write('Aantal bitterballen van 8 stuks: ' + aantalBitterballen8 + ' = €'+ totaalBitter8().toFixed(2)+'<br>' );
    document.write('Aantal bitterballen van 16 stuks: ' + aantalBitterballen16 + ' = €'+ totaalBitter16().toFixed(2)+'<br><br>' );

    document.write('Het totaal is €' + totaal().toFixed(2) + '<br><br>');
}