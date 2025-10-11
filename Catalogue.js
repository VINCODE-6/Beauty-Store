
window.addEventListener("scroll", function() {
  const whatsappBtn = document.querySelector(".contact-btn img");
  const footer = document.getElementById("main-footer");

  const footerTop = footer.getBoundingClientRect().top;
  const windowHeight = window.innerHeight;

  if (footerTop < windowHeight) {
    // Footer is visible — move the button up
    whatsappBtn.style.bottom = `${windowHeight - footerTop + 20}px`;
  } else {
    // Normal position
    whatsappBtn.style.bottom = "40px";
  }
});

  // Step 1: Define your WhatsApp link
  const whatsappLink = "https://wa.me/27794642450"; // replace with your number

  // Step 2: Select the contact button by class
  const contactBtn = document.querySelector(".contact-btn");
  contactBtn.href = whatsappLink; // assign the WhatsApp link

  // Step 3: Select all interested buttons
  const interestedButtons = document.querySelectorAll(".interested-button");

  // Step 4: Add same behavior to each interested button
  interestedButtons.forEach(button => {
    button.addEventListener("click", () => {
      window.open(whatsappLink, "_blank");
    });
  });

