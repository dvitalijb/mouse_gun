const button = document.getElementById('button');

function destroy() {
    window.addEventListener('click', function (event) {
        const elem = document.elementFromPoint(event.offsetX, event.offsetY);
        elem.style.display = 'none';

    })
}

button.addEventListener('dblclick', destroy);
