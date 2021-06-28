var modal = $('#modal');
$(function(){
    $('img').click(function(){
        var idimg = $(this).attr("id");
        console.log(idimg);
        var srcimg = $(this).attr("src");
        console.log(srcimg);
        showModal(idimg, srcimg);
    });
    hideModal();
    //Aqui empieza el codigo del nabvar ;)
    $('.fa-door-open').click(function(){
        $('nav ul li').addClass("show");
        $('.fa-door-closed').css("display", "block");
        $('.fa-door-open').css("display", "none");
    });
    $('.fa-door-closed').click(function(){
        $('nav ul li').addClass("show");
        $('.fa-door-open').css("display", "block");
        $('.fa-door-close').css("display", "none");
    });
    function showModal(idimg, srcimg){
        var image = idimg;
        var src = srcimg;
        $('#imgmodal').attr("src", srcimg);
        modal.css("display", "block");
    }
    function hideModal(){
        $('.cerrar').click(function(){
            modal.css("display", "none")
        });
    }
});