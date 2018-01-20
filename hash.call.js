HASHCALL = (regex, callback) => {
    var check = () => {
        var hash = document.location.hash;
        if (hash[0] === '#') hash = hash.substr(1);
        if (hash[0] === '!') hash = hash.substr(1);
        let match = new RegExp(regex).exec(hash);
        if (match) callback.call(null, match.slice(1)) // call / apply
    }
    check();
    window.addEventListener('hashchange', () => check());
}