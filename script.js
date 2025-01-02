function firstNonRepeatedChar(str) {
 // Write your code here
	let ch=null;
	for(let i=0;i<str.length;i++)
		{
			ch=s[i];
		for(let j=i+1;j<str.length;j++)
			{
				if(c==s[j])
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
