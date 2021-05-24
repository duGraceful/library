const loaderUtils = require('loader-utils');

module.exports = function(source) {
    const options = loaderUtils.getOptions(this)
    const callback = this.async();
    // 异步loader
    setTimeout(() => {
        // 异步使用callback
        const result = source.replace('dell', options.name)
        callback(null, result);
    }, 1000);
}