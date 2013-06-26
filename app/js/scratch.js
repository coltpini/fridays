var log = function(s){
    var logger = fw('#logger');
    logger.innerHTML = logger.innerHTML + s + '<br />';
};

var o = function(){};
o.prototype.init = function(options){
    var opts = options || {};
    this.options = {
        s : opts.s || "empty",
        b : opts.b || false,
        i : opts.i || 0
    };
};

o.prototype.stringer = function(){
    log(this.options.s);
};
o.prototype.booler = function(){
    log(this.options.b);
};
o.prototype.inter = function(){
    log(this.options.i);
};

var oops = new o();
oops.init();
oops.stringer();
oops.booler();
oops.inter();

var newO = function(){};
newO.prototype = new o();
newO.prototype.inter = function(i){
    log(this.options.i + i);
};


var ohps = new newO();
ohps.init({s: "the new string",b:true,i:12});
ohps.stringer();
ohps.booler();
ohps.inter(4);