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
        var fp = path.join(this.storage,p+'.md');
        if( !fs.existsSync(fp) )
            fs.writeFileSync(fp, '');
        var file = fs.readFileSync(fp);
        return file.toString('utf8');
    };

    this.put_page_content = function (title, content) {
        var file = path.join(this.storage, title+'.md');
        fs.writeFile(file, content, (err) => {
            if (err) throw err;
            console.log(title+'.md\'s saved!');
        });
    };

    return this;
};
