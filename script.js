const searchTxt = document.getElementById("search");
const searchBox = document.getElementById("search-bar");
const searchBtn = document.getElementById("search-btn");
const form = document.getElementById("search-bar");
const date1 = document.getElementById("check-in");
const date2 = document.getElementById("check-out");
const Aincrement = document.getElementById("Aincrement");
const Adecrement = document.getElementById("Adecrement");

let Adults = 0;
let children = 0;
let infants = 0;
let pets = 0;

Adecrement.disabled = true;
Adecrement.classList.add("disabled-btn");
Adecrement.innerHTML = `<i class="fa-solid fa-minus" style="color: #d7d7d7;"></i>`;

Aincrement.addEventListener("click", function () {

    let Myvalue = document.getElementById("Adults");
    Adults = parseInt(Myvalue.innerText) + 1;

    if (Adecrement.disabled && Adults >= 0) {
        Adecrement.disabled = false
        Adecrement.classList.toggle("disabled-btn");
        Adecrement.innerHTML = `<i class="fa-solid fa-minus" style="color: #000000;"></i>`
    }

    if (Adults + children == 16) {
        Aincrement.disabled = true
        Aincrement.classList.toggle("disabled-btn");
        Aincrement.innerHTML = `<i class="fa-solid fa-plus" style="color: #d7d7d7;"></i>`;

        Cincrement.disabled = true
        Cincrement.classList.toggle("disabled-btn");
        Cincrement.innerHTML = `<i class="fa-solid fa-plus" style="color: #d7d7d7;"></i>`;
    }
    Myvalue.innerText = Adults;
});

Adecrement.addEventListener("click", function () {

    let Myvalue = document.getElementById("Adults");
    Adults = parseInt(Myvalue.innerText) - 1;

    if (Aincrement.disabled && Adults + children < 16) {
        Aincrement.disabled = false;
        Aincrement.classList.toggle("disabled-btn");
        Aincrement.innerHTML = `<i class="fa-solid fa-plus" style="color: #000000;"></i>`;

        Cincrement.disabled = false;
        Cincrement.classList.toggle("disabled-btn");
        Cincrement.innerHTML = `<i class="fa-solid fa-plus" style="color: #000000;"></i>`;

    }

    if (Adults == 0) {
        children = 0;
        let Myvalue = document.getElementById("Children");
        Myvalue.innerText = children;
        Cdecrement.disabled = true;
        Cdecrement.classList.add("disabled-btn");
        Cdecrement.innerHTML = `<i class="fa-solid fa-minus" style="color: #d7d7d7;"></i>`;

        Adecrement.disabled = true;
        Adecrement.classList.toggle("disabled-btn");
        Adecrement.innerHTML = `<i class="fa-solid fa-minus" style="color: #d7d7d7;"></i>`;
    }
    Myvalue.innerText = Adults;
});

const Cincrement = document.getElementById("Cincrement");
const Cdecrement = document.getElementById("Cdecrement");
Cdecrement.disabled = true;
Cdecrement.classList.add("disabled-btn");
Cdecrement.innerHTML = `<i class="fa-solid fa-minus" style="color: #d7d7d7;"></i>`;

Cincrement.addEventListener("click", function () {

    if (Adults == 0) {
        let Myvalue = document.getElementById("Adults");
        Adults = parseInt(Myvalue.innerText) + 1;
        Myvalue.innerText = Adults;
    }

    let Myvalue = document.getElementById("Children");
    children = parseInt(Myvalue.innerText) + 1;

    if (Cdecrement.disabled) {
        Cdecrement.disabled = false
        Cdecrement.classList.toggle("disabled-btn");
        Cdecrement.innerHTML = `<i class="fa-solid fa-minus" style="color: #000000;"></i>`
    }

    if (children + Adults == 16) {
        Aincrement.disabled = true
        Aincrement.classList.toggle("disabled-btn");
        Aincrement.innerHTML = `<i class="fa-solid fa-plus" style="color: #d7d7d7;"></i>`;

        Cincrement.disabled = true
        Cincrement.classList.toggle("disabled-btn");
        Cincrement.innerHTML = `<i class="fa-solid fa-plus" style="color: #d7d7d7;"></i>`;
    }
    Myvalue.innerText = children;
});

