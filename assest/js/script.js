/*---------spa-----------*/

$('.order-section').hide();
$('#item-section').hide();
$('#customer-section').hide();

$('#home-btn').on('click', () =>{
    $('#homediv').show();
    $('.order-section').hide();
    $('#item-section').hide();
    $('#customer-section').hide();
});

$('#order-btn').on('click', () =>{
    $('#homediv').hide();
    $('#item-section').hide();
    $('#customer-section').hide();
    $('.order-section').show();
});

$('#item-btn').on('click', () =>{
    $('#homediv').hide();
    $('.order-section').hide();
    $('#customer-section').hide();
    $('#item-section').show();
});

$('#customer-btn').on('click', () =>{
    $('#homediv').hide();
    $('.order-section').hide();
    $('#item-section').hide();
    $('#customer-section').show();

});

/*validate field*/
$(document).on('keydown', function(event) {
    if (event.keyCode == 9) {
        event.preventDefault();
    }
});

function checkIdField(){
    var cusid = $('#customerID').val();
    var cusidPattern = /^C\d{2}-\d{3}$/;
    var errorMessage = $('.errorMessageId');

    if (!cusidPattern.test(cusid)) {
        errorMessage.show();
        $('#customerID').css({'border': '2px solid red'});
    } else {
        errorMessage.hide();
        $('#customerID').css({'border': '2px solid green'});
    }

}

function checkNameField() {
    var cusName = $('#customerName').val();
    var cusNamePattern = /^\s*\S.{3,18}\S\s*$/;
    var errorMessageName=$('.errorMessageName');

    if (!cusNamePattern.test(cusName)) {
        errorMessageName.show();
        $('#customerName').css({'border': '2px solid red'});
    } else {
        errorMessageName.hide();
        $('#customerName').css({'border': '2px solid green'});
    }
}

function checkFieldAddress() {
    var cusAddress = $('#customerAddress').val();
    var cusAddressPattern = /^.{7,}$/;
    var errorMessageAddress = $('.errorMessageAddress');

    if (!cusAddressPattern.test(cusAddress)) {
        errorMessageAddress.show();
        $('#customerAddress').css('border', '2px solid red');
    } else {
        errorMessageAddress.hide();
        $('#customerAddress').css('border', '2px solid green');
    }
}

function checkFieldSalary() {
    var cusSalary = $('#customerSalary').val();
    var cusSalaryPattern = /^(?:\d+|\d+\.\d{2})$/;
    var errorMessageSalary = $('.errorMessageSalary');

    if (!cusSalaryPattern.test(cusSalary)) {
        errorMessageSalary.show();
        $('#customerSalary').css('border', '2px solid red');
    } else {
        errorMessageSalary.hide();
        $('#customerSalary').css('border', '2px solid green');
    }
}

