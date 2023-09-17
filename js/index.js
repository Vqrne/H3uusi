const usersTable = document.getElementById("users");
//const postsTable = document.getElementById("posts");
const getUsersButton = document.getElementById("getUsers");

getUsersButton.addEventListener("click", getUsers);

async function getUsers() {
  const url =
    "https://statfin.stat.fi/PxWeb/sq/4e244893-7761-4c4f-8e55-7a8d41d86eff";
  const usersPromise = await fetch(url);
  const userJSON = await usersPromise.json();

  const url2 =
    "https://statfin.stat.fi/PxWeb/sq/5e288b40-f8c8-4f1e-b3b0-61b86ce5c065";
  const usersPromise2 = await fetch(url2);
  const userJSON2 = await usersPromise2.json();

  const values = userJSON.dataset.value;
  const values2 = userJSON2.dataset.value;

  //const areas = [];
  var i = 0;
  for (const key in userJSON.dataset.dimension.Alue.category.label) {
    //areas.push(userJSON.dataset.dimension.Alue.category.label[key]);
    let tr = document.createElement("tr");
    let td1 = document.createElement("td");
    let td2 = document.createElement("td");
    let td3 = document.createElement("td");
    let td4 = document.createElement("td");

    const percentage = parseFloat(values2[i] / values[i]).toFixed(2);

    if (percentage > 0.45) {
      tr.bgColor = "#abffbd";
    } else if (percentage < 0.25) {
      tr.bgColor = "##ff9e9e";
    }

    td1.innerText = userJSON.dataset.dimension.Alue.category.label[key];
    td2.innerText = values[i];
    td3.innerText = values2[i];
    td4.innerText = percentage;
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
    usersTable.appendChild(tr);
    i = i + 1;
  }
}
