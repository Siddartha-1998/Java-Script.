
var a = [2,5,7,16,19,26,18,59] 
var data2 = []
var prime = true;

for(i=0;i<=a.length;i++)
{
    for(k=2;k<a[i];k++)
    {
        if(a[i]%k==0)
        {
            prime = false;
            break;

        }
    }
    if(prime == true)
    {
        data2.push(a[i])
    }
}
console.log(data2)


   

