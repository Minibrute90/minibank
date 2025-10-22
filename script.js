let prenom = prompt("Entrez votre prénom svp");
let depot = prompt(" Entrez Votre dépot svp");

if (depot == isNaN){
    depot = new Number;
}

if (depot < 0 || isNaN(depot) ){
    depot = 0;
}

console.log("Compte créé pour " + prenom + ". Solde = " + depot + " €");
console.log(typeof depot);


 
 





