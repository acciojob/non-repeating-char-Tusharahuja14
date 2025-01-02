function firstNonRepeatedChar(str) {
 // Write your code here
	let ch=null;
	for(let i=0;i<str.length;i++)
		{
			ch=str[i];
		for(let j=0;j<str.length;j++)
			{
				if(j==i)
				{
					continue;
				}
				if(ch==str[j])
				{
					ch=null;
					break;
				}
				
			}
			if(ch!=null)
			{
				break;
			}
			
				
				
		}
	return ch;
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
