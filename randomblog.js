
$(document).ready(function () {
     var number=Math.floor(Math.random() * 100);
     console.log(number);
     const url = `https://jsonplaceholder.typicode.com/posts/${number}`;
     console.log(url);
    

     $.get(url, function (data) {
            for(let i=0;i<15;i++){
               Object.values(data).forEach
                 $(".content").append(data["body"]);}
             });
            });




















