const poweredByMintlifySelector =
  'a[href*="mintlify.com"][href*="utm_campaign=poweredBy"]';
const sponsoredRelations = ['nofollow', 'sponsored'];

function markPoweredByMintlifyLink() {
  document.querySelectorAll(poweredByMintlifySelector).forEach((link) => {
    const missingRelations = sponsoredRelations.filter(
      (relation) => !link.relList.contains(relation),
    );

    if (missingRelations.length > 0) {
      link.relList.add(...missingRelations);
    }
  });
}

markPoweredByMintlifyLink();

new MutationObserver(markPoweredByMintlifyLink).observe(document.body, {
  attributeFilter: ['href', 'rel'],
  attributes: true,
  childList: true,
  subtree: true,
});
