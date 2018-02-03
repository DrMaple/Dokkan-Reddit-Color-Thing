// ==UserScript==
// @name         Dokkan Reddit Color Thing
// @version      0.3
// @description  Fixes the Dokkan subreddit in nightmode with RES
// @author       DrMaple
// @match        https://www.reddit.com/r/DBZDokkanBattle/*
// @grant        none
// @updateURL https://raw.githubusercontent.com/DrMaple/Dokkan-Reddit-Color-Thing/master/Dokkan%20Reddit%20Color%20Thing.js
// @downloadURL https://raw.githubusercontent.com/DrMaple/Dokkan-Reddit-Color-Thing/master/Dokkan%20Reddit%20Color%20Thing.js
// ==/UserScript==

(function (window, undefined) {
    var css = [
        'a[href$="/str"] {',
		'	color: #F33 !important',
		'}',
		'a[href$="/agl"] {',
		'	color: #4747FF !important',
		'}',
		'a[href$="/teq"] {',
		'	color: #093 !important',
		'}',
		'a[href$="/phy"] {',
		'	color: #DAB539 !important',
		'}',
		'a[href$="/int"] {',
		'	color: #AC30D6 !important',
		'}',
		'a[href$="/ww"] {',
		'	color: #FFF !important',
		'}',
		'a[href$="/ext"] {',
		'	color: #000 !important',
		'}',
		'a[href$="/sup"] {',
		'	color: #FFF !important',
		'}',
		'.commentarea>.usertext {',
		'background: #161616 !important',
		'}',
		'.panestack-title {',
		'	background: #161616 !important',
		'}',
		'.side .titlebox .tagline {',
		'	background: #161616 !important',
		'}',
		'.flair, .linkflairlabel {',
		'	border-radius: 0px !important',
		'}',
		'.res-nightmode .wiki-page .wiki-page-content {',
		'	background-color: rgb(18, 18, 18)',
		'}',
		'.stickied.link {',
		'background: linear-gradient(to right,rgba(0,222,255,.5) 0,#000 126px)',
		'}',
		'table {',
		'background-color: black',
		'}',
		'.link.linkflair-gameplay, .link.linkflair-gameplayb, .link.linkflair-gameplayj {',
		'background: linear-gradient(to right,rgba(0,173,219,.5) 0,#161616 126px)',
		'}',
		'.link.linkflair-analysis, .link.linkflair-analysisb, .link.linkflair-analysisj {',
		'background: linear-gradient(to right,rgba(115,218,0,.5) 0,#161616 126px)',
		'}',
		'.link.linkflair-meta {',
		'background: linear-gradient(to right,rgba(138,138,138,.5) 0,#161616 126px)',
		'}',
		'.link.linkflair-guide, .link.linkflair-guideb, .link.linkflair-guidej {',
		'background: linear-gradient(to right,rgba(189,0,219,.5) 0,#161616 126px)',
		'}',
		'.res-nightmode .RES-keyNav-activeElement {',
		'background: rgb(0, 0, 0) !important',
		'}',
		'.link.linkflair-official, .link.linkflair-officialb, .link.linkflair-officialj {',
		'background: linear-gradient(to right,rgba(219,163,0,.5) 0,#000 126px)',
		'}',
		'.link.linkflair-technical {',
		'background: linear-gradient(to right,rgba(75,118,75,.5) 0,#000 126px)',
		'}',
		'.link.linkflair-fluff {',
		'background: linear-gradient(to right,rgba(219,0,116,.5) 0,#000 126px)',
		'}',
		'.commentarea .md blockquote, .usertext-body .md blockquote {',
		'background: #191919',
		'}'

    ].join('\n');
    addStyle(css);

    function addStyle(text) {
        var style = document.createElement('style');
        style.textContent = text;
        document.querySelector('head').appendChild(style);
    }
}) (window);