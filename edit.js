const hasText = (text1, text2)=>{

    for(let i=1; i<=text2.length; i++){
        let text = text1.slice(text1.length-i);
        let subtext= text2.slice(text2.length-i);
       
        if(text == subtext && i==text2.length){
            return true
        }
        else if (text !== subtext){ 
            return false
        }
    }
   
console.log(hasText('poyo', 'yo'));
}