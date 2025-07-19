
//Memanggil/Menjalankan Function showWelcomePopup()
showWelcomePopup();

function showWelcomePopup(){
    let visitorname = prompt("Silakan ketik nama Anda :");
    if(visitorname != null && visitorname.trim() !== ""){
        document.getElementById("welcome-visitor").innerText = visitorname;
        // Display a welcome alert
        //alert("Selamat datang " + visitorname + " di website kami!"); 
    }

}

function validateForm() {
    const inputName = document.getElementById('input-name');
    const inputMessage = document.getElementById('message');
    if (inputName.value === '' || inputMessage.value === '') {
        alert("Nama dan Pesan tidak boleh kosong!");
        // Set border color to red for invalid fields
        document.getElementById('input-name').style.borderColor = 'red';
        document.getElementById('message').style.borderColor = 'red';
        return false;
    } else {
        // Set border color to green for valid fields
        document.getElementById('message-output').style.borderColor = 'green';
        document.getElementById('message-output').innerText = `Thank you ${inputName.value} for your message! \n Your Message : ${inputMessage.value}`;
        inputName.value = ''; // Clear the input field
        inputMessage.value = ''; // Clear the message field

    }
    
/*     // Simple email validation
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert("Alamat email tidak valid!");
        return false;
    } */

    //alert("Form berhasil dikirim!");
    return true;
}   