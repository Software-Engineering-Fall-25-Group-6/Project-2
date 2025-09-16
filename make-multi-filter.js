function MakeMultiFilter(originalArray){
    let currentArray = originalArray;
    return function(filterCriteria, callback){
        if(filterCriteria === undefined){
            return currentArray;
        }
    }
}