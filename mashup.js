var tagname = 'craigscustomcornholes';

$.ajax({
        url: 'https://api.instagram.com/v1/tags/'+tagname+'/media/recent?client_id=c1108290c34240808da4c980016c49e1',
        dataType: 'jsonp',
        success: function(result){
          for (var i = 0; i < 5; i++){
            var url = result.data[i].images.thumbnail.url;
            $('body').append('<img src="' + url + '"/>');
          }
        }
      });

//INSTAGRAM CLIENT REGISTRATION
//Mashup Project
//CLIENT INFO
// CLIENT ID	c1108290c34240808da4c980016c49e1
// CLIENT SECRET	2d287b8a9ec148afb78395b15ff08bcf
// WEBSITE URL	http://oit2.scps.nyu.edu/~stollk/
// REDIRECT URI	http://oit2.scps.nyu.edu/~stollk/
// SUPPORT EMAIL	katelynistoll@gmail.com
// Final Project for NYU Advanced JavaScript Class