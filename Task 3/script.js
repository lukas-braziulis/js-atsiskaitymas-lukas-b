/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Informacija atvaizdavima <div id="output"></div> bloke
1.1. Informacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;

Pastaba: Sukurta kortelė, kurioje yra pateikiama vartotojo informacija, turi 
turėti bent minimalų stilių ir būti responsive;
-------------------------------------------------------------------------- */

// const ENDPOINT = "https://api.github.com/users";

function gitUserCard(fetchData) {
  const cardContainer = document.createElement("div");
  const gitUser = document.createElement("h2");
  const gitAvatar = document.createElement("img");
  const breakTag = document.createElement("br");

  gitUser.textContent = fetchData.login;
  gitAvatar.src = fetchData.avatar_url;

  cardContainer.appendChild(gitUser);
  cardContainer.appendChild(gitAvatar);
  cardContainer.appendChild(breakTag);
  document.getElementById("output").appendChild(cardContainer);

  document.getElementById("message").style.display = "none";
}

const gitUserDatabase = async () => {
  try {
    const response = await fetch("https://api.github.com/users");
    if (response.ok) {
      const responseJSON = await response.json();

      console.log(responseJSON);

      responseJSON.forEach((element) => {
        gitUserCard(element);
      });
    } else {
      console.log(`Something went wrong. Error code: ${response.status}`);
    }
  } catch (error) {
    console.log(error);
  }
};

const showUsersButton = document.getElementById("btn");
showUsersButton.addEventListener("click", gitUserDatabase);
