import customerModel from '/model/customerModel.js';
import { customer } from '/db/db.js';

var recordIndex;

// Initialize the customer ID input field
$("#customerID").val(cusIdGenerate());

function loadTable() {
    $('#customerTable').empty();

    customer.map((item, index) => {
        let record = `
            <tr>
                <td class="customer-id-value">${item.id}</td>
                <td class="customer-name-value">${item.name}</td> 
                <td class="customer-address-value">${item.address}</td>
                <td class="customer-salary-value">${item.salary}</td> 
                <td>
                    <button class="btn btn-sm btn-outline-primary mx-2 " onclick="updateBtn(${index})">Edit</button>
                    <button class="btn btn-sm btn-outline-danger mx-2 " onclick="deleteRecord(${index})">Delete</button>
                </td>
            </tr>`;
        $("#customerTable").append(record);
    });
}

function cusIdGenerate() {
    let lastId = 'C00-001';

    if (customer.length > 0) {
        let lastElement = customer[customer.length - 1];

        if (lastElement && lastElement.id) {
            let lastIdParts = lastElement.id.split('-');
            let lastNumber = parseInt(lastIdParts[1]);

            lastId = `C00-${String(lastNumber + 1).padStart(3, '0')}`;
        }
    }

    return lastId;
}

$(".save_btn").on('click', () => {
    let alertConfirm = confirm('Do you really want to add this customer');
    if (alertConfirm) {
        var customerID = $('#customerID').val();
        var customerName = $('#customerName').val();
        var customerAddress = $('#customerAddress').val();
        var customerSalary = $('#customerSalary').val();

        let customerObj = new customerModel(
            customerID, customerName, customerAddress, customerSalary
        );

        customer.push(customerObj);

        startProgress();
        $("#customerID").val(cusIdGenerate());
        loadAllCustomerId();
        loadTable();
        clearField();
    } else {
        clearField();
    }
});

$("#customerTable").on('click', 'tr', function() {
    let index = $(this).index();
    recordIndex = index;

    let id = $(this).find(".customer-id-value").text();
    let name = $(this).find(".customer-name-value").text();
    let address = $(this).find(".customer-address-value").text();
    let salary = $(this).find(".customer-salary-value").text();

    $("#customerID").val(id);
    $("#customerName").val(name);
    $("#customerAddress").val(address);
    $("#customerSalary").val(salary);
});

$("#customerTable").on('dblclick', 'tr', function() {
    let alertConfirmDelete = confirm('Do you really want to delete this customer');
    if (alertConfirmDelete) {
        let index = $(this).index();
        recordIndex = index;
        $('.delete_btn').click();
    }
});

$(".delete_btn").on('click', () => {
    customer.splice(recordIndex, 1);
    startProgress();
    loadTable();
    clearField();
});

function deleteRecord(recordIndex){
    $(".delete_btn").on('click', () => {
        customer.splice(recordIndex, 1);
        startProgress();
        loadTable();
        clearField();
    });
}

function clearField() {
    $("#customerID").val(cusIdGenerate());
    $("#customerName").val('');
    $("#customerAddress").val('');
    $("#customerSalary").val('');
}

$(".update_btn").on('click', () => {
    var customerID = $('#customerID').val();
    var customerName = $('#customerName').val();
    var customerAddress = $('#customerAddress').val();
    var customerSalary = $('#customerSalary').val();

    let customerUpdateObj = customer[recordIndex];
    customerUpdateObj.id = customerID;
    customerUpdateObj.name = customerName;
    customerUpdateObj.address = customerAddress;
    customerUpdateObj.salary = customerSalary;

    startProgress();
    loadTable();
    clearField();
});

function updateBtn(recodIndex){
    $(".update_btn").on('click', () => {
        var customerID = $('#customerID').val();
        var customerName = $('#customerName').val();
        var customerAddress = $('#customerAddress').val();
        var customerSalary = $('#customerSalary').val();

        let customerUpdateObj = customer[recordIndex];
        customerUpdateObj.id = customerID;
        customerUpdateObj.name = customerName;
        customerUpdateObj.address = customerAddress;
        customerUpdateObj.salary = customerSalary;

        startProgress();
        loadTable();
        clearField();
    });
}

function loadAllCustomerId() {
    $('#cusIdOption').empty();
    for (let customerArElement of customer) {
        $('#cusIdOption').append(`<option>${customerArElement.id}</option>`);
    }
}

function startProgress() {
    var progressBar = document.getElementById('progressBarCus');
    var width = 0;
    var interval = setInterval(function() {
        if (width >= 100) {
            clearInterval(interval);
            setTimeout(function() {
                // After 15 seconds, reset the progress bar if needed
                progressBar.style.width = '0%';
            }, 1500);
        } else {
            width++;
            progressBar.style.width = width + '%';
        }
    }, 5);
}