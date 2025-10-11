
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


 // --- Keep WhatsApp button floating above footer (footer uses class, not ID) ---

window.addEventListener("scroll", function() {
  // Select the WhatsApp image inside the contact button link
  const whatsappBtn = document.querySelector(".contact-btn img");
  
  // Select the footer using its class
  const footer = document.querySelector(".site-footer");
  
  // Get the distance from top of footer to top of viewport
  const footerTop = footer.getBoundingClientRect().top;
  
  // Get height of visible browser window
  const windowHeight = window.innerHeight;
  
  // Normal bottom position for floating button (in pixels)
  const normalBottom = 40;
  
  // How close the footer is to the bottom of the screen
  const distanceFromFooter = windowHeight - footerTop;
  
  // If the footer is visible
  if (footerTop < windowHeight) {
    // Raise button up by amount of footer visible + extra gap
    const newBottom = distanceFromFooter + 60; // increase 60 for more space
    whatsappBtn.style.bottom = `${Math.max(normalBottom, newBottom)}px`;
  } else {
    // Otherwise keep button in normal position
    whatsappBtn.style.bottom = `${normalBottom}px`;
  }
});










