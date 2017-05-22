/* custom javascript */
/* by- ashraful kabir */
$(document).ready(function(){
     /* hide step 2  of purchase form, step-3,4,5,6. */
    //$('#otherOptions').hide();
    
    /* on page loading adding sub-heading div */
    $('.bundle-1 h2,.bundle-2 h2').after('<div class="sub-heading">&nbsp; </div>');
    
    $('.sub-heading').last().css('height','auto');
    
        
        
    
        /* For any bundle selection */        
        $('.bundle').on("click",function(){
            var bundle_id=$(this).attr('id');          
           // $( "body" ).find( "div.bundle" ).eq( -1 ).addClass( "blue" );
            
            if($( "body" ).find( "div.bundle" ).eq( -1 )){
                console.log('Its for sale!');
                /* Display the purchase message  */
                $('.purchase-message').html('<h2>You can purchase this bundle.</h2>');
                $('.purchase-message h2').css('color','green');
                $('#bundle-selected').show();
                
                /* display other steps */
                $('#otherOptions').show();
               
                
            }
            else{
                console.log('Not for sale!');
                /* Display the purchase message  */
                $('.purchase-message').html('<h2>You can not purchase this bundle. Please select another Bundle. </h2>');
                $('.purchase-message h2').css('color','red');
                $('#bundle-selected').show();
                
                /* hide other steps */
               $('#otherOptions').hide();
                
                
            }
            
            var a_name='tiger';
            /* storing the data value into a_name */
            a_name=$(this).data('nickname');
            
            /* display selected animal name on div#animal */
            $("#animal").html(a_name);            
            
        });
        
        /* add the word Bundle befor default bundle name */
        function change_text(bundle_name){            
            bundle_name1=$("#bundle-1").data('nickname');        
            bundle_name2=$("#bundle-2").data('nickname');        
            bundle_name3=$("#bundle-3").data('nickname');        
            
           /* $('div.bundle-1 h2').html(bundle_name+" "+bundle_name1);       
            $('div.bundle-2 h2').html(bundle_name+" "+bundle_name2);       
            $('div.bundle-3 h2').html(bundle_name+" "+bundle_name3);*/
            
            $('div.bundle-1 h2').html(bundle_name);       
            $('div.bundle-2 h2').html(bundle_name);       
            $('div.bundle-3 h2').html(bundle_name);
        }
                       
        /* using prepend inserting word or text before h2 text */
        function add_bundlename(bundle_name){
            $('div.bundle h2').prepend(bundle_name);
        }
        
                
    /* ###### looping each bundle using .each() ###### */ 
        $( "div.bundle" ).each(function(index ) {
            var default_text = $( this ).text();
            console.log(default_text);
            
            /* storing the nickname */
            var bundle_nickname=$(this).data('nickname'); 
            
            /* storing bundle with nickname */
            var new_text = bundle_nickname;            
            
            //$(this).find("h2").html(new_text+" : "+default_text);
            $(this).find("h2").html(new_text);
            
        });
    
    
    /* step 2 submit username */
    $( ".submit" ).click(function() {  
            /* storing the input value into var inputVal */
            var inputVal = $("input#username").val(); 
            
            /* get the length of the input value */
            var length = inputVal.length;
        
        /* check if the input value is blank or no*/
          if (inputVal=='') {           
            $( "#form-text" ).html( "Please Enter Username" );
              /* add class success */
              $("#form-text").addClass('error');
            
          }
        else{
            /* checking if the lenght of input value is less then 5*/
            if(length <5){             
              $( "#form-text" ).html( "Username Can't be less then 5 charecters" );   
                $("#form-text").addClass('error');
             
              
            }
            else{
                /* call hasNumbers() function to check the string has number */
                var str = hasNumbers(inputVal);
                
                /* checking if then given input value is numeric or no */
                if(str==true){                    
                    $('#form-text').html('Please enter non numeric value.');
                    /* remove class success */
                    $("#form-text").removeClass('success');
                    /* add class success */
                    $("#form-text").addClass('error');
                    
                }
                else{
                    /* succeess message! */                  
                    $('#form-text').html('Yahoooo!!! Good Job: '+inputVal);
                    /* add class success */
                    $("#form-text").addClass('success');
                }
                
            }
                        
        }
        
        /* function to check an string that contains number */
            function hasNumbers(t)
            {
                return /\d/.test(t);
            }
          
    });
    
    /* end of username submission */
    
    /* declare global variable for quantity */
    var circleQuantity=0;   
    var triangleQuantity=0; 
    
    /* function for get circle active class quantity */
    function getCircleQuantity(){
         /* getting the length of ciractive */
         circleQuantity =$('.ciractive').length;
    }
     /* function for get triangle active class quantity */
    function getTriangleQuantity(){
         triangleQuantity =$('.triactive').length;
    }    
        
    
    /* ######## triangle selection ######### */
   
    $('div.triangles').click(function(){
        /* adding toggle class triactive */
        $(this).toggleClass('triactive');
        
        /* Count active class of triangle */
        getTriangleQuantity();
        
        /* display number of active class of triangles in span */
       $('span#triangleQuantity').text(triangleQuantity);
       
    });
   /* ################ End of triangle selection ######## */ 
     
  /*   Circle selection  */    
    $('.circles').click(function(){
        /* add the toogle class ciractive */
        $(this).toggleClass('ciractive');
        
        /* count active class of circle */
          getCircleQuantity();
        
        /* display number of active class of circles in span */
       $('span#circleQuantity').text(circleQuantity);
    });
   /*  End of circle selection */    
    
        
    /* get the campaign id from the current url */
    var url = new URL(document.URL);
     var searchParams = new URLSearchParams(url.search);
     console.log(searchParams.get('campaignId'));    
     var camp_id = searchParams.get('campaignId');
     
     $('.back-to-3').attr('href','bundle3.html?campaignId='+camp_id); 
    
    $('.back-to-2').attr('href','bundle2.html?campaignId='+camp_id);
    
    $('.back-to-home').attr('href','bundle.html?campaignId='+camp_id);
    $('.nav-block a.nav_subscribe').attr('href','bundle.html?campaignId='+camp_id);    
    
     console.log(camp_id);
    
    
        
    $("figcaption h6 i.toggle_icon").click(function(){
       // console.log('test');       
        $('p.toggle').slideToggle();
        $('.toggle_icon').css('transform','rotate(45deg)');
    
    });
    
        
    /* jQuery .not() test */
        /* only even number of li will be background green*/
        $('li').not(':even').css('background','green');
    
        /* only odd number of li will be background #ccc */
        $('li').not(':odd').css('background','#ccc');
    
        /* all li will be font weight bold exclude class first and last */
        $('li').not('.first,.last').css('font-weight','bold');
    
        /* all li will be bordered right excluded the class last  */
        $('li').not('.last').css('border-right','3px solid #000');
    
        /* all li will have margin right exclude the class last */
        $('li').not('.last').css('margin-right','10px');
    
    
           
        /* function for get rotated class quantity */
        var rotated=0;
        function getRotated(){
             rotated =$('.rotated').length;
        }
    
         /* ######## Learn more button click  ######### */

        $('.more').click(function(){
            /* adding toggle class details */
            $('.details').toggle('slow');           
                     
            /* Count active class of rotated */
            getRotated();
            
            /* if roated is active or roated=1 */
            if(rotated>0){
                /* remove class rotated */
                $('.more i').removeClass('rotated');
                /* add transform roated to 0deg */
                $('.more i').css('transform','rotate(0deg)');
                /* add Learn More text to the span */
                $('.more span').html('Learn More');
                /* remove class close */
                $('.more').removeClass('close');
               }
            /* when roated is removed or roated=0 */
            else{
                /* add class roated */
                $('.more i').addClass('rotated');
                /* add transform roated to 45deg */
                $('.more i').css('transform','rotate(45deg)');
                /* add close text to the span */
                $('.more span').html('Close');
                /* add class close */
                $('.more').addClass('close'); 
                $('.time').html($.now());
            }                   

        });
    /* End of Learn More button*/ 
    
    
    
    
    /* top fixed nav bar when mouse scroll */
        var nav ='#topnav';
        $(window).scroll(function(){                        
            if($(this).scrollTop()>125){
                /* when mouse scrolled down */
                $('#topnav').addClass("nav_fixed");
                $(".nav_fixed").slideDown('900');
                $('#topnav').addClass("nav_color");
                $('.nav_subscribe').addClass("fixednav_subscription");
               }
            else{
                /* when mouse not scrolled */
                $('#topnav').removeClass("nav_fixed");
                $('#topnav').removeClass("nav_color");
                $('.nav_subscribe').removeClass("fixednav_subscription");
            }            
        });
    /* on scroll fixed nav ends */
    
    /* ########## For mobile nav ################ */    
        $('.current_page').click(function(){
            /* slide toggle */
        $('menu').slideToggle('slow',function(){         
            if ($('menu').is(':hidden'))
            {   
                 /* when slide closed */
                 $('#topnav').removeClass("opened");
                 $('.mobile_subscription').removeClass('blue');
                 $('.mobile_nav h5').removeClass("black");
                 $('.mobile_nav h5 i').css('transform','rotate(0deg)');
                 $('.mobile_nav h5 i').css('transition','ease all 1s');
                 $('.mobile_nav h5 i svg path').css('fill','#fff');
            }
            else
            {
                /* when slide open */
                $('#topnav').addClass("opened"); 
                $('.mobile_nav h5').addClass("black");                 
                $('.mobile_subscription').addClass('blue');
                $('.mobile_subscription').removeClass('.mobile_subscription');   //$('.mobile_nav h5 i').css('background','black');
                $('.mobile_nav h5 i').css('transform','rotate(180deg)');
                $('.mobile_nav h5 i svg path').css('fill','black');
                
            }
       
            });         
                    
        });    
    
    /* Mobile nav ends */  
    
        
});    
    
