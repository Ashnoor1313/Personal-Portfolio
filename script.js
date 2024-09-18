// Get the button and link elements
const downloadBtn = document.getElementById('download-btn');
const pdfLink = document.getElementById('resume-pdf-link');

// Set the PDF file path and name
const pdfFilePath = "https://drive.google.com/file/d/1YjaDO1d7O58J9ImhThvhbsRQ9FYHOww9/view?usp=drive_link";
const pdfFileName = 'Resume';

// Add an event listener to the button
downloadBtn.addEventListener('click', () => {
  // Create a new link element with the PDF file path and name
  const link = document.createElement('a');
  link.href = pdfFilePath;
  link.download = pdfFileName;
  link.target = '_blank';

  // Append the link to the hidden link element
  pdfLink.href = link.href;
  pdfLink.download = link.download;
  pdfLink.target = link.target;

  // Simulate a click on the hidden link to download the PDF
  pdfLink.click();
});





/*function myMenuFunction() {
    var menuBth = document.getElementById("myNavMenu");
    
    if (menuBth.className === "nav-menu") {
        menuBth.className += " responsive";
    } else {
        menuBth.className = "nav-menu";
    }
}*/

var typingEffect = new Typed(".typedtext", {
    strings: ["Designer","coder","Developer"],
    
    loop: true,
    typedSpeed: 100,
    backSpeed: 80,
    backdelay: 2000,

})

const sr = scrollReveal({
    origin: "top",
    distance: "80px",
    duration: "2000",
    reset: true,
});

sr.reveal(".featured-name",{delay: 100});
sr.reveal(".text-info",{delay: 200});
sr.reveal(".textt-btn",{delay: 200});
sr.reveal(".social_icons",{delay: 200});
sr.reveal(".featured-image",{delay: 320});

sr.reveal(".project-box",{interval: 200});
sr.reveal(".top-header",{});

const srLeft = scrollReveal({
    origin: "left",
    distance: "80px",
    duration: "2000",
    reset: true,
})

srLeft.reveal(".about-info",{delay: 100});
srLeft.reveal(".contact-info",{delay: 100});

const srRight  = scrollReveal({
    origin: "left",
    distance: "80px",
    duration: "2000",
    reset: true,
})

srRight.reveal(".skill",{delay: 100});
srRight.reveal(".skill-box",{delay: 100});

/*------active link-----*/

const sections = document.querySelectorAll(".section[id]");

function scrollActive(){
    const scrollY = window.scrollY;

    sections.forEach((current) => {
        
        const sectionHeight = curent.offsetHeight,
        
           sectionTop = current.offsetTop - 50,
           sectionId = current.getAttribute("id");
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document
                .querySelector(".nav-menu a[href*=" + sectionId + "]")
                .classList.add("active-link");

        }else{
            document
            .querySelector(".nav-menu a[href*=" + sectionId + "]")
            .classList.remove("active-link");
        }

    });
}

window.addEventListener("scroll" , scrollActive);