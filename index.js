let son = 4.5

//alert(Math.round(son))
//alert(Math.floor(son))

let ism1 =document.querySelector("#name1").value
let ism2 =document.querySelector("#name2").value
let natija

document.querySelector('#btn').addEventListener("click", function(){
  let tasodifiySon = Math.random() * 100  // 0.123123123123  -0.999999999
  let yahlitlangan = Math.floor(tasodifiySon) + 1  // 89.9 = 89 + 1

  if (yahlitlangan > 90) {
     natija = "Dostlik darajasi:" + yahlitlangan + "% Yaqin dostlarmiz"
  } else if (yahlitlangan > 50) {
  natija = "Dostlik darajasi:" + yahlitlangan +  "% Norm"
  } else if(yahlitlangan > 20) {
   natija = "Dostlik darajasi:" + yahlitlangan +  "% Yaqin dost emasmiz"
  } else {
    natija = "Dostlik darajasi:" + yahlitlangan +  "% Dost emasmiz"
  }

  document.querySelector('h2').innerHTML = natija

} )
     

//Avazbek va Emmaning dostlik darajasi: 99%
// alert("Dostlik darajasi:" + yahlitlangan)









