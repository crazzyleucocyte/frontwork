$(()=>{
    $('.nav').find('.submenu').parent('#col').hover(function(){
        $(this).css({color:'rgb(0,89,48)', fontWeight:700})
        let menu= $(this).find('ul').css({'curosr':'pointer.',color:'black'});
        //   console.log($(menu));
        $(menu).stop().slideDown(800);
    },function(){
        $(this).css({color:'white',fontWeight:400 })
        let menu= $(this).find('ul').css('curosr','pointer.');
        $(menu).stop().slideUp(800);
        
    })
    // $('a#col').hover(function(){
    //     $(this).css({color:'rgb(0,89,48)',fontWeight:700});
    //     console.log($(this));
    // },function(){
    //     $(this).css({color:'white',fontWeight:400});

    // })



    $('.nav').find('.submenu').children('li').click(function(){
        $(location).attr('href',$(this).children('a').attr('href'));
        
    })
    $('.nav').find('.submenu').children('li').hover(function(){
        $(this).animate({
            backgroundColor:'rgb(0,89,48)'
        },300)
        $(this).children('a').css({color:'white'});
        $(this).css('cursor','pointer');

        
    },function(){
        $(this).animate({
            backgroundColor:'rgba(255, 255, 255, 0)'
        },300)
        $(this).children('a').css({color:'rgb(0,89,48)' })
       
    })

    $('.Table').children('tbody').children('tr').hover(function(){
        $(this).css({backgroundColor:'rgba(0, 89, 47, 0.13)'})
    },function(){
        $(this).css({backgroundColor:''})
    })
    
    $('.Table').children('tbody').children('tr').click(function(){
        // $(this).css({backgroundColor:'red'})
        // $(this).location.href($(this).find('a').attr('href'));
        $(location).attr('href',$(this).find('a').attr('href'));
        // ($(this).find('a').attr('href')).click();
        // console.log($(this).find('a').attr('href'));
    })

    let picture =['resources/img/아구찜.jpg','resources/img/초밥.jpg','resources/img/라멘.jpg','resources/img/치킨.jpg','resources/img/햄버거.jpg','resources/img/파스타.jpg','resources/img/쭈꾸미.jpg']
    let count =0;
    setInterval(function(){

        // $('#mainImg').children('img').fadeOut(10);

        $('#mainImg').children('img').css({'background':`url(${picture[count++]})`,backgroundPosition: 'center',backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'})
        if(count==picture.length){
            count=0;
        }
        
    }, 3000);
    // (function(){
    //     console.log($(this).children('img'));
    //     console.log(picture[count]);
    // })

})