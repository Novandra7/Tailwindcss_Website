function notif(title, pesan, icon) {  // funtion
    Swal.fire({
        title: title,
        text: pesan,
        icon: icon,
    });
}

window.onscroll = function () {
    const toTop = document.getElementById("to-top");

    if (window.scrollY > 150) {     //pengkondisian
        toTop.classList.remove("hidden");
        toTop.classList.add("flex");
    } else {
        toTop.classList.add("hidden");
        toTop.classList.remove("flex");
    }

    const language = [      //array
        "html",
        "css",
        "javascript",
        "java",
        "php",
        "laravel",
        "mysql",
        "python",
    ];

    const skillBars = document.querySelectorAll(".skillanimation");
    if (window.scrollY > 2200) {
        skillBars.forEach((element, index) => {     //perulangan
            const animasi = language[index] || "";
            element.classList.add("skill-per", animasi);
        });
    }
};

const contactForm = document.getElementById("contactForm");     //form

contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const nameINput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const subjectInput = document.getElementById("subject");
    const messageInput = document.getElementById("message");

    const name = nameINput.value;
    const email = emailInput.value;
    const subject = subjectInput.value;
    const message = messageInput.value;

    localStorage.setItem("name", name);     //localstorage
    localStorage.setItem("email", email);
    localStorage.setItem("subject", subject);
    localStorage.setItem("message", message);

    nameINput.value = "";
    emailInput.value = "";
    subjectInput.value = "";
    messageInput.value = "";

    notif(subject, message, "success");
});
