document.addEventListener('DOMContentLoaded', function() {
  const sponsoredAdHTML = `<article class="blog-basic-grid--container entry blog-item custom-filter-grid-item tag category category style features platform font resource-type tool-type element-showed is-loaded sponsored-ad" data-index="" data-publish-on=null data-categories_sort="null" style="transition: all 0.3s ease-in-out;" data-show="true" data-loaded="true">
    <a href="https://squarespace.com" target="_blank">
      <div>
        <span class="image-wrapper preFade fadeIn" data-animation-role="image" style="transition-timing-function: ease; transition-duration: 0.4s; transition-delay: 0.171429s;">
          <img data-src="https://images.squarespace-cdn.com/content/v1/6516da875d4cda040bcc69c4/f80d0e15-c6f2-4521-a10e-2833134b1ebb/Rutgers+Practicum%2C+Spring+2022.jpeg?format=2500w" data-image-focal-point="0.5,0.5" alt="sqaurespace" data-load="false" src="https://images.squarespace-cdn.com/content/v1/6516da875d4cda040bcc69c4/f80d0e15-c6f2-4521-a10e-2833134b1ebb/Rutgers+Practicum%2C+Spring+2022.jpeg?format=2500w" class="image loaded" style="display: block; position: absolute; height: 100%; width: 100%; object-fit: cover; object-position: 50% 50%; opacity: 1;" loading="lazy" decoding="async" data-loader="sqs">
        </span>
      </div>
      <div class="blog-article-spacer"></div>
      <div class="blog-basic-grid--text">
        <h1 class="blog-title blog-sponsor-title cf-img-parent img-lazy-loading-used preFade fadeIn" style="transition-timing-function: ease; transition-duration: 0.4s; transition-delay: 0.17619s;"><span data-no-animation=""> Squarespace </span>
        </h1>
      </div>
      <div class="sponsored-tag">Sponsored
  </div>
    </a>
  </article>`;
  let adElement = null;

  function insertOrRepositionAd() {
    const targetSection = document.querySelector('section .content .collection-content-wrapper');
    
    if (targetSection) {
      if (!adElement) {
        adElement = document.createElement('div');
        adElement.innerHTML = sponsoredAdHTML;
        adElement = adElement.firstChild;
        targetSection.appendChild(adElement);
      }
      const children = Array.from(targetSection.children).filter(child => !child.classList.contains('sponsored-ad'));
      if (children.length >= 4) {
        targetSection.insertBefore(adElement, children[4]);
      } else {
        targetSection.appendChild(adElement);
      }
    }
  }

  function handleContentChange() {
    // Use requestAnimationFrame to wait for the next paint
    requestAnimationFrame(() => {
      // Then use setTimeout to delay the insertion slightly
      setTimeout(insertOrRepositionAd, 500);
    });
  }

  // Initial insertion
  insertOrRepositionAd();

  // Add click event listeners for pagination and archive links
  document.addEventListener('click', function(event) {
    const clickedElement = event.target.closest('.pagination-item, .archive-group a');
    if (clickedElement) {
      handleContentChange();
    }
  });

  // Set up a MutationObserver to watch for content changes
  const targetNode = document.querySelector('section .content .collection-content-wrapper');
  
  if (targetNode) {
    const config = { childList: true, subtree: true, attributes: true, attributeFilter: ['data-loaded'] };
    const callback = function(mutationsList, observer) {
      for(let mutation of mutationsList) {
        if (
          (mutation.type === 'childList' && (mutation.addedNodes.length > 1 || mutation.removedNodes.length > 1)) ||
          (mutation.type === 'attributes' && mutation.attributeName === 'data-loaded')
        ) {
          handleContentChange();
          break;
        }
      }
    };
    const observer = new MutationObserver(callback);
    observer.observe(targetNode, config);
  }
});

