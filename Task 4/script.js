/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, vartotojui atėjus į tinklapį kreipsis į cars.json failą
ir iš atvaizduos visus automobilių gamintojus ir pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.


Pastaba: Sukurta kortelė, kurioje yra informacija apie automobilį (brand), turi 
turėti bent minimalų stilių ir būti responsive;
-------------------------------------------------------------------------- */

const ENDPOINT = "cars.json";

let carList = {};
function fetchedData(robots) {
  const outputResult = document.getElementById("output");
  for (let i = 0; i < robots.length; i++) {
    const container = document.createElement("div");
    const carBrand = document.createElement("h2");
    const carModel = document.createElement("p");

    carBrand.innerText = robots[i].brand;

    carBrand.className = "brandContainer";
    container.className = "bendrasContainer";
    carModel.innerText = robots[i].models;

    container.append(carBrand);
    container.append(carModel);
    outputResult.append(container);
  }
}
fetch("./cars.json")
  .then((result) => result.json())
  .then((resultJSON) => {
    carList = resultJSON;
    fetchedData(carList);
  })
  .catch((err) => console.error(err));
