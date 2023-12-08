const maxDropboxes = 300;
let dropboxes = [];
let morph = document.querySelector('.morph');
function createDropbox() {
    const dropbox = document.createElement('div');
    dropbox.classList.add('dropbox');
    dropbox.style.left = Math.random() * (window.innerWidth - dropbox.clientWidth) + 'px';
    dropbox.style.top = '-30px';

    const drop = document.createElement('div');
    drop.classList.add('drop');
    drop.style.scale = (Math.random()/2) + 0.2;
    dropbox.appendChild(drop);

    return dropbox;
}

function spawnDropbox() {
    if (dropboxes.length < maxDropboxes) {
        const dropbox = createDropbox();
        dropboxes.push(dropbox);
        morph.appendChild(dropbox);
        setTimeout(() => {
            dropbox.style.top = window.innerHeight - dropbox.clientHeight + 40 + 'px';
        }, 10);
    }
}

function checkDropboxes() {
    dropboxes = dropboxes.filter(dropbox => {
        if (dropbox.getBoundingClientRect().top >= window.innerHeight - dropbox.clientHeight) {
            morph.removeChild(dropbox);
            return false;
        }
        return true;
    });
}

setInterval(() => {
    spawnDropbox();
    checkDropboxes();
}, 100);