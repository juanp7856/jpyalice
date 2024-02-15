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
