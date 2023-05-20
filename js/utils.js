/* 
document.addEventListener('DOMContentLoaded', function() {
    cambiarPosSocMedia();
});

window.addEventListener('resize', cambiarPosSocMedia);

function cambiarPosSocMedia(){
    
   const myElementIg = document.getElementById('igIcon');
    const myElementYt = document.getElementById('ytIcon');

    const deletemyElementIg= myElementIg.classList;
    const addmyElementIg=myElementIg.classList;

    const deleteElementYtV= myElementYt.classList;
    const addElementYt=myElementYt.classList;

    if (window.innerWidth<=991) {
        deletemyElementIg.remove('gold');
        deleteElementYtV.remove('gold');

        addmyElementIg.add('black');
        addElementYt.add('black');

    } else{
        deletemyElementIg.remove('black');
        deleteElementYtV.remove('black');

        addmyElementIg.add('gold');
        addElementYt.add('gold');
    }
}
 */
