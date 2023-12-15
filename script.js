const skill = document.getElementById("skills")
const experience = document.getElementById("exp")
const education = document.getElementById("edu")
const tapChange= (ids)=>{
	 if( ids === `skills`){
			skill.style.display = `block`;
			experience.style.display = `none`; 
			education.style.display = `none`; 	
			
		}
	 else if( ids === `exp`){
			experience.style.display = `block`;
			skill.style.display = `none`; 
			education.style.display = `none`; 

		}
	 else if( ids === `edu`){
			education.style.display = `block`;
			experience.style.display = `none`; 
			skill.style.display = `none`; 

		}

}