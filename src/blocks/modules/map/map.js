$(document).ready(function(){

  const getScreen = () => {
    let width = document.body.clientWidth;
    let screen; 
    if(width > 1219) screen = 'Desctop';
    if(width < 1220 && width > 767) screen = 'Tablet';  
    if(width < 768) screen = 'Mobile';
    return screen;
  }

  const getZoom = (screen) => {
    let center;
    switch(screen){
      case 'Desctop':
        zoom = 17;
        break;
      case 'Tablet':
        zoom = 16;
        break;
      case 'Mobile':
        zoom = 15;
        break;
      default:
        zoom = false;
        break;
    }
    return zoom;
  }

  const getSize = (screen) => {
    let size;
    switch(screen){
      case 'Desctop':
        size = [231, 190];
        break;
      case 'Tablet':
        size = [182, 150];
        break;
      case 'Mobile':
        size = [121, 100];
        break;
      default:
        size = false;
        break;
    }
    return size;
  }

  function init(){
    var myMap = new ymaps.Map("map-app", {
      center: [59.93923506417266,30.321517499999945],
      zoom: getZoom(getScreen()),
      controls: ['zoomControl']
    })

    var myPlacemark = new ymaps.Placemark([59.93977506417266,30.322599999999945], {
      hintContent: '191186, Санкт-Петербург, ул. Б. Конюшенная, д. 19/8',
    }, {
      iconLayout: 'default#image',
      iconImageHref: '/img/map-marker.png',
      iconImageSize: getSize(getScreen()),
      iconImageOffset: [0, 0]
    });

    myMap.geoObjects.add(myPlacemark);
  }
  ymaps.ready(init);
});
