
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

// --- Adjust WhatsApp button position when footer is in view ---

// Listen for scroll events (runs code every time user scrolls)
window.addEventListener("scroll", function() {
  
  // Select the WhatsApp image inside the .contact-btn div
  const whatsappBtn = document.querySelector(".contact-btn");
  
  // Select the footer element (make sure footer has id="footer")
  const footer = document.getElementById("site-footer");
  
  // Get the distance between the top of the footer and the viewport
  const footerTop = footer.getBoundingClientRect().top;
  
  // Get height of visible part of the window
  const windowHeight = window.innerHeight;

  // If the footer is visible on the screen
  if (footerTop < windowHeight) {
    // Move the WhatsApp button upward (so it doesn’t overlap footer)
    whatsappBtn.style.bottom = `${windowHeight - footerTop + 20}px`;
  } else {
    // Otherwise, keep it fixed in its normal bottom-right position
    whatsappBtn.style.bottom = "40px";
  }
});




