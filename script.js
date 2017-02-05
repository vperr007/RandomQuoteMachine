$(document).ready(function(){
  var quote;
  var author;
  //has to be established outside the function
  function getNewQuote(){
    $.ajax({
    url: 'http://api.forismatic.com/api/1.0/?method=getQuote&format=jsonp&lang=en',
      jsonp: 'jsonp',
      dataType: 'jsonp',
      //to prevent access-control-allow-origin error
    
      success: function(response){
      quote = response.quoteText;
      author = response.quoteAuthor;
      $('#quote').text(quote);
        if(author){
          $('#author').text('- ' + author)
          //if author is unknown
        } else{
          $('#author').text('- Who knows');}
      }
    });
  }
  getNewQuote();
  
  $('.getquote').on('click',function(){
    getNewQuote();
  })
  //When clicked it'll generate a new quote
  $('.tweet-it').on("click",function(){
    event.preventDefault();
    //When clicked it'll begin a tweet that contains the quote
    window.open('https://twitter.com/intent/tweet?text=' + encodeURIComponent(quote + '- ' + author));
    //to open twitter
  });
 $('.tumblr-it').on("click", function(){
    event.preventDefault();
    
 window.open('https://www.tumblr.com/share/tools?' + encodeURIComponent(quote + '- ' + author));
  })
})