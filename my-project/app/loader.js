/**
 * Scripts required here will be combined into adaptive.js
 */

require([
    'adaptivejs/preloader',
    'adaptivejs/utils/assets',
    'adaptivejs/utils/isDebug',
    'adaptivejs/utils/isCapturing',
    'buildConfig'
],
function(preloader, AssetUtils, isDebug, isCapturing, buildConfig) {

    if (isCapturing()) {
        var debug = isDebug();
        var adaptationScript = 'adaptation.' + (debug ? '' : 'min.') + 'js';
        var stylesheetName = 'css/stylesheet.' + (debug ? '' : 'min.') + 'css';

        // Load and display preload folder css/html/js (in that order)
        preloader();

        AssetUtils.loadAsset('script', {src: AssetUtils.getAssetUrl(adaptationScript), async: true, className: 'capture-remove'});
        AssetUtils.loadAsset('script', {src: buildConfig.captureLib || 'http://cdn.mobify.com/capturejs/capture-latest.min.js', async: true, className: 'capture-remove'});

        // Preload assets (on webkit only, as this breaks Firefox)
        if (!/webkit/i.test(navigator.userAgent)) {
            return;
        }

        AssetUtils.loadAsset('link', {href: AssetUtils.getAssetUrl(stylesheetName), rel: 'stylesheet', type: 'text/css', className: 'capture-remove'});
    }

}, null, true); // relPath, forceSync

