// Url Ajax will be using to retrieve information

var QueryUrl = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=nfl&fq=seahawks&api-key=32GLA4k3GlzsT62GQc4kXW8LUxUJrs5x"

$.ajax({
    url: QueryUrl,
    method: "GET"
}).then(function(response){
    console.log(response);
    // for(var i=0; i<response.docs.length; i++){
    //     var randomDocs = $("<p>");
    //     randomDocs.text(response.docs[i]);
    //     $("body").append(randomDocs);
    // }
    // var randomDocs = $("<p>");
    // randomDocs.text(response.docs[i]);
    // $("body").append(randomDocs);
})