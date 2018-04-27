let bubbleSort =(a)=>
{
    let  swapp ;
	const n = a.length-1;
	const  x= a;

	do{
	  swapp =false ;

	  for (const i=0; i<n; i++)
	  {
	     if(x[i] < x[i+1])
	     {
              const  temp = x[i+1];
              x[i+1] = x[i];
              x[i]  = temp;

	     }
	  }
	  n--;
	}
	while(swapp)
	return x;
}