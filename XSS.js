anchor.addEventListener('click', function (e) {
    e.preventDefault();

    const targetId = this.getAttribute('href');
    if (!targetId.startsWith('#')) {
        console.error('Invalid target ID:', targetId);
        return;
    }

    const targetElement = document.querySelector(targetId);
    // ...
});
