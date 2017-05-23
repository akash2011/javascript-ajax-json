/* custom javascript */
/* by- ashraful kabir */
$(document).ready(function(){    
    //$('#otherOptions').hide();
    
    /* on page loading adding sub-heading div */
    $('.bundle-1 h2,.bundle-2 h2').after('<div class="sub-heading">&nbsp; </div>');      
    $('.sub-heading').last().css('height','auto');            
    
    //$('.bundle').not('.notForSale').css();
    
        /* For any bundle selection */        
        $('.bundle').not('.notForSale').on("click",function(){
            var bundle_id=$(this).attr('id');          
                     
            if($(this).hasClass('forSale')){
                console.log('Its for sale!');
                /* Display the purchase message  */
                $('.purchase-message').html('<h2>You can purchase this bundle.</h2>');
                $('.purchase-message h2').css('color','green');
                $('#bundle-selected').show();
                
                /* display other steps */
                $('#otherOptions').show();
                var price = $(this).find('span.regularPrice').text();
                $('span.price').text(price);
                
                 regularBundlePrice = $(this).find('span.regularPrice').text();                  
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
            
             bundleName='tiger'; 
            /* storing the data value into a_name */
            bundleName=$(this).data('nickname');
            
            /* display selected animal name on div#animal */
            $("#animal").html(bundleName); 
            
            /* display bundle name to variable block */
             $('span.bundleSelected').text(bundleName);
            
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
    
    /* declaring global variables */
    var regularPrice = 0;
    var discountedPrice = 0;
    var afterDiscountPrice = 0;
    
    /* discount calculation method */
    function discountCalculation(regularPrice,discountedPrice){
        afterDiscountPrice = regularPrice-(regularPrice*discountedPrice/100);      
        return afterDiscountPrice;
    }
    
    /* total amount after discount */
    var total = discountCalculation(10,30);
    
    console.log(total);
    /* End of discount calculation */
    
    /* total amount round up global variable */
    var totalNumber=0;
    var precision=0;
    /* round up the total amount method */
    function roundTotalPrice(totalNumber,precision){        
        return Math.ceil(totalNumber * precision) / precision;
    }
    
    
        /* set bundle discounted price */  
        var bundle1Total = discountCalculation(10.55,50);
        var bundle2Total = discountCalculation(14.75,50);
        var bundle3Total = discountCalculation(21.40,50);
        /* display round up discounted price to the span */
        $('.discountedPrice').eq(0).text(roundTotalPrice(bundle1Total,100));
        $('.discountedPrice').eq(1).text(roundTotalPrice(bundle2Total,100));
        $('.discountedPrice').eq(2).text(roundTotalPrice(bundle3Total,100));
    
        
    var color;
    animal='tiger';
    /* step 2 submit username */
    $( ".submit" ).on("click",function() {  
            /* storing the input value into var inputVal */
             inputVal = $("input#username").val(); 
            
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
                    $('#step-3').css('display','block');
                    
                     $('span.username').text(inputVal);
                    
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
    //var circleQuantity=0;   
   // var triangleQuantity=0; 
    
    /* function for get circle active class quantity */
    function getCircleQuantity(){
         /* getting the length of ciractive */
         circleQuantity =$('.ciractive').length;
        return circleQuantity;
    }
     /* function for get triangle active class quantity */
    function getTriangleQuantity(){
         triangleQuantity =$('.triactive').length;
        return triangleQuantity;
    }    
        
    
    /* ######## triangle selection ######### */
   
    $('div.triangles').on("click",function(){
        /* adding toggle class triactive */
        $(this).toggleClass('triactive');
        
        /* Count active class of triangle */
        getTriangleQuantity();
        
         /* display step 4 when shapes more then 0 */
        var cs = checkShapes(); // total quantity of shapes 
        if(cs>0){
            $('#step-4').css('display','block');
            ShowAllVariables(); // show all variables
           }
        else{
             $('#step-4').css('display','none');
        }
        
        // $('span.triangleQuantity').text(triangleQuantity);
       
    });
   /* ################ End of triangle selection ######## */ 
     
  /*   Circle selection  */    
    $('.circles').on("click",function(){
        /* add the toogle class ciractive */
        $(this).toggleClass('ciractive');
        
        /* count active class of circle */
          getCircleQuantity();
        
        /* display step 4 when shapes more then 0 */
        var cs = checkShapes(); // total quantity of shapes 
        if(cs>0){
            $('#step-4').css('display','block');
            ShowAllVariables(); // show all variables
           }
        else{
             $('#step-4').css('display','none');
        }
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
    
    /* Check Shapes Quantity */
    var totalShape = 0;
    function checkShapes(){
        totalShape = getCircleQuantity()+getTriangleQuantity();
        return totalShape;
    }
     
    /* Show all variables  */
    function ShowAllVariables(){
        $('span.username').text(inputVal);
        $('span.bundleSelected').text(bundleName);
        $('span.price').text(regularBundlePrice);
        $('span.triangleQuantity').text(triangleQuantity);
        $('span.circleQuantity').text(circleQuantity);
    }
    
    /* submit the variables to tracker.js */
    $('sender').on("click",function(){
      alert('send data to tracker.js');   
        
                
        
    });
    
    
    
        
});    
    
