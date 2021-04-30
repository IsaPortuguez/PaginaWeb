$(function(){
    $('.filter').click(function(){
        //Con esta linea hacemos que el que seleccionamos quede activo
        //y que los hermanos con el apodo .filter se desactiven.
        $(this).addClass('active').siblings().removeClass('active');
        let valor = $(this).attr('data-nombre');
        if(valor == 'todos'){
            $('.cont-work').show('1000');
        }else{
            $('.cont-work').not('.'+ valor).hide('1000'); //que esconda cualquiera que no sea ese valor
            $('.cont-work').filter('.'+ valor).show('1000');//que muestre ese valor
        }
    });

    let equipo = $('#equipo').offset().top,
        servicio = $('#servicio').offset().top,
        trabajo = $('#trabajo').offset().top,
        contacto = $('#contacto').offset().top;
    
    //Que cuando haga un ajuste de tamano, que se vuelvan a declarar
    window.addEventListener('resize',function(){
        let equipo = $('#equipo').offset().top,
            servicio = $('#servicio').offset().top, //$('#servicio').offset().top en la consola, me da la posicion
            trabajo = $('#trabajo').offset().top,
            contacto = $('#contacto').offset().top;
    });

    $('#enlace-inicio').on('click',function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        },600);
    });

    $('#enlace-equipo').on('click',function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: equipo - 100
        },600);
    });

    $('#enlace-servicio').on('click',function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: servicio - 100
        },600);
    });

    $('#enlace-trabajo').on('click',function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: trabajo - 100
        },600);
    });

    $('#enlace-contacto').on('click',function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: contacto - 100
        },600);
    });
});