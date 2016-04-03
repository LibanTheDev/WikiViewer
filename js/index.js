
  




(function () {




  var $searchForm = $("#search-form"),
  $searchBox = $searchForm.children("#searchBox"),
  
  link="",
   wikiLink="",
   wikiApi="",
  searchTerm="";


    



$searchBox.keyup(function(event){

  getWikis();





});

    
  



  
  function getWikis() {

    $("#display").empty();
    
    wikiLink='http://en.wikipedia.org/?curid=';
   wikiApi="https://en.wikipedia.org/w/api.php?action=query&prop=extracts&exlimit=max&format=json&exsentences=1&exintro=&explaintext=&generator=search&gsrlimit=8&gsrsearch=";
  html='';
    
    searchTerm = $("#searchBox").val();

    console.log(searchTerm);

    
     

    link = wikiApi + searchTerm;
    

   

    $.ajax({
        url: link,
        type: "get",
        dataType: "JSONP",
        success: function (data) {
            var results = data.query.pages;
            var pgs = Object.keys(results);
            pgs.forEach(function (page) {
                var title = results[page].title;
                var text = results[page].extract;
                var pagelink = wikiLink + results[page].pageid;

                html += '<a href="' + pagelink + '" >' + '<div class="item">' + title + '<br>' + '<p class="description-text" >' + text + '</p>' + '</div></a>  <br> ';
            });

            $('#display').append(html);
        }
    });
    
    

      

      }

function printToScreen() {


        console.log("it has been clicked");


  }

} () ); 





  
