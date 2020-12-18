$(function () {
    $("#p1").click(function () {
        // cache lentement
        $("#p5").hide("slow");

        // cache l'élément au bout de 1000ms
        $("#p5").hide(1000);

        // cache et montre les éléments au fur et à mesure avec un callback en 2 paramètre de la fonction hide
        $("#p2").toggle(1000, function () {
            $("#p3").toggle(1000, function () {
                $("#p4").toggle(1000, function () {
                    $("#p5").toggle(1000);
                });
            });
        });

        // Change l'opacité du paragraphe jusqu'à disparaitre (display: none;) après 3s
        $("#p5").fadeOut(3000);
        // Idem mais dans le sens inverse
        $("#p5").fadeIn(3000);

        // Change l'opacité pour faire disparaitre ou apparaitre l'élément après 3s
        $("#p5").fadeToggle(3000);
        
        // change l'opacité de l'élément à 0.5 en 3s
        $("#p5").fadeTo(3000, 0.5);
    });

})