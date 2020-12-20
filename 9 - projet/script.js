$(function () {
    // On sélectionne tous les éléments de la liste qui sont des li
    let $mainMenuItems = $("#main-menu ul").children("li"),
        // Taille du menu
        totalMainMenuItems = $mainMenuItems.length,
        // Nombre de menus ouverts
        openedIndex = 2,
        init = function () {
            bindEvents();
            if (validIndex(openedIndex))
                animateItem($mainMenuItems.eq(openedIndex), true, 700);
        },
        bindEvents = function () {
            $mainMenuItems.children(".images").click(function () {
                // On récupère l'index du parent de l'image sur laquelle on a cliqué
                let newIndex = $(this).parent().index();
                // On vérifie l'index sur lequel on a cliqué et l'anime
                checkAndAnimateItem(newIndex);
            });
            // Simule un .button:hover
            $('.button').hover(
                // Fonction qui se produit quand on survole le bouton
                function () {
                    $(this).addClass('hovered');
                },
                // Quand on retire le curseur du bouton
                function () {
                    $(this).removeClass('hovered');
                });

            // Si on clique sur un bouton
            $('.button').click(function () {
                // On récupère l'index du parent de l'image sur laquelle on a cliqué
                let newIndex = $(this).index();
                checkAndAnimateItem(newIndex);
            });
        },
        // Vérifie si l'index passé et valable
        validIndex = function (indexToCheck) {
            return (indexToCheck >= 0) && (indexToCheck < totalMainMenuItems)
        },
        // Fonction qui permet d'animer
        /**
         * $item : item (li) à animer
         * toOpen : true si on veut ouvrir l'onglet, sinon false
         * speed : vitesse d'exécution de l'animation 
         */
        animateItem = function ($item, toOpen, speed) {
            let $colorImage = $item.find('.color'),
                // paramètres de l'item Ouvert / Fermé
                itemParam = toOpen ? { width: "420px" } : { width: "140px" },
                // paramètres de l'image de l'item Ouvert / Fermé
                colorImageParam = toOpen ? { left: "0px" } : { left: "140px" };
            // On place l'image en couleur à la bonne position
            $colorImage.animate(colorImageParam, speed);
            // On change la largeur de l'item li pour afficher la description
            $item.animate(itemParam, speed);
        },
        // Fonction d'ouverture / fermeture des images suivant l'index cliqué passé en paramètre
        checkAndAnimateItem = function (indexToCheckAndAnimate) {
            // Si on clique sur l'item qui est déjà ouvert, on le ferme
            if (openedIndex === indexToCheckAndAnimate) {
                animateItem($mainMenuItems.eq(indexToCheckAndAnimate), false, 250);
                openedIndex = -1;
            } else {
                if (validIndex(indexToCheckAndAnimate)) {
                    // Animation d'ouverture de l'item
                    animateItem($mainMenuItems.eq(openedIndex), false, 250);
                    // L'index ouvert est celui qu'on a sélectionné
                    openedIndex = indexToCheckAndAnimate;
                    // Animation d'ouverture de l'item
                    animateItem($mainMenuItems.eq(openedIndex), true, 250);
                }
            }
        };

    init();
})