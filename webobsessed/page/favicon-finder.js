document.addEventListener('DOMContentLoaded', function() {
  function getFaviconUrl(url) {
    const urlObject = new URL(url);
    return `https://logo.clearbit.com/${urlObject.hostname}`;
  }
  const defaultImageUrl = 'https://images.squarespace-cdn.com/content/6516da875d4cda040bcc69c4/b6468189-f173-49b2-9a53-743d7d808b13/website+icon.png?content-type=image%2Fpng';
  const blogTitleLinks = document.querySelectorAll('.blog-title a');
  blogTitleLinks.forEach(link => {
    const href = link.href;
    const faviconUrl = getFaviconUrl(href);
    const faviconImg = document.createElement('img');
    faviconImg.src = faviconUrl;
    faviconImg.style.width = '16px';
    faviconImg.style.height = '16px';
    faviconImg.style.marginRight = '8px';
    faviconImg.onload = function() {
      if (faviconImg.naturalWidth === 0 || faviconImg.naturalHeight === 0) {
        faviconImg.src = defaultImageUrl;
      }
    };
    faviconImg.onerror = function() {
      faviconImg.src = defaultImageUrl;
    };
    link.parentElement.insertBefore(faviconImg, link);
  });
});
