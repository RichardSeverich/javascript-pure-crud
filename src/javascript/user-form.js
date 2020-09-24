function onFormSubmit() {
  setUpStorageUsers();
  let edit = localStorage.getItem("edit");
  let formData = readFormData();
  let arrayUsers = getData("arrayUsers");
  if (edit == "true") {
    let editData = getData("editData");
    arrayUsers.splice(editData.index, 1, formData);
    storeData("arrayUsers", arrayUsers);
    localStorage.setItem("edit", "false");
  } else {
    arrayUsers.push(formData);
    storeData("arrayUsers", arrayUsers);
  }
  alert("Successfully");
  cleanForm();
  console.log(arrayUsers);
}

function readFormData() {
  let formData = {};
  formData["nickname"] = document.getElementById("nickname").value;
  formData["password"] = document.getElementById("password").value;
  formData["names"] = document.getElementById("first-name").value;
  formData["lastName"] = document.getElementById("last-name").value;
  formData["birthday"] = document.getElementById("birthday").value;
  formData["email"] = document.getElementById("email").value;
  formData["type"] = document.getElementById("type").value;
  return formData;
}

function cleanForm() {
  document.getElementById("nickname").value = "";
  document.getElementById("password").value = "";
  document.getElementById("first-name").value = "";
  document.getElementById("last-name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("type").value = "Administrator";
}

function onLoadFormEdit() {
  let editData = getData("editData");
  let edit = localStorage.getItem("edit");
  if (edit == "true") {
    document.getElementById("nickname").value = editData.nickname;
    document.getElementById("password").value = editData.password;
    document.getElementById("first-name").value = editData.names;
    document.getElementById("last-name").value = editData.lastName;
    document.getElementById("birthday").value = editData.birthday;
    document.getElementById("email").value = editData.email;
    document.getElementById("type").value = editData.type;
  }
}
