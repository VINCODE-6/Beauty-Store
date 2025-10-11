
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


  // If the footer is visible on the screen
  if (footerTop < windowHeight) {
    // Move the WhatsApp button upward (so it doesn’t overlap footer)
    whatsappBtn.style.bottom = `${windowHeight - footerTop + 80}px`;
  } else {
    // Otherwise, keep it fixed in its normal bottom-right position
    whatsappBtn.style.bottom = "40px";
  }
});

// --- Keep WhatsApp button floating above footer ---

window.addEventListener("scroll", function() {
  // Select the WhatsApp image inside the contact button
  const whatsappBtn = document.querySelector(".contact-btn img");

  // Select the footer (make sure your HTML footer uses id="site-footer")
  const footer = document.getElementById("site-footer");

  // Get how far from the top of the viewport the footer currently is
  const footerTop = footer.getBoundingClientRect().top;

  // Get the visible height of the browser window
  const windowHeight = window.innerHeight;

  // Default bottom position for the floating WhatsApp icon
  const normalBottom = 40; 

  // Distance between the bottom of the viewport and the top of the footer
  const distanceFromFooter = windowHeight - footerTop;

  // If the footer is visible (footerTop < windowHeight)
  if (footerTop < windowHeight) {
    // Calculate the new bottom position so the icon never touches the footer
    // We subtract 60 here to keep a nice gap above the footer border.
    const newBottom = distanceFromFooter + 60;

    // Prevent the button from going below its normal position
    whatsappBtn.style.bottom = `${Math.max(normalBottom, newBottom)}px`;
  } else {
    // When footer not visible, keep it fixed near the bottom
    whatsappBtn.style.bottom = `${normalBottom}px`;
  }
});









