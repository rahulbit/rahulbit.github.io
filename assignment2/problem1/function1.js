let checkLogin = (email, password, ...allUsers) =>{
	
	let isUserfound =  true;
	let passwordCorrect = true;

	for( currentUsers of allUsers)
	{
         console.log(currentUsers)

         if(allUsers[currentUsers].email == email)
         {
             if(allUsers[currentUsers].password==password)
             {
             isUserfound = true;
             passwordCorrect = true;
             break;
             }
             else if{
                 isUserfound =true;
                 passwordCorrect =false;
                 break;
             }
             else{
             isUserfound =false;

             }
         }

	}

	if(isUserfound==true && passwordCorrect ==true)
	{
	    console.log(you are logged in)
	}

	else if (isUserfound ==true && passworrdCorrect ==false)
	{
	  console.log(wrong password)
	}

	else{
	  console.log(No user found with this email)
	}
}