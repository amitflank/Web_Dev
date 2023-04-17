document.addEventListener("DOMContentLoaded", function() {
    const links = document.querySelectorAll(".menu a");

    for (const link of links) {
        link.addEventListener("click", function(event) {
            const targetId = this.getAttribute("href");

            // Check if the target is an element on the current page
            if (targetId.startsWith("#")) {
                const targetElement = document.querySelector(targetId);

                if (targetElement) {
                    event.preventDefault();
                    targetElement.scrollIntoView({ behavior: "smooth" });
                }
            }
            // If the target is not an element on the current page, allow the default behavior
        });
    }
});
