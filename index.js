window.onload = function() {
     document.querySelector("#btn").addEventListener("click",() =>
     { 
    document.querySelector("#excusa").innerHTML = generateExcuse();
   }); 
}; 


function generateExcuse(){

    let pronoun = ['The dog','My grandma','His turtle','My bird'];
    let action = ['ate','peed','crushed','broke'];
    let possetion = ['my homework', 'the keys', 'the car'];
    let where = ['before the class','right on time','when I finished','during my lunch','while I was praying'];

    let proIndx = Math.floor(Math.random() * pronoun.length);
    let actionIndx = Math.floor(Math.random() * action.length);
    let possIndx = Math.floor(Math.random() * possetion.length);
    let whereIndx = Math.floor(Math.random() * where.length);
    

    return pronoun[proIndx] + " " + action[actionIndx] + " " + possetion[possIndx] + " " + where[whereIndx]
};


