document.getElementById("menuToggle").addEventListener("click", function() {
    document.querySelector("nav").classList.toggle("active");
});
document.querySelector("form").addEventListener("submit", function (e) {
    const nama = document.getElementById("txtNama");
    const email = document.getElementById("txtEmail");
    const pesan = document.getElementById("txtPesan");

document.querySelectorAll(".error-msg").forEach(el => el.remove());
[nama, email, pesan].forEach(el => el.style.border = "");

 isValid = true;

if (nama.value.trim().lenth < 3) {
    showError(nama, "Nama minimal tiga huruf dan tidak boleh kosong.");
    isvalid = false;
}   else if (!/^[A-Za-z\s]+$/.test(nama.value)) {
    showError(nama, "Nama hanya boleh berisi huruf dan spasi.");
    isValid = false;
}
if (email.value.trim() === "") {
    showError(email, "Email wajib diisi.");
    isValid = false;
} else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
    showError(email, "Format email tidak valid. Contoh: nama@mail.com");
    isValid = false;
}
if (pesan.value.trim().length < 10) {
    showError(pesan, "Pesan minimal 10 karakter agar lebih jelas.");
    isValid = false;
}
if (!isValid) {
    e.preventDefault();
} else {
  alert("Terima kasih, " + nama.value + "!\nPesan Anda telah dikrim.");
}
});

function showError(inputElement, message) {}
    const label = inputElement.closest("label");
    if (!label) return;

    label.style.flexWrap = "wrap";

    const small = document.createElement("small");
    small.className = "error-msg";
    small.textContent = message;

    small.style.color = "red";
    small.style.fontSize = "14px";
    small.style.display = "block";
    small.style.marginTop = "4px";
    small.style.flexBasis = "100%";
    small.dataset.forld = inputElement.id;

if (inputElement.nextSibling) { 
    label.insertBefore(small, inputElement.nextSibling);
} else {
    label.appendChild(small);
}

    inputElement.style.border = "1px solid red";

    alignErrorMessage(small, inputElement);

function alignErrorMessage(smaLLEL, inputEL) {
    const label = inputEL.closest("label");
    if (!label) return;

    const rectlabel = label.getBoundingClientRect();
    const rectInput = inputEL.getBoundingClientRect();
    const offsetLeft = Math.max(0, rectInput.left - rectlabel.left);

    smallEL.style.marginLeft = offsetLeft + "px";
    smaLLEL.style.width = Math.round(rectInput.width) + "px";
} 

window.addEventListener("resize", () => {
    document.querySelectorAll(".error-msg").forEach(small => {
        const target = document.getElementById(small.dataset.forId);
        if (target) alignErrorMessage(small, target);
    });
}); 
