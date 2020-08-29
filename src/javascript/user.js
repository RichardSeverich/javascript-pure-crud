function onFormSubmit() {
  setUpStorage();
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

function setUpStorage() {
  let array = localStorage.getItem("arrayUsers");
  if (array === null || array.length == 2) {
    localStorage.setItem("edit", "false");
    let arrayUsers = [];
    storeData("arrayUsers", arrayUsers);
    defaultData();
  }
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

function onDelete(button) {
  if (confirm("are you sure you want to perform this action?")) {
    selectedRow = button.parentElement.parentElement;
    let index = selectedRow.cells[0].innerHTML;
    let arrayUsers = getData("arrayUsers");
    arrayUsers.splice(index, 1);
    storeData("arrayUsers", arrayUsers);
    location.reload();
  }
}

function onEdit(button) {
  selectedRow = button.parentElement.parentElement;
  let index = selectedRow.cells[0].innerHTML;
  let nickname = selectedRow.cells[1].innerHTML;
  let pass = selectedRow.cells[2].innerHTML;
  let firstName = selectedRow.cells[3].innerHTML;
  let lastName = selectedRow.cells[4].innerHTML;
  let birthday = selectedRow.cells[5].innerHTML;
  let email = selectedRow.cells[6].innerHTML;
  let type = selectedRow.cells[7].innerHTML;
  let data = {};
  data["index"] = index;
  data["nickname"] = nickname;
  data["password"] = pass;
  data["names"] = firstName;
  data["lastName"] = lastName;
  data["birthday"] = birthday;
  data["email"] = email;
  data["type"] = type;
  storeData("editData", data);
  localStorage.setItem("edit", "true");
  // navigate to user form.
  window.location.href = "user-form.html";
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

function updateTable() {
  setUpStorage();
  let arrayUsers = getData("arrayUsers");
  console.log(arrayUsers);
  let index = 0;
  for (user of arrayUsers) {
    addRow(user, index);
    index++;
  }
}

function addRow(user, index) {
  let table = document.getElementById("table");
  let newRow = table.insertRow(table.lenght);
  // index
  cellIndex = newRow.insertCell(0);
  cellIndex.innerHTML = index;
  index++;
  // nickname
  cellNickname = newRow.insertCell(1);
  cellNickname.innerHTML = user.nickname;
  // password
  cellPassword = newRow.insertCell(2);
  cellPassword.innerHTML = user.password;
  // names
  cellNames = newRow.insertCell(3);
  cellNames.innerHTML = user.names;
  // lastName
  cellLastName = newRow.insertCell(4);
  cellLastName.innerHTML = user.lastName;
  // birthday
  cellLastBirthday = newRow.insertCell(5);
  cellLastBirthday.innerHTML = user.birthday;
  // email
  cellEmail = newRow.insertCell(6);
  cellEmail.innerHTML = user.email;
  // type
  cellType = newRow.insertCell(7);
  cellType.innerHTML = user.type;
  // Edit
  cellEdit = newRow.insertCell(8);
  cellEdit.innerHTML = '<button onclick="onEdit(this)">Edit</button>';
  // Delete
  cellEdit = newRow.insertCell(9);
  cellEdit.innerHTML = `<button onclick="onDelete(this)">Delete</button>`;
}
