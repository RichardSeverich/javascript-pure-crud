function onFormSubmit() {
  setUpStorageProducts();
  let edit = localStorage.getItem("edit");
  let formData = readFormData();
  let arrayProducts = getData("arrayProducts");
  if (edit == "true") {
    let editData = getData("editData");
    arrayProducts.splice(editData.index, 1, formData);
    storeData("arrayProducts", arrayProducts);
    localStorage.setItem("edit", "false");
  } else {
    arrayProducts.push(formData);
    storeData("arrayProducts", arrayProducts);
  }
  alert("Successfully");
  cleanForm();
  console.log(arrayProducts);
}

function readFormData() {
  let formData = {};
  formData["name"] = document.getElementById("name").value;
  formData["quantity"] = document.getElementById("quantity").value;
  formData["price"] = document.getElementById("price").value;
  return formData;
}

function cleanForm() {
  document.getElementById("name").value = "";
  document.getElementById("quantity").value = "";
  document.getElementById("price").value = "";
}

function onLoadFormEdit() {
  let editData = getData("editData");
  let edit = localStorage.getItem("edit");
  if (edit == "true") {
    document.getElementById("name").value = editData.name;
    document.getElementById("quantity").value = editData.quantity;
    document.getElementById("price").value = editData.price;
  }
}
