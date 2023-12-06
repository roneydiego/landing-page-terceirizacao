var serviceCard = $(".service-card");

$(".cotacao-btn").addClass("hoveranim");


$(".cotacao-btn").click((event) => {
    var choosenArea = event.currentTarget.parentElement.children[0].innerText;
});

$(".description").slideToggle();

var btnCard = $(".btn-card");
btnCard.click(function (event) {
    var description = event.currentTarget.nextElementSibling;
    $(description).slideToggle();
    var arrowImg = event.currentTarget.children[1];
    $(arrowImg).slideToggle();
});

$("option").click((event) => {
    if (event.target.value === "outro") {
        $(".outroServ").css("visibility", "visible");
    }
    else {
        $(".outroServ").css("visibility", "hidden");
    }
});

var counter = 0;
var sliderAtbeginning = true;
$(document).ready(()=> {
    setInterval(() => {
        if (sliderAtbeginning) {
            $(".clients-img").scrollLeft(counter++);
            if (counter >= $(".clients-img").width()) {
                sliderAtbeginning = false;
            }
        }
        else {
            $(".clients-img").scrollLeft(counter--);
            if (counter === -100) {
                sliderAtbeginning = true;
            }
        }
    }, 15);
});


function startCounter(index) {
    var numberData = $(".number-update");
    var dataCounter = 0
    var whatsTheNumber = (numberData[index].innerText)*1;
    var step = 1;
    if (whatsTheNumber <= 100) {
        step = 1;
    }
    else if (whatsTheNumber <= 200){
        step = 2;
    }
    else {
        step = 50
    }
    setInterval(() => {
        if (dataCounter <= whatsTheNumber) {
            numberData[index].innerText = dataCounter;
            dataCounter += step;
        }
    }, 60);
}

$(document).ready(() => {
    $(".data-stats > *").slideDown();
    startCounter(0);
    startCounter(1);
    startCounter(2);
});


