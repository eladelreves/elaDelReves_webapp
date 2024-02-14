export function animateOnScroll(){
    const elements = document.querySelectorAll('.animate-on-scroll');
    // Función para verificar si un elemento está en la ventana
    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        const windowHeight = window.innerHeight || document.documentElement.clientHeight;
        const windowWidth = window.innerWidth || document.documentElement.clientWidth;
        const threshold = 0.5; // Cambia esto al porcentaje deseado (por ejemplo, 0.5 para el 50%)

        return (
            rect.top + rect.height * threshold >= 0 &&
            rect.left + rect.width * threshold >= 0 &&
            rect.bottom - rect.height * threshold <= windowHeight &&
            rect.right - rect.width * threshold <= windowWidth
        );
    }

    // Función para manejar el desplazamiento
    function handleScroll() {
        elements.forEach((element) => {
            if (isElementInViewport(element)) {
            element.classList.add('animated'); // Clase que aplica la animación
            }
        });
    }

    // Agregar un evento de desplazamiento para activar la animación
    window.addEventListener('scroll', handleScroll);
}
