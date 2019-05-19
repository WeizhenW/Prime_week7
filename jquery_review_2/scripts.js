$(document).ready(onReady);

let dogNum = 2;

function onReady() {
    console.log('jQuery loaded')
    $('#addButton').on('click', addDog);
    $('#deleteButton').on('click', clearTable);     
    $('#dogTableBody').on('click', '.deleteRow', deleteRow);
} //select the smallest tag that already exists at the page load
//descendent selector
//anytime is clicked => check if the clicked tag has class=deleteRow
//if yes execute the function
//anytime you click the tbody, the event listener will be triggered

function addDog() {
    // console.log('hello events');
    //get value from input
    let commonName = $('#commonName').val();
    let sciName = $('#sciName').val();
    //append new inputs to the table
    $('#dogTableBody').append(`
        <tr>
            <td>${commonName}</td>
            <td>${sciName}</td>
            <td><button class="deleteRow">Delete</button>
        </tr>
    `);//template literal only works within back-tick (`)!
    
    //clean out the input forms
    $('#commonName').val('');
    $('#sciName').val('');
    dogCounter(1);

}

function clearTable() {
    $('#dogTableBody').empty();
}

function deleteRow() {
    // $(this).parentsUntil('tbody').remove();
    $(this).closest('tr').remove();
    // $(this).parent().parent().remove();
    dogCounter(-1);

}

function dogCounter(num) {
    dogNum += num;
    $('#counter').text((dogNum));
    if(dogNum > 3) {
        $('#counter').css('color', 'red');
    } else {
        $('#counter').css('color', 'black');
    }
}

