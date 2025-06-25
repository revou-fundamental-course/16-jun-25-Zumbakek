// button home
function goHome() {
    location.reload();
}

function showSection(...sections) {
    const allSections = document.querySelectorAll('.calculator-section');
    allSections.forEach(sec => {
        sec.style.display = 'none'; 
    });
    sections.forEach(section => {
        document.getElementById(section).style.display = 'block'; 
    });
}

// Fungsi Hapus
function clearDisplay() {
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.reset();
        const resultDiv = form.querySelector('.result');
        if (resultDiv) {
            resultDiv.innerHTML = '';
        }
    });
}

// Pesan Eror
function showAlert(message) {
    alert (message);
}

// Segitiga
document.getElementById('luasSegitiga').addEventListener('submit', function(event) {
    event.preventDefault(); 
    const alas = parseFloat(document.getElementById('alas-segitiga').value);
    const tinggi = parseFloat(document.getElementById('tinggi-segitiga').value);

    if(alas <=0 || tinggi <=0) {
        showAlert('Masukan Angka yang valid');
        return;
    } 
    const luas = 0.5 * alas * tinggi;
    document.getElementById('hasil-luas-segitiga').innerText = `${luas}`;
});

document.getElementById('keliling-segitiga').addEventListener('submit', function(event) {
    event.preventDefault(); 
    const sisiA = parseFloat(document.getElementById('sisiA').value);
    const sisiB = parseFloat(document.getElementById('sisiB').value);
    const sisiC = parseFloat(document.getElementById('sisiC').value);

    if(sisiA <=0 || sisiB <=0 || sisiC <=0) {
        showAlert('Masukan Angka yang valid');
        return;
    }
    const keliling = sisiA + sisiB + sisiC;
    document.getElementById('hasil-keliling-segitiga').innerText = `${keliling}`;
});

// Jajar Genjang
document.getElementById('luas-jajar-genjang').addEventListener('submit', function(event) {
    event.preventDefault(); 
    const alas = parseFloat(document.getElementById('alasJajarGenjang').value);
    const tinggi = parseFloat(document.getElementById('tinggiJajarGenjang').value);

    if(alas <=0 || tinggi <=0) {
        showAlert('Masukan Angka yang valid');
        return;
    }
    const luas = alas * tinggi;
    document.getElementById('luasJajarGenjang').innerText = `${luas}`;
});

document.getElementById('keliling-jajar-genjang').addEventListener('submit', function(event) {
    event.preventDefault(); 
    const sisi1 = parseFloat(document.getElementById('sisi1').value);
    const sisi2 = parseFloat(document.getElementById('sisi2').value);

    if(sisi1 <=0 || sisi2 <=0) {
        showAlert('Masukan Angka yang valid');
        return;
    }
    const keliling = 2 * (sisi1 + sisi2); 
    document.getElementById('keliling-jajarGenjang').innerText = `${keliling}`; 
});

// Persegi Panjang
document.getElementById('luas-persegi-panjang').addEventListener('submit', function(event) {
    event.preventDefault()
    const panjang = parseFloat(document.getElementById('panjang').value);
    const lebar = parseFloat(document.getElementById('lebar').value);

    if(panjang <=0 || lebar <=0) {
        showAlert('Masukan Angka Yang valid')
        return;
    }
    const luas = panjang * lebar;
    document.getElementById('luasPersegiPanjang').innerText = `${luas}`;
});

document.getElementById('keliling-persegi-panjang').addEventListener('submit', function(event) {
    event.preventDefault()
    const p = parseFloat(document.getElementById('p').value);
    const l = parseFloat(document.getElementById('l').value);

    if (p <=0 || l <=0) {
        showAlert('Masukan Angka yang valid');
        return;
    }
    const keliling = 2 * (p + l);
    document.getElementById('keliling-persegiPanjang').innerText = `${keliling}`;
});
