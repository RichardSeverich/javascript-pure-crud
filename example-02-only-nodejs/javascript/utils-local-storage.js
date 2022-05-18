function storeData(variableName, data) {
  let stringifyArray = JSON.stringify(data);
  localStorage.setItem(variableName, stringifyArray);
}

function getData(variableName) {
  let retrievedObject = localStorage.getItem(variableName);
  let data = JSON.parse(retrievedObject);
  return data;
}

function setUpStorageUsers() {
  let array = localStorage.getItem("arrayUsers");
  if (array === null || array.length == 2) {
    localStorage.setItem("edit", "false");
    let arrayUsers = [];
    storeData("arrayUsers", arrayUsers);
    defaultDataUsers();
  }
}

function setUpStorageProducts() {
  let array = localStorage.getItem("arrayProducts");
  if (array === null || array.length == 2) {
    localStorage.setItem("edit", "false");
    let arrayProducts = [];
    storeData("arrayProducts", arrayProducts);
    defaultDataProducts();
  }
}
