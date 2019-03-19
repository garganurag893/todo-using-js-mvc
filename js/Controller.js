var newentry = document.getElementById("new");
newentry.addEventListener("keypress",function(e) {
    if(e.keyCode == 13)
        {
            var ans= document.getElementById("new").value;
            if(ans != "")
            {
                var obj={caption:ans,iscomp:0};
                listarr.push(obj);
                document.getElementById("new").value="";
                display();
                inc(); 
            }
        }
});
function display()
{
    document.getElementById("list").innerHTML="";
    for(var i=0;i<listarr.length;i++)
        {
                newitem(i);  
        }
}
function newitem(i)
{
    var ul = document.getElementById("list");
                var li = document.createElement("li");
                li.classList.add("d-flex");
                li.classList.add("justify-content-between");
                var text1="<div><i class='far fa-circle circle' onclick='func2a(this,"+i+")'></i><i class='far fa-check-circle font-weight-lighter display circle";
                var text2,text3,text4;
                if(listarr[i].iscomp==1)
                    {
                        text2=" display";
                        text3=" ";
                        text4="class='line'";
                    }
                else{
                    text2=" ";
                    text3=" display";
                    text4=" ";
                }
                li.innerHTML=("<div "+text4+"><i class='far fa-circle circle"+text2+"' onclick='func2a(this,"+i+")'></i><i class='far fa-check-circle font-weight-lighter circle"+text3+"' style='color:green;' onclick='func2b(this,"+i+")'></i><span>"+listarr[i].caption+"</span></div><input onkeypress='edit(event,"+i+")' style='display:none;padding:0;margin:0;height:50px;'type='text'><i class='fas fa-times' onclick='func1(this,"+i+")'></i>");
                li.addEventListener("dblclick",function(e){
                    e.target.childNodes[0].childNodes[2].innerHTML="";
                    var arr2=e.target.childNodes;
                    arr2[1].style.display = "block";
                });
                ul.appendChild(li);  
}
function func3()
{
    var flag=0;
    for(var i=0;i<listarr.length;i++)
        {
            if(listarr[i].iscomp==0)
                {
                    flag=1;
                    break;
                }
        }
    if(flag==1)
        {
            for(var i=0;i<listarr.length;i++)
            {
                if(listarr[i].iscomp==0)
                    {
                        dec();
                        listarr[i].iscomp=1;
                    }
            }
        }
    else{
            for(var i=0;i<listarr.length;i++)
            {
                    inc();
                    listarr[i].iscomp=0;
            }
    }
    display();
}
function func1(butt,index)
{
    if(listarr[index].iscomp==0)
        {
         dec();   
        }
    listarr.splice(index,1);
    display();
}
function func2a(butt,index)
{
    butt.classList.toggle("display");
    var temp=butt.parentNode.childNodes[1];
    temp.classList.toggle("display");
    butt.parentNode.classList.toggle("line");
    listarr[index].iscomp=1;
    dec();
}
function func2b(butt,index)
{
    butt.classList.toggle("display");
    var temp=butt.parentNode.childNodes;
    temp[0].classList.toggle("display");
    butt.parentNode.classList.toggle("line");
    listarr[index].iscomp=0;
    inc();
}
function active()
{
    document.getElementById("list").innerHTML="";
    for(var i=0;i<listarr.length;i++)
        {
               if(listarr[i].iscomp==0)
                   {
                        newitem(i);  
                   } 
        }
}
function completed()
{
     document.getElementById("list").innerHTML="";
    for(var i=0;i<listarr.length;i++)
        {
               if(listarr[i].iscomp==1)
                   {
                        newitem(i);  
                   } 
        }
}
function edit(e,index)
{
    if(e.keyCode == 13)
        {
            var ans=e.target.value;
            e.target.value="";
            if(ans!="")
                {
                 var temp=e.target.parentNode.childNodes[0];
                 temp.childNodes[2].innerHTML=ans;
                    if(listarr[index].iscomp==1)
                        {
                         temp.classList.remove("line");
                         temp.childNodes[0].classList.toggle("display");
                         temp.childNodes[1].classList.toggle("display");  
                            listarr[index].iscomp=0;
                            inc();
                        }
                    listarr[index].caption=ans;
                    e.target.style.display = "none";
                }
        }
}
function inc()
{
    c=document.getElementById("count").innerHTML;
    c=parseInt(c, 10)+1;
    document.getElementById("count").innerHTML=c;
}
function dec()
{
    c=document.getElementById("count").innerHTML;
    c=parseInt(c, 10)-1;
    document.getElementById("count").innerHTML=c;
}
function clearcomp()
{
    for(var i=0;i<listarr.length;i++)
            {
                if(listarr[i].iscomp==1)
                    {
                        listarr.splice(i,1);
                        i--;
                    }
            }
    display();
}
