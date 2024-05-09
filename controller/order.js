import orderDetailsModel from "../model/orderDetailsModel.js";
import {customer} from '/db/db.js';
import {items} from '/db/db.js';
import {orderDetails} from '/db/db.js';


let selectedCustomerId;
let selectedItemId;

$("#btnPurchase").on('click', () => {

    let alertConfrim = confirm('Do you really want to Purchase this item');
    if (alertConfrim==true) {

        var orderId = $('#orderId').val();
        var orderDate = $('#orderDate').val();
        var cusIdOption = $('#cusIdOption').val();
        var itemIdOption = $('#itemIdOption').val();
        var orderQty = $('#orderQty').val();
        var total = $('#total').val();
        var txtCash = $('#txtCash').val();
        var txtDiscount = $('#txtDiscount').val();

        let orderDetailObj=new orderDetailsModel(
            orderId,orderDate,cusIdOption,itemIdOption,orderQty,total,txtCash,txtDiscount
        );

        orderDetails.push(orderDetailObj);
    }

    console.log(customer);

});

function generateCurrentDate(){
    $("#orderDate").val(new Date().toISOString().slice(0, 10));
}

function loadAllCustomerId() {
    $('#cusIdOption').empty();
    for (let customerArElement of customer) {
        $('#cusIdOption').append(`<option>${customerArElement.id}</option>`);
    }
}

function loadAllItemsId() {
    $('#itemIdOption').empty();
    for (let itemArElement of items) {
        $('#itemIdOption').append(`<option>${itemArElement.id}</option>`);
    }
}

loadAllItemsId();
loadAllCustomerId();
generateCurrentDate();

$('#cusIdOption').on('change', function(){
    selectedCustomerId = $('#cusIdOption option:selected').text();
    for (let customerArElement of customer) {
        if (customerArElement.id==selectedCustomerId){
            $('#orderCusName').val(customerArElement.name);
            $('#orderCusSalary').val(customerArElement.salary);
            $('#orderCusAddress').val(customerArElement.address);
        }
    }
});

$('#itemIdOption').on('change', function(){
    selectedItemId = $('#itemIdOption option:selected').text();
    for (let itemArElement of items) {
        if (itemArElement.id==selectedItemId){
            $('#orderFormItemName').val(itemArElement.name);
            $('#orderFormPrice').val(itemArElement.price);
            $('#orderFormQtyOnHand').val(itemArElement.qty);
        }
    }
});

