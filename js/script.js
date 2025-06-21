// Function to show the selected section
function goHome() {
    location.reload();
}

function showSection(...sections) {
    const allSections = document.querySelectorAll('.calculator-section');
    allSections.forEach(sec => {
        sec.style.display = 'none'; // Hide all sections
    });
    sections.forEach(section => {
        document.getElementById(section).style.display = 'block'; // Show the selected sections
    });
}

// Calculate area of triangle
document.getElementById('luasSegitiga').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    const alas = parseFloat(document.getElementById('alas-segitiga').value);
    const tinggi = parseFloat(document.getElementById('tinggi-segitiga').value);
    const luas = 0.5 * alas * tinggi;
    document.getElementById('hasil-luas-segitiga').innerText = `${luas}`;
});

// Calculate perimeter of triangle
document.getElementById('keliling-segitiga').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    const sisiA = parseFloat(document.getElementById('sisiA').value);
    const sisiB = parseFloat(document.getElementById('sisiB').value);
    const sisiC = parseFloat(document.getElementById('sisiC').value);
    const keliling = sisiA + sisiB + sisiC;
    document.getElementById('hasil-keliling-segitiga').innerText = `${keliling}`;
});

// Calculate area of parallelogram
document.getElementById('luas-jajar-genjang').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    const alas = parseFloat(document.getElementById('alasJajarGenjang').value);
    const tinggi = parseFloat(document.getElementById('tinggiJajarGenjang').value);
    const luas = alas * tinggi;
    document.getElementById('luasJajarGenjang').innerText = `${luas}`;
});

document.getElementById('keliling-jajar-genjang').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    const sisi1 = parseFloat(document.getElementById('sisi1').value);
    const sisi2 = parseFloat(document.getElementById('sisi2').value);
    const keliling = 2 * (sisi1 + sisi2); // Calculate perimeter
    document.getElementById('keliling-jajarGenjang').innerText = `${keliling}`; // Display result
});
