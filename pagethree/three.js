
window.onload = function(){
	function tiems(){
		var tiems = setInterval(imgNode,3000);
	}

	function imgNode(){
		var node = $(".image.active");
		
		if (node.next().length !== 0) {
			node.next().addClass("active");
		}else{
			$(".image").eq(0).addClass("active");
		}
		node.removeClass("active");
	}

		
	

		tiems();

	
}