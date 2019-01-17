var container;
var bgExit;







init = function(){
    
    // assign All the elements to the element on the page
    container = document.getElementById('container');
    bgExit = document.getElementById('exit_btn');

    
    // show Ad
    container.style.display = "block";
    introAnim();
}


function enablerInitHandler() {
  init();
}



bindSlideClick = function () {

  $('#exit_btn').bind('click', function () {
    Enabler.exit('Background_Clickthrough');
  });

};


brushAnim = function() {

  var tl = new TimelineLite();

    //brush 1 appears
     tl.to('.brush1', 1.5, { scale: 0.8, rotation: -45, left: 40},);
     tl.to('.brush1', 1, { rotation: 0, transformOrigin: "right right", top: 200, scale: 1}, ), '+=1';
     
    //brush 2 appears
     tl.to('.brush2', 1, { opacity: 1},);
     tl.to('.brush2', 1.5, { scale: 0.8, rotation: -45, left: 120}, );
     tl.to('.brush2', 1, { rotation: 0, transformOrigin: "right right", top: 200, scale: 1}, ), '+=1';
     
     //brush 3 appears
     tl.to('.brush3', 1, { opacity: 1},);
     tl.to('.brush3', 1.5, { scale: 0.8, rotation: -45, left: 200}, );
     tl.to('.brush3', 1, { rotation: 0, transformOrigin: "right right", top: 200, scale: 1}, ) ;
     
     //brushes stagger out
     tl.to('.brush1', 1, { top: 300});
     tl.to('.brush2', 1, { top: 300});
     tl.to('.brush3', 1, { top: 300});

     //brushes disappear all together
     tl.to('.brush1, .brush2, .brush3', 1, { top: 300});


}

//time this according to the brush swipe
swatchRevealAnim = function(){
	var tl = new TimelineLite();
    tl.to('.swatch1-reveal', 1, {  delay: 1.8, top: 250});
    tl.to('.swatch2-reveal', 1, {  delay: 2.4, top: 250},);
    tl.to('.swatch3-reveal', 1, {  delay: 2.5, top: 250},);



}

swatchRevealAnim();
brushAnim();