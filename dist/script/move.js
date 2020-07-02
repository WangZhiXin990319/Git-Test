"use strict";

var ul = document.querySelector('.ul1'),
    ol = document.querySelector('.ol1'),
    Carousel = setInterval(right, 4500),
    box = document.querySelector('.ban_img');

box.onmouseover = function () {
  clearInterval(Carousel);
};

box.onmouseout = function () {
  Carousel = setInterval(right, 4500);
};

for (var i = 0; i < ul.children.length; i++) {
  var li = document.createElement('li');
  ol.appendChild(li);
}

ol.style.width = ol.children[0].offsetWidth * ol.children.length * 2 + 'px';
var lifirst = ul.children[0].cloneNode(true),
    lilast = ul.children[ul.children.length - 1].cloneNode(true);
ul.insertBefore(lilast, ul.children[0]);
ul.appendChild(lifirst);
ul.style.width = ul.children[0].offsetWidth * ul.children.length + 'px';
ul.style.position = 'absolute';
ul.style.left = -ul.children[0].offsetWidth + 'px';
ol.children[0].className = 'active';
var num = 1,
    flag = true,
    lbtn = document.querySelector('.leftBtn'),
    rbtn = document.querySelector('.rightBtn');
rbtn.onclick = right;
lbtn.onclick = left;

function right() {
  if (flag == true) {
    num++;
    flag = false;
  } else {
    return;
  }

  move(ul, {
    left: -num * ul.children[0].offsetWidth
  }, function () {
    if (num == ul.children.length - 1) {
      num = 1;
      ul.style.left = -num * ul.children[0].offsetWidth + 'px';
    }

    cutover();
    flag = true;
  });
}

function left() {
  if (flag == true) {
    num--;
    flag = false;
  } else {
    return;
  }

  move(ul, {
    left: -num * ul.children[0].offsetWidth
  }, function () {
    if (num == 0) {
      num = ul.children.length - 2;
      ul.style.left = -num * ul.children[0].offsetWidth + 'px';
    }

    cutover();
    flag = true;
  });
}

function cutover() {
  for (var _i = 0; _i < ol.children.length; _i++) {
    ol.children[_i].className = '';
  }

  ol.children[num - 1].className = 'active';
}

var _loop = function _loop(_i2) {
  ol.children[_i2].onclick = function () {
    if (flag == true) {
      num = _i2 + 1;
      flag = false;
    } else {
      return;
    }

    move(ul, {
      left: -num * ul.children[0].offsetWidth
    }, function () {
      if (num == 0) {
        num = ul.children.length - 2;
        ul.style.left = -num * ul.children[0].offsetWidth + 'px';
      }

      cutover();
      flag = true;
    });
  };
};

for (var _i2 = 0; _i2 < ol.children.length; _i2++) {
  _loop(_i2);
}

function move(ele, obj, fn) {
  var _loop2 = function _loop2(motion) {
    var timerobj = {};
    timerobj[motion] = setInterval(function () {
      var end = obj[motion];

      if (motion == 'opacity') {
        var i = getComputedStyle(ele)[motion];
        var i = i * 100;
        var end = end * 100;
      } else {
        var i = parseInt(getComputedStyle(ele)[motion]);
      }

      var speed = Math.ceil(Math.abs((end - i) / 10));

      if (i > end) {
        i -= speed;
      } else {
        i += speed;
      }

      if (i == end) {
        clearInterval(timerobj[motion]);
        delete obj[motion];
        var m = 0;

        for (var j in obj) {
          m++;
        }

        if (m == 0) {
          fn();
        }
      } else if (motion == 'opacity') {
        ele.style[motion] = i / 100;
      } else {
        ele.style[motion] = i + 'px';
      }
    }, 20);
  };

  for (var motion in obj) {
    _loop2(motion);
  }
}