$(function () {
    $("#but1").click(function () {
        // On sépare les éléments que l'on veut modifier par des virgules, on peut leur attribuer plusieurs classes
        $("#p1, #p2").addClass("red bold");
        // Ajoute ou retire les classes
        $("#p1, #p2").toggleClass("red bold");
        // Ajoute un paramètre CSS
        $("#p1").css("color", "red");
        // Affiche la valeur du paramètre CSS voulu
        console.log($("#p1").css("color"));
        // Utilisation d'un objet pour changer plusieurs paramètres css en même temps
        $("#p1").css({
            "color" : "red",
            "font-weight" : "bold",
            "background" : "yellow"
        });
        // Affiche la largue du bouton 1
        console.log($("#but1").width());
        // Change la largeur et la hauteur du bouton 2
        $("#but2").width(150);
        $("#but2").height(150);
    })
    $("#but2").click(function () {
        $("#p1, #p2").removeClass("red bold");
    })

})