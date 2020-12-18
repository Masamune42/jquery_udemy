$(document).ready(function () {
    // Evénement hover
    $("#p1").hover(function (e) {
        $("#p5").hide();
    },
        // 2e fonction pour le hover : quand je retire la souris de l'élément
        function () {
            $("#p5").show();
        });

    // Evenement on
    $("#p2").on("click", function () {
        $("#p4").hide();
    });

    // Event qui attend des objets, ouvert par des {}
    $("#p2").on({
        // On peut mettre plein d'évènements
        mouseenter: function () { 
            $('#p3').hide();
        },
        mouseleave: function () { 
            $('#p3').show();
        },
    });

})