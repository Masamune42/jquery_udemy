$(function () {
    $("#start").click(function () {
        // Affiche la valeur de l'input
        console.log($('#p1').html());
        // Affiche la valeur de l'input
        console.log($('#myInput').val());

        // Affiche l'attribut
        console.log($('div').attr("style"));
        
        // Change l'html
        $("#p1").html("Voilà le <b>nouveau</b> texte");
        // CHange la valeur
        $("#myInput").val("New val");

        // Ajout d'un élément à la fin de l'élément
        $('div').append("<p>Mon nouveau paragraphe</p>");
        // Ajout d'un élément à au début de l'élément
        $('div').prepend("<p>Mon nouveau paragraphe</p>");
        // Ajout d'un élément après l'élément
        $('div').after("<p>Mon nouveau paragraphe</p>");
        // Ajout d'un élément avant l'élément
        $('div').before("<p>Mon nouveau paragraphe</p>");
        // Retire le contenu de l'élément
        $("div").empty();
        // Retire l'élément et son contenu
        $("div").remove();
    })

})