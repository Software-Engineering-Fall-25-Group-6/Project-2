'use strict';

function MakeMultiFilter(originalArray){

    const arrayFilterer = function(filterCriteria, callback){
        if(arrayFilterer.currentArray === undefined){
            arrayFilterer.currentArray = originalArray;
        }
        if(filterCriteria === undefined){
            return arrayFilterer.currentArray;
        }

        if(typeof filterCriteria === "function"){
            arrayFilterer.currentArray = arrayFilterer.currentArray.filter(filterCriteria);
        }

        if(typeof callback === "function"){
            callback.call(originalArray, arrayFilterer.currentArray);
        }
        

        return arrayFilterer;
    }

    return arrayFilterer;
}