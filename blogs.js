const url = 'https://jsonplaceholder.typicode.com/posts';
$(document).ready(function () {
    $.get(url, function (data) {
        data.forEach(element => {
                document.getElementsByClassName('content').innerHTML=console.log(element.title+"<br>");
            // $(".content").text(element.title);

            Object.entries(element).forEach(([key,value])=>{
                $(".content").text(value);
            });
                      
        });
    })

});
