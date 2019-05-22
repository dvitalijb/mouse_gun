const button = document.getElementById('button');

function destroy() {
    window.addEventListener('click', event => {
        const element = document.elementFromPoint(event.offsetX, event.offsetY);
        element.style.display = 'none';
    })
}

button.addEventListener('dblclick', destroy);
