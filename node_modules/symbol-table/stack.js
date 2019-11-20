var SymbolTable = require("./");


module.exports = function(){

    var symt_stack = [SymbolTable()];

    return {
        set: function(symbol, value){
            return symt_stack[0].set(symbol, {
                value: value,
                height: symt_stack.length,
            }).value;
        },
        get: function(symbol){
            var v = symt_stack[0].get(symbol);
            return v
                ? v.value
                : void 0;
        },
        has: function(symbol){
            return symt_stack[0].has(symbol);
        },
        unset: function(symbol){
            return symt_stack[0].unset(symbol);
        },
        push: function(){
            var table = symt_stack[0].push();
            symt_stack.unshift(table);
            return table;
        },
        pop: function(){
            return symt_stack.shift();
        },
        height: function(){
            return symt_stack.length;
        },
        getItsHeight: function(symbol){
            var v = symt_stack[0].get(symbol);
            return v
                ? v.height
                : void 0;
        },
    };
};
