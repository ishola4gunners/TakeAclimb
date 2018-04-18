var rIndex,
              table = document.getElementById("table");

// check the empty input
function checkEmptyInput() {
    var isEmpty = false,
        fname = document.getElementById("fname").value,
        lname = document.getElementById("lname").value,
        phone = document.getElementById("phone").value;
    address = document.getElementById("address").value,
    email = document.getElementById("email").value;

    if (fname === "") {
        alert("First Name Connot Be Empty");
        isEmpty = true;
    }
    else if (lname === "") {
        alert("Last Name Connot Be Empty");
        isEmpty = true;
    }
    else if (phone === "") {
        alert("phone Connot Be Empty");
        isEmpty = true;
    }
    else if (address === "") {
        alert("address Connot Be Empty");
        isEmpty = true;
    }
    else if (email === "") {
        alert("email Connot Be Empty");
        isEmpty = true;
    }
    return isEmpty;
}

// add new Row
function addHtmlTableRow() {
    // get the table by id
    // create a new row and cells
    // get value from input text
    // set the values into row cell's
    if (!checkEmptyInput()) {
        var newRow = table.insertRow(table.length),
            cell1 = newRow.insertCell(0),
            cell2 = newRow.insertCell(1),
            cell3 = newRow.insertCell(2),
            cell4 = newRow.insertCell(3),
            cell5 = newRow.insertCell(4),
            fname = document.getElementById("fname").value,
            lname = document.getElementById("lname").value,
            phone = document.getElementById("phone").value;
        address = document.getElementById("address").value,
        email = document.getElementById("email").value;

        cell1.innerHTML = fname;
        cell2.innerHTML = lname;
        cell3.innerHTML = phone;
        cell4.innerHTML = address;
        cell5.innerHTML = email;
        // call the function to set the event to the new row
        selectedRowToInput();
    }
}

// display selected row data into input text
function selectedRowToInput() {

    for (var i = 1; i < table.rows.length; i++) {
        table.rows[i].onclick = function () {
            // get the seected row index
            rIndex = this.rowIndex;
            document.getElementById("fname").value = this.cells[0].innerHTML;
            document.getElementById("lname").value = this.cells[1].innerHTML;
            document.getElementById("phone").value = this.cells[2].innerHTML;
            document.getElementById("address").value = this.cells[3].innerHTML;
            document.getElementById("email").value = this.cells[4].innerHTML;
        };
    }
}
selectedRowToInput();

function editHtmlTbleSelectedRow() {
    var fname = document.getElementById("fname").value,
        lname = document.getElementById("lname").value,
        phone = document.getElementById("phone").value;
    address = document.getElementById("address").value,
    email = document.getElementById("email").value;
    if (!checkEmptyInput()) {
        table.rows[rIndex].cells[0].innerHTML = fname;
        table.rows[rIndex].cells[1].innerHTML = lname;
        table.rows[rIndex].cells[2].innerHTML = phone;
        table.rows[rIndex].cells[3].innerHTML = address;
        table.rows[rIndex].cells[4].innerHTML = email;
    }
}

function removeSelectedRow() {
    table.deleteRow(rIndex);
    // clear input text
    document.getElementById("fname").value = "";
    document.getElementById("lname").value = "";
    document.getElementById("phone").value = "";
    document.getElementById("address").value = "";
    document.getElementById("email").value = "";
}