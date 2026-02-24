const whatsappNumber = "27794642450";
const whatsappBase = `https://wa.me/${whatsappNumber}`;

document.querySelector(".contact-btn").href = whatsappBase;

let wishlist = [];

const wishlistLink = document.getElementById("wishlist-link");
const wishlistCount = document.getElementById("wishlist-count");
const wishlistModal = document.getElementById("wishlist-modal");
const wishlistItemsDiv = document.getElementById("wishlist-items");
const closeWishlist = document.getElementById("close-wishlist");
const notification = document.getElementById("wishlist-notification");

function showNotification(text) {
    notification.innerText = text;
    notification.classList.remove("show");
    void notification.offsetWidth;
    notification.classList.add("show");
}

document.querySelectorAll(".interested-button").forEach(button => {
    button.addEventListener("click", () => {
        const itemContainer = button.closest(".weave-item, .accessory-item");
        const img = itemContainer.querySelector("img");
        const priceEl = itemContainer.querySelector(".price");
        const item = `${img.alt} – ${priceEl.textContent}`;

        if (!wishlist.includes(item)) {
            wishlist.push(item);
            wishlistCount.textContent = wishlist.length;
            showNotification("✔ Item added to wishlist");
        } else {
            showNotification("Already in wishlist");
        }
    });
});

wishlistLink.addEventListener("click", (e) => {
    e.preventDefault();
    wishlistItemsDiv.innerHTML = "";
    if (wishlist.length === 0) {
        wishlistItemsDiv.innerHTML = "<p style='color:#999;font-style:italic;'>Your wishlist is empty.</p>";
    } else {
        wishlist.forEach(item => {
            wishlistItemsDiv.innerHTML += `<p>${item}</p>`;
        });
    }
    wishlistModal.style.display = "block";
});

closeWishlist.onclick = () => {
    wishlistModal.style.display = "none";
};

window.onclick = (event) => {
    if (event.target == wishlistModal) {
        wishlistModal.style.display = "none";
    }
};

function openModal(img) {
    const modal = document.getElementById("product-modal");
    const modalImg = document.getElementById("modal-img");
    const caption = document.getElementById("modal-caption");
    modal.style.display = "block";
    modalImg.src = img.src;
    caption.innerText = img.alt;
}

document.querySelectorAll("#product-modal .close").forEach(btn => {
    btn.onclick = () => {
        document.getElementById("product-modal").style.display = "none";
    };
});














