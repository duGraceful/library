// 插件是一个类
class CopyRightWebpackPlugin {
    // constructor() {
    //     console.log('CopyRightWebpackPlugin');
    // }
    // compiler  webapck的实例
    apply(compiler) {
        compiler.hooks.emit.tapAsync('CopyRightWebpackPlugin',(compilation, cb) => {
            compilation.assets['copyriught.txt'] = {
                source: function() {
                    return 'copy copy';
                },
                size: function() {
                    return 21;
                }
            }
            cb();
        })
    }
}

module.exports = CopyRightWebpackPlugin;