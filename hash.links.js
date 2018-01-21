HASHLINKS = () => {
	var links = document.links;
	var hash = document.location.hash;
	for (var i = 0; i < links.length; i++) {
		var href = links[i].getAttribute('href');
		if (hash.startsWith(href)) links[i].classList.add('activeHash');
		else links[i].classList.remove('activeHash');
	}
}
HASHLINKS();
window.addEventListener('hashchange', HASHLINKS);