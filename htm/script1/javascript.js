document.addEventListener('contextmenu', (event) => {
    event.preventDefault();
});

document.addEventListener('mousedown', function(event) {
    event.preventDefault();
});

document.addEventListener('mouseup', function(event) {
    event.preventDefault();
});

document.addEventListener('selectstart', function(event) {
    event.preventDefault();
});

/*
document.addEventListener('DOMContentLoaded', () => {
    const textElements = document.querySelectorAll('p, span, div, h1, h2, h3, h4, h5, h6'); // Adjust selectors as needed

    textElements.forEach(element => {
        element.style.userSelect = 'none';
        element.style.MozUserSelect = 'none';
        element.style.WebkitUserSelect = 'none';
        element.style.MsUserSelect = 'none';
    });
});
*/