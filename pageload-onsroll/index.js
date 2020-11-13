$(window).scroll(function () {
  if ($(window).scrollTop() == $(document).height() - $(window).height()) {
    AddMoreContent();
  }
});

function AddMoreContent () {
  $.post('getMoreContent.php', function (data) {
    // Assuming the returned data is pure HTML
    $(data).insertBefore($('#placeHolder'));
  });
}
