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

function checkField(){
    var cusid = $('#customerID').val();
    var cusidPattern = /^C\d{2}-\d{3}$/;
    var cusidDiv = $('#cusidDiv');
    var errorMessage = $('.errorMessage');
    if (!cusidPattern.test(cusid)) {
        errorMessage.show();
        $('#customerID').css({'border': '2px solid red'});
    } else {
        errorMessage.hide();
        $('#customerID').css({'border': '2px solid green'});
    }
}