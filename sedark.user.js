// ==UserScript==
// @name         SEDARK
// @namespace    zachary@techyteen.tk
// @version      0.4.2b
// @description  Dark theme for Stack Exchange
// @author       Zachary Wander

// @include      *://askubuntu.com/*
// @include      *://meta.askubuntu.com/*
// @include      *://stackoverflow.com/*
// @include      *://meta.stackoverflow.com/*
// @include      *://serverfault.ccom/*
// @include      *://meta.serverfault.com/*
// @include      *://superuser.com/*
// @include      *://meta.superuser.com/*
// @include      *://math.stackexchange.com/*
// @include      *://meta.math.stackexchange.com/*
// @include      *://photo.stackexchange.com/*
// @include      *://meta.photo.stackexchange.com/*
// @include      *://tex.stackexchange.com/*
// @include      *://meta.text.stackexchange.com/*
// @include      *://unix.stackexchange.com/*
// @include      *://meta.unix.stackexchange.com/*
// @include      *://apple.stackexchange.com/*
// @include      *://meta.apple.stackexchange.com/*
// @include      *://judaism.stackexchange.com/*
// @include      *://meta.judaism.stackexchange.com/*
// @include      *://meta.stackexchange.com/*
// @include      *://chat.stackexchange.com/*
// @include      *://chat.stackoverflow.com/*

// @grant        none
// ==/UserScript==

/*global document*/

const str = window.location.href;

const spl = str.split("/");

const sites = [
    'askubuntu.com',
    'meta.askubuntu.com',
    'stackoverflow.com',
    'meta.stackoverflow.com',
    'serverfault.com',
    'meta.serverfault.com',
    'superuser.com',
    'meta.superuser.com',
    'math.stackexchange.com',
    'meta.math.stackexchange.com',
    'photo.stackexchange.com',
    'meta.photo.stackexchange.com',
    'tex.stackexchange.com',
    'meta.tex.stackexchange.com',
    'unix.stackexchange.com',
    'meta.unix.stackexchange.com',
    'apple.stackexchange.com',
    'meta.apple.stackexchange.com',
    'judaism.stackexchange.com',
    'meta.judaism.stackexchange.com',
    'meta.stackexchange.com'
];

function createLink(href) {
    const link = document.createElement('link');
    link.href = href;
    link.rel = 'stylesheet';
    link.type = 'text/css';
  	link.class = '--apng-checked';
  	return link;
}

function appendLink(link) {
  document.getElementsByTagName('head')[0].appendChild(link);
}

if (sites.includes(spl[2])) {
    (function() {
      appendLink(createLink('https://raw.githubusercontent.com/sarxos/se-dark/master/audark.css'));
    })();
} else if (spl[2] === "chat.stackexchange.com" || spl[2] === "chat.stackoverflow.com") {
    (function() {
    	appendLink(createLink('https://raw.githubusercontent.com/sarxos/se-dark/master/sechatdark.css'));
    })();
}

$()
