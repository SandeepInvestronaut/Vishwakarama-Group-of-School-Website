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
    Url: "https://vvp.edu.in/",
  },
  {
    Img: "Assets/our-school-2.png",
    Heading: "Wisdom World School",
    Title: "Wakad | Hadapsar",
    Url: "https://www.wisdomworldschool.in/",

  },
  {
    Img: "Assets/our-school-3.png",
    Heading: "Universal Wisdom School",
    Title: "Balewadi",
    Url: "https://www.universalwisdomschool.in/",
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
    Img: "Assets/annual_price_01.png",
    Title: "Annual Prize Day and Concert",
    Subtitle:
      "A celebration of academic excellence and artistic brilliance, the event will showcase the multifaceted talents of students.",
    Time: "Date: 30th November, 2024",
    Place: "Location: The Auditorium",
    EventCurrentMonth: "",
    EventCurrentYear: "",
  },
  {
    Img: "Assets/annual_price_03.png",
    Title: "Parent Teacher Meeting",
    Subtitle:
      "An invaluable opportunity to discuss students’ progress and explore strategies for their holistic development.",
    Time: "14th December, 2024",
    Place: "Location: UWS",
    EventCurrentMonth: "",
    EventCurrentYear: "",
  },
  {
    Img: "Assets/annual_price_02.png",
    Title: "Annual Prize Day and Concert",
    Subtitle:
      "Witness the multifaceted talents of our students as they showcase their proud achievements and brilliant performances.",
    Time: "Date: 14th December, 2024",
    Place: "Location: The Ground",
    EventCurrentMonth: "",
    EventCurrentYear: "",
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

//VGS Gallery
const galleryData = [
  {
    images: [
      "Assets/co-1.png", "Assets/co-2.png", "Assets/co-3.png", "Assets/co-4.png"
    ],
    title: "Co-curricular Activities"
  },
  {
    images: [
      "Assets/award-1.png", "Assets/award-2.png", "Assets/award-3.png", "Assets/award-4.png"
    ],
    title: "Awards"
  },
  {
    images: [
      "Assets/e-1.png", "Assets/e-2.png", "Assets/e-3.png", "Assets/e-4.png"
    ],
    title: "Events"
  },
  {
    images: [
      "Assets/a-1.png", "Assets/a-2.png", "Assets/a-3.png", "Assets/a-4.png"
    ],
    title: "Annual Day"
  },
  {
    images: [
      "Assets/infa-1.png", "Assets/infa-2.png", "Assets/infa-3.png", "Assets/infa-4.png"
    ],
    title: "Infrastructure"
  },
  {
    images: [
      "Assets/ac-1.png", "Assets/ac-2.png", "Assets/ac-3.png", "Assets/ac-4.png"
    ],
    title: "Academics"
  }
];



const galleryContainer = document.querySelector('.gallery-container');

galleryData.forEach((item, id) => {
  const galleryItem = document.createElement('div');
  galleryItem.classList.add('gallery-item');
  galleryItem.id = `gallery-item-${id + 1}`;

  

  const title = document.createElement('p');
  title.textContent = item.title;

  galleryItem.appendChild(title);

  // Create image elements and set their source
  const images = item.images.map((src, index) => {
    const img = document.createElement('img');
    img.src = src;

    // Add 'active' class to the first image and 'next' class to others
    img.classList.add(index === 0 ? 'active' : 'next');
    galleryItem.appendChild(img);
    return img;
  });

  let currentImageIndex = 0;
  let intervalId;

  // Function to handle the sliding transition
  const slideImages = () => {
    const currentImage = images[currentImageIndex];

    // Slide the current image out of view to the left
    currentImage.style.transform = 'translateX(-100%)';
    currentImage.classList.remove('active');
    currentImage.classList.add('next');

    // Increment the index for the next image
    currentImageIndex = (currentImageIndex + 1) % images.length;

    const nextImage = images[currentImageIndex];

    // Reset the next image position to the right
    nextImage.style.transform = 'translateX(-100%)';

    // After resetting, trigger the slide-in animation
    setTimeout(() => {
      nextImage.style.transform = 'translateX(0)';
      nextImage.classList.remove('next');
      nextImage.classList.add('active');
    }, 20); // Small delay to apply the transform reset
  };

  // For desktop or non-mobile devices: Slide images on hover
  galleryItem.addEventListener('mouseover', () => {
    slideImages(); // Immediately slide to the next image on hover

    // Start the interval to slide every 2.5 seconds
    intervalId = setInterval(slideImages, 2500);
  });

  galleryItem.addEventListener('mouseout', () => {
    // Stop automatic sliding when mouse leaves the gallery item
    clearInterval(intervalId);
  });

  // Auto-slide for mobile devices
  if (window.innerWidth < 768) {
    // Automatically slide every 3 seconds
    intervalId = setInterval(slideImages, 3000);
  }

  // Add the item to the gallery container
  galleryContainer.appendChild(galleryItem);
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






 