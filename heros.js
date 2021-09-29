const chapitre1 = {
    subtitle: "reveil",
    text: "Tu te reveille dans une belle foret au couleur d'emeraudes. Le soleil commence tout juste a eclairer l'interieur de cette foret florissante, bien qu'il soit difficile de bien y voir quelque chose tu repere deux chemins a l'horizon. ",
    img: "forest1.jpg",
    options: [ 
        {text: "Tourne gauche", action: `goToChapter(${item.subtitle})`}, 
        {text: "Ne rien faire", action: `goToChapter(${retry.subtitle})`},
        {text: "Tourne droite", action: `goToChapter(${chapitre2.subtitle})`}
    ],
};

const chapitre2 = {
    subtitle: "acromantule",
    text: "Prenant le chemin de droite tu te retrouve face a une horrible araignee geante; une acromantule. Celle-ci a l'air d'avoir faim, comment t'echappe tu?",
    img: "araignee.jpg",
    options: [ 
        {text: "Wingardium Leviosa", action: `goToChapter(${retry.subtitle})`}, 
        {text: "Spero Patronus", action: `goToChapter(${retry.subtitle})`},
        {text: "Incendio", action: `goToChapter(${chapitre3.subtitle})`}
    ],
};

const chapitre3 = {
    subtitle: "centaure",
    text: "T'echappant de justesse tu cours dans la foret suivant le chemin de terre raffermi par l'usure. Malhereusement, un petit groupe de centaure arme de leur arc a fleche se retrouve face a toi.",
    img: "arc.jpg",
    options: [ 
        {text: "Expelliarmus", action: `goToChapter(${retry.subtitle})`}, 
        {text: "Flipendo", action: `goToChapter(${retry.subtitle})`},
        {text: "Immobilis", action: `goToChapter(${chapitre4.subtitle})`}
    ],
};

const chapitre4 = {
    subtitle: "centaurePoursuite",
    text: "Bien que tu a reussi a les destabilise les centaures ne sont pas dupe et te poursuivent a travers la foret. Tu dois decide vite du sort a utiliser pour te sortir de ce petrin.",
    img: "forest2.jpg",
    options: [ 
        {text: "Avada Kedavra", action: `goToChapter(${prison.subtitle})`}, 
        {text: "Protego", action: `goToChapter(${retry.subtitle})`},
        {text: "Accio Balais", action: `goToChapter(${fin2.subtitle})`}
    ],
};

const fin1 = {
    subtitle: "retourneLeTemps",
    text: "C'etait toute une aventure! Les adultes sont arriver et ne sont pas tres contents. Tu utilise le retourneur de temps pour t'evite toutes ces peripeties.",
    img: "sablier.jpg",
};

const fin2 = {
    subtitle: "punition",
    text: "Tu reussi a t'en sortir idem, toute mes felicitations! Toutefois tu te fais attraper par les professeurs mecontents. Tu te retrouve a faire des heures de colle, ayant briser la regle de ne pas aller dans la foret interdite.",
    img: "classe.jpg",
};

const retry = {
    subtitle: "mort",
    text: "Malhereusement, la foret interdite etait bien plus dangereuse que tu ne le croyais. Les ennemis t'ont vaincus. Veux-tu reessayer?",
    img: "corbeau.jpg",
    options: [ {text: "Debut", action: `goToChapter(${prison.chapitre1})`,} ],
};

const item = {
    subtitle: "retourneTemps",
    text: "A gauche toute! Un objets dore capte ton attention, mais a peine apres l'avoir ramasse un gros caillou te tombe sur la tete et tu t'evanouis. ",
    img: "montre.jpg",
    options: [ {text: "Retour", action: `goToChapter(${prison.chapitre1})`,} ],
};

const prison = {
    subtitle: "azkaban",
    text: "C'etait bien pense, mais l'usage de sorts interdits viens avec de grande consequence. Suite au evenements tu te retrouve a la fameuse prison d'Azkaban ",
    img: "prison.jpg",
    options: [ {text: "Recommencer", action: `goToChapter(${prison.retry})`,} ],
};

const chapterObj = {
    start: chapitre1,
    chapters: [chapitre1, chapitre2, chapitre3, chapitre4, fin1, fin2, retry, item, prison],
};

function goToChapter (chapterName) {
    for (let index = 0; index < chapterObj.chapters.length; index++){
        if(chapterName === chapterObj.chapters[index].subtitle){
            let chapitre = chapterObj.chapters[index]
            console.log(chapitre.subtitle);
            console.log(chapitre.text);
        }
    } 
};

