module.exports = function makeTable(other_table){

    var table = {};

    if(other_table){
        var key;
        for(key in other_table){
            if(other_table.hasOwnProperty(key)){
                table[key] = other_table[key];
            }
        }
    }

    return {
        set: function(symbol, value){
            return table[symbol] = value;
        },
        get: function(symbol){
            return table[symbol];
        },
        has: function(symbol){
            return table.hasOwnProperty(symbol);
        },
        unset: function(symbol){
            delete table[symbol];
        },
        push: function(){
            return makeTable(table);
        },
    };
};
