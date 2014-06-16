//var Person = require('../models/Person')
module.exports={
	create:function(req,res){

		Person.create({
			firstName:'zl',
			lastName:'jiang',
			age:27,
			birthDate:'1988/03/17',
			emailAddress:'jzl@outlook.com'
		});
        var str = '';
        for(var i  in Person){
            str+= i +Person[i]+'</br>';
        }
        res.send(str);
	}
}