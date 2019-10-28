function bestelling(){

    var totaal = 0.0;
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
        var order = prompt("Welke bestelling wilt u toevoegen? \nU kunt kiezen uit: \nFris\nBier\nWijn\nSnack");
        if(order == 'fris' || order == "Fris"){
            do{
                aantalFris = parseInt(prompt('Hoeveel fris wilt u toevoegen aan uw bestelling?'));
            }while(!isNumber(aantalFris));
            orderFris();
        }
        else if (order == 'bier' || order == "Bier"){
            do{
                aantalBier = parseInt(prompt('Hoeveel bier wilt u toevoegen aan uw bestelling?'));
            }while(!isNumber(aantalBier));
            orderBier();
        }
        else if(order == 'wijn' || order == "Wijn"){
            do{
                aantalWijn = prompt('Hoeveel wijn wilt u toevoegen aan uw bestelling?');
            }while(!isNumber(aantalWijn));
            orderWijn();
        }
        else if(order == 'snack' || order == "Snack"){
            var orderBitterballen = prompt('Hoeveel bitterballen wilt u toevoegen?\nKies uit 8 of 16 stuks.');
            if (orderBitterballen == 8){
                do{
                    aantalBitterballen8 = prompt('Hoeveel bitterbalschalen van 8 stuks wilt u bestellen?');
                }while(!isNumber(aantalBitterballen8));
                orderBitter8();
            }
            else if(orderBitterballen == 16){
                do{
                    aantalBitterballen16 = prompt('Hoeveel bitterbalschalen van 16 stuks wilt u bestellen?');
                }while(!isNumber(aantalBitterballen16));
                orderBitter16();
            }
            else{
                alert('U kunt alleen een keuze maken tussen 8 en 16. De snacks zijn niet toegevoegd aan de bestelling.')
            
        }
        }
        else if(order == "stop"){
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

    function orderFris(){
        totaal = totaal + fris * aantalFris;
        return totaal;
    }
    function orderBier(){
        totaal = totaal + bier * aantalBier;
        return totaal;
    }

    function orderWijn(){
        totaal = totaal + wijn * aantalWijn;
        return totaal;
    }

    function orderBitter8(){
        totaal = totaal + bitterballen8 * aantalBitterballen8;
        return totaal;
    }
    function orderBitter16(){
        totaal = totaal + bitterballen16 * aantalBitterballen16;
        return totaal;
    }

    alert('Het totaal wordt: €' + totaal.toFixed(2));

    document.write('Aantal fris: ' + aantalFris + ' = €'+ fris*aantalFris+'<br>' );
    document.write('Aantal bier: ' + aantalBier + ' = €'+ bier*aantalBier+'<br>');
    document.write('Aantal wijn: ' + aantalWijn + ' = €'+ wijn*aantalWijn + '<br><br>');
    document.write('Aantal bitterballen van 8 stuks: ' + aantalBitterballen8 + ' = €' + bitterballen8*aantalBitterballen8 +'<br>');
    document.write('Aantal bitterballen van 16 stuks: ' + aantalBitterballen16 + ' = €' + bitterballen16*aantalBitterballen16 +'<br><br>');

    document.write('Het totaal is €' + totaal.toFixed(2) + '<br>');
}