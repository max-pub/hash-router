window.customElements.define('hash-view', class extends HTMLElement {
	connectedCallback() {
		window.addEventListener('hashchange', this.checkHash.bind(this));
	}
	static get observedAttributes() {
		return ['match'];
	}
	attributeChangedCallback(attr, oldVal, newVal) {
		if (attr == 'match') this.checkHash();
	}
	checkHash() {
		let match = new RegExp(this.getAttribute('match')).exec(document.location.hash.substr(1));
		this.hidden = match ? false : true;
		if (match)
			if (this.hasAttribute('call'))
				eval(this.getAttribute('call'));
	}
});