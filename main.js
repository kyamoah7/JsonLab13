$(document).ready(function(){
	$.get("https://www.reddit.com/r/aww/.json", function(goodness){
    var redditArray = goodness.data.children;
    for(var i =0; i < redditArray.length-1; i++){
    var thumbnail1 = redditArray[0].data.thumbnail;
    var thumbnail = redditArray[i].data.thumbnail;
    var title = redditArray[i].data.title ;
    var author = redditArray[i].data.author ;
    var score = redditArray[i].data.score ;
    var link = redditArray[i].data.permalink ;
    var myClass = "aww";

		$('section').append(
    '<div class ='+ myClass +'><a href="'+ "https://www.reddit.com"+ link +'"><img src="'
      + thumbnail +
      '"/></a></div><h2>'+title +
      '</h2><h3>Author :' + author + '</h3><h2> Score : '+ score + '</h2>').addClass('section');
    $('section').append()
    

      console.log(thumbnail);
    console.log(title);
    }
    
	});
});
