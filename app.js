let q1= document.querySelector('#q1');
let ans1= document.querySelector('#ans1');
let q2= document.querySelector('#q2');
let ans2= document.querySelector('#ans2');
let q3= document.querySelector('#q3');
let asn3= document.querySelector('#ans3');
console.log(q1);
q1.addEventListener('click', function(){
    
    if(ans1.classList.contains('ajs')) 
   { 
    q1.classList.remove('js');
    ans1.classList.remove('ajs'); 
     
   }
    
    else
    {   
        q1.classList.add('js');
        ans1.classList.add('ajs');
       
    }
})
q2.addEventListener('click', function(){
     
    if(ans2.classList.contains('ajs')) 
   { 
    q2.classList.remove('js');
    ans2.classList.remove('ajs'); 
     
   }
    
    else
    {   
        q2.classList.add('js');
        ans2.classList.add('ajs');
       
    }
})
q3.addEventListener('click', function(){
      
    if(ans3.classList.contains('ajs')) 
   { 
    q3.classList.remove('js');
    ans3.classList.remove('ajs'); 
     
   }
    
    else
    {   
        q3.classList.add('js');
        ans3.classList.add('ajs');
       
    }
})