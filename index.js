let nums= document.getElementsByClassName("numsub");
let feedn=document.getElementsByClassName("feedn");


for(let i=0;i<nums.length;i++){   
    
    nums[i].onclick=function(){    

        document.cookie= nums[i].innerHTML;
        nums[i].classList.add("clicked");
        
        
    }
}

var score=document.cookie.substring();
feedn[0].innerHTML=`You selected ${score} out of 5`;

