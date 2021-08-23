// ==UserScript==
// @name         수강신청도우미
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  F8 - 확인 F9 - 취소, 너무 빨리 누를 시 동작안할 수 있음. 사용시 모두 본인책임
// @author       0xc0de
// @match        https://sjpt.sejong.ac.kr/*
// @icon         https://www.google.com/s2/favicons?domain=ac.kr
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    document.onkeydown = function(e) {
        var btn_wrap = document.getElementsByClassName('w2popup_window')[0].getElementsByClassName('pop_btn_wrap')[0];
        btn_wrap.focus();
        if(e.which == 119){ // F8
            //확인
            btn_wrap.getElementsByClassName('btn_main')[0].click();
        } else if (e.which == 120) { // F9
            //취소
            if(!btn_wrap.getElementsByClassName('btn_def')[0]){ // 취소버튼이 없을경우 확인 누름
                btn_wrap.getElementsByClassName('btn_main')[0].click();
            } else {
                btn_wrap.getElementsByClassName('btn_def')[0].click();
            }
        }
    }
})();
