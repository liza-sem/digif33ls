  document.addEventListener("DOMContentLoaded", function () {
  var baseRadius = 320;
  var autoRotate = true;
  var rotateSpeed = 7;
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
    } else if (window.innerWidth <= 967) {
      radius = baseRadius * 0.8;
      imgWidth = baseImgWidth * 0.8;
      imgHeight = baseImgHeight * 0.8;
    } else if (window.innerWidth <= 3000) {
      radius = baseRadius * 1.3;
      imgWidth = baseImgWidth * 1.1;
      imgHeight = baseImgHeight * 1.1;
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

  setTimeout(init, 1500);

  var ospindrag = document.querySelector('.fe-block-yui_3_17_2_1_1717071640427_17223 .summary-item-list');
  var aImg = ospindrag.querySelectorAll('.summary-item');

  var aEle = [...aImg];

  ospindrag.style.width = imgWidth + "px";
  ospindrag.style.height = imgHeight + "px";

  var ground = document.getElementById('ground');
  if (ground) {
    ground.style.width = radius * 3 + "px";
    ground.style.height = radius * 3 + "px";
  }

  for (var i = 0; i < aEle.length; i++) {
    aEle[i].style.opacity = "0";
  }

  function init() {
    ospindrag.style.width = imgWidth + "px";
    ospindrag.style.height = imgHeight + "px";

    if (ground) {
      ground.style.width = radius * 3 + "px";
      ground.style.height = radius * 3 + "px";
    }

    for (var i = 0; i < aEle.length; i++) {
      aEle[i].style.transform = "rotateY(" + (i * (360 / aEle.length)) + "deg) translateZ(" + radius + "px)";
      aEle[i].style.opacity = "1";
      aEle[i].style.transition = "all .6s";
    }
  }

  var currentRotateX = -5;  // Initial rotation
  var currentRotateY = 0;
  var dragging = false;
  var lastTime = 0;
  var inertiaX = 0;
  var inertiaY = 0;

  function applyTransform() {
    ospindrag.style.transform = `rotateX(${currentRotateX}deg) rotateY(${currentRotateY}deg)`;
  }

  function animate(time) {
    if (!dragging) {
      if (autoRotate) {
        var delta = time - lastTime;
        currentRotateY += (rotateSpeed / 1000) * delta;
      }
      currentRotateY += inertiaY * 0.1;
      currentRotateX -= inertiaX * 0.1;
      inertiaY *= 0.95;
      inertiaX *= 0.95;
      if (Math.abs(inertiaY) < 0.01) inertiaY = 0;
      if (Math.abs(inertiaX) < 0.01) inertiaX = 0;
    }
    applyTransform();
    lastTime = time;
    requestAnimationFrame(animate);
  }

  requestAnimationFrame(animate);

  var sX, sY, nX, nY, desX = 0,
    desY = 0;

  var dragArea = document.querySelector('section[data-section-id="66549d7eeeeaf012a576eb48"]');
  dragArea.onpointerdown = function (e) {
    dragging = true;
    e = e || window.event;
    sX = e.clientX;
    sY = e.clientY;
    inertiaX = inertiaY = 0;  // Reset inertia
    dragArea.style.cursor = `grabbing`;

    document.onpointermove = function (e) {
      e = e || window.event;
      nX = e.clientX;
      nY = e.clientY;
      desX = nX - sX;
      desY = nY - sY;
      currentRotateY += desX * 0.1;
      currentRotateX -= desY * 0.1;
      applyTransform();
      sX = nX;
      sY = nY;
    };

    document.onpointerup = function () {
      dragging = false;
      inertiaX = desY;  // Set inertia based on the last movement
      inertiaY = desX;
      document.onpointermove = document.onpointerup = null;
      dragArea.style.cursor = `grab`;
    };

    return false;
  };

  // Prevent scrolling on mobile while interacting with the section
  dragArea.addEventListener('touchstart', function (e) {
    e.preventDefault();
  }, { passive: false });

  dragArea.addEventListener('touchmove', function (e) {
    e.preventDefault();
  }, { passive: false });

  dragArea.addEventListener('touchend', function (e) {
    e.preventDefault();
  }, { passive: false });

  const links = document.querySelectorAll('.summary-item');
  const headerTextElement = document.querySelector('.summary-header-text');
  const originalHeaderText = headerTextElement.textContent;

  links.forEach(link => {
    const titleLink = link.querySelector('.summary-title-link');
    if (titleLink) {
      link.addEventListener('mouseenter', () => {
        headerTextElement.textContent = titleLink.textContent;
      });
      link.addEventListener('mouseleave', () => {
        headerTextElement.textContent = originalHeaderText;
      });
    }
  });

  const thumbnailLinks = document.querySelectorAll('.summary-thumbnail-outer-container a');
  thumbnailLinks.forEach(link => {
    link.setAttribute('target', '_blank');
  });
});
