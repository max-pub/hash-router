HASHCALL = (regex, callback) => {
	var check = () => {
		let match = new RegExp(regex).exec(document.location.hash.substr(1));
		if (match) callback.apply(null, match.slice(1)) // call / apply
	}
	check();
	window.addEventListener('hashchange', () => check());
}

// var hash = document.location.hash;
// if (hash[0] === '#') hash = hash.substr(1);
// if (hash[0] === '!') hash = hash.substr(1);