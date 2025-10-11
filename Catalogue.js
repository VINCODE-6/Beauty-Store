
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


 // --- Prevent WhatsApp button from touching footer ---
window.addEventListener("scroll", function() {
  const whatsappBtn = document.querySelector(".contact-btn"); // floating button
  const footer = document.querySelector(".site-footer");          // footer section
  const footerRect = footer.getBoundingClientRect();              // get footer position
  const windowHeight = window.innerHeight;                        // visible screen height
  const normalBottom = 40;                                        // default button height from bottom

  // If footer is visible on screen
  if (footerRect.top < windowHeight) {
    // Calculate how much footer is visible
    const overlap = windowHeight - footerRect.top;

    // Move button up if overlap grows (footer entering view)
    // Subtract overlap so it stays ABOVE footer, add +20 for small gap
    const newBottom = normalBottom + overlap + 80;

    // Apply new position (button rises smoothly)
    whatsappBtn.style.bottom = `${newBottom}px`;
  } else {
    // Footer not visible — button stays fixed bottom-right
    whatsappBtn.style.bottom = `${normalBottom}px`;
  }
});













