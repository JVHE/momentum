const hellos = document.querySelector('.hello');
 
hellos.addEventListener('click', function () {
    console.log(hellos);
});

window.addEventListener('resize', function () {
    this.document.body.style.backgroundColor = 'tomato';
});

window.addEventListener('copy', function () {
    alert('Copying is not allowed!');
});

window.addEventListener('offline', function () {
    alert('You are offline!');
})

window.addEventListener('online', function () {
    alert('You are online!');
})