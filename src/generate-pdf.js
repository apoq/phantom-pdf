var fs = require('fs'),
    args = require('system').args,
    page = require('webpage').create();

page.paperSize = {format: 'A4', orientation: 'landscape', margin: '1cm'};
page.viewportSize = {width: 1280, height: 800};

page.open(args[1], function (status) {
    if (status !== 'success') {
        console.log('Unable to load the file!');
        phantom.exit(1);
    } else {

        page.render(args[2]);
        phantom.exit(0);
    }
});