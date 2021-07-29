   // Un alert() espone 5 numeri generati casualmente.
   // Da li parte un timer di 30 secondi.
   // Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
   // Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
   // Bonus:
   // Introdurre la parte di grafica oltre a quella di logica

   alert("Memorizza i numeri che compaiono ad ogni click di ok");
   
   let numeriRandom = getRndInteger(1, 100);
   
   for (let i = 0; i < 5; i++) {
      alert(getRndInteger(1, 100));
   }

    // Genero timer
    let secondi = 5;
    setTimeout(timer, 1000);
    
    // funzioni
    
    // Genero numeri casuali
    function getRndInteger(min, max) {
       return Math.floor(Math.random() * (max - min + 1) ) + min;
      }
      
   function timer(){
      let inserisciNumeri = [];
      for (let i = 0; i < 5; i++){
         inserisciNumeri[i] = parseInt(prompt("Inserisci i numeri appena visti"));
      }
      for(let i = 0; i < inserisciNumeri.length; i++){
         if(numeriRandom.includes == inserisciNumeri.length){
            risultato.push()
            console.log("Complimenti, hai indovinato");

         } 
      }

      document.getElementById("countdown").innerHTML = secondi + " allo scadere del tempo";
      console.log(secondi);
      document.getElementById("countdown").innerHTML = "Tempo scaduto...inserisci i tuoi numeri";

   }


   