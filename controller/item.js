import itemModel from '/model/itemModel.js';
import {customer, items} from '/db/db.js';
import customerModel from "../model/customerModel";

var recordIndex;

function loadTable(){
    $('#ItemsTable').empty();

    items.map((item, index) => {
        let record = `
            <tr>
                <td class="item-id-value">${item.id}</td>
                <td class="item-name-value">${item.name}</td> 
                <td class="item-price-value">${item.price}</td>
                <td class="item-qty-value">${item.qty}</td> 
            </tr>`;
        $("#ItemsTable").append(record);
    });
}

$(".item_save_btn").on('click', () => {

    let alertConfrim = confirm('Do you really want to add this item');
    if (alertConfrim==true) {

        var itemId = $('#IID').val();
        var itemName = $('#IName').val();
        var itemPrice = $('#IPrice').val();
        var itemQty = $('#Iquentity').val();

        let itemObj = new itemModel(
            itemId, itemName, itemPrice, itemQty
        );

        items.push(itemObj);

        loadTable();
        clearField();
    }else {
        clearField();
    }
});

