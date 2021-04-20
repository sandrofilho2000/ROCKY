$(function(){
    let check = document.querySelector('#check')
    let sp1 = 1
    let sp2 = 1
    let span1 = false
    let span2 = false


    //Função para ativar ou desativar o menu MOBILE

    //#1 Uma label toggle menu acionará um input check invisível quando clicada.

    //#2 Caso o input check seja verdadeiro, o menu irá aparecer da direita.

    //#3 Se for falso, ele será recolhido e o resto da aplicação estará visível.
    $('.checklabel').click(function(){
    
        if(check.checked==true){
            $('.checklabel').css('left', '42%')
            $(".mobile-menu-items").css('left', '0%')
            $(".line").eq(0).css('transform', 'rotateZ(-45deg) translateY(375%)')
            $(".line").eq(1).css('opacity', '0')
            $(".line").eq(2).css('transform', 'rotateZ(45deg) translateY(-375%)')
            $("li a span").html("▼")
        }
        else if(check.checked==false){
            $('.checklabel').css('left', '20px')
            $(".mobile-menu-items").css('left', '-70%')
            $(".line").eq(0).css('transform', 'rotateZ(0) translateY(0%)')
            $(".line").eq(1).css('opacity', '1')
            $(".line").eq(2).css('transform', 'rotateZ(0) translateY(-0%)')
            $("li a span").html("▲")
        }
    })

    $("li span").eq(0).click(function(){
        
        if(sp1%2==0){
            $(this).html("▼")
            submenu = $(this).siblings('.mobile-menu-items ul.submenu-ul')
            submenu[0].setAttribute('class', 'submenu-ul up')
            span1 = false
        }
        else if(sp1%2==1){
            $(this).html("▲")
            submenu = $(this).siblings('.mobile-menu-items ul.submenu-ul')
            submenu[0].setAttribute('class', 'submenu-ul down')
            span1 = true
        }
        sp1++; 
        if(span2 == false && span1 == false){
            $('ul.menu').css("height", "530px")
        }
        else if(span2 == true && span1 == false){
            $('ul.menu').css("height", "625px")
        }
        else if(span2 == false && span1 == true){
            $('ul.menu').css("height", "625px")
        }
        else if(span2 == true && span1 == true){
            $('ul.menu').css("height", "752px")
        }
    })



    //Função para ativar/desativar o submenu responsivo

    //#1 Um par de funções foi criado para controlar os submenus, uma função para cada menu.

    //#2 Quando o elemento "li span" for clicado, a variável int será incrementada.

    //#3 Está variável poderá ser positiva ou negativa.

    //#4 Quando negativa, é atribuida a classe "up" ao submenu, tornando-o invisível.

    //#5 Quando positiva, a classe "up" é substituída pela classe "down", fazendo com que o submenu fique visível

    //#6 A função altera a altura do menu principal dinamicamente dependendo de quantos submenus estão ativos no momento

    $("li span").eq(1).click(function(){
        if(sp2%2==0){
            $(this).html("▼")
            submenu = $(this).siblings('.mobile-menu-items ul.submenu-ul')
            submenu[0].setAttribute('class', 'submenu-ul up')
            span2 = false
        }

        else if(sp2%2==1){
            $(this).html("▲")
            submenu = $(this).siblings('.mobile-menu-items ul.submenu-ul')
            submenu[0].setAttribute('class', 'submenu-ul down')
            span2 = true
        }
        sp2++;
        if(span2 == false && span1 == false){
            $('ul.menu').css("height", "530px")
        }
        else if(span2 == true && span1 == false){
            $('ul.menu').css("height", "625px")
        }
        else if(span2 == false && span1 == true){
            $('ul.menu').css("height", "625px")
        }
        else if(span2 == true && span1 == true){
            $('ul.menu').css("height", "752px")
        }
    })

    function scrollTo(element){
        document.querySelector(element).scrollIntoView({behavior: 'smooth'})
    }

    //Par de funções que redirecionam o usuário para o footer

        $(".scroll2").click(function(e){
            e.preventDefault();
            scrollTo('footer')
        })
})







    

        




    


        




    function scrollTo(element){
        document.querySelector(element).scrollIntoView({behavior: 'smooth'})
    }

    //Par de funções que redirecionam o usuário para o footer

        $(".scroll2").click(function(e){
            e.preventDefault();
            scrollTo('footer')
        })
