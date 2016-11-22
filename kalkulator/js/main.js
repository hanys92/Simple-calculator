var totalPallets = 0;
var selectedOption = "";
var totalCost = 0;
var allCost = 0;
var directCost = 0;
var totalDirectPallets = 0;
var keyCosignee;

http://stackoverflow.com/questions/18808830/jquery-checkbox-val-always-return-on


$(document).ready(function(){
    getData();
     
    
});


function getData() {
    $('.btn').on('click', function() {
    totalPallets = $('#volumePallets').val();
    selectedOption = $( "#selectOption option:selected").val();
    keyCosignee = $('#filled-in-box').prop( "checked");
    if(keyCosignee) {
        calculateKeyDepot();
    } else {
        calculateDepot();
    };    
    showResult();
    calculateDirect();
    });
};

//calculation cost delivery to key cosignee
function calculateKeyDepot() {
    if (selectedOption == 1) {
        if(parseInt(totalPallets) >= 10) {
            totalCost = parseInt(totalPallets)*21.15;
        } else {
            switch(parseInt(totalPallets)) {
            case 1: totalCost = 29.61;
            break;
            case 2: totalCost = parseInt(totalPallets)*26.78;
            break;
            case 3: totalCost = parseInt(totalPallets)*25.25;
            break;
            case 4: totalCost = parseInt(totalPallets)*23.72;
            break;
            case 5: totalCost = parseInt(totalPallets)*22.02;
            break;
            case 6: totalCost = parseInt(totalPallets)*24.50;
            break;
            case 7: totalCost = parseInt(totalPallets)*25.76;
            break;
            case 8: totalCost = parseInt(totalPallets)*25.48;
            break;
            case 9: totalCost = parseInt(totalPallets)*23.80;
            break;
            default : alert("Błędna wartość");
            };
        };
        
    } else if(selectedOption == 2) {
        if(parseInt(totalPallets) >= 10) {
            totalCost = parseInt(totalPallets)*27.45;
        } else {
            switch(parseInt(totalPallets)) {
            case 1: totalCost = 32.85;
            break;
            case 2: totalCost = parseInt(totalPallets)*31.23;
            break;
            case 3: totalCost = parseInt(totalPallets)*29.97;
            break;
            case 4: totalCost = parseInt(totalPallets)*28.80;
            break;
            case 5: totalCost = parseInt(totalPallets)*26.82;
            break;
            case 6: totalCost = parseInt(totalPallets)*28.50;
            break;
            case 7: totalCost = parseInt(totalPallets)*30.71;
            break;
            case 8: totalCost = parseInt(totalPallets)*30.94;
            break;
            case 9: totalCost = parseInt(totalPallets)*29.82;
            break;
            default : alert("Błędna wartość");
            };
        };
    } else if(selectedOption == 3) {
        if(parseInt(totalPallets) >= 10) {
            totalCost = parseInt(totalPallets)*47.25;
        } else {
            switch(parseInt(totalPallets)) {
            case 1: totalCost = 51.80;
            break;
            case 2: totalCost = parseInt(totalPallets)*49.50;
            break;
            case 3: totalCost = parseInt(totalPallets)*48.20;
            break;
            case 4: totalCost = parseInt(totalPallets)*46.80;
            break;
            case 5: totalCost = parseInt(totalPallets)*43.80;
            break;
            case 6: totalCost = parseInt(totalPallets)*42.00;
            break;
            case 7: totalCost = parseInt(totalPallets)*45.89;
            break;
            case 8: totalCost = parseInt(totalPallets)*47.58;
            break;
            case 9: totalCost = parseInt(totalPallets)*47.60;
            break;
            default : alert("Błędna wartość");
            };
        };
    } else if(selectedOption == 4) {
        if(parseInt(totalPallets) >= 10) {
            totalCost = parseInt(totalPallets)*57.17;
        } else {
            switch(parseInt(totalPallets)) {
            case 1: totalCost = 58.50;
            break;
            case 2: totalCost = parseInt(totalPallets)*56.70;
            break;
            case 3: totalCost = parseInt(totalPallets)*54.90;
            break;
            case 4: totalCost = parseInt(totalPallets)*53.10;
            break;
            case 5: totalCost = parseInt(totalPallets)*49.90;
            break;
            case 6: totalCost = parseInt(totalPallets)*49.65;
            break;
            case 7: totalCost = parseInt(totalPallets)*54.49;
            break;
            case 8: totalCost = parseInt(totalPallets)*56.91;
            break;
            case 9: totalCost = parseInt(totalPallets)*57.68;
            break;
            default : alert("Błędna wartość");
            };
        };
    };
    totalCost = +totalCost.toFixed(2);
    allCost = (totalCost + (totalPallets*25)).toFixed(2); //średni koszt pal per linia
};



