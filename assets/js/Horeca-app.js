var totaal = 0.0;
var fris = 2.50;
var aantalFris = 0;

var bier = 3.00;
var aantalBier = 0;

var wijn = 4.00;
var aantalWijn = 0;

var aantalBitterballen = 0;

var bitterballen8 = 5.00;
var aantalBitterballen8 = 0;

var bitterballen16 = 9.00;
var aantalBitterballen16 = 0;


while(true){
    var order = prompt("Welke bestelling wilt u toevoegen? \nU kunt kiezen uit: \nFris\nBier\nWijn\nSnack");
    if(order == 'fris'){
        aantalFris = prompt('Hoeveel fris wilt u toevoegen aan uw bestelling?');
        totaal = totaal + fris * aantalFris;
    }
    else if (order == 'bier'){
        aantalBier = prompt('Hoeveel bier wilt u toevoegen aan uw bestelling?');
        totaal = totaal + bier * aantalBier;
    }
    else if(order == 'wijn'){
        aantalWijn = prompt('Hoeveel wijn wilt u toevoegen aan uw bestelling?');
        totaal = totaal + wijn * aantalWijn;
    }
    else if(order == 'snack'){
        var orderBitterballen = prompt('Hoeveel bitterballen wilt u toevoegen?\nKies uit 8 of 16 stuks.');
        if (orderBitterballen == 8){
            aantalBitterballen8 = prompt('Hoeveel bitterbalschalen van 8 stuks wilt u bestellen?');
            totaal = totaal + bitterballen8 * aantalBitterballen8;
        }
        else if(orderBitterballen == 16){
            aantalBitterballen16 = prompt('Hoeveel bitterbalschalen van 16 stuks wilt u bestellen?');
            totaal = totaal + bitterballen16 * aantalBitterballen16;
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


alert('Het totaal wordt: €' + totaal.toFixed(2))

document.write('Aantal fris: '+aantalFris + ' = €'+ fris*aantalFris+'<br>' );
document.write('Aantal bier: ' + aantalBier+ ' = €'+ bier*aantalBier+'<br>');
document.write('Aantal wijn: ' + aantalWijn+' = €'+ wijn*aantalWijn + '<br><br>');
document.write('Aantal bitterballen van 8 stuks: ' + aantalBitterballen8 + ' = €' + bitterballen8*aantalBitterballen8 +'<br>');
document.write('Aantal bitterballen van 16 stuks: ' + aantalBitterballen16 + ' = €' + bitterballen16*aantalBitterballen16 +'<br><br>');

document.write('Het totaal is €'+totaal.toFixed(2))