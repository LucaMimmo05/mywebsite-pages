/* document.addEventListener("DOMContentLoaded", function() {
    window.addEventListener("scroll", function() {
        var img = document.getElementById("dashpc1");
        var distanceFromTop = img.getBoundingClientRect().top;
        var windowHeight = window.innerHeight;
        if (distanceFromTop < windowHeight * 0.5) {
            setTimeout(function() {
                img.style.transform = "translate(-100%, -50%)";
                img.style.left = "50%";
                setTimeout(function() {
                    var dashtext = document.getElementById("dashtext");
                    dashtext.style.display = "block"; // Mostra il testo
                    setTimeout(function() {
                        dashtext.classList.add("show"); // Aggiungi la classe .show per mostrare il testo con animazione
                        dashtext.style.left = "55%";
                    }, 100); // Ritardo per l'aggiunta della classe
                }, 0); // Ritardo per l'animazione del testo
            }, 0); // Ritardo per l'animazione dell'immagine
            window.removeEventListener("scroll", arguments.callee);
        }
    });            
});




function gorules(){
    location.replace("./tradingrules.html");
}






var animationInProgress = false; // Variabile di stato per tracciare se l'animazione è in corso

document.addEventListener("scroll", function() {
    var img = document.getElementById("section2");
    var distanceFromTop = img.getBoundingClientRect().top;
    var windowHeight = window.innerHeight;
    if (distanceFromTop < windowHeight * 0.5 && !animationInProgress) {
        var images = document.querySelectorAll('.image-container img');
        var delay = 100;

        function showImage(index) {
            if (index >= images.length) {
                animationInProgress = false; // L'animazione è terminata, reimposta la variabile di stato
                return;
            }
            images[index].style.display = 'block';
            if (index < images.length - 1) {
                setTimeout(function() {
                    images[index].style.display = 'none';
                    showImage(index + 1);
                }, delay);
            }
        }

        animationInProgress = true; // L'animazione è in corso
        showImage(0);
    }
});




 */

document.getElementById('downloadButton').addEventListener('click', function() {
    const link = document.createElement('a');
    link.href = 'files/CV.zip';  // URL del file sul server
    link.download = 'CV.zip';   // Nome del file da scaricare
    link.click();
});