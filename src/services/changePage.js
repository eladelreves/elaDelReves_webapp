export function changePage(page) {
    // Eliminar la clase 'selectedLi' de todos los elementos
    const menuItems = document.querySelectorAll('header nav ul li a');
    menuItems.forEach(item => {
        item.classList.remove('selectedLi');
    });

    // Seleccionar la página actual y actualizar el título
    switch (page) {
        case 'home':
            document.title = "ElaDelReves - Home";
            break;
        case 'blog':
            document.title = "ElaDelReves - Blog";
            break;
        // Agrega más casos según las páginas que tengas
        default:
            break;
    }

    // Agregar la clase 'selectedLi' al elemento correspondiente a la página actual
    const currentPageElement = document.getElementById(page);
    if (currentPageElement) {
        currentPageElement.classList.add('selectedLi');
    }
}
