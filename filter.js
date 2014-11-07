(function(){
	var doc= document;
		a = doc.getElementById('before'),
		b = doc.getElementById('after'),
		c = doc.getElementById('submit'),
		t = doc.getElementById('tag');
	c.onclick = function(){
		filter(a.value,t.value);
	}
	function filter(v,tag){
		var result,regular;
		regular = new RegExp(" " + tag + "=" + "((\"([^\"]+)\")|(\'([^\']+)\'))","gim");
		result = v.replace(regular,'');
		b.value = result;
	}

})()
