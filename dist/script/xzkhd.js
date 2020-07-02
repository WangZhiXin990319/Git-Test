"use strict";

$(function () {
  $('.kkkkk').on('click', function () {
    var tc_tooltip = document.querySelector('.tc_tooltip');
    var val = tc_tooltip.style.display;

    if (val == 'none') {
      tc_tooltip.style.display = 'block'; //显示bai
    } else {
      tc_tooltip.style.display = 'none'; //隐藏du
    }
  });
});