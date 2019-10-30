var receipt = document.getElementById("receipt");

console.dir(receipt);

function bestelling(){

    var aantal = {
        aantalFris: 0,
        aantalBier: 0,
        aantalWijn: 0,
        aantalBitterballen8: 0,
        aantalBitterballen16: 0
    };

    var prijs = {
        fris: 2.50,
        bier: 3.00,
        wijn: 4.00,
        bitterballen8: 5.00,
        bitterballen16: 9.00
    };

    var total = {
        totaalFris: 0,
        totaalBier: 0,
        totaalWijn: 0,
        totaalBitter8: 0,
        totaalBitter16: 0
    };


    while(true){
        var question = prompt("Welke bestelling wilt u toevoegen? \nU kunt kiezen uit: \nFris\nBier\nWijn\nSnack");
        if(question == 'fris' || question == "Fris"){
            do{
                aantal.aantalFris = parseInt(prompt('Hoeveel fris wilt u toevoegen aan uw bestelling?'));
            }while(!isNumber(aantal.aantalFris));
            totaal();
        }
        else if (question == 'bier' || question == "Bier"){
            do{
                aantal.aantalBier = parseInt(prompt('Hoeveel bier wilt u toevoegen aan uw bestelling?'));
            }while(!isNumber(aantal.aantalBier));
            totaal();
        }
        else if(question == 'wijn' || question == "Wijn"){
            do{
                aantal.aantalWijn = prompt('Hoeveel wijn wilt u toevoegen aan uw bestelling?');
            }while(!isNumber(aantal.aantalWijn));
            totaal();
        }
        else if(question== 'snack' || question == "Snack"){
            var orderBitterballen = prompt('Hoeveel bitterballen wilt u toevoegen?\nKies uit 8 of 16 stuks.');
            if (orderBitterballen == 8){
                do{
                    aantal.aantalBitterballen8 = prompt('Hoeveel bitterbalschalen van 8 stuks wilt u bestellen?');
                }while(!isNumber(aantal.aantalBitterballen8));
                totaal();
            }
            else if(orderBitterballen == 16){
                do{
                    aantal.aantalBitterballen16 = prompt('Hoeveel bitterbalschalen van 16 stuks wilt u bestellen?');
                }while(!isNumber(aantal.aantalBitterballen16));
                totaal();
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
        console.log(numberPattern.test(value));
        return numberPattern.test(value);
    }

    
    function totaal(){
        total.totaalFris = prijs.fris * aantal.aantalFris;
        total.totaalBier = prijs.bier * aantal.aantalBier;
        total.totaalWijn = prijs.wijn * aantal.aantalWijn;
        total.totaalBitter8 = prijs.bitterballen8 * aantal.aantalBitterballen8;
        total.totaalBitter16 = prijs.bitterballen16 * aantal.aantalBitterballen16;
        return total.totaalFris + total.totaalBier + total.totaalWijn + total.totaalBitter8 + total.totaalBitter16;
    }


    function receiptBuilder(){
        var count = Object.values(aantal.aantalFris).length;
        console.log(count)
        console.log(Object.values(aantal));

        var htmlBuilder = "<h1> JOUW BESTELLING</h1>";
        htmlBuilder +=  "<hr>";

        if(aantal.aantalFris >= 1){
            htmlBuilder +=  "<strong>aantal fris: "+aantal.aantalFris+"</strong> = €" + total.totaalFris.toFixed(2) + "<br>";
        }
        if(aantal.aantalBier >= 1){
            htmlBuilder +=  "<strong>aantal bier: "+aantal.aantalBier+"</strong> = €" + total.totaalBier.toFixed(2) + "<br>";
        }
        if(aantal.aantalWijn >= 1){
            htmlBuilder +=  "<strong>aantal wijn: "+aantal.aantalWijn+"</strong> = €" + total.totaalWijn.toFixed(2) + "<br>";
        }
        if(aantal.aantalBitterballen8 >= 1){
            htmlBuilder +=  "<strong>aantal bitterballenschalen van 8 stuks: "+aantal.aantalBitterballen8+"</strong> = €" + total.totaalBitter8.toFixed(2) + "<br>";
        }
        if(aantal.aantalBitterballen16 >= 1){
            htmlBuilder +=  "<strong>aantal bitterballenschalen van 16 stuks: "+aantal.aantalBitterballen16+"</strong> = €" + total.totaalBitter16.toFixed(2)+ "<br>";
        }
        
        htmlBuilder += "<strong><br>Het totaal is €"+totaal().toFixed(2)+"</strong><br><br>";

        receipt.innerHTML = htmlBuilder;
    }

    alert('Het totaal wordt: €' + totaal().toFixed(2));
    receiptBuilder();
}