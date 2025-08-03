// ==UserScript==
// @name         Youtube Ad Blocker
// @description  Youtubeの広告を倍速再生する
// @author       ふぇあ
// @version      0.0.1
// @match        *://www.youtube.com/*
// @grant        none
// @inject-into  content
// ==/UserScript==

const video=document.querySelector("video");
function isAdPlaying(){
 return document.querySelector(".ad-showing");
}
if(isAdPlaying){
  alert("広告が検出されました");
}
