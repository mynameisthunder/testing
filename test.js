
var loadButton = document.getElementById('load-more');
var feed = new Instafeed({
  // every time we load more, run this function
  after: function() {
    // disable button if no more results to load
    if (!this.hasNext()) {
      loadButton.setAttribute('disabled', 'disabled');
    }
  },
   get: 'tagged',
        tagName: 'cornell',
        clientId: 'ac7f40efe83d4eccb4f58cefb92e478d',
         template: '<a class="instalink" href="{{link}}"><div class="instablock"><div class="instaimage"><img src="{{image}}" /></div> <div class="instacaption">{{caption}}</div> </div></a>'
});
// bind the load more button
loadButton.addEventListener('click', function() {
  feed.next();
  $( "#instafeed2" ).fadeOut();
    $( "#instafeed2" ).fadeIn();
});

// run our feed!
feed.run();
var list=[];
var nlist=[];
setTimeout(function(){
list = document.getElementsByClassName("instalink");
 
console.log(list);

console.log("here");
for ( var x = 0;x< list.length;x++){

 
  console.log("list hre", list[x].href);
   nlist[x]  = ""+list[x].href;
}


$('#header2').instaheader({
  auto: true,
  imgs:nlist,
  urls:nlist,
  selector:'img',
  time:1500,
  scan:false,
  animation_time:500,
  animationType:'fadeInOut'
})


}, 1000);

