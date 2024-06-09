import itemModel from '/model/itemModel.js';
import { items } from '/db/db.js';

var recordIndex;

// Initialize the item ID input field
$('#IID').val(ItemIdGenerate());

function loadTable() {
    $('#ItemsTable').empty();

    items.map((item, index) => {
        let record = `
            <tr>
                <td class="item-id-value">${item.id}</td>
                <td class="item-name-value">${item.name}</td>
                <td class="item-price-value">${item.price}</td>
                <td class="item-qty-value">${item.qty}</td>
                <td>
                    <button class="btn btn-sm btn-outline-primary mx-2 " onclick="updateBtnClick(${index})">Edit</button>
                    <button class="btn btn-sm btn-outline-danger mx-2 " onclick="deleteBtnClick(${index})">Delete</button>
                </td>
            </tr>`;
        $("#ItemsTable").append(record);
    });
}

function ItemIdGenerate() {
    let lastId = 'I00-001';

    if (items.length > 0) {
        let lastElement = items[items.length - 1];

        if (lastElement && lastElement.id) {
            let lastIdParts = lastElement.id.split('-');
            let lastNumber = parseInt(lastIdParts[1]);

            lastId = `I00-${String(lastNumber + 1).padStart(3, '0')}`;
        }
    }

    return lastId;
}

$(".item_save_btn").on('click', () => {
    let alertConfirm = confirm('Do you really want to add this item');
    if (alertConfirm) {
        var itemId = $('#IID').val();
        var itemName = $('#IName').val();
        var itemPrice = $('#IPrice').val();
        var itemQty = $('#Iquentity').val();

        let itemObj = new itemModel(
            itemId, itemName, itemPrice, itemQty
        );

        items.push(itemObj);

        startProgress();

        $('#IID').val(ItemIdGenerate());
        loadAllItemsId();
        loadTable();
        clearField();
    } else {
        clearField();
    }
});

$("#ItemsTable").on('click', 'tr', function() {
    let index = $(this).index();
    recordIndex = index;

    let id = $(this).find(".item-id-value").text();
    let name = $(this).find(".item-name-value").text();
    let price = $(this).find(".item-price-value").text();
    let qty = $(this).find(".item-qty-value").text();

    $("#IID").val(id);
    $("#IName").val(name);
    $("#IPrice").val(price);
    $("#Iquentity").val(qty);
});

$("#ItemsTable").on('dblclick', 'tr', function() {
    let alertConfirmDelete = confirm('Do you really want to delete this item');
    if (alertConfirmDelete) {
        let index = $(this).index();
        recordIndex = index;
        $('.item_delete_btn').click();
    }
});

$(".item_delete_btn").on('click', () => {
    items.splice(recordIndex, 1);
    startProgress();
    loadTable();
    clearField();
});

function deleteBtnClick(index) {
    $(".item_delete_btn").on('click', () => {
        items.splice(index, 1);
        startProgress();
        loadTable();
        clearField();
    });
}

function clearField() {
    $('#IID').val(ItemIdGenerate());
    $("#IName").val('');
    $("#IPrice").val('');
    $("#Iquentity").val('');
}

$(".item_update_btn").on('click', () => {
    var itemId = $('#IID').val();
    var itemName = $('#IName').val();
    var itemPrice = $('#IPrice').val();
    var itemQty = $('#Iquentity').val();

    let itemUpdateObj = items[recordIndex];
    itemUpdateObj.id = itemId;
    itemUpdateObj.name = itemName;
    itemUpdateObj.price = itemPrice;
    itemUpdateObj.qty = itemQty;

    startProgress();
    loadTable();
    clearField();
});

function updateBtnClick(recordIndex){
    var itemId = $('#IID').val();
    var itemName = $('#IName').val();
    var itemPrice = $('#IPrice').val();
    var itemQty = $('#Iquentity').val();

    let itemUpdateObj = items[recordIndex];
    itemUpdateObj.id = itemId;
    itemUpdateObj.name = itemName;
    itemUpdateObj.price = itemPrice;
    itemUpdateObj.qty = itemQty;

    loadTable();
    clearField();
}

function loadAllItemsId() {
    $('#itemIdOption').empty();
    for (let itemArElement of items) {
        $('#itemIdOption').append(`<option>${itemArElement.id}</option>`);
    }
}

var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
})

function startProgress() {
    var progressBar = document.getElementById('progressBar');
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
