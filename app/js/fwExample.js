var handler = function(str){
    log('<h2>published via Handler</h2>' + str);
};

var handler2 = function(str){
    log('<h2>published via Handler2</h2>' + str);
};
var handler3 = function(str){
    log('<h2>published via Handler3</h2>' + str);
};

fw.subscribe('myCustomEvent',handler2);
fw.subscribe('myCustomEvent',handler);
fw.subscribe('myCustomEvent',handler3);


fw('.subber').addListener('click',function(e){
    fw.publish('myCustomEvent');
});



fw.jsonp({
    url: "http://api.flickr.com/services/feeds/photos_public.gne?tags=endine&format=json",
    callback: "jsoncallback",
    success: function(json){
        var imgarr = json.items,
            i = imgarr.length,
            cont = fw('body').createChild('article').addClass('flickrCont');
        while(i--){
            var item = imgarr[i],
                img = cont.createChild('img');
            img.setAttribute('src',item.media.m);
        }
    }
});