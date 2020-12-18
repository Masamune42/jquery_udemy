$(function () {
    $("#start").click(function () {
        // PARENTS
        // Modifie le css du parent de l'élément sélectionné
        $("#p1").parent().css("border-color", "green");
        // Modifie le css de tous les parents de l'élément sélectionné
        $("#p1").parents().css("border-color", "green");
        // Modifie le css de tous les parents avec la classe special de l'élément sélectionné
        $("#p1").parents(".special").css("border-color", "green");

        // ENFANTS
        // Modifie le css des enfants directs de l'élément sélectionné
        $("#div1").children().css("border-color", "green");
        // On va chercher dans l'élément sélectionné, tous ceux qui sont des paragraphe et on va changer leur css
        $("#main").find("p").css("border-color", "green");
        
        // FRERES
        // On change le css des frères du paragraphe sélectionné
        $("#p1").siblings().css("border-color", "green");
        // On change le css du frère suivant
        $("#p1").next().css("border-color", "green");
        // On change le css du 1er élément parmi ceux sélectionnés
        $("p").first().css("border-color", "green");
        // On change le css du dernier élément parmi ceux sélectionnés
        $("p").last().css("border-color", "green");
        // On change le css du paragraphe à l'index sélectionné
        $("p").eq(2).css("border-color", "green");
        // On change le css des paragraphe, filtrés par ceux qui ont la classe special
        $("p").filter(".special").css("border-color", "green");
        // On change le css des paragraphe, filtrés par ceux qui n'ont pas la classe special
        $("p").not(".special").css("border-color", "green");
    })
})