Cdecrement.addEventListener("click", function () {

    let Myvalue = document.getElementById("Children");
    children = parseInt(Myvalue.innerText) - 1;

    if (Cincrement.disabled && Adults + children < 16) {
        Cincrement.disabled = false;
        Cincrement.classList.toggle("disabled-btn");
        Cincrement.innerHTML = `<i class="fa-solid fa-plus" style="color: #000000;"></i>`;

        Aincrement.disabled = false;
        Aincrement.classList.toggle("disabled-btn");
        Aincrement.innerHTML = `<i class="fa-solid fa-plus" style="color: #000000;"></i>`;
    }

    if (children == 0) {
        Cdecrement.disabled = true;
        Cdecrement.classList.toggle("disabled-btn");
        Cdecrement.innerHTML = `<i class="fa-solid fa-minus" style="color: #d7d7d7;"></i>`;
    }
    Myvalue.innerText = children;
});

const Iincrement = document.getElementById("Iincrement");
const Idecrement = document.getElementById("Idecrement");
Idecrement.disabled = true;
Idecrement.classList.add("disabled-btn");
Idecrement.innerHTML = `<i class="fa-solid fa-minus" style="color: #d7d7d7;"></i>`;

Iincrement.addEventListener("click", function () {

    if (Adults == 0) {
        let Myvalue = document.getElementById("Adults");
        Adults = parseInt(Myvalue.innerText) + 1;
        Myvalue.innerText = Adults;
    }

    let Myvalue = document.getElementById("Infants");
    let newValue = parseInt(Myvalue.innerText) + 1;

    if (Idecrement.disabled) {
        Idecrement.disabled = false
        Idecrement.classList.toggle("disabled-btn");
        Idecrement.innerHTML = `<i class="fa-solid fa-minus" style="color: #000000;"></i>`
    }

    if (newValue == 5) {
        Iincrement.disabled = true
        Iincrement.classList.toggle("disabled-btn");
        Iincrement.innerHTML = `<i class="fa-solid fa-plus" style="color: #d7d7d7;"></i>`;
    }
    Myvalue.innerText = newValue;
});

Idecrement.addEventListener("click", function () {

    let Myvalue = document.getElementById("Infants");
    let newValue = parseInt(Myvalue.innerText) - 1;
    if (Iincrement.disabled) {
        Iincrement.disabled = false;
        Iincrement.classList.toggle("disabled-btn");
        Iincrement.innerHTML = `<i class="fa-solid fa-plus" style="color: #000000;"></i>`;
    }

    if (newValue == 0) {
        Idecrement.disabled = true;
        Idecrement.classList.toggle("disabled-btn");
        Idecrement.innerHTML = `<i class="fa-solid fa-minus" style="color: #d7d7d7;"></i>`;
    }
    Myvalue.innerText = newValue;
});

const Pdecrement = document.getElementById("Pdecrement");
const Pincrement = document.getElementById("Pincrement");
Pdecrement.disabled = true;
Pdecrement.classList.add("disabled-btn");
Pdecrement.innerHTML = `<i class="fa-solid fa-minus" style="color: #d7d7d7;"></i>`;

Pincrement.addEventListener("click", function () {

    if (Adults == 0) {
        let Myvalue = document.getElementById("Adults");
        Adults = parseInt(Myvalue.innerText) + 1;
        Myvalue.innerText = Adults;
    }

    let Myvalue = document.getElementById("Pets");
    let newValue = parseInt(Myvalue.innerText) + 1;

    if (Pdecrement.disabled) {
        Pdecrement.disabled = false
        Pdecrement.classList.toggle("disabled-btn");
        Pdecrement.innerHTML = `<i class="fa-solid fa-minus" style="color: #000000;"></i>`
    }

    if (newValue == 5) {
        Pincrement.disabled = true
        Pincrement.classList.toggle("disabled-btn");
        Pincrement.innerHTML = `<i class="fa-solid fa-plus" style="color: #d7d7d7;"></i>`;
    }
    Myvalue.innerText = newValue;
});

Pdecrement.addEventListener("click", function () {

    let Myvalue = document.getElementById("Pets");
    let newValue = parseInt(Myvalue.innerText) - 1;

    if (Pincrement.disabled) {
        Pincrement.disabled = false;
        Pincrement.classList.toggle("disabled-btn");
        Pincrement.innerHTML = `<i class="fa-solid fa-plus" style="color: #000000;"></i>`;
    }

    if (newValue == 0) {
        Pdecrement.disabled = true;
        Pdecrement.classList.toggle("disabled-btn");
        Pdecrement.innerHTML = `<i class="fa-solid fa-minus" style="color: #d7d7d7;"></i>`;
    }
    Myvalue.innerText = newValue;
});


