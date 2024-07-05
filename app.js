
// arr of object
var student = [{
    id:101,
    detail:{
     name:" hammad",
     class:"web",
     age:19,
     subject:["html","Css","Java script"]
    }},
{id:102,
detail:{
    name:" uzair",
     class:"web",
     age:20,
     subject:["html","Css","Java script"]
}},
{id:103,
detail:{
    name:" Anus",
     class:"web",
     age:15,
     subject:["html","Css","Java script"]
}},
{id:104,
detail:{
    name:" hassan",
     class:"web",
     age:18,
     subject:["html","Css","Java script"]
}},
{id:105,
detail:{
    name:" umar",
     class:"web",
     age:19,
     subject:["html","Css","Java script"]
}},
{id:106,
detail:{
    name:" ahmed",
     class:"web",
     age:22,
     subject:["html","Css","Java script"]
}},
{id:107,
    detail:{
        name:" essa",
         class:"web",
         age:20,
         subject:["html","Css","Java script"]
    }},
    {id:108,
        detail:{
            name:" taha",
             class:"web",
             age:20,
             subject:["html","Css","Java script"]
        }},
        {id:109,
            detail:{
                name:" faizan",
                 class:"web",
                 age:20,
                 subject:["html","Css","Java script"]
            }},
            {id:110,
                detail:{
                    name:" junaid",
                     class:"web",
                     age:21,
                     subject:["html","Css","Java script"]
                }},
                {id:111,
                    detail:{
                        name:" sheroz",
                         class:"web",
                         age:23,
                         subject:["html","Css","Java script"]
                    }},
]
var data= document.getElementById("data")
var drop=document.getElementById("drop")
for(var i=0;i<student.length;i++){
 data.innerHTML +=`
   <tr>
            <td>${student[i].id}</td>
            <td>${student[i].detail.name.toUpperCase()}</td>
            <td>${student[i].detail.class}</td>
            <td>${student[i].detail.age}</td>
            <td>${student[i].detail.subject}</td>
        </tr> `}


 drop.innerHTML=`<option value="" selected disabled>Select id num</option>`
 for(var a=0;a<student.length;a++){
 drop.innerHTML+=`<option value="${student[a].id}">${student[a].id}</option>`
}

drop.addEventListener('change',function () {
    data.innerHTML=""
    var selectvalue = drop.value
    for(var j=0;j<student.length; j++)
    if(student[j].id===parseInt(drop.value)){
        console.log(student[j].id);
        console.log(student[j].detail);
        data.innerHTML +=`
   <tr>
            <td>${student[j].id}</td>
            <td>${student[j].detail.name.toUpperCase()}</td>
            <td>${student[j].detail.class}</td>
            <td>${student[j].detail.age}</td>
            <td>${student[j].detail.subject}</td>
        </tr> `

    }
    
})