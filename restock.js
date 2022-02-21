function editRow(no) {
  document.getElementById("edit_button" + no).style.display = "none";
  document.getElementById("save_button" + no).style.display = "block";

  var pid = document.getElementById("id_row" + no);
  var name = document.getElementById("name_row" + no);
  var artist = document.getElementById("artist_row" + no);
  var price = document.getElementById("price_row" + no);
  var quantity = document.getElementById("quantity_row" + no);
  var instock = document.getElementById("instock_row" + no);

  var id_data = pid.innerHTML;
  var name_data = name.innerHTML;
  var artist_data = artist.innerHTML;
  var price_data = price.innerHTML;
  var quantity_data = quantity.innerHTML;
  var instock_data = instock.innerHTML;

  pid.innerHTML =
    "<input type='text' id='name_text" + no + "' value='" + id_data + "'>";
  name.innerHTML =
    "<input type='text' id='name_text" + no + "' value='" + name_data + "'>";
  artist.innerHTML =
    "<input type='text' id='country_text" +
    no +
    "' value='" +
    artist_data +
    "'>";
  price.innerHTML =
    "<input type='text' id='age_text" + no + "' value='" + price_data + "'>";
  quantity.innerHTML =
    "<input type='text' id='name_text" +
    no +
    "' value='" +
    quantity_data +
    "'>";
  instock.innerHTML =
    "<input type='text' id='name_text" + no + "' value='" + instock_data + "'>";
}

function saveRow(no) {
  var pid_val = document.getElementById("id_text" + no).value;
  var name_val = document.getElementById("name_text" + no).value;
  var artist_val = document.getElementById("artist_text" + no).value;
  var price_val = document.getElementById("price_text" + no).value;
  var quantity_val = document.getElementById("quantity_text" + no).value;
  var instock_val = document.getElementById("instock_text" + no).value;

  // var name_val = document.getElementById("name_text" + no).value;

  document.getElementById("id_row" + no).innerHTML = pid_val;
  document.getElementById("name_row" + no).innerHTML = name_val;
  document.getElementById("artist_row" + no).innerHTML = artist_val;
  document.getElementById("price_row" + no).innerHTML = price_val;
  document.getElementById("quantity_row" + no).innerHTML = quantity_val;
  document.getElementById("instock_row" + no).innerHTML = instock_val;

  document.getElementById("edit_button" + no).style.display = "block";
  document.getElementById("save_button" + no).style.display = "none";
}

function deleteRow(no) {
  document.getElementById("row" + no + "").outerHTML = "";
}

function addRow() {
  var new_id = document.getElementById("new_id").value;
  var new_name = document.getElementById("new_name").value;
  var new_artist = document.getElementById("new_artist").value;
  var new_price = document.getElementById("new_price").value;
  var new_quantity = document.getElementById("new_quantity").value;
  var new_instock = document.getElementById("new_instock").value;

  var table = document.getElementById("restocktable");
  var table_len = table.rows.length - 1;
  var row = (table.insertRow(table_len).outerHTML =
    "<tr id='row" +
    table_len +
    "'><td id='id_row" +
    table_len +
    "'>" +
    new_id +
    "</td><td id='name_row" +
    table_len +
    "'>" +
    new_name +
    "</td><td id='artist_row" +
    table_len +
    "'>" +
    new_artist +
    "</td><td id='price_row" +
    table_len +
    "'>" +
    new_price +
    "</td><td id='quantity_row" +
    table_len +
    "'>" +
    new_quantity +
    "</td><td id='instock_row" +
    table_len +
    "'>" +
    new_instock +
    "</td><td><input type='button' id='edit_button" +
    table_len +
    "' value='Edit' class='edit' onclick='edit_row(" +
    table_len +
    ")'> <input type='button' id='save_button" +
    table_len +
    "' value='Save' class='save' onclick='save_row(" +
    table_len +
    ")'> <input type='button' value='Delete' class='delete' onclick='delete_row(" +
    table_len +
    ")'></td></tr>");

  document.getElementById("new_id").value = "";
  document.getElementById("new_name").value = "";
  document.getElementById("new_artist").value = "";
  document.getElementById("new_price").value = "";
  document.getElementById("new_quantity").value = "";
  document.getElementById("new_instock").value = "";
}
