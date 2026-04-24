'use client';

import { useServerInsertedHTML } from 'next/navigation';

export function InitTheme() {
  useServerInsertedHTML(() => {
    const themeScript = `
      (function() {
        function getImplicitPreference() {
          var mediaQuery = '(prefers-color-scheme: dark)';
          var mql = window.matchMedia(mediaQuery);
          var hasImplicitPreference = typeof mql.matches === 'boolean';
          if (hasImplicitPreference) {
            return mql.matches ? 'dark' : 'light';
          }
          return null;
        }

        var themeToSet = 'light';
        var preference = window.localStorage.getItem('payload-theme');

        if (preference === 'dark' || preference === 'light') {
          themeToSet = preference;
        } else {
          var implicitPreference = getImplicitPreference();
          if (implicitPreference) {
            themeToSet = implicitPreference;
          }
        }

        document.documentElement.setAttribute('data-theme', themeToSet);
      })();
    `;

    return <script dangerouslySetInnerHTML={{ __html: themeScript }} />;
  });

  return null;
}