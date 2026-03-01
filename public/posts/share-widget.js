(function () {
  function createShareWidget() {
    var article = document.querySelector('.article-wrapper');
    if (!article || document.querySelector('.ai-craft-share')) {
      return;
    }

    var shareUrl = window.location.href;
    var shareTitle = document.title || 'AI & the Craft';

    var wrapper = document.createElement('section');
    wrapper.className = 'ai-craft-share';
    wrapper.setAttribute('aria-label', 'Share this article');
    wrapper.innerHTML = [
      '<p class="ai-craft-share__label">Share this post</p>',
      '<div class="ai-craft-share__buttons">',
      '  <button type="button" class="ai-craft-share__button" data-action="copy">Copy Link</button>',
      '  <a class="ai-craft-share__button" data-action="x" target="_blank" rel="noopener noreferrer">X</a>',
      '  <a class="ai-craft-share__button" data-action="facebook" target="_blank" rel="noopener noreferrer">Facebook</a>',
      '  <a class="ai-craft-share__button" data-action="linkedin" target="_blank" rel="noopener noreferrer">LinkedIn</a>',
      '  <button type="button" class="ai-craft-share__button" data-action="instagram">Instagram</button>',
      '  <button type="button" class="ai-craft-share__button" data-action="tiktok">TikTok</button>',
      '  <a class="ai-craft-share__button" data-action="email">Email</a>',
      '</div>',
      '<p class="ai-craft-share__status" aria-live="polite"></p>',
    ].join('');

    var style = document.createElement('style');
    style.textContent = [
      '.ai-craft-share{margin:0 0 2.5rem;padding:1rem 1.25rem;border:1px solid rgba(0,0,0,.2);border-radius:10px;background:rgba(255,255,255,.55)}',
      '.ai-craft-share__label{margin:0 0 .75rem;font-family:system-ui,-apple-system,Segoe UI,Roboto,sans-serif;font-size:.78rem;font-weight:700;letter-spacing:.08em;text-transform:uppercase;opacity:.8}',
      '.ai-craft-share__buttons{display:flex;flex-wrap:wrap;gap:.5rem}',
      '.ai-craft-share__button{display:inline-flex;align-items:center;justify-content:center;padding:.45rem .7rem;border:1px solid rgba(0,0,0,.35);border-radius:999px;background:transparent;color:inherit;font:600 .85rem/1 system-ui,-apple-system,Segoe UI,Roboto,sans-serif;text-decoration:none;cursor:pointer}',
      '.ai-craft-share__button:hover{background:rgba(0,0,0,.06)}',
      '.ai-craft-share__status{min-height:1.1em;margin:.65rem 0 0;font-family:system-ui,-apple-system,Segoe UI,Roboto,sans-serif;font-size:.8rem;opacity:.75}',
      '@media(max-width:600px){.ai-craft-share{padding:.85rem 1rem}}',
    ].join('');

    document.head.appendChild(style);

    var encodedUrl = encodeURIComponent(shareUrl);
    var encodedTitle = encodeURIComponent(shareTitle);

    wrapper.querySelector('[data-action="x"]').href = 'https://twitter.com/intent/tweet?text=' + encodedTitle + '&url=' + encodedUrl;
    wrapper.querySelector('[data-action="facebook"]').href = 'https://www.facebook.com/sharer/sharer.php?u=' + encodedUrl;
    wrapper.querySelector('[data-action="linkedin"]').href = 'https://www.linkedin.com/shareArticle?mini=true&url=' + encodedUrl + '&title=' + encodedTitle;
    wrapper.querySelector('[data-action="email"]').href = 'mailto:?subject=' + encodedTitle + '&body=' + encodedUrl;

    var status = wrapper.querySelector('.ai-craft-share__status');
    var copyButton = wrapper.querySelector('[data-action="copy"]');
    var instagramButton = wrapper.querySelector('[data-action="instagram"]');
    var tiktokButton = wrapper.querySelector('[data-action="tiktok"]');

    function setStatus(message) {
      status.textContent = message;
      window.setTimeout(function () {
        if (status.textContent === message) {
          status.textContent = '';
        }
      }, 2200);
    }

    function copyToClipboard(message) {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard
          .writeText(shareUrl)
          .then(function () {
            setStatus(message || 'Link copied to clipboard.');
          })
          .catch(function () {
            setStatus('Unable to copy link automatically.');
          });
      } else {
        setStatus('Copy this URL from your browser bar.');
      }
    }

    copyButton.addEventListener('click', function () {
      if (navigator.share) {
        navigator
          .share({ title: shareTitle, url: shareUrl })
          .then(function () {
            setStatus('Thanks for sharing.');
          })
          .catch(function () {
            // Fall through to clipboard attempt.
            copyToClipboard('Link copied to clipboard.');
          });
        return;
      }

      copyToClipboard('Link copied to clipboard.');
    });

    instagramButton.addEventListener('click', function () {
      copyToClipboard('Link copied. Paste it into your Instagram post, story, or bio.');
    });

    tiktokButton.addEventListener('click', function () {
      copyToClipboard('Link copied. Paste it into your TikTok caption or profile.');
    });

    article.insertAdjacentElement('afterbegin', wrapper);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', createShareWidget);
  } else {
    createShareWidget();
  }
})();
