document.addEventListener('DOMContentLoaded', function() {
    var imageContainer = document.getElementById('image-container');
    var img1 = document.getElementById('img1')
    var img2 = document.getElementById('img2')
    var img3 = document.getElementById('img3')
    var textoOculto = document.getElementById('texto-oculto');

    var observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                setTimeout(function() {
                    img1.style.opacity = '50%';
                    img2.style.opacity = '50%';
                    img3.style.opacity = '50%';
                    // textoOculto.style.display = 'block';
                    textoOculto.classList.add('fade-in');
                }, 2000);
            }
        });
    }, { threshold: 0.5 }); // El 50% de la imagen debe ser visible

    var images = document.querySelectorAll('#image-container img');

    images.forEach(function(image) {
        observer.observe(image);
    });
});


botonSi = document.getElementById('si')
botonNo = document.getElementById('no')

botonSi.addEventListener("click", () => {
    document.getElementById("titulo").innerHTML = "SABÍA QUE IBAS A ACEPTAR. AHORA TE DEDICO ESTA CANCIÓN";
    document.getElementById("subtitulo1").style.display = "none";
    document.getElementById("subtitulo2").innerHTML = "3 ...";
    botonSi.style.display = "none";
    botonNo.style.display = "none";

    setTimeout(function() {
        document.getElementById("subtitulo2").innerHTML = "2 ...";
    }, 1000);

    setTimeout(function() {
        document.getElementById("subtitulo2").innerHTML = "1 ...";
    }, 2000);

    setTimeout(function() {
        // Redirige al video después de la cuenta regresiva
        window.location.replace("https://www.youtube.com/watch?v=D_0FKJqxldE");
    }, 3000);
})

botonNo.addEventListener("click", (event) => {
    botonNo.style.display = 'none';
});

botonNo.addEventListener("mouseover", (event) => {
    botonNo.style.display = 'none';
});
botonNo.addEventListener("mouseout", (event) => {
    botonNo.style.display = 'block';
});

