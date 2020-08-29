function storeData(variableName, data) {
  let stringifyArrayUsers = JSON.stringify(data);
  localStorage.setItem(variableName, stringifyArrayUsers);
}

function getData(variableName) {
  let retrievedObject = localStorage.getItem(variableName);
  let data = JSON.parse(retrievedObject);
  return data;
}

function setUpStorage() {
  let array = localStorage.getItem("arrayUsers");
  if (array === null || array.length == 2) {
    localStorage.setItem("edit", "false");
    let arrayUsers = [];
    storeData("arrayUsers", arrayUsers);
    defaultData();
  }
}
