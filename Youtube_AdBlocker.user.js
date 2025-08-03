// ==UserScript==
// @name         Youtube Ad Blocker
// @description  Youtubeの広告を倍速再生する
// @author       ふぇあ
// @version      0.0.1
// @match        *://*/*
// @grant        none
// @inject-into  content
// ==/UserScript==

const url=window.location.href
if(url.match(/^(https?:\/\/)?(www\.|m\.)?(youtube|youtu|youtube-nocookie)\.(com|be)/)){
  const isAdPlaying=()=>{
    const adShowing=document.querySelector(".ad-showing");
    if(adshowing===null)return false;
    return true
  };
  if(isAdPlaying){alert("koukoku");}
}
