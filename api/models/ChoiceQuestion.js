/**
 * Created by zilong on 2014/6/16.
 */
var ChoiceQuestion = {
    //identity:'choiceQuestion',
    attributes:{
        content:'text',
        choices:"array",
        ans:'string',
        type:'string',
        from:'string',
        categories:'string',
        analyse:'text',
        paperId:{
            type:'integer',
            defaultsTo:0
        }
    }
}
module.exports = ChoiceQuestion;

