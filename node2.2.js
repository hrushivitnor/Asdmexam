exports.factorial=function(n)
{
   if (n>=1)
   { var fact=1;
for(var i=1;i<=n;i++)
{
    fact=fact*i;
   
}
return fact;
   }
    else 
		return 1;
}
