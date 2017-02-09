var path = require('path');
var fs = require('fs');

module.exports = function() {
    this.storage = path.join(__dirname,'../storage');

    this.get_page_list = function () {
        var files = fs.readdirSync(this.storage);
        var pages = [];
        files.forEach(function(element) {
            var t = element.match(/^(.*)\.md$/);
            if( t != null )
                pages.push(t[1]);
        }, this);
        return pages;
    }

    this.get_page_content = function (p) {
        var file = fs.readFileSync(path.join(this.storage,p+'.md'));
        return file.toString('utf8');
    };

    return this;
};
