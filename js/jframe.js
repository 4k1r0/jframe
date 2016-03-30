/**
 * Created by matthieu on 29/03/16.
 * Load an iframe with POST data
 */
(function($) {

    var tmpdate = new Date().getTime();

    // Plugin definition.
    $.fn.jframe = function(options) {

        // Extend our default options with those provided.
        // Note that the first argument to extend is an empty
        // object – this is to keep from overriding our "defaults" object.
        var opts = $.extend( true, {}, $.fn.jframe.defaults, options );

        return this.each(function(){
            var $elem = $(this);
            $.fn.jframe.iframe($elem, opts);
        });
    };

    // Plugin defaults – added as a property on our plugin function.
    $.fn.jframe.defaults = {
        url: "",
        method: "POST",
        iframe: {
            id: "js-jframe"+tmpdate,
            name: "jframe"+tmpdate,
            class: "jframe",
            height: "100%",
            width: "100%",
            frameBorder: 0
        },
        data: {
            basehref: ""
        },
        success: function(){
            console.log('jframe loaded');
        }
    };

    $.fn.jframe.iframe = function($elem, options){
        // Generate iframe HTML code
        $( '<iframe></iframe>' )
            .attr( options.iframe )
            .appendTo($elem)
            .load(options.success);

        // Generate a virtual form to POST data to the iframe URl
        var $form = $('<form></form>')
            .attr('action', options.url)
            .attr('target', options.iframe.name)
            .attr('method', options.method);

        // Add an hidden input for each data we want to send
        for(var datakey in options.data){
            $("<input type='hidden' />")
                .attr("name", datakey)
                .attr("value", encodeURIComponent(options.data[datakey]))
                .appendTo($form);
        }

        // Send the datas to the provided URL and load the response in the iframe
        $form.submit().remove();
    };

})(jQuery);