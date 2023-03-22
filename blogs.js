$(document).ready(function () {
    const url = 'https://jsonplaceholder.typicode.com/posts';
    title=localStorage.getItem("title");
  
    $.get(url, function (data) {
       data.forEach((element) => {

          if(element.title===title)
          {
            $(".content").text(element.title);
            $(".content").append("<p></p>");
            for(let i=0;i<15;i++){
              $(".realcontent").append(element.body);
            }
          }
         });
    });

    const url2='https://jsonplaceholder.typicode.com/users';
    $.get(url2, function (data) {
        data.forEach((element) => {
            var id=localStorage.getItem("id");
            if(element.id==id){
            $(".details").append("<p></p>"); $(".details").append("<p></p>");
            $(".details").append("Posted by : "+element.name);
            $(".details").append("<p></p>");
            $(".details").append("Contact : "+element.email);
            $(".details").append("<p></p>");
            $(".details").append("City : "+element.address.city);}
        });
    });

});