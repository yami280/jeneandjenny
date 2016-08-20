var main = function() {
  $('#fullpage').fullpage({
    anchors: ['home', 'intro', 'info'],
    menu: '#navbar'
  });
};

$(document).ready(main);
