// PART 2

// On target l'input utilisateur
let inputSouille2 = document.getElementById("bourreTonFichierTXTici");

// Ptit event listener des familles pour écouter l'event change sur l'input
inputSouille2.addEventListener("change", function (e) {
  // On récupère le fichier du démon
  let pourquoiCestFormateCommeCaBordel2 = inputSouille2.files[0];

  // On initialise le truc béni des dieux pour lire le bouzin
  let jesus2 = new FileReader();
  jesus2.onload = function (e) {

    // on récupère le résultat de l'opération du saint esprit dans une var
    let deguiDegueu2 = jesus2.result;

    // ensuite on la formate parce que c'est dégui dégueux pour le momnent
    let moinsDegueulasse2 = deguiDegueu2.trim().split('\n').map((num) => parseInt(num, 10) );

    // Maintenant qu'il est tout beau tout propre on peut le reluquer comme il se doit
    let nombreDeFoisOuCaAugmenteParceQuonEstLaPourCaALaBase2 = 0;
    let lengthDuBouzin2 = moinsDegueulasse2.length;
    
    // On boucle pour check si la triplette en cours est inférieur à la triplette qui suit. On retire juste 3 à la length parce qu'on compte en triplette.
    for(let i = 0; i < lengthDuBouzin2 -3; i++){
      // On def le nombre en cours
      let enCours2 = moinsDegueulasse2[i] + moinsDegueulasse2[i + 1] + moinsDegueulasse2[i + 2]
      // On def le nombre suivant
      let apres2 = moinsDegueulasse2[i + 1] + moinsDegueulasse2[i + 2] + moinsDegueulasse2[i + 3];

      // on fait notre comparaison et on incrémente le nombre d'augmentation si la condition return true
      if(apres2 > enCours2){
        nombreDeFoisOuCaAugmenteParceQuonEstLaPourCaALaBase2++;
      }
    }
    // et enfin, en dehors de la boucle sinon vous allez casser le navigateur, vous faites un ptit console log des familles
    console.log("PART 2 -> " + nombreDeFoisOuCaAugmenteParceQuonEstLaPourCaALaBase2);
  };

  jesus2.readAsText(pourquoiCestFormateCommeCaBordel2);
});