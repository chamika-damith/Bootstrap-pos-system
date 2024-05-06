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