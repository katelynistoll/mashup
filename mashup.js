function instaSearch(button) {

  var searchForm = button.parentElement;
  var tagname = searchForm.querySelector('input[type="text"]').value;
  var currentDiv = button.parentElement.parentElement;

  $.ajax({
    url: 'https://api.instagram.com/v1/tags/'+tagname+'/media/recent?client_id=c1108290c34240808da4c980016c49e1&callback=YOUR-CALLBACK',
    dataType: 'jsonp',
    success: function(result){
      for (var i = 0; i < 1; i++){
        var url = result.data[i].images.thumbnail.url;
        var instapic = '<img src="' + url + '"/>';

        $(currentDiv).append(instapic);

      }
    }
  });
}


//INSTAGRAM CLIENT REGISTRATION
//Mashup Project
//CLIENT INFO
// CLIENT ID	c1108290c34240808da4c980016c49e1
// CLIENT SECRET	2d287b8a9ec148afb78395b15ff08bcf
// WEBSITE URL	http://oit2.scps.nyu.edu/~stollk/
// REDIRECT URI	http://oit2.scps.nyu.edu/~stollk/
// SUPPORT EMAIL	katelynistoll@gmail.com
// Final Project for NYU Advanced JavaScript Class


//MY NOTES - 
//got stuck trying to dynamically add event handler to elements
//could not pass in 'this' parameter (?)
// var submitForm = document.getElementsByClassName("submitForm"); //WORKED
// // submitForm.onclick = instaSearch; //DID NOT WORK
// // submitForm.onclick = instaSearch.this; //DID NOT WORK
// $(submitForm).on("click", instaSearch(this)); //DID NOT WORK