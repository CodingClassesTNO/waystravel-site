//to hold items array/json

let cartItems  = JSON.parse(localStorage.getItem('cartItems')) || [];
//let cartItems = [];

//function to add items
add_to_cart = (productName, price, imageURL) => { // parameters
    // create an object for the item
    const item = {
        name: productName, 
        price: price, 
        imageURL: imageURL
    };

    // adding item inside cart array
    cartItems.push(item);

    // save the cart local storage
    localStorage.setItem('cartItems', JSON.stringify(cartItems));

    //update the cart display
    update_cart();

}

//function to update display of the card
update_cart = () => {
    //capture the cart element
    const cart = document.getElementById('cart')

    // clear the display when it loads
    cart.innerHTML='';
    // initialize total price
    let totalPrice = 0;

    // loop thorugh items in the cart

    cartItems.forEach((item, index) => {
        const li = document.createElement('li');

        //add package or product image
        const img = document.createElement('img');
        img.src = item.imageURL;
        img.width = 50;
        li.appendChild(img);

        // for product price and name
        li.appendChild(document.createTextNode(` ${item.name} - $${item.price}`));
        cart.appendChild(li);

        // calculate total
        totalPrice += item.price;
        
    });

    // update total in cart
    document.getElementById('total').textContent = totalPrice;

}


clear_cart = () => {
    cartItems = [];
    localStorage.removeItem('cartItems');
    update_cart();
}