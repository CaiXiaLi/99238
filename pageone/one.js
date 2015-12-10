window.onload = function(){
	function tiems(){
		var tiems = setInterval(imgNode,3000);
	}

	function imgNode(){
		var node = $(".item.active");
		
		if (node.next().length !== 0) {
			node.next().addClass("active");
		}else{
			$(".img-list .item").eq(0).addClass("active");
		}
		node.removeClass("active");
	}

		$("#left").on("click", function(){
			clearInterval(tiems());
			window.setTimeout(handleImg(6), 3000);
		})

		$("#right").on("click", function(){
			clearInterval(tiems());
			window.setTimeout(handleImg(0), 3000);
		})
		
	function handleImg(val){
		
		var node = $(".item.active");
		var handleNode;

		if(val == 0) {
			handleNode = node.next(".item");
			}else{
				handleNode = node.prev(".item");
			}

		if(handleNode.length !== 0){
				handleNode.addClass("active");
			}else{
				$(".img-list .item").eq(val).addClass("active");
			}

		node.removeClass("active");
	}

		tiems();

	$("#controler").on("click",function(){
		var x = document.getElementById('media');
		 if($(this).hasClass("pause")) {
		 	x.pause();
		 	$(this).removeClass("pause").addClass("play");
		 	$(this).attr("src","./../image/music2.gif");
		 }else{
		 	x.play();
		 	$(this).removeClass("play").addClass("pause");
		 	$(this).attr("src","./../image/music.gif");
		 }	

		
	})

}