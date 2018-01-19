window.addEventListener('hashchange', function() {
	var links = document.links; //
	var hash = document.location.hash;
	lll = links;
	for (var i = 0; i < links.length; i++) {
		var href = links[i].getAttribute('href');
		// console.log(href, hash, links[i]);
		if (href == hash) links[i].setAttribute('hash', 'active');
		else links[i].setAttribute('hash', 'passive');
	}
});