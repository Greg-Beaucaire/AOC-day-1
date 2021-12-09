// PART 1

// On target l'input utilisateur
let inputSouille = document.getElementById("bourreTonFichierTXTici");

// Ptit event listener des familles pour écouter l'event change sur l'input
inputSouille.addEventListener("change", function (e) {
  // On récupère le fichier du démon
  let pourquoiCestFormateCommeCaBordel = inputSouille.files[0];

  // On initialise le truc béni des dieux pour lire le bouzin
  let jesus = new FileReader();
  jesus.onload = function (e) {

    // on récupère le résultat de l'opération du saint esprit dans une var
    let deguiDegueu = jesus.result;

    // ensuite on la formate parce que c'est dégui dégueux pour le momnent
    let moinsDegueulasse = deguiDegueu.trim().split('\n').map((num) => parseInt(num, 10) );

    // Maintenant qu'il est tout beau tout propre on peut le reluquer comme il se doit
    let nombreDeFoisOuCaAugmenteParceQuonEstLaPourCaALaBase = 0;
    let lengthDuBouzin = moinsDegueulasse.length;
    
    // On boucle pour check si le nombre courrant est inférieur au nombre qui suit 
    for(let i = 0; i < lengthDuBouzin; i++){
      // On def le nombre en cours
      let enCours = moinsDegueulasse[i];
      // On def le nombre suivant
      let apres = moinsDegueulasse[i + 1];

      // on fait notre comparaison et on incrémente le nombre d'augmentation si la condition return true
      if(apres > enCours){
        nombreDeFoisOuCaAugmenteParceQuonEstLaPourCaALaBase++;
      }
    }
    // et enfin, en dehors de la boucle sinon vous allez casser le navigateur, vous faites un ptit console log des familles
    console.log("PART 1 -> " + nombreDeFoisOuCaAugmenteParceQuonEstLaPourCaALaBase);
  };

  jesus.readAsText(pourquoiCestFormateCommeCaBordel);
});