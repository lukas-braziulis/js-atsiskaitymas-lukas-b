/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formul4: oz = kg * 35.274

Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiamas
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */

const element = document.getElementById("submit-btn");
element.addEventListener("click", getWeight);

function getWeight(event) {
  event.preventDefault();

  const kilogramai = document.getElementById("search").value;
  console.log(kilogramai);
  document.getElementById("weight-table").style.display = "block";

  document.getElementById("svarai-value").innerHTML = kilogramai * 2.2046;
  document.getElementById("gramai-value").innerHTML = kilogramai / 0.001;
  document.getElementById("uncijos-value").innerHTML = kilogramai * 35.274;
}
