// Scripts required in via this file will be combined into ui.js
require(
    [
        'config/system/component-ui',
        'global/ui',
        'pages/home/home-ui'
        // Add additional UI scripts here'
    ],
    function(
        componentUI,
        globalUI,
        home
    ) {
        // This file gets pre-loaded so we dont' want to explicitly execute
        //  anything here. Instead we will wait for a require statement run
        //  in our template
    },
    null,
    // ForceSync makes sure all templates have loaded before page scripts are
    // invoked
    true
);
