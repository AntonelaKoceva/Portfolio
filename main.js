const contactLinks = document.querySelectorAll(".contactLink");
const contactModal = document.getElementById("contactModal");
const overlay = document.querySelector(".overlay");
const btnClose = document.querySelector(".btn-close");
const form = document.getElementById("ajaxForm");

if (form) {
    form.addEventListener("submit", function(e) {
        e.preventDefault(); 

        const formspreeUrl = "https://formspree.io/f/mgoblwrn"; 
        const formData = new FormData(form);
        fetch(formspreeUrl, {
            method: "POST",
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        })
        .then(response => {
            if (response.ok) {
                form.reset(); 

                closePopup(); 
                
                alert("Thank you! Your message has been sent successfully.");
            } else {
                alert("Oops! There was a problem submitting your form.");
            }
        })
        .catch(error => {
            alert("Oops! There was a problem submitting your form.");
        });
    });
}

contactLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
        e.preventDefault();

        if (overlay) {
            overlay.style.display = "block"; 
        }
        if (contactModal) {
            contactModal.classList.add("popup-open");
        }

        document.body.style.overflow = "hidden";
    });
});

function closePopup() {
    if (overlay) {
        overlay.style.display = "none";
    }
    if (contactModal) {
        contactModal.classList.remove("popup-open");
    }
    document.body.style.overflow = "auto";
}

if (btnClose) {
    btnClose.addEventListener("click", closePopup);
}

if (overlay) {
    overlay.addEventListener("click", closePopup);
}