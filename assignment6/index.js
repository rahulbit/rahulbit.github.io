



$(document).ready(()=>{

	     $(".loader").hide();
       $(".card1").hide();

    
        

   
      $('#get-data').click(()=>{
             let value = $("#formInput").val();
             
               
             if( value ==null || value==" ")
             {
                   alert("enter movie name");
             }
             else{
                    
               getAllData(value);
                $(".card1").show(); 
     
             }
        
                

          

    })
   
});


let getAllData = (value) => {

     console.log(value)

    $.ajax({
        type: 'GET', // request type GET, POST, PUT
        dataType: 'json', // requesting datatype
        url: 'http://www.omdbapi.com/?i=tt3896198&apikey=639e1a63', // URL of getting data
        success: (response) => { // in case of success response
            
            console.log(response)

              
                   	  if(response.Title == value) {

                   	   	$(".card-img-top").html('<img src="' + response.poster + '" class="img-fluid "/>');
                   	   	$("#title").append(response.Title);
                   	   	$("#rated").append(response.Rated);
                   	   	$("#year").append(response.Year);
                   	   	$("#released").append(response.Released);
                   	   	$("#genre").append(response.Genre);
                   	   	$("#box-office").append(response.BoxOffice);
                   	   	$("#rating").append(response.imdbRating);
                   	   	$("#production").append(response.Production);
                        $("#plot").append(response.Plot);
                        $("#lang").append(response.Language)
                        $("#director").append(response.Director)
                        $("#web").append(response.Website)
                        $("#writer").append(response.Writer)
                        $("#actor").append(response.Actors)
                        $("#award").append(response.Awards)
                        $("#rt").append(response.Runtime)
                        $("#ct").append(response.Country)
                        $("#vote").append(response.imdbVotes)
                    }

                    else{
                      alert("no data exist");
                       $(".card1").hide();

                    }
           	   
                  
         
           
        },
        error: (data) => { 

               $(".card1").hide();
            alert("some error occured")


        },

        beforeSend: () => { 

            
             $(".loader").show();

        },
        complete: () => {

          
              $(".loader").hide();

        },

        timeout:3000 

    }); // end of AJAX request

} // end of getAllData

