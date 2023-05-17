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

let listbyclass=document.getElementsByClassName("list-group-item");
let listbytag=document.getElementsByTagName("li");

for(let i=0;i<listbyclass.length;i++)
{
    listbyclass[i].style.backgroundColor="grey";
}

for(let i=0;i<listbytag.length;i++)
{
    listbytag[i].style.color="red";
}

lists[1].style.backgroundColor="green";
lists[2].style.display="none";

lists[1].style.color="green";

let oddele=document.querySelectorAll("li:nth-child(odd")

for(let i=0;i<oddele.length;i++)
{
    oddele[i].style.backgroundColor="green";
}