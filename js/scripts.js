/*
$(function(){

	// aqui vai todo nosso codigo de javascript.
    $('nav.mobile').click(function){
    	// oque vai acontecer quando clicarmos na nav.mobile!
    	var listaMenu= $('nav.mobile ul');

        // abrir menu atraves do fadeIn
        if (listaMenu.is(':hidden')== true){  
            listaMenu.fadeIn();
    }
        else{
            listaMenu.fadeOut();
        }


   })

})

*/




  // Abrir ou fechar o menu

$(function(){
    $('nav.mobile').click(function){
    var listaMenu= $('nav.mobile ul');
     listaMenu.slideToggle();  

  })
})





/*
        // abrir  ou fechar sem efeitos

        $(function(){
      $('nav.mobile').click(function){
         var listaMenu= $('nav.mobile ul');

        if (listaMenu.is(':hidden')== true){
       listaMenu.show();
      }
      else{
          listaMenu.hide();

      }
    
       })

    })

*/
    