// disable the passed dates
let date = new Date();
let day = date.getDate();
if (day < 10) {
    day = '0' + day;
}
let month = date.getMonth() + 1;
if (month < 10) {
    month = '0' + month;
}
let year = date.getFullYear();

date1.min = `${year}-${month}-${day}`;
date2.min = `${year}-${month}-${day}`;


// this function is to animate search button (adding search text inside the button)
searchBox.addEventListener("click", function () {
    searchTxt.innerText = "Search";
    searchBtn.classList.add("new-search");
});

// this function is to to animate search button (removing search text inside the button)
document.addEventListener("click", function (event) {
    if (!document.getElementById("dropdown").contains(event.target)) {
        if (!document.getElementById("suggestions").contains(event.target)) {
            if (!document.getElementById("search-bar").contains(event.target)) {
                searchTxt.innerText = "";
                searchBtn.classList.remove("new-search");
            }
        }
    }
});

// this function displayes the drop down on focus
const guestsInput = document.getElementById("guests");
guestsInput.addEventListener("focus", function () {
    document.getElementById("dropdown").style.display = "flex";
    searchTxt.innerText = "Search";
    searchBtn.classList.add("new-search");
});

// function to remove the dropdown if the user blur it
document.addEventListener("click", function (event) {
    if (!document.getElementById("dropdown").contains(event.target)) {
        if (!document.getElementById("guests-container").contains(event.target)) {
            document.getElementById("dropdown").style.display = "none";
        }
    }
});

document.addEventListener("click", function (event) {
    if (!document.getElementById("suggestions").contains(event.target)) {
        if (!document.getElementById("location-container").contains(event.target)) {
            document.getElementById("suggestions").style.display = "none";
        }
    }
});

const locationInput = document.getElementById("location");
locationInput.addEventListener("keyup", function (event) {
    if (event.target.value === "") {
        document.getElementById("suggestions").style.display = "none";
    } else {
        document.getElementById("suggestions").style.display = "flex";
        optimalfn(event);
    }
});

const optimalfn = debounce(searchFun, 200);

async function searchFun(event) {
    console.log(event.target.value);
    let payload = event.target.value;
    const url = `https://airbnb13.p.rapidapi.com/autocomplete?query=${payload}`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'c5014a6b6emsh84288eb75db9f9fp1759f6jsn73c5e567590c',
            'X-RapidAPI-Host': 'airbnb13.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const result = await response.json();
        result.forEach(element => {
            console.log(element.query);
            createPlaceCards(element.query);
        });
    } catch (error) {
        console.error(error);
    }
}


function debounce(normalFn, delay) {
    let timerId;
    return function (...args) {
        if (timerId) {
            clearInterval(timerId);
        }
        timerId = setTimeout(() => {
            placesContainer.innerHTML = '';
            normalFn(...args);
        }, delay);
    }
};


const placesContainer = document.getElementById("places-container");
function createPlaceCards(place) {
    let placecard = document.createElement("div");
    placecard.id = "locationName";
    placecard.classList.add("place");
    

    let locationLogo = document.createElement("div");
    locationLogo.classList.add("location-logo");
    locationLogo.innerHTML = `<i class="fa-solid fa-location-dot"></i>`;

    placecard.appendChild(locationLogo);

    let placeName = document.createElement("p");
    placeName.innerText = place;

    placecard.appendChild(placeName);
    placecard.addEventListener('click', function (e) {
        console.log(e.target)
    })

    placesContainer.appendChild(placecard);
}


// extracting all the values in the search bar and creating an obj to send it to api
form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (e.target.checkIn.value === "" || e.target.checkOut.value === "") {
        console.error("Invalid date");
        return;
    }

    let date1 = new Date(e.target.checkIn.value);
    let date2 = new Date(e.target.checkOut.value);

    console.log(date1.getTime(), date2.getTime());

    if (date1.getTime() > date2.getTime()) {
        console.error("Invalid checkOut");
        return;
    }
    const searchPlace = {
        place: e.target.place.value,
        checkIn: e.target.checkIn.value,
        checkOut: e.target.checkOut.value,
        guests: [
            `${Adults}`,
            `${children}`,
            `${infants}`,
            `${pets}`

        ]
    }
    console.log(searchPlace);
    form.reset();
    console.log(searchPlace);
    localStorage.setItem("searchObject", JSON.stringify(searchPlace));
    navigateTosearchListing();
});

// function to navigate to searchlisting.html page
function navigateTosearchListing() {
    window.location.href = "searchListing.html";
}