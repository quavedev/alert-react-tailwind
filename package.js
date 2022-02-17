/* global Package */

Package.describe({
  name: 'quave:alert-react-tailwind',
  summary: 'Alert for React & Tailwind apps',
  version: '1.0.3',
  git: 'https://github.com/quavedev/alert-react-tailwind',
});

Package.onUse((api) => {
  api.versionsFrom('2.5.3');

  api.use('ecmascript');
  api.use('quave:settings@1.0.0');

  api.mainModule('alert-react-tailwind.js', 'client');
});
