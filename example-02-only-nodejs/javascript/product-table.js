function updateTableProduct() {
  setUpStorageProducts();
  let arrayProducts = getData("arrayProducts");
  console.log(arrayProducts);
  let index = 0;
  for (product of arrayProducts) {
    addRow(product, index);
    index++;
  }
}

function onEdit(button) {
  selectedRow = button.parentElement.parentElement;
  let index = selectedRow.cells[0].innerHTML;
  let name = selectedRow.cells[1].innerHTML;
  let quantity = selectedRow.cells[2].innerHTML;
  let price = selectedRow.cells[3].innerHTML;
  let data = {};
  data["index"] = index;
  data["name"] = name;
  data["quantity"] = quantity;
  data["price"] = price;
  storeData("editData", data);
  localStorage.setItem("edit", "true");
  // navigate to product form.
  window.location.href = "product-form.html";
}

function onDelete(button) {
  if (confirm("are you sure you want to perform this action?")) {
    selectedRow = button.parentElement.parentElement;
    let index = selectedRow.cells[0].innerHTML;
    let arrayProducts = getData("arrayProducts");
    arrayProducts.splice(index, 1);
    storeData("arrayProducts", arrayProducts);
    location.reload();
  }
}

function addRow(product, index) {
  let table = document.getElementById("table");
  let newRow = table.insertRow(table.lenght);
  // index
  cellIndex = newRow.insertCell(0);
  cellIndex.innerHTML = index;
  index++;
  // name
  cellname = newRow.insertCell(1);
  cellname.innerHTML = product.name;
  // quantity
  cellquantity = newRow.insertCell(2);
  cellquantity.innerHTML = product.quantity;
  // price
  cellprice = newRow.insertCell(3);
  cellprice.innerHTML = product.price;
  // Edit
  cellEdit = newRow.insertCell(4);
  cellEdit.innerHTML = '<button onclick="onEdit(this)">Edit</button>';
  // Delete
  cellEdit = newRow.insertCell(5);
  cellEdit.innerHTML = `<button onclick="onDelete(this)">Delete</button>`;
}
