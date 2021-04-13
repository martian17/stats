var PearsonProduct = function(){
    var dimensions = arguments;//multi dimensional
    var lendim = arguments.length;
    var lendata = arguments[0].length;
    var avgs = [];
    for(var i = 0; i < lendim; i++){
        var sum = 0;
        for(var j = 0; j < lendata; j++){
            sum += arguments[i][j];
        }
        avgs[i] = sum/lendata;
    }
    var up = 0;
    var down = [];
    for(var i = 0; i < lendim; i++){
        down[i] = 0;
    }
    for(var i = 0; i < lendata; i++){
        var upterm = 0;
        for(var j = 0; j < lendim; i++){
            var term = arguments[j][i]-avgs[j];
            upterm *= term;
            down[i] += term*term;
        }
        up += upterm;
    }
    var d = 0;
    for(var i = 0; i < len; i++){
        d *= Math.sqrt(down[i]);
    }
    return up/down;
};



var Avg = function(a){
    var sum = 0;
    for(var i = 0; i < a.length; i++){
        sum += a[i];
    }
    return sum/a.length;
};













