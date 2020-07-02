"use strict";

$(function () {
  // 进入页面加载数据
  $.ajax({
    url: '../json/list.json',
    type: 'get',
    data: 'type=3',
    dataType: 'json',
    success: function success(json) {
      $.each(json, function (index, item) {
        var goodsDom = '<tr>' + '<td class="left">' + '<div class="hd">' + '<span class="ply"></span>' + '<span class="num">' + item.num + '</span>' + '</div>' + '</td>' + '<td class="">' + '<div class="tt">' + '<div class="ttc">' + '<span class="txt">' + '<a href="#">' + item.txt + '</a>' + '</span>' + '</div>' + '</div>' + '</td>' + '<td>' + '<span class="u_dur">' + item.u_dur + '</span>' + '<div class="opt" style="display: none">' + '<a href="#" class="u_icn" title="添加到播放列表"></a>' + '<span class="icn icn_fav" title="收藏"></span>' + '<span class="icn icn_share" title="分享"></span>' + '<span class="icn icn_dl" title="下载"></span>' + '<span class="icn icn_del" title="删除"></span>' + '</div>' + '</td>' + '<td class="">' + '<div class="text" title="' + item.singer + '">' + '<span title="' + item.singer + '">' + '<a href="#">' + item.singer + '</a>' + '</span>' + '</div>' + '</td>' + '<td class="">' + '<div class="text" title="' + item.name + '">' + '<span title="' + item.name + '">' + '<a href="#">' + item.name + '</a>' + '</span>' + '</div>' + '</td>' + '</tr>';
        $('.tb111').append(goodsDom);
      });
    }
  });
});