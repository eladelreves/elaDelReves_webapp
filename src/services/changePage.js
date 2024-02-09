export function changePage(page){
    switch (page) {
        case 'home':
            document.title = "ElaDelReves - Home";
            document.getElementById('home').className ='selectedLi'
            break;
    
        default:
            break;
    }
}