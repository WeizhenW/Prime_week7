$(document).ready(myFunction);

function myFunction() {
    //change the title text
    $('h1').text('Yummy Pizza Restaurant');

    //center the title
    $('h1').addClass('center')
    
    //add ul
    $('#mainContent').append('<ul class="favoritePizzas"></ul>');

    //add pizzas inside ul - append
    $('.favoritePizzas').append('<li>Antigua Pizzeria</li>');
    $('.favoritePizzas').append('<li>La bondad Crujiente</li>');
    $('.favoritePizzas').append('<li>La rueda</li>');

    //add h2 above the list - difference between before & prepend, after & append
    // $('ul').before('<h2>Favorite Pizzas</h2>');
    $('#mainContent').prepend('<h2>Favorite Pizzas</h2>');

    //add image after the list, add class and style the height and width
    $('#mainContent').append('<img class="pizzaImage" src="pizza.jpeg" alt="pizza" />');
    $('.pizzaImage').addClass('imgStyle');

    //add on click event on the button and console.log something
    // $('button').on('click', function() {
    //     console.log('button clicked!');
    // })
    $('button').on('click', handleClick);

    
    
}

function handleClick() {
    console.log('handleClick function!');
}