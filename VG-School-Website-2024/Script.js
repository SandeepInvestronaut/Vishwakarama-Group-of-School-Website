/* Mobile Navbar */
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
  /* Toggle active class */
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");

  /* Toggle aria-expanded value */
  let menuOpen = navMenu.classList.contains("active");
  //   console.log(menuOpen)
  let newMenuOpenStatus = menuOpen;
  hamburger.setAttribute("aria-expanded", newMenuOpenStatus);
});

// close mobile menu
document.querySelectorAll(".nav-link").forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
    //   Need to add Toggle aria-expanded value here as well because it stays as true when you click a menu item
  })
);

//OurSchool owl carousel
const ourSchoolData = [
  {
    Img: "Assets/our-school-1.png",
    Heading: "Vishwakarma Vidyalaya",
    Title: "Bibwewadi",
    Url:"https://vvp.edu.in/",
  },
  {
    Img: "Assets/our-school-2.png",
    Heading: "Wisdom World School",
    Title: "Wakad | Hadapsar",
    Url:"https://www.wisdomworldschool.in/",
 
  },
  {
    Img: "Assets/our-school-3.png",
    Heading: "Universal Wisdom School",
    Url:"https://www.universalwisdomschool.in/",
  },
];


const ourSchoolDataHandler = (dataList, index) => {
  return `
<a href=${dataList.Url} target="_blank">
    <div class="item" id="box${index}">
        <div class="school_img">
            <img src="${dataList.Img}" alt="${index}">
        </div>
        <div class="heading_wrapper text-center pt-3">
            <p class="m-0">${dataList.Heading}</p>
            <p class="m-0">${dataList.Title}</p>
        </div>
    </div>
</a>

`;
};

document.addEventListener("DOMContentLoaded", () => {
  const owl_demo1 = document.getElementById("owl-demo1");
  ourSchoolData.forEach((dataList, index) => {
    owl_demo1.innerHTML += ourSchoolDataHandler(dataList, index);
  });
  $("#owl-demo1").owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  });
});

//VGS Legacy rolling number
document.addEventListener("DOMContentLoaded", () => {
  function counter(id, start, end, duration) {
    let obj = document.getElementById(id);
    let current = start;
    let range = end - start;
    let increment = end > start ? 1 : -1;
    let step = Math.abs(Math.floor(duration / range));
    let timer = setInterval(() => {
      current += increment;
      obj.textContent = current;
      if (current == end) {
        clearInterval(timer);
      }
    }, step);
  }

  counter("count1", 0, 4, 1000);
  counter("count2", 0, 7000, 5000);
  counter("count3", 0, 1200, 3000);
  counter("count4", 0, 36, 1000);
});

//VGS Events
const Events = [
  {
    Img: "Assets/event-1.png",
    Title: "Space Program By ISRO Scientist at VV",
    Subtitle:
      "Space Program was conducted by ISRO Scientest for the students of Vishwakarma Vidyalaya.",
    Time: "Time: 11:00am - 03:00pm",
    Place: "Location: VV, pune",
    EventCurrentMonth: "11",
    EventCurrentYear: "August",
  },
  {
    Img: "Assets/event-2.png",
    Title: "Aikido for Children",
    Subtitle:
      "An Aikido workshop which is a contemporary martial art of harmony was conducted for children at WWS, Balewadi.",
    Time: "Time: 11:00am - 03:00pm",
    Place: "Location: WWS, Balewadi",
    EventCurrentMonth: "11",
    EventCurrentYear: "August",
  },
  {
    Img: "Assets/event-3.png",
    Title: "Science Exhibition",
    Subtitle:
      "3 ISRO scientists visited Vishwakarma Vidyalaya and interacted with the students on topic of Space Technology during school’s science exhibition.",
    Time: "Time: 11:00am - 03:00pm",
    Place: "Location: vV pune",
    EventCurrentMonth: "11",
    EventCurrentYear: "August",
  },
];

const upcomingEvent = (eventData, index) => {
  return `
<div class="item">
<div class="event_img">
<img src="${eventData.Img}" alt="${index}">
<div class="current_tags position-absolute d-flex flex-column text-center align-items-center justify-content-center"><p>${eventData.EventCurrentMonth}</p>
<p>${eventData.EventCurrentYear}</p></div>

</div>
<div class="event_body">
<p>${eventData.Title}</p>
<p>${eventData.Subtitle}</p>
<div class="places_venus d-flex align-items-center justify-content-between">
<p><span><img src="Assets/time.svg"></span>${eventData.Time}</p>
<p><span><img src="Assets/location.svg"></span>${eventData.Place}</p>
</div>
</div>
</div>
`;
};

document.addEventListener("DOMContentLoaded", () => {
  const owl_demo2 = document.getElementById("owl-demo2");
  Events.forEach((eventData, index) => {
    owl_demo2.innerHTML += upcomingEvent(eventData, index);
  });

  $("#owl-demo2").owlCarousel({
    loop: true,
    margin: 40,
    nav: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  });
});

