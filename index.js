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
