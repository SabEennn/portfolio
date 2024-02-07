fetch('https://type.fit/api/quotes')
.then((r)=>r.json(	))
.then((j)=>{

	const short = document.getElementById("api");
	
	var randomNum = Math.floor(Math.random()*j.length)
 console.log(j[randomNum].text);
	var quote = j[randomNum].text;
	api.innerHTML= quote;
	short.style.fontFamily = "Space Grotesk"; 
short.style.color= "#757575";
short.style.fontWeight="100";
})