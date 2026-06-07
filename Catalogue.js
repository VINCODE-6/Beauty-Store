const whatsappNumber = "27812120502";
const whatsappBase = `https://wa.me/${whatsappNumber}`;

const wishlist = [];

const wishlistLink = document.getElementById("wishlist-link");
const wishlistCount = document.getElementById("wishlist-count");
const wishlistModal = document.getElementById("wishlist-modal");
const wishlistItemsDiv = document.getElementById("wishlist-items");
const closeWishlist = document.getElementById("close-wishlist");
const enquireBtn = document.getElementById("enquire-btn");
const productModal = document.getElementById("product-modal");
const productModalClose = document.querySelector(".modal-close");
const modalImg = document.getElementById("modal-img");
const modalCaption = document.getElementById("modal-caption");
const notification = document.getElementById("wishlist-notification");

document.querySelectorAll(".contact-btn, .whatsapp-link, .whatsapp-cta").forEach(link => {
    link.href = whatsappBase;
});

function toggleBodyScroll() {
    const modalIsOpen = document.querySelector(".modal.is-open");
    document.body.classList.toggle("modal-open", Boolean(modalIsOpen));
}

function openDialog(dialog) {
    dialog.classList.add("is-open");
    toggleBodyScroll();
}

function closeDialog(dialog) {
    dialog.classList.remove("is-open");
    toggleBodyScroll();
}

function showNotification(text) {
    notification.textContent = text;
    notification.classList.remove("show");
    void notification.offsetWidth;
    notification.classList.add("show");
}

function bumpWishlistCount() {
    wishlistCount.classList.remove("bump");
    void wishlistCount.offsetWidth;
    wishlistCount.classList.add("bump");
}

function buildWishlistItem(itemContainer) {
    const name = itemContainer.querySelector(".product-name")?.textContent.trim() || "Selected item";
    const price = itemContainer.querySelector(".price")?.textContent.trim() || "";
    return `${name} - ${price}`;
}

function renderWishlist() {
    wishlistItemsDiv.innerHTML = "";

    if (wishlist.length === 0) {
        wishlistItemsDiv.innerHTML = "<p style='color:#94847d;'>Your wishlist is empty.</p>";
        return;
    }

    wishlist.forEach(item => {
        wishlistItemsDiv.innerHTML += `<p>${item}</p>`;
    });
}

document.querySelectorAll(".interested-button").forEach(button => {
    button.addEventListener("click", () => {
        const itemContainer = button.closest(".weave-item, .accessory-item");
        const item = buildWishlistItem(itemContainer);

        if (!wishlist.includes(item)) {
            wishlist.push(item);
            wishlistCount.textContent = wishlist.length;
            bumpWishlistCount();
            showNotification("Item added to wishlist");
            return;
        }

        showNotification("This item is already in your wishlist");
    });
});

wishlistLink.addEventListener("click", event => {
    event.preventDefault();
    renderWishlist();
    openDialog(wishlistModal);
});

closeWishlist.addEventListener("click", () => {
    closeDialog(wishlistModal);
});

enquireBtn.addEventListener("click", () => {
    if (wishlist.length === 0) {
        showNotification("Add an item first before enquiring");
        return;
    }

    const message = [
        "Hello, I am interested in these items from your catalogue:",
        "",
        ...wishlist.map((item, index) => `${index + 1}. ${item}`)
    ].join("\n");

    window.open(`${whatsappBase}?text=${encodeURIComponent(message)}`, "_blank");
});

function openModal(img) {
    modalImg.src = img.src;
    modalCaption.textContent = img.alt;
    openDialog(productModal);
}

window.openModal = openModal;

productModalClose.addEventListener("click", () => {
    closeDialog(productModal);
});

[wishlistModal, productModal].forEach(dialog => {
    dialog.addEventListener("click", event => {
        if (event.target === dialog) {
            closeDialog(dialog);
        }
    });
});

document.addEventListener("keydown", event => {
    if (event.key === "Escape") {
        closeDialog(wishlistModal);
        closeDialog(productModal);
    }
});

const revealElements = document.querySelectorAll(".reveal");

revealElements.forEach((element, index) => {
    element.style.transitionDelay = `${Math.min(index * 0.04, 0.24)}s`;
});

if ("IntersectionObserver" in window) {
    const revealObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("is-visible");
                revealObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.16,
        rootMargin: "0px 0px -8% 0px"
    });

    revealElements.forEach(element => revealObserver.observe(element));
} else {
    revealElements.forEach(element => element.classList.add("is-visible"));
}















