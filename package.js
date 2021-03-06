Package.describe({
  name: 'ostrio:cron-jobs',
  version: '2.0.2',
  summary: 'Task scheduler. With support of cluster or multiple NodeJS instances.',
  git: 'https://github.com/VeliovGroup/Meteor-CRON-jobs',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.4');
  api.use('ecmascript', 'server');
  api.mainModule('cron-jobs.js', 'server');
});

Npm.depends({
  'josk': '1.0.2'
});
