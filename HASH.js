HASH = (regex, callback) => {
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



// return new Promise((resolve, reject) => {
// });


// HASH = {
//     callbacks: {},

//     match: (regex, callback) => {
//         HASH.callbacks[regex] = callback;
//         HASH.check();
//     },

//     check: function() {
//         var hash = document.location.hash;
//         if (hash[0] === '#') hash = hash.substr(1);
//         if (hash[0] === '!') hash = hash.substr(1);

//         for (var key in HASH.callbacks) {
//             let match = new RegExp('^' + key + '$').exec(hash);
//             if (match) HASH.callbacks[key].apply(null, match.slice(1))
//         }
//     }
// }

// window.addEventListener('hashchange', HASH.match);