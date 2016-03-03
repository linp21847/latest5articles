(function(window, jQuery){

	function makeArticle(title, linkPath, imgPath) {
		var $wrapper = $("<div class='row'></div>");
		$wrapper.append("<div class='title-box'><a href='" + linkPath + "'>" + title + "</a></div>");
		$wrapper.append("<div class='img-box'><img src='" + imgPath + "' /></div>");
		return $wrapper;
	}
	$(function(){
		$(document).ready(function() {
			$.ajax({
				type: "GET",
				url:  "http://hackersnewsbulletin.com/extensionApi.php",
				dataType: "json"
			}).success(function(response) {
				$("#main").append(makeArticle(response["link1"]["title"], response["link1"]["url"], response["link1"]["thumb"]));
				$("#main").append(makeArticle(response["link2"]["title"], response["link2"]["url"], response["link2"]["thumb"]));
				$("#main").append(makeArticle(response["link3"]["title"], response["link3"]["url"], response["link3"]["thumb"]));
				$("#main").append(makeArticle(response["link4"]["title"], response["link4"]["url"], response["link4"]["thumb"]));
				$("#main").append(makeArticle(response["link5"]["title"], response["link5"]["url"], response["link5"]["thumb"]));
			});

			setTimeout(function(){
		 		$(".title-box a").click(function(){
					console.log('here');
		            var action_url = $(this).attr("href");
		            chrome.tabs.create({ url: action_url });
		        })}, 200);

		});
	});

})(window, $);