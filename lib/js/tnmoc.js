TNMOC = {};

TNMOC.initTimeline = function(options) {
      options = _.extend({
        css: "css/timeline.css",
        js: "lib/js/timeline-min.js",
        width: "100%",
        height: "95%",
        embed_id: 'timeline-embed',
        debug: false
    }, options || {});
    createStoryJS(options);
    $('[data-timeline]').removeClass('is-active');
    $('[data-timeline="'+options.source+'"]').addClass('is-active');
}
