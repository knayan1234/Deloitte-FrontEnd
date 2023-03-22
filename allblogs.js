const url = 'https://jsonplaceholder.typicode.com/posts';
const settitle=(val,val2)=>{
     localStorage.setItem("title",val);
     localStorage.setItem("id",val2);
     //  console.log(localStorage.getItem("title"));
     //  console.log(localStorage.getItem("id"));
      window.location.replace("blogs.html");
}
$(document).ready(function () {
    $.get(url, function (data) {
       data.forEach((element) => {
            $(".content").append(`<p onclick="settitle('${element.title}','${element.id}')">${element.title}</p><br>`);   
         });
     
    })

});

