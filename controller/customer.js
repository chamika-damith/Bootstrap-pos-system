import customerModel from '/model/customerModel.js';
import {customer} from '/db/db.js';

var recordIndex;

function loadTable(){
    $('#customerTable').empty();

    customer.map((item, index) => {
        let record = `
            <tr>
                <td class="customer-id-value">${item.id}</td>
                <td class="customer-name-value">${item.name}</td> 
                <td class="customer-address-value">${item.address}</td>
                <td class="customer-contact-value">${item.salary}</td> 
            </tr>`;
        $("#customerTable").append(record);
    });
}

$(".save_btn").on('click', () => {

    var customerID = $('#customerID').val();
    var customerName = $('#customerName').val();
    var customerAddress = $('#customerAddress').val();
    var customerSalary = $('#customerSalary').val();


    let customerObj = new customerModel(
        customerID, customerName, customerAddress, customerSalary
    );

    // push to the array
    customer.push(customerObj);
    console.log(customerObj.id);
    loadTable();
});