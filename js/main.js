   // Un alert() espone 5 numeri generati casualmente.
   // Da li parte un timer di 30 secondi.
   // Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
   // Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
   // Bonus:
   // Introdurre la parte di grafica oltre a quella di logica
   // =============================

   // variabile che contiene numeri generati dal pc
   const numeriDaIndovinare = 5;
   const minNumRandom = 1;
   const maxNumRandom = 100;

   let randomNumbers = [];
   while (randomNumbers.length < numeriDaIndovinare)
   {
      let newRandomNumber = getRandomNumber(minNumRandom, maxNumRandom);
      if (!randomNumbers.includes(newRandomNumber))
      
      randomNumbers.push(newRandomNumber);
   }

   document.getElementById('numeriGenerati').innerHTML = randomNumbers;
   // alert(randomNumbers);
   
   setTimeout(function() {

      document.getElementById('numeriGenerati').innerHTML = "";

      let userNumbers = [];
      while (userNumbers.length < numeriDaIndovinare)
      {
         // richiedo 5 numeri all'utente
         let newUserNumber = parseInt(prompt("Inserisci un numero"));

         if (userNumbers.includes(newUserNumber) == false)
         {
            userNumbers.push(newUserNumber);
         }

         let indovinati = [];

         for (let i = 0; i < userNumbers.length; i++)
         {
            let userNumber = userNumbers[i];
            if (randomNumbers.includes(userNumber))
            indovinati.push(userNumber)
         }

         alert("Hai indovinato " + indovinati.length + " numeri");
         alert("I numeri indovinati " + indovinati);

      }
   }, 3000)


   /* funzioni */

   function getRandomNumber(min, max)
   {
      return Math.floor(Math.random() * (max-min+1) + min);
   }
   