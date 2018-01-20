HASHVIEW = () => {
    var hash = document.location.hash;
    if (hash[0] === '#') hash = hash.substr(1);
    if (hash[0] === '!') hash = hash.substr(1);

    document.querySelectorAll('[hash]').forEach((node) => {
        node.hidden = !new RegExp(node.getAttribute('hash')).test(hash);
    });
}
HASHVIEW();
window.addEventListener('hashchange', HASHVIEW);