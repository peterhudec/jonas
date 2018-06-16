console.log('gallery')
$(document).ready(function () {
  console.log('ready')
  $('.lightbox').on('click', function (e) {
    e.preventDefault()
    console.log('onclick', $(this).data('video'))
    BigPicture({
      el: this,
      vimeoSrc: $(this).data('video'),
    })
  })
})