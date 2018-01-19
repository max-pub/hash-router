HASH = {
    callbacks: {},

    register: (regex, callback) => {
        HASH.callbacks[regex] = callback;
        HASH.match();
    },

    match: function() {
        var hash = document.location.hash;
        if (hash[0] === '#') hash = hash.substr(1);
        if (hash[0] === '!') hash = hash.substr(1);

        for (var key in HASH.callbacks) {
            var regex = new RegExp('^' + key + '$');
            var match = hash.match(regex);
            if (match)
                console.log('HASH-ROUTE match:', hash, regex);
            if (match)
                HASH.callbacks[key].apply(null, match.slice(1))
        }
    }
}

window.addEventListener('hashchange', HASH.match);