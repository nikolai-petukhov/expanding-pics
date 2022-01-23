const panels = document.querySelectorAll('.panel');

panels.forEach((panel) => {
    panel.addEventListener('click', () => {
        if (panel.classList.contains('active')) {
            removeActiveClasses();
            changeMsg('Click for expand the picture');
        } else {
            removeActiveClasses();
            panel.classList.add('active');
            changeMsg('Click the same picture for compress or another for expand');
        }
    })
});

function removeActiveClasses() {
    panels.forEach((panel) => {
        panel.classList.remove('active');
    });
}

function changeMsg(msg) {
    document.getElementById('msg').innerHTML = msg;
}