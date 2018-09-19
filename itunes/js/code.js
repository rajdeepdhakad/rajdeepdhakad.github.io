$(document).ready(function(){
$.getJSON("https://itunes.apple.com/in/rss/topalbums/limit=100/json", function(obj){
 $.each(obj, function(key,value){
   for(i=0; i<=value.entry.length; i++){
   //for(i=0; i<=0; i++){
   //debugger;
     $(".221").append("<img src='"+   value.entry[i]['im:image'][2].label +"'><br>");
     $(".221").append("<p>" + i + value.entry[i]['im:name'].label+ "</p>");
     $(".221").append( value.entry[i]['im:price'].label+"<br>" );
     $(".221").append( value.entry[i]['im:artist'].label+"<br>" );
     $(".221").append( value.entry[i]['id'].label+"<br>" );
     //$(".221").append( value.entry[i]['im:artist'].attributes.href  +"<br>");
     //$(".221").append( value.entry[i]['im:artist'].attributes.href  +"<br>");
   }
 });
});
})
