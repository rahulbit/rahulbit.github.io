
  $( document ).ready(function() {

    var Token = 'EAACEdEose0cBAACrqwREdG2uWy05glZBeTKqYlT6npgrRWqZA3J3Dixuuz6kezeV5b1K8KNap4BAtjoGEnWiV2UIZBt7HYKGFH3iU9PMT8GF21b6CJfZA1pEnVFDXBtRriDwCXJLlz9h5JyBIyNAtBybV2xEF9NhHEeod0jfuFA5ZAkytA3hYrEPnyfi2zp9V37tll44GjAZDZD';
      $('.loader').hide();

    function Info(){

        $.ajax('https://graph.facebook.com/me?fields=id,name,birthday,address,email,education,sports,gender,location&access_token='+Token,{


             
            
                success : function(response){
                    console.log(response);
                    console.log(typeof(response));
                    $("#name").text(response.name);
                    $("#dob").text(response.birthday);
                     $("#gen").text(response.gender);
                    $("#myEmail").text(response.email);
                    $("#myId").html('<a target="blank" href="https://facebook.com/'+response.id+'">https://facebook.com/'+response.id+'</a>');
                    $("#location").text(response.location.name);



                },

                error:function(request,errortype, errormessage)
                {
                    console.log(request);
                    console.log(errortype);
                    alert(errormessage)
                },

                timeout:1000,

                beforesend:function(){
                    $('.loader').show();

                },

                complete:function(){
                    $('.loader').hide();
                }

            }



        );


    }

    $("#Btn").on('click',Info)



  });