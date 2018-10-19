const less = require('less');
const fs = require('fs');

less.render('.class { width: (1 + 1)px }', function(e, output) {
    // console.log(output);
    fs.writeFileSync('styles-gen-by-node-less.css', output.css.toString());
});