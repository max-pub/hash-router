HASHVIEW = () => {
	var hash = document.location.hash;
	if (hash[0] === '#') hash = hash.substr(1);
	if (hash[0] === '!') hash = hash.substr(1);

	document.querySelectorAll('[hash]').forEach((node) => {
		let match = new RegExp(node.getAttribute('hash')).exec(hash);
		node.hidden = match ? false : true;
		if (match)
			if (node.hasAttribute('hashcall'))
				eval(node.getAttribute('hashcall'));
		// node.hidden = !new RegExp(node.getAttribute('hash')).test(hash);
	});
}
HASHVIEW();
window.addEventListener('hashchange', HASHVIEW);