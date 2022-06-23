let nums= document.getElementsByClassName("numsub");
let feedn=document.getElementsByClassName("feedn");
document.getElementsByClassName("thank-you")[0].style.display='none';
const btn=document.getElementById("btn");

for(let i=0;i<nums.length;i++){   
    
    nums[i].onclick=function(){    

        document.cookie= nums[i].innerHTML;
        nums[i].classList.add("clicked");
        
    }
}

btn.addEventListener('click',function(){
    
    var score=document.cookie.substring();
    feedn[0].innerHTML=`You selected ${score} out of 5`;
    document.getElementsByClassName("contain")[0].style.display='none';
    document.getElementsByClassName("thank-you")[0].style.display='block';
})


