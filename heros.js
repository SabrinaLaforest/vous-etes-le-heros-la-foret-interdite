const chapterObj = {  
    chapitre1: {
        subtitle: "Le reveil",
        text: "Tu te reveille dans une belle foret au couleur d'emeraudes. Le soleil commence tout juste a eclairer l'interieur de cette foret florissante, bien qu'il soit difficile de bien y voir quelque chose tu repere deux chemins a l'horizon. ",
        img: "forest1.jpg",
        options: [ 
            {text: "Tourne gauche", action: "goToChapter('item')"}, 
            {text: "Tourne droite", action: "goToChapter('chapitre2')"},
            {text: "Ne rien faire", action: "goToChapter('retry')"},
        ],
    },
    chapitre2:
    {
        subtitle: "Le monstre a huit pattes",
        text: "Prenant le chemin de droite tu te retrouve face a une horrible araignee geante; une acromantule. Celle-ci a l'air d'avoir faim, comment t'echappe tu?",
        img: "araignee.jpg",
        options: [ 
            {text: "Wingardium Leviosa", action: "goToChapter('retry')"}, 
            {text: "Spero Patronus", action: "goToChapter('retry')"},
            {text: "Incendio", action: "goToChapter('chapitre3')"}
        ],
    },
    chapitre3:    
    {
        subtitle: "Les centaures",
        text: "T'echappant de justesse tu cours dans la foret suivant le chemin de terre raffermi par l'usure. Malhereusement, un petit groupe de centaure arme de leur arc a fleche se retrouve face a toi.",
        img: "arc.jpg",
        options: [ 
            {text: "Immobilis", action: "goToChapter('chapitre4')"},
            {text: "Expelliarmus", action: "goToChapter('retry')"}, 
            {text: "Flipendo", action: "goToChapter('retry')"}
            
        ],
    },
    chapitre4:    
    {
        subtitle: "La poursuite",
        text: "Bien que tu a reussi a les destabilise les centaures ne sont pas dupe et te poursuivent a travers la foret. Tu dois decide vite du sort a utiliser pour te sortir de ce petrin.",
        img: "forest2.jpg",
        options: [ 
            {text: "Avada Kedavra", action: "goToChapter('prison')"}, 
            {text: "Accio Balais", action: "goToChapter('fin2')"},
            {text: "Protego", action: "goToChapter('retry')"}
            
        ],
    },
    fin1:    
    {
        subtitle: "Retourner dans le temps",
        text: "C'etait toute une aventure! Les adultes sont arriver et ne sont pas tres contents. Tu utilise le retourneur de temps pour t'evite toutes ces peripeties.",
        img: "sablier.jpg",
        options: [ 
            {text: "", action: "goToChapter('X')",},
            {text: "", action: "goToChapter('X')",},
            {text: "", action: "goToChapter('X')",}
        ],
    },
    fin2:    
    {
        subtitle: "Tu t'es fait attraper",
        text: "Tu reussi a t'en sortir idem, toute mes felicitations! Toutefois tu te fais attraper par les professeurs mecontents. Tu te retrouve a faire des heures de colle, ayant briser la regle de ne pas aller dans la foret interdite.",
        img: "classe.jpg",
        options: [ 
            {text: "", action: "goToChapter('X')",},
            {text: "", action: "goToChapter('X')",},
            {text: "", action: "goToChapter('X')",}
        ],
    },
    retry:    
    {
        subtitle: "Mort",
        text: "Malhereusement, la foret interdite etait bien plus dangereuse que tu ne le croyais. Les ennemis t'ont vaincus. Veux-tu reessayer?",
        img: "corbeau.jpg",
        options: [ 
            {text: "", action: "goToChapter('X')",},
            {text: "Debut", action: "goToChapter('chapitre1')",}, 
            {text: "", action: "goToChapter('X')",}
        ],
    },
    item:    
    {
        subtitle: "Le retourne temps",
        text: "A gauche toute! Un objets dore capte ton attention, mais a peine apres l'avoir ramasse un gros caillou te tombe sur la tete et tu t'evanouis. ",
        img: "montre.jpg",
        options: [ 
            {text: "", action: "goToChapter('X')",},
            {text: "Retour", action: "goToChapter('chapitre1')",},
            {text: "", action: "goToChapter('X')",} 
    ],
    },
    prison:    
    {
        subtitle: "Azkaban",
        text: "C'etait bien pense, mais l'usage de sorts interdits viens avec de grande consequence. Suite au evenements tu te retrouve a la fameuse prison d'Azkaban ",
        img: "prison.jpg",
        options: [ 
            {text: "", action: "goToChapter('X')",} ,
            {text: "Recommencer", action: "goToChapter('Debut')",},
            {text: "", action: "goToChapter('X')",}
    ],
    }
    
};

function goToChapter (chapterName) {
    let chapitre = chapterObj[chapterName];
    
    document.getElementsByClassName("subtitle")[0].innerHTML = `<h3>${chapitre.subtitle}</h3>`
    document.getElementsByClassName("text")[0].textContent = chapitre.text;
    document.getElementsByClassName("Forest")[0].src = `assets/${chapitre.img}`
    
    for(let index = 0; index <= chapitre.options.length-1; index++) {
        document.getElementsByClassName("buttons")[index].textContent = chapitre.options[index].text;
        document.getElementsByClassName("buttons")[index].setAttribute('onclick', chapitre.options[index].action);
    } 
}

let itemFound = false;

function keyFounded(){
    goToChapter("item");
    itemFound = true;
    console.log("ok");
}

goToChapter("chapitre1");