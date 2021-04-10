$(function(){
    let check = document.querySelector('#check')
    let sp1 = 1
    let sp2 = 1
    let span1 = false
    let span2 = false

    $('.checklabel').click(function(){
    
        if(check.checked==true){
            $('.checklabel').css('left', '45%')
            $(".mobile-menu-items").css('left', '0%')
            $(".line").eq(0).css('transform', 'rotateZ(-45deg) translateY(330%)')
            $(".line").eq(1).css('opacity', '0')
            $(".line").eq(2).css('transform', 'rotateZ(45deg) translateY(-330%)')
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
            $('ul.menu').css("height", "350px")
        }
        else if(span2 == true && span1 == false){
            $('ul.menu').css("height", "465px")
        }
        else if(span2 == false && span1 == true){
            $('ul.menu').css("height", "465px")
        }
        else if(span2 == true && span1 == true){
            $('ul.menu').css("height", "580px")
        }
    })

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
            $('ul.menu').css("height", "350px")
        }
        else if(span2 == true && span1 == false){
            $('ul.menu').css("height", "465px")
        }
        else if(span2 == false && span1 == true){
            $('ul.menu').css("height", "465px")
        }
        else if(span2 == true && span1 == true){
            $('ul.menu').css("height", "580px")
        }
    })

    
})