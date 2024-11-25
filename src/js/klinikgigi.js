document.getElementById("bookingForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const service = document.getElementById("service").value;
    const date = document.getElementById("date").value;

    const resultDiv = document.getElementById("result");
    const details = document.getElementById("details");

    details.innerHTML = `
        <strong>Nama:</strong> ${name}<br>
        <strong>Email:</strong> ${email}<br>
        <strong>Nomor HP:</strong> ${phone}<br>
        <strong>Layanan:</strong> ${service}<br>
        <strong>Tanggal:</strong> ${date}
    `;

    resultDiv.classList.remove("hidden");
    document.getElementById("bookingForm").reset();
});
