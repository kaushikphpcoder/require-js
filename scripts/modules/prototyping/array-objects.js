var testClass=function(){ 
	var name, roll, place;
	this.roll='Demon Name'; 
	this.getResult=function(){	
		return this.roll;  
	}
}

var objs=new testClass();
console.log(objs); 
//alert('array-objs');