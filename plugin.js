/**
 * We.js twitter bootstrap plugin for add twitter bootstrap css and .js files
 *
 */
module.exports = function loadPlugin(projectPath, Plugin) {
  var plugin = new Plugin(__dirname);

  // - bootstrap
  plugin.addJs('bootstrap', {
    type: 'plugin', weight: 5, pluginName: 'we-plugin-bootstrap3',
    path: 'files/public/bootstrap/dist/js/bootstrap.js'
  });
  plugin.addCss('bootstrap', {
    type: 'plugin', weight: 5, pluginName: 'we-plugin-bootstrap3',
    path: 'files/public/bootstrap/dist/css/bootstrap.css'
  });
  plugin.addJs('jquery.validate.bootstrap', {
    type: 'plugin', weight: 8, pluginName: 'we-plugin-bootstrap3',
    path: 'files/public/jquery.validate/dist/jquery.validate.bootstrap.js'
  });

  return plugin;
};