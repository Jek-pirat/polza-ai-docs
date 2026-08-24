const documentationHomeUrl = 'https://polza.ai/docs';
const siteHomeUrl = 'https://polza.ai/';
const documentationLandingPaths = new Set(['/', '/docs', '/docs/']);

function updateLogoHomeLink() {
  const logoLink = document.querySelector('.nav-logo')?.closest('a');

  if (!logoLink) return;

  const destination = documentationLandingPaths.has(window.location.pathname)
    ? siteHomeUrl
    : documentationHomeUrl;

  if (logoLink.href !== destination) {
    logoLink.href = destination;
  }
}

updateLogoHomeLink();

new MutationObserver(updateLogoHomeLink).observe(document.body, {
  attributeFilter: ['href'],
  attributes: true,
  childList: true,
  subtree: true,
});
