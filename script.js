window.onload = initialice;


function initialice()
{
      var boton = document.getElementById('boton');
      var botonReset = document.getElementById('boton-reset');
      var chunks = document.getElementById('chunkys');
      // var offsetViewer = document.getElementById('offset-viewer');
      var xPosAncla;
      var xPosRefresh;
      var chunkList = document.getElementsByClassName('chunk');
      var banana = document.getElementById('banana');
      var chocolate = document.getElementById('chocolate');
      var apple = document.getElementById('apple');
      var orange = document.getElementById('orange');
      const probabilidad = [  // Total items: 10 
            bananaf(),        // 10%
            bananaf(),        // 10%
            bananaf(),        // 10%
            orangef(),        // 10%
            orangef(),        // 10%
            orangef(),        // 10%
            applef(),         // 10%
            applef(),         // 10%
            applef(),         // 10%
            chocolatef()      // 10%
      ];
      /* Probabilities:
         banana = 30%
         orange = 30%
         apple = 30%
         chocolate = 10%
         */
      var randomChildSelected;
      // The amount of pixel i need to move starting at the begining of the aura-box until the start of the selector-box
      let offsSelector = ( window.innerWidth / 2 ) - (  document.getElementById( "selector-box" ).clientWidth / 2 ) - ( window.innerWidth - document.getElementById( "aura-box" ).clientWidth ) / 2;

      // chunks.addEventListener('mousedown', mouseDown);
      // document.addEventListener('mousedown', mouseDown);
      boton.addEventListener('mouseup', spin);
      botonReset.addEventListener('mouseup', reset);

      let chunksToLeftGlobal = 0;

      /* Load function at begining */
      clonacion();


      /* FUNCTIONS SECTION */
      function spin(){
            chunks.classList.add('shifting');
            chunksToLeftGlobal -= 90 * 225; // ( number of chunks to scroll ) * ( pixel per chunk )
            // chunksToLeftGlobal -= 80 * 225; // ( number of chunks to scroll ) * ( pixel per chunk )
            chunks.style.left = `${ chunksToLeftGlobal }px`
      }

      function clonacion(){
            chunks.classList.remove('shifting');
            while(chunks.lastChild){
                  chunks.removeChild(chunks.lastChild);
            }
            
            chunksToLeftGlobal += offsSelector + 25 + ( 250 * 10 );
            chunks.style.left = `${ chunksToLeftGlobal }px`;

            for(let i = 0; i < 100; i++){
                  randomChildSelected = randomPicker();
                  chunks.appendChild(randomChildSelected);
            }
      }

      function randomPicker(){
            let randomNumber = (Math.floor(Math.random() * 10));
            return probabilidad[randomNumber].cloneNode(true);
      }

      function bananaf(){
            return banana.cloneNode(true);
      }

      function chocolatef(){
            return chocolate.cloneNode(true);
      }

      function applef(){
            return apple.cloneNode(true);
      }

      function orangef(){
            return orange.cloneNode(true);
      }

      // function mouseDown(e){
      //       e = e || window.event;
      //       e.preventDefault();
      //       xPosAncla = e.clientX;
      //       chunks.addEventListener('mousemove', drawMouseMove);
      //       chunks.addEventListener('mouseup', endMouseUp);
      //       document.addEventListener('mousemove', drawMouseMove);
      //       document.addEventListener('mouseup', endMouseUp);
      // }

      // function drawMouseMove(e){
      //       e = e || window.event;
      //       xPosRefresh = xPosAncla - e.clientX;
      //       xPosAncla = e.clientX;
      //       chunks.style.left = (chunks.offsetLeft - xPosRefresh) + "px";
      //       offsetViewer.innerHTML = (chunks.offsetLeft) + "px";
      // }
      //
      // function endMouseUp(){
      //       chunks.removeEventListener('mousemove', drawMouseMove);
      //       chunks.removeEventListener('mouseup', endMouseUp);
      //       document.removeEventListener('mousemove', drawMouseMove);
      //       document.removeEventListener('mouseup', endMouseUp);
      // }

      function reset(){
            location.reload();
      }
}
