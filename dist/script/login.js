"use strict";

$(function () {
  // // 进入页面加载数据
  // var name = document.querySelector('.name').value;
  // var pass = document.querySelector('.pass').value;
  $.ajax({
    url: '../json/login.json',
    type: 'get',
    data: 'type=3',
    dataType: 'json',
    success: function success(json) {
      $.each(json, function (index, item) {
        $('.dl2').on('click', function () {
          var name = document.querySelector('.name1').value;
          var pass = document.querySelector('.pass1').value;

          if (name == item.name & pass == item.pass) {
            fn1();
            console.log(name);
            console.log(pass);
          } else {
            console.log(name);
            console.log(pass);
            console.log("账号或者密码错误");
          }

          function fn1() {
            self.location = '../html/index.html';
          }
        });
      });
      $('.zz2').on('click', function () {
        // console.log($('.pass2').val()==$('.pass3').val());
        // console.log($('.pass2').val());
        // console.log($('.name2').val());
        if (!$('.name2').val() || !$('.pass2').val()) {
          console.log("账号或密码为空");
        } else if ($('.pass2').val() == $('.pass3').val()) {
          var arr = {
            "name": $('.name2').val(),
            "pass": $('.pass2').val()
          };
          json.push(arr);
          console.log(json);
          $('.m_aaa').addClass('n_bl');
          $('.m_aaa').removeClass('n_no');
          $('.m_bbb').removeClass('n_bl');
          $('.m_bbb').addClass('n_no');
        } else {
          console.log('两次密码不一样');
        }
      });
    }
  });
  $('.zz1').on('click', function () {
    $('.m_aaa').addClass('n_no');
    $('.m_aaa').removeClass('n_bl');
    $('.m_bbb').removeClass('n_no');
    $('.m_bbb').addClass('n_bl');
  });
});