let headbox=document.querySelector("#main-header");

headbox.style.borderBottom="solid 3px #000";


let titles=document.querySelectorAll(".title");
titles[1].style.fontWeight="bold";
titles[1].style.color="green";

let lists=document.querySelectorAll(".list-group-item");

lists[2].style.backgroundColor="green";

for(let i=0;i<lists.length;i++)
{
    lists[i].style.fontWeight="bold";
}