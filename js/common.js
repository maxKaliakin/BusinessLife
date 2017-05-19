(function() {
    var i = 0;
    var src = [
        'http://s018.radikal.ru/i516/1705/88/a14e36744634.jpg',
        'http://s015.radikal.ru/i331/1705/35/12ad3114de13.jpg',
        'http://s011.radikal.ru/i318/1705/ce/73f599dec736.jpg',
        'http://s018.radikal.ru/i520/1705/66/bf3ce73de517.jpg',
        'http://s010.radikal.ru/i312/1705/c1/edaf114e8354.jpg'
    ];
    var l = src.length;
    var t;
    
    for(i = 0; i < l; i++) {
        var img = new Image();
        img.src = src[i];
        img.onload = function() {
            delete this;
        }
    }
    
    i = 0;
    t = setInterval(function() {
        if(i === l){
            i = 0;
        }
        document.body.style.background = 'url(' + src[i] + ') right top no-repeat';
        document.body.style.backgroundSize = '75%';
        i++;
    }, 5000);
})();

$('document').ready(function(){
    $('#modal').modal();
});