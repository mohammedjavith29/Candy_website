/* =========================================
   CART
========================================= */

let cart = [];



/* =========================================
   ADD TO CART
========================================= */

function addToCart(name, price) {

    const existingItem = cart.find(
        item => item.name === name
    );


    if (existingItem) {

        existingItem.quantity += 1;

    } else {

        cart.push({

            name: name,
            price: price,
            quantity: 1

        });

    }


    updateCart();


    // Open cart automatically
    openCart();

}



/* =========================================
   UPDATE CART
========================================= */

function updateCart() {

    const cartCount =
        document.getElementById("cart-count");

    const cartItems =
        document.getElementById("cart-items");

    const cartTotal =
        document.getElementById("cart-total");


    // Calculate quantity

    const totalQuantity =
        cart.reduce(
            (total, item) =>
                total + item.quantity,
            0
        );


    // Calculate price

    const totalPrice =
        cart.reduce(
            (total, item) =>
                total +
                item.price *
                item.quantity,
            0
        );


    cartCount.textContent =
        totalQuantity;


    cartTotal.textContent =
        "₹" + totalPrice;


    // Empty cart

    if (cart.length === 0) {

        cartItems.innerHTML = `

            <div class="empty-cart">

                <div>
                    🛒
                </div>

                <h3>
                    Your cart is empty
                </h3>

                <p>
                    Add something sweet!
                </p>

            </div>

        `;

        return;

    }


    // Cart items

    cartItems.innerHTML =
        cart.map(
            (item, index) => `

                <div class="cart-item">

                    <div
                        class="cart-item-image"
                        style="
                            background:#f8e0e7;
                            display:flex;
                            align-items:center;
                            justify-content:center;
                            font-size:30px;
                        "
                    >
                        🍬
                    </div>

                    <div class="cart-item-info">

                        <h4>
                            ${item.name}
                        </h4>

                        <p>
                            ₹${item.price}
                            ×
                            ${item.quantity}
                        </p>

                    </div>

                    <button
                        class="remove-item"
                        onclick="removeFromCart(${index})"
                    >
                        ×
                    </button>

                </div>

            `
        ).join("");

}



/* =========================================
   REMOVE FROM CART
========================================= */

function removeFromCart(index) {

    cart.splice(index, 1);

    updateCart();

}



/* =========================================
   OPEN CART
========================================= */

function openCart() {

    document
        .getElementById("cart-drawer")
        .classList.add("active");


    document
        .getElementById("cart-overlay")
        .classList.add("active");


    document.body.style.overflow =
        "hidden";

}



/* =========================================
   CLOSE CART
========================================= */

function closeCart() {

    document
        .getElementById("cart-drawer")
        .classList.remove("active");


    document
        .getElementById("cart-overlay")
        .classList.remove("active");


    document.body.style.overflow =
        "";

}



/* =========================================
   MOBILE MENU
========================================= */

function toggleMenu() {

    const menu =
        document.getElementById(
            "mobile-menu"
        );


    if (
        menu.style.display ===
        "flex"
    ) {

        menu.style.display =
            "none";

    } else {

        menu.style.display =
            "flex";

    }

}



/* =========================================
   NEWSLETTER
========================================= */

function subscribe(event) {

    event.preventDefault();


    const email =
        event.target
        .querySelector("input")
        .value;


    alert(
        "🎉 Welcome to Sweetie! " +
        "Your 10% discount is ready."
    );


    event.target.reset();

}



/* =========================================
   CHECKOUT
========================================= */

function checkout() {

    if (cart.length === 0) {

        alert(
            "🍭 Your cart is empty! " +
            "Add some delicious candy first."
        );

        return;

    }


    alert(
        "🎉 Thank you for shopping with Sweetie! " +
        "Checkout integration can be connected next."
    );

}



/* =========================================
   HEART BUTTON
========================================= */

document
    .querySelectorAll(".heart-btn")
    .forEach(button => {

        button.addEventListener(
            "click",
            function () {

                if (
                    this.textContent.trim()
                    === "♡"
                ) {

                    this.textContent =
                        "♥";

                    this.style.color =
                        "#e96799";

                } else {

                    this.textContent =
                        "♡";

                    this.style.color =
                        "";

                }

            }
        );

    });



/* =========================================
   SCROLL ANIMATION
========================================= */

const observer =
    new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.style.opacity =
                        "1";

                    entry.target.style.transform =
                        "translateY(0)";

                }

            });

        },
        {
            threshold: .1
        }
    );



document
    .querySelectorAll(
        ".product-card, .review-card, .benefit, .category-card"
    )
    .forEach(element => {

        element.style.opacity = "0";

        element.style.transform =
            "translateY(25px)";

        element.style.transition =
            "opacity .7s ease, transform .7s ease";

        observer.observe(element);

    });


function toggleMenu() {
    const menu = document.getElementById("mobile-menu");
    const button = document.getElementById("menu-btn");

    menu.classList.toggle("active");

    if (menu.classList.contains("active")) {
        button.innerHTML = "✕";
        button.setAttribute("aria-label", "Close navigation menu");
    } else {
        button.innerHTML = "☰";
        button.setAttribute("aria-label", "Open navigation menu");
    }
}

function closeMenu() {
    const menu = document.getElementById("mobile-menu");
    const button = document.getElementById("menu-btn");

    menu.classList.remove("active");

    button.innerHTML = "☰";
    button.setAttribute("aria-label", "Open navigation menu");
}

/* Close menu when resizing to desktop */
window.addEventListener("resize", function () {
    if (window.innerWidth > 1000) {
        closeMenu();
    }
});
