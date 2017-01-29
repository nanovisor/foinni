;(function() {

  var worksItems = document.querySelector('.works__items');
  var btnLoad = document.querySelector('#btn-more-imgs');
  var template = '<div class="works__item"><a href="#" class="works__link"><img src="{URL}" alt="image from web" class="works__img" width="390" height="390"></a></div>';
  var imageUrl = 'http://lorempixel.com/390/390';

  btnLoad.addEventListener('click', function() {
    var html = '';

    html = template;
    html = html.replace(/{URL}/g, imageUrl);

    for (var i = 0; i < 3; i++) {

      setTimeout(function() {
        worksItems.insertAdjacentHTML('beforeend', html);
      }, i * 600);
      
    }

  });

})();
