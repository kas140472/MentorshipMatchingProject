<<<<<<< HEAD
const archiveButtons = document.querySelectorAll('.archive-button');

archiveButtons.forEach(button => {
    button.addEventListener('click', function() {
        // Backend call to download the archive
        alert(`${button.textContent} archive downloaded.`);
        const link = document.createElement('a');
        link.href = `${button.textContent.replace(' ', '_').toLowerCase()}.csv`;
        link.download = `${button.textContent.replace(' ', '_').toLowerCase()}.csv`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    });
});
=======
const archiveButtons = document.querySelectorAll('.archive-button');

archiveButtons.forEach(button => {
    button.addEventListener('click', function() {
        // Backend call to download the archive
        alert(`${button.textContent} archive downloaded.`);
        const link = document.createElement('a');
        link.href = `${button.textContent.replace(' ', '_').toLowerCase()}.csv`;
        link.download = `${button.textContent.replace(' ', '_').toLowerCase()}.csv`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    });
});
>>>>>>> origin/main
