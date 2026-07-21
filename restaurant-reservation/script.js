// =====================================
// Restaurant Reservation System
// Part 1
// =====================================

// ---------- Elements ----------

const reservationForm = document.getElementById("reservationForm");
const reservationContainer = document.getElementById("reservationContainer");
const tableGrid = document.getElementById("tableGrid");

const customerName = document.getElementById("customerName");
const phone = document.getElementById("phone");
const guests = document.getElementById("guests");
const date = document.getElementById("date");
const time = document.getElementById("time");
const tableNumber = document.getElementById("tableNumber");

const totalTables = document.getElementById("totalTables");
const availableTables = document.getElementById("availableTables");
const reservedTables = document.getElementById("reservedTables");
const todayReservations = document.getElementById("todayReservations");

const searchInput = document.getElementById("searchInput");
const filterSelect = document.getElementById("filterSelect");

// ---------- Data ----------

const tables = [
    "Table 1",
    "Table 2",
    "Table 3",
    "Table 4",
    "Table 5",
    "Table 6",
    "Table 7",
    "Table 8"
];

let reservations = [];
let editIndex = -1;

// ---------- Local Storage ----------

function saveData() {
    localStorage.setItem(
        "restaurantReservations",
        JSON.stringify(reservations)
    );
}

function loadData() {

    const data = localStorage.getItem("restaurantReservations");

    if (data) {
        reservations = JSON.parse(data);
    }

}

// ---------- Dashboard ----------

function updateDashboard() {

    totalTables.textContent = tables.length;

    reservedTables.textContent = reservations.length;

    availableTables.textContent =
        tables.length - reservations.length;

    const today = new Date().toISOString().split("T")[0];

    const todayCount = reservations.filter(item => item.date === today);

    todayReservations.textContent = todayCount.length;

}

// ---------- Table Layout ----------

function renderTables() {

    tableGrid.innerHTML = "";

    tables.forEach(table => {

        const booked = reservations.some(item => item.table === table);

        const div = document.createElement("div");

        div.className = booked
            ? "table reserved"
            : "table available";

        div.innerHTML = `
            <h3>${table}</h3>
            <p>${booked ? "Reserved" : "Available"}</p>
        `;

        tableGrid.appendChild(div);

    });

}

// ---------- Reservation Cards ----------

function displayReservations(list = reservations) {

    reservationContainer.innerHTML = "";

    if (list.length === 0) {

        reservationContainer.innerHTML = `
            <h3 style="text-align:center">
                No Reservation Found
            </h3>
        `;

        return;

    }

    list.forEach((item, index) => {

        reservationContainer.innerHTML += `

        <div class="reservation-card">

            <h3>${item.name}</h3>

            <p><strong>Phone:</strong> ${item.phone}</p>

            <p><strong>Guests:</strong> ${item.guests}</p>

            <p><strong>Table:</strong> ${item.table}</p>

            <p><strong>Date:</strong> ${item.date}</p>

            <p><strong>Time:</strong> ${item.time}</p>

            <div class="action-buttons">

                <button
                    class="edit-btn"
                    onclick="editReservation(${index})">

                    Edit

                </button>

                <button
                    class="delete-btn"
                    onclick="deleteReservation(${index})">

                    Delete

                </button>

            </div>

        </div>

        `;

    });

}

// ---------- Add Reservation ----------

reservationForm.addEventListener("submit", function (e) {

    e.preventDefault();

    const reservation = {

        name: customerName.value.trim(),

        phone: phone.value.trim(),

        guests: guests.value,

        date: date.value,

        time: time.value,

        table: tableNumber.value

    };

    const duplicate = reservations.some((item, index) => {

        return (

            item.table === reservation.table &&

            item.date === reservation.date &&

            item.time === reservation.time &&

            index !== editIndex

        );

    });

    if (duplicate) {

        alert("This table is already reserved.");

        return;

    }

    if (editIndex === -1) {

        reservations.push(reservation);

    } else {

        reservations[editIndex] = reservation;

        editIndex = -1;

    }

    saveData();

    displayReservations();

    renderTables();

    updateDashboard();

    reservationForm.reset();

});


// =====================================

// ---------- Delete Reservation ----------

function deleteReservation(index) {

    const confirmDelete = confirm(
        "Are you sure you want to delete this reservation?"
    );

    if (!confirmDelete) return;

    reservations.splice(index, 1);

    saveData();

    displayReservations();

    renderTables();

    updateDashboard();

}

// ---------- Edit Reservation ----------

function editReservation(index) {

    const item = reservations[index];

    customerName.value = item.name;

    phone.value = item.phone;

    guests.value = item.guests;

    date.value = item.date;

    time.value = item.time;

    tableNumber.value = item.table;

    editIndex = index;

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

}

// ---------- Search ----------

function searchReservation() {

    const keyword = searchInput.value
        .toLowerCase()
        .trim();

    const filtered = reservations.filter(item =>

        item.name.toLowerCase().includes(keyword) ||

        item.phone.includes(keyword)

    );

    displayReservations(filtered);

}

searchInput.addEventListener(
    "keyup",
    searchReservation
);

// ---------- Filter ----------

function filterReservation() {

    const value = filterSelect.value;

    const today = new Date()
        .toISOString()
        .split("T")[0];

    let filtered = [];

    if (value === "all") {

        filtered = reservations;

    }

    else if (value === "today") {

        filtered = reservations.filter(item =>
            item.date === today
        );

    }

    else if (value === "upcoming") {

        filtered = reservations.filter(item =>
            item.date > today
        );

    }

    displayReservations(filtered);

}

filterSelect.addEventListener(
    "change",
    filterReservation
);

// ---------- Load Data ----------

loadData();

displayReservations();

renderTables();

updateDashboard();

// ---------- Console Message ----------

console.log(
    "Restaurant Reservation System Loaded Successfully"
);