//our gallery
const OurGallery = [
  {
    Img1: "Assets/co-1.png",
    Title1: "Co-curricular Activities",
    Img2: "Assets/co-2.png",
    Title2: "Co-curricular Activities",
    Img3: "Assets/co-3.png",
    Title3: "Co-curricular Activities",
    Img4: "Assets/co-4.png",
    Title4: "Co-curricular Activities",
  },
  {
    Img1: "Assets/award-1.png",
    Title1: "Awards",
    Img2: "Assets/award-2.png",
    Title2: "Awards",
    Img3: "Assets/award-3.png",
    Title3: "Awards",
    Img4: "Assets/award-4.png",
    Title4: "Awards",
  },
  {
    Img1: "Assets/e-1.png",
    Title1: "Events",
    Img2: "Assets/e-2.png",
    Title2: "Events",
    Img3: "Assets/e-3.png",
    Title3: "Events",
    Img4: "Assets/e-4.png",
    Title4: "Events",
  },
  {
    Img1: "Assets/a-1.png",
    Title1: "Annual Day",
    Img2:"Assets/a-2.png",
    Title2: "Annual Day",
    Img3:"Assets/a-3.png",
    Title3: "Annual Day",
    Img4:"Assets/a-4.png",
    Title4: "Annual Day",
  },
  {
    Img1: "Assets/infa-1.png",
    Title1: "Infrastructure",
    Img2: "Assets/infa-2.png",
    Title2: "Infrastructure",
    Img3: "Assets/infa-3.png",
    Title3: "Infrastructure",
    Img4: "Assets/infa-4.png",
    Title4: "Infrastructure",
  },
  {
    Img1: "Assets/ac-1.png",
    Title1: "Academics",
    Img2: "Assets/ac-2.png",
    Title2: "Academics",
    Img3: "Assets/ac-3.png",
    Title3: "Academics",
    Img4: "Assets/ac-4.png",
    Title4: "Academics",
  },
];

let currentIndex = 0;

const galleryCarousel = (galleryData, index) => {
  // Calculate the number of images dynamically
  const numImages = Object.keys(galleryData).filter((key) =>
    key.startsWith("Img")
  ).length;

  // Get the image and title for the first set (Initial values)
  const imgSrc = galleryData[`Img1`] || "";
  const titleText = galleryData[`Title1`] || "";

  return `
    <div class="image_grid" id="img_container${index + 1}">
            <img id="img${index + 1}" src="${imgSrc}" alt="Gallery Image ${
    index + 1
  }" class="mw-100">
            <p id="title${index + 1}" class="image_grid_title">${titleText}</p>
        </div>
    `;
};

const updateImages = () => {
  OurGallery.forEach((galleryData, index) => {
    // Calculate the number of images dynamically
    const numImages = Object.keys(galleryData).filter((key) =>
      key.startsWith("Img")
    ).length;

    const imgElement = document.getElementById(`img${index + 1}`);
    const titleElement = document.getElementById(`title${index + 1}`);

    if (imgElement && titleElement) {
      // Calculate the current image and title index based on the number of images
      const imgIndex = (currentIndex % numImages) + 1;
      const titleIndex = imgIndex;

      imgElement.src = galleryData[`Img${imgIndex}`] || "";
      titleElement.textContent = galleryData[`Title${titleIndex}`] || "";
    }
  });

  // Update currentIndex for the next set
  currentIndex++;
};

document.addEventListener("DOMContentLoaded", () => {
  const image_slider = document.getElementById("image_slider");
  OurGallery.forEach((galleryData, index) => {
    image_slider.innerHTML += galleryCarousel(galleryData, index);
  });

  setInterval(updateImages, 2000);
});



//Bottom to top

var btn = $("#button");

$(window).scroll(function () {
  if ($(window).scrollTop() > 300) {
    btn.addClass("show");
  } else {
    btn.removeClass("show");
  }
});

btn.on("click", function (e) {
  e.preventDefault();
  $("html, body").animate({ scrollTop: 0 }, "300");
});

//Contact Form Validation

function validateform() {
  let name = document.myform.name.value.trim();
  let email = document.myform.email.value.trim();
  let message = document.myform.message.value.trim();

  // Error message elements
  let nameError = document.getElementById("name-error");
  let emailError = document.getElementById("email-error");
  let messageError = document.getElementById("message-error");

  // Clear previous error messages
  nameError.innerHTML = "";
  emailError.innerHTML = "";
  messageError.innerHTML = "";

  let valid = true;

  // Error messages
  const nameErrorMsg = "Please enter full name";
  const emailErrorMsg = "Please enter an email address";
  const messageErrorMsg = "Please enter your message";

  if (name === "") {
    nameError.innerHTML = nameErrorMsg;
    valid = false;
  }
  if (email === "") {
    emailError.innerHTML = emailErrorMsg;
    valid = false;
  }
  if (message === "") {
    messageError.innerHTML = messageErrorMsg;
    valid = false;
  }

  return valid;
}

function toggleText() {
  const fullText = document.getElementById("fullText");
  const shortText = document.getElementById("shortText");
  const readMore = document.getElementById("readMore");
  const readLess = document.getElementById("readLess");

  const isFullTextVisible = fullText.style.display !== "none";

  fullText.style.display = isFullTextVisible ? "none" : "block";
  shortText.style.display = isFullTextVisible ? "block" : "none";
}
