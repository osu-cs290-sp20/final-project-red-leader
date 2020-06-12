
function toggle() {
    var containers = document.getElementsByClassName('journal-container');
    if (containers[0].className == 'hidden') {
        for (var x = 0; x < containers.length; x++) {
            containers[x].classList.remove('hidden');
        }
    } else if (containers[0].className != "hidden") {
        for (var i = 0; i < containers.length; i++) {
            containers[i].classList.add('hidden');

    }
}

console.log("A toggle happened!");
}



window.addEventListener('DOMContentLoaded', function() {

   var journalToggle = document.getElementById('journal-toggle');
   
   if (journalToggle) {
       journalToggle.addEventListener('click', toggle);
   }
});