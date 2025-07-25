// Add active class to current section
document.addEventListener("scroll", function () {
  const sections = document.querySelectorAll(".snap-section");
  let currentSection = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (pageYOffset >= sectionTop - sectionHeight / 3) {
      currentSection = section.getAttribute("id");
    }
  });

  // You can use currentSection to update navigation or do other actions
  console.log("Current section:", currentSection);
});

// For navigation buttons (optional)
function goToSection(sectionNumber) {
  const section = document.querySelectorAll(".snap-section")[sectionNumber - 1];
  section.scrollIntoView({ behavior: "smooth" });
}
