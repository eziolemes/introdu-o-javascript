// estrutura do jquery
// $(seletor).ação();
/*
$(document).ready(function() { // quando o documento tiver carregado, executa a ação implementada
    $('button').click(function() {
        $('h1').hide(); // oculta o elemento
    });
});*/

// modo mais simplificado de implementar o código acima
$(function() { // quando o documento tiver carregado, executa a ação implementada
    $('#azul').click(function() {
        $('p').css("color", "blue");
        $('p').fadeOut();
    });

    $('#vermelho').click(function() {
        $('p')
            .css("color", "red")
            .fadeOut('slow')
            .delay(3000)
            .fadeIn(5000);
        //$('p').fadeIn('slow');
        $('#mensagem')
            .text("Cor alterada com sucesso")
            .css({color: 'red', border: '1px solid red'})
            .delay(3000)
            .fadeOut('fast')
            .addClass('green')
            $('button').removeClass('red');
    });
});