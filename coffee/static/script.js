// script.js
$(document).ready(function () {
  let cartCount = 0;
  const cartCountElement = $("#cart-count");

  $("#add-to-cart-btn").on("click", function () {
    cartCount++;
    cartCountElement.text(cartCount);
    showItemAddedMessage();
  });

  function showItemAddedMessage() {
    const messageContainer = $("#item-added-message");
    messageContainer.fadeIn();
    setTimeout(function () {
      messageContainer.fadeOut();
    }, 2000); // Display the message for 2 seconds
  }
});



$(document).ready(function() {
  // Initialize the cart as an empty array to store the selected products
  var cart = [];

  // Add click event handler for the "Add to Cart" buttons
  $(".add-to-cart").click(function(event) {
    event.preventDefault();

    // Get product details from the data attributes
    var productId = $(this).data("product-id");
    var productName = $(this).data("product-name");
    var productPrice = $(this).data("product-price");

    // Create an object representing the selected product
    var product = {
      id: productId,
      name: productName,
      price: productPrice
    };

    // Add the product to the cart array
    cart.push(product);

    // Update the cart count
    $("#cart-count").text(cart.length);

    // Show the "Item added" message for 2 seconds
    $("#item-added-message").fadeIn().delay(2000).fadeOut();
  });

  // Add click event handler for the "View Cart" button
  $("#view-cart-btn").click(function() {
    // Display the cart content in a simple alert (you can customize this to fit your design)
    var cartContent = "Cart Contents:\n";
    for (var i = 0; i < cart.length; i++) {
      cartContent += cart[i].name + " - R" + cart[i].price + "\n";
    }
    alert(cartContent);
  });
});

