/**
 * Created by zilong on 2014/6/16.
 */
var Paper = {
    //identity:'paper',
    attributes:{
        title:{
            type:'string',
            required:true
        },
        level:{
            type:'string',
            required:true,
            index:true
        }

    }
}
module.exports = Paper;