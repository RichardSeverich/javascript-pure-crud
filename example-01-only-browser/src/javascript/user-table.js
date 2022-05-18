function updateTableUser() {
  setUpStorageUsers();
  let arrayUsers = getData("arrayUsers");
  console.log(arrayUsers);
  let index = 0;
  for (user of arrayUsers) {
    addRow(user, index);
    index++;
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
