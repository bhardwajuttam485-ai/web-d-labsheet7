document.getElementById("studentForm").addEventListener("submit", function (event) {
    event.preventDefault();

    let name = document.getElementById("studentName").value.trim();
    let rollNo = document.getElementById("rollNo").value.trim();
    let course = document.getElementById("course").value.trim();
    let email = document.getElementById("email").value.trim();

    if (name === "" || rollNo === "" || course === "" || email === "") {
        alert("All fields are required.");
        return;
    }

    if (!email.includes("@") || !email.includes(".")) {
        alert("Please enter a valid email address.");
        return;
    }

    let tableBody = document.getElementById("studentTableBody");
    let row = document.createElement("tr");

    row.innerHTML = `
        <td>${name}</td>
        <td>${rollNo}</td>
        <td>${course}</td>
        <td>${email}</td>
        <td><button class="delete-btn" onclick="deleteStudent(this)">Delete</button></td>
    `;

    tableBody.appendChild(row);

    document.getElementById("studentForm").reset();
    alert("Student record added successfully!");
});

function deleteStudent(button) {
    let row = button.parentElement.parentElement;
    row.remove();
}