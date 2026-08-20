document.addEventListener("DOMContentLoaded", function () {

    /* =========================
       ELEMENTS
    ========================= */

    const cart = [];

    const cartItems = document.getElementById("cartItems");
    const subtotalElement = document.getElementById("subtotal");
    const deliveryElement = document.getElementById("delivery");
    const totalElement = document.getElementById("total");

    const orderForm = document.getElementById("orderForm");
    const orderMessage = document.getElementById("orderMessage");

    const customerName = document.getElementById("customerName");
    const customerPhone = document.getElementById("customerPhone");
    const customerAddress = document.getElementById("customerAddress");


    /* =========================
       ADD TO ORDER
    ========================= */

    const addButtons = document.querySelectorAll(".ch-add-order");

    addButtons.forEach(function (button) {

        button.addEventListener("click", function () {

            const name = this.dataset.name;
            const price = Number(this.dataset.price);

            const existingProduct = cart.find(function (item) {
                return item.name === name;
            });


            if (existingProduct) {

                existingProduct.quantity += 1;

            } else {

                cart.push({
                    name: name,
                    price: price,
                    quantity: 1
                });

            }

            renderCart();

        });

    });


    /* =========================
       RENDER CART
    ========================= */

    function renderCart() {

        if (!cartItems) {
            return;
        }

        cartItems.innerHTML = "";


        if (cart.length === 0) {

            cartItems.innerHTML = `
                <div class="ch-empty-cart">
                    Your order is waiting for something sweet.
                </div>
            `;

        } else {

            cart.forEach(function (item, index) {

                const cartItem = document.createElement("div");

                cartItem.className = "ch-cart-item";


                cartItem.innerHTML = `

                    <div class="ch-cart-product">

                        <h3>${item.name}</h3>

                        <p>₹${item.price}</p>

                    </div>


                    <div class="ch-quantity">

                        <button
                            type="button"
                            class="decrease"
                            data-index="${index}"
                        >
                            −
                        </button>

                        <span>${item.quantity}</span>

                        <button
                            type="button"
                            class="increase"
                            data-index="${index}"
                        >
                            +
                        </button>

                    </div>

                `;

                cartItems.appendChild(cartItem);

            });

        }

        updateTotals();

    }


    /* =========================
       QUANTITY CONTROL
    ========================= */

    if (cartItems) {

        cartItems.addEventListener("click", function (event) {

            const button = event.target.closest("button");

            if (!button) {
                return;
            }

            const index = Number(button.dataset.index);

            if (isNaN(index) || !cart[index]) {
                return;
            }


            if (button.classList.contains("increase")) {

                cart[index].quantity += 1;

            }


            if (button.classList.contains("decrease")) {

                cart[index].quantity -= 1;


                if (cart[index].quantity <= 0) {

                    cart.splice(index, 1);

                }

            }

            renderCart();

        });

    }


    /* =========================
       UPDATE TOTALS
    ========================= */

    function updateTotals() {

        const subtotal = cart.reduce(function (total, item) {

            return total + (
                item.price * item.quantity
            );

        }, 0);


        let delivery = 0;

        if (subtotal > 0 && subtotal < 500) {

            delivery = 40;

        }


        const total = subtotal + delivery;


        if (subtotalElement) {
            subtotalElement.textContent = "₹" + subtotal;
        }

        if (deliveryElement) {
            deliveryElement.textContent = "₹" + delivery;
        }

        if (totalElement) {
            totalElement.textContent = "₹" + total;
        }

    }


    /* =========================
       CATEGORY FILTER
    ========================= */

    const categoryButtons =
        document.querySelectorAll(".ch-category-btn");

    const productCards =
        document.querySelectorAll(".ch-product-card");

    const productSearch =
        document.getElementById("productSearch");


    let activeCategory = "all";


    function filterProducts() {

        const searchValue = productSearch
            ? productSearch.value.toLowerCase().trim()
            : "";


        productCards.forEach(function (card) {

            const category = card.dataset.category;
            const productName = card.dataset.name.toLowerCase();


            const categoryMatch =
                activeCategory === "all" ||
                category === activeCategory;


            const searchMatch =
                productName.includes(searchValue);


            if (categoryMatch && searchMatch) {

                card.classList.remove("hidden");

            } else {

                card.classList.add("hidden");

            }

        });

    }


    categoryButtons.forEach(function (button) {

        button.addEventListener("click", function () {

            activeCategory = this.dataset.category;


            categoryButtons.forEach(function (item) {

                item.classList.remove("active");

            });


            this.classList.add("active");

            filterProducts();

        });

    });


    if (productSearch) {

        productSearch.addEventListener("input", function () {

            filterProducts();

        });

    }


    /* =========================
       PLACE ORDER
    ========================= */

    if (orderForm) {

        orderForm.addEventListener("submit", function (event) {

            event.preventDefault();


            /* Reset previous message */

            if (orderMessage) {

                orderMessage.textContent = "";

                orderMessage.className =
                    "ch-order-message";

            }


            /* Check cart */

            if (cart.length === 0) {

                showOrderMessage(
                    "Please add at least one item to your order.",
                    "error"
                );

                return;

            }


            /* Check name */

            if (
                !customerName ||
                customerName.value.trim().length < 2
            ) {

                showOrderMessage(
                    "Please enter a valid name.",
                    "error"
                );

                return;

            }


            /* Check phone */

            const phoneValue =
                customerPhone
                    ? customerPhone.value.trim()
                    : "";


            const phonePattern =
                /^[0-9]{10}$/;


            if (!phonePattern.test(phoneValue)) {

                showOrderMessage(
                    "Please enter a valid 10-digit phone number.",
                    "error"
                );

                return;

            }


            /* Check address */

            if (
                !customerAddress ||
                customerAddress.value.trim().length < 5
            ) {

                showOrderMessage(
                    "Please enter your complete delivery address.",
                    "error"
                );

                return;

            }


            /* SUCCESS */

            const customer =
                customerName.value.trim();


            showOrderMessage(
                "Thank you, " +
                customer +
                "! Your sweet order has been placed successfully.",
                "success"
            );


            /* Clear form */

            orderForm.reset();


            /* Clear cart after successful order */

            cart.length = 0;

            renderCart();


            /* Optional success alert */

            setTimeout(function () {

                alert(
                    "Order placed successfully! Thank you for choosing Cream Haven."
                );

            }, 200);

        });

    }


    /* =========================
       MESSAGE FUNCTION
    ========================= */

    function showOrderMessage(message, type) {

        if (!orderMessage) {
            return;
        }

        orderMessage.textContent = message;

        orderMessage.className =
            "ch-order-message " + type;

    }

});

const placeOrderBtn =
    document.getElementById("placeOrderBtn");

const orderMessage =
    document.getElementById("orderMessage");


placeOrderBtn.addEventListener("click", function () {

    const customerName =
        document
            .getElementById("customerName")
            .value
            .trim();


    const customerPhone =
        document
            .getElementById("customerPhone")
            .value
            .trim();


    const customerAddress =
        document
            .getElementById("customerAddress")
            .value
            .trim();


    /* CHECK IF CART IS EMPTY */

    if (cart.length === 0) {

        orderMessage.textContent =
            "Please add at least one item to your order.";

        orderMessage.className =
            "ch-order-message error";

        return;

    }


    /* VALIDATE NAME */

    if (customerName.length < 2) {

        orderMessage.textContent =
            "Please enter your name.";

        orderMessage.className =
            "ch-order-message error";

        return;

    }


    /* VALIDATE PHONE */

    if (!/^[0-9]{10}$/.test(customerPhone)) {

        orderMessage.textContent =
            "Please enter a valid 10-digit phone number.";

        orderMessage.className =
            "ch-order-message error";

        return;

    }


    /* VALIDATE ADDRESS */

    if (customerAddress.length < 5) {

        orderMessage.textContent =
            "Please enter your complete delivery address.";

        orderMessage.className =
            "ch-order-message error";

        return;

    }


    /* SUCCESS MESSAGE */

    orderMessage.textContent =
        "Your sweet order has been placed successfully!";

    orderMessage.className =
        "ch-order-message success";


    /* DISABLE BUTTON */

    placeOrderBtn.disabled = true;

    placeOrderBtn.textContent =
        "Order Placed ✓";


    /* REDIRECT TO ORDER SUCCESS PAGE */

    setTimeout(function () {

        window.location.href =
            "order-success.html";

    }, 1500);

});