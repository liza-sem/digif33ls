document.addEventListener("DOMContentLoaded", function () {
  var baseRadius = 320;
  var autoRotate = true;
  var rotateSpeed = -60;
  var baseImgWidth = 300;
  var baseImgHeight = 200;

  var radius = baseRadius;
  var imgWidth = baseImgWidth;
  var imgHeight = baseImgHeight;

  function updateDimensions() {
    if (window.innerWidth <= 575) {
      radius = baseRadius * 0.7;
      imgWidth = baseImgWidth * 0.7;
      imgHeight = baseImgHeight * 0.7;
    } else if (window.innerWidth <= 767) {
      radius = baseRadius * 0.8;
      imgWidth = baseImgWidth * 0.8;
      imgHeight = baseImgHeight * 0.8;
    } else {
      radius = baseRadius;
      imgWidth = baseImgWidth;
      imgHeight = baseImgHeight;
    }
  }

  updateDimensions();
  window.addEventListener('resize', function () {
    updateDimensions();
    init();
  });

  setTimeout(init, 1000);

  var odrag = document.querySelector('.fe-block-yui_3_17_2_1_1717071640427_17223 .summary-item-list-container');
  var ospin = document.querySelector('.fe-block-yui_3_17_2_1_1717071640427_17223 .summary-item-list');
  var aImg = ospin.querySelectorAll('.summary-item');

  var aEle = [...aImg];

  ospin.style.width = imgWidth + "px";
  ospin.style.height = imgHeight + "px";

  var ground = document.getElementById('ground');
  if (ground) {
    ground.style.width = radius * 3 + "px";
    ground.style.height = radius * 3 + "px";
  }

  for (var i = 0; i < aEle.length; i++) {
    aEle[i].style.opacity = "0";
  }

  function init() {
    ospin.style.width = imgWidth + "px";
    ospin.style.height = imgHeight + "px";

    if (ground) {
      ground.style.width = radius * 3 + "px";
      ground.style.height = radius * 3 + "px";
    }

    for (var i = 0; i < aEle.length; i++) {
      aEle[i].style.transform = "rotateY(" + (i * (360 / aEle.length)) + "deg) translateZ(" + radius + "px)";
      aEle[i].style.opacity = "1";
      aEle[i].style.transition = "all 1s";
    }
  }

  function applyTransform(obj) {
    if (tY > 180) tY = 180;
    if (tY < -180) tY = -180;
    obj.style.transform = "rotateX(" + (-tY) + "deg) rotateY(" + (tX) + "deg)";
  }

  function playSpin(yes) {
    ospin.style.animationPlayState = (yes ? 'running' : 'paused');
  }

  var sX, sY, nX, nY, desX = 0,
    desY = 0,
    tX = 0,
    tY = 20;

  if (autoRotate) {
    var animationName = (rotateSpeed > 0 ? 'spin' : 'spinRevert');
    ospin.style.animation = `${animationName} ${Math.abs(rotateSpeed)}s infinite linear`;
  }

  document.onpointerdown = function (e) {
    clearInterval(odrag.timer);
    e = e || window.event;
    sX = e.clientX;
    sY = e.clientY;

    document.onpointermove = function (e) {
      e = e || window.event;
      nX = e.clientX;
      nY = e.clientY;
      desX = nX - sX;
      desY = nY - sY;
      tX += desX * 0.1;
      tY += desY * 0.1;
      applyTransform(odrag);
      sX = nX;
      sY = nY;
    };

    document.onpointerup = function () {
      odrag.timer = setInterval(function () {
        desX *= 0.95;
        desY *= 0.95;
        tX += desX * 0.1;
        tY += desY * 0.1;
        applyTransform(odrag);
        playSpin(false);
        if (Math.abs(desX) < 0.5 && Math.abs(desY) < 0.5) {
          clearInterval(odrag.timer);
          playSpin(true);
        }
      }, 17);
      document.onpointermove = document.onpointerup = null;
    };

    return false;
  };

  const links = document.querySelectorAll('.summary-item');
  const headerTextElement = document.querySelector('.summary-header-text');
  const originalHeaderText = headerTextElement.textContent;

  links.forEach(link => {
    link.addEventListener('mouseover', () => {
      links.forEach(l => {
        if (l !== link) {
          l.classList.add('blur');
        }
      });

      const titleLink = link.querySelector('.summary-title-link');
      if (titleLink) {
        headerTextElement.textContent = titleLink.textContent;
      }
    });

    link.addEventListener('mouseout', () => {
      links.forEach(l => {
        l.classList.remove('blur');
      });
      headerTextElement.textContent = originalHeaderText;
    });
  });

  const thumbnailLinks = document.querySelectorAll('.summary-thumbnail-outer-container a');
  thumbnailLinks.forEach(link => {
    link.setAttribute('target', '_blank');
  });
});