//calculation cost delivery to normal cosignee
function calculateDepot() {
    if (selectedOption == 1) {
        if(parseInt(totalPallets) >= 10) {
            totalCost = parseInt(totalPallets)*33.75;
        } else {
            switch(parseInt(totalPallets)) {
            case 1: totalCost = 32.85;
            break;
            case 2: totalCost = parseInt(totalPallets)*29.75;
            break;
            case 3: totalCost = parseInt(totalPallets)*28.05;
            break;
            case 4: totalCost = parseInt(totalPallets)*26.78;
            break;
            case 5: totalCost = parseInt(totalPallets)*25.08;
            break;
            case 6: totalCost = parseInt(totalPallets)*28.50;
            break;
            case 7: totalCost = parseInt(totalPallets)*31.05;
            break;
            case 8: totalCost = parseInt(totalPallets)*33.15;
            break;
            case 9: totalCost = parseInt(totalPallets)*33.60;
            break;
            default : alert("Błędna wartość");
            };
        };
        
    } else if(selectedOption == 2) {
        if(parseInt(totalPallets) >= 10) {
            totalCost = parseInt(totalPallets)*38.25;
        } else {
            switch(parseInt(totalPallets)) {
            case 1: totalCost = 36.45;
            break;
            case 2: totalCost = parseInt(totalPallets)*34.65;
            break;
            case 3: totalCost = parseInt(totalPallets)*32.67;
            break;
            case 4: totalCost = parseInt(totalPallets)*31.05;
            break;
            case 5: totalCost = parseInt(totalPallets)*29.70;
            break;
            case 6: totalCost = parseInt(totalPallets)*31.50;
            break;
            case 7: totalCost = parseInt(totalPallets)*34.50;
            break;
            case 8: totalCost = parseInt(totalPallets)*37.05;
            break;
            case 9: totalCost = parseInt(totalPallets)*37.80;
            break;
            default : alert("Błędna wartość");
            };
        };
    } else if(selectedOption == 3) {
        if(parseInt(totalPallets) >= 10) {
            totalCost = parseInt(totalPallets)*44.25;
        } else {
            switch(parseInt(totalPallets)) {
            case 1: totalCost = 44.50;
            break;
            case 2: totalCost = parseInt(totalPallets)*42.50;
            break;
            case 3: totalCost = parseInt(totalPallets)*40.50;
            break;
            case 4: totalCost = parseInt(totalPallets)*39.00;
            break;
            case 5: totalCost = parseInt(totalPallets)*37.50;
            break;
            case 6: totalCost = parseInt(totalPallets)*36.50;
            break;
            case 7: totalCost = parseInt(totalPallets)*39.68;
            break;
            case 8: totalCost = parseInt(totalPallets)*42.90;
            break;
            case 9: totalCost = parseInt(totalPallets)*43.40;
            break;
            default : alert("Błędna wartość");
            };
        };
    } else if(selectedOption == 4) {
        if(parseInt(totalPallets) >= 10) {
            totalCost = parseInt(totalPallets)*67.21;
        } else {
            switch(parseInt(totalPallets)) {
            case 1: totalCost = 63.50;
            break;
            case 2: totalCost = parseInt(totalPallets)*60.50;
            break;
            case 3: totalCost = parseInt(totalPallets)*58.50;
            break;
            case 4: totalCost = parseInt(totalPallets)*57.50;
            break;
            case 5: totalCost = parseInt(totalPallets)*55.00;
            break;
            case 6: totalCost = parseInt(totalPallets)*55.11;
            break;
            case 7: totalCost = parseInt(totalPallets)*60.41;
            break;
            case 8: totalCost = parseInt(totalPallets)*65.61;
            break;
            case 9: totalCost = parseInt(totalPallets)*67.05;
            break;
            default : alert("Błędna wartość");
            };
        };
    };
    totalCost = +totalCost.toFixed(2);
    allCost = (totalCost + (totalPallets*25)).toFixed(2); //średni koszt pal per linia
};

function showResult() {
     $('#rrv').html('- Koszta RRV, w tym wypadku jest to <span class="colDist">'+totalCost + ' PLN</span>.');
     $('#depot').html('- Koszt transportu palet linią do oddziału dostarczającego, w tym wypadku jest to <span class="colDist"> '+(totalPallets*25) + ' PLN</span> (przyjęto średnio koszt 25pln/mpt).');
     $('#resultDepot').html(' '+allCost+' PLN.');
     allCostFix = +(allCost/totalPallets).toFixed(2);
     $('#averageDepot').html(' '+allCostFix+' PLN.');
     
 };

function calculateDirect() {
    directCost = $('#directCost').val();
    console.log(directCost);
    totalDirectPallets = parseInt(totalPallets);
    var addPallets = $('#extraPallets').val();
    if(addPallets > 0) {
        totalDirectPallets += parseInt(addPallets);
    };
    allCostDirect = +(directCost/totalDirectPallets).toFixed(2);
    console.log(totalDirectPallets);
    $('#allCost').html('Koszt dostawy bezpośredniej to po prostu cena frachtu, w tym wypadku jest to <span class="colDist">'+directCost+ ' PLN</span>.');
    $('#averageDirect').html('Średni koszt per paleta to <span class="colDist">'+allCostDirect+ ' PLN</span>.');
}