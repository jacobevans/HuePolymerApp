
(function() {

  'use strict';

  var HIGHLIGHT_EVENT = 'syntax-highlight';

  Polymer({

    is: 'prism-highlighter',

    ready: function() {
      this._handler = this._highlight.bind(this);
    },

    attached: function() {
      (this.parentElement || this.parentNode.host).addEventListener(HIGHLIGHT_EVENT, this._handler);
    },

    detached: function() {
      (this.parentElement || this.parentNode.host).removeEventListener(HIGHLIGHT_EVENT, this._handler);
    },

    /**
     * Handle the highlighting event, if we can.
     *
     * @param {!CustomEvent} event
     */
    _highlight: function(event) {
      if (!event.detail || !event.detail.code) {
        console.warn('Malformed', HIGHLIGHT_EVENT, 'event:', event.detail);
        return;
      }

      var detail = event.detail;
      detail.code = Prism.highlight(detail.code, this._detectLang(detail.code, detail.lang));
    },

    /**
     * Picks a Prism formatter based on the `lang` hint and `code`.
     *
     * @param {string} code The source being highlighted.
     * @param {string=} lang A language hint (e.g. ````LANG`).
     * @return {!prism.Lang}
     */
    _detectLang: function(code, lang) {
      if (!lang) {
        // Stupid simple detection if we have no lang, courtesy of:
        // https://github.com/robdodson/mark-down/blob/ac2eaa/mark-down.html#L93-101
        return code.match(/^\s*</) ? Prism.languages.markup : Prism.languages.javascript;
      }

      if (lang === 'js' || lang.substr(0, 2) === 'es') {
        return Prism.languages.javascript;
      } else if (lang === 'css') {
        return Prism.languages.css;
      } else if (lang === 'c') {
        return Prism.langauges.clike;
      } else {
        // The assumption is that you're mostly documenting HTML when in HTML.
        return Prism.languages.markup;
      }
    },

  });

})();
