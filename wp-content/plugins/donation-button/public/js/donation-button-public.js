jQuery(function($) {    
    
   
        var progress = jQuery('.donation-button-bar-percentage[data-percentage]');
        var percentage = Math.ceil(progress.attr('data-percentage'));        
        jQuery({countNum: 0}).animate({countNum: percentage}, {
            duration: 300,
            easing: 'linear',
            step: function() {               
                var pct = '';                
                    pct = Math.floor(percentage) + '%';               
                progress.text(pct) && progress.siblings().children().css('width', pct);                
            }
        });

    
    var donation_button_progress_background = jQuery('#donation_button_progress_background_color').val();
    var donation_button_bar_percentage_background = jQuery('#donation_button_bar_percentage_background_color').val();
    var donation_button_bar_background = jQuery('#donation_button_bar_background_color').val();
    var donation_button_bar_and_font = jQuery('#donation_button_bar_and_font_color').val();
    var donation_button_preview_table_color = jQuery('#donation_button_preview_table_color_color').val()
    
    jQuery('.donation-button-bar-main-container').css('background', donation_button_progress_background);
    jQuery('.donation-button-bar-percentage').css('background', donation_button_bar_percentage_background);
    jQuery('.donation-button-bar-container').css('background-color', donation_button_bar_percentage_background);
    jQuery('.donation-button-bar').css('background-color', donation_button_bar_background);
    jQuery('.donation-button-bar-main-container').css('color', donation_button_bar_and_font);
    jQuery('.donation_button_table_tbody_backgroud_color tr th').css('color', donation_button_preview_table_color);
    jQuery('.donation_button_table_tbody_backgroud_color tr td').css('color', donation_button_preview_table_color);
    
    
    'use strict';
    jQuery(document).ready(function() {
        jQuery('#example').DataTable({
            "responsive": true,
            "sPaginationType": "full_numbers",
            "bLengthChange": false,
            "fnDrawCallback": function() {
                if (this.fnSettings().fnRecordsDisplay() > 10) {
                    jQuery('#example_paginate').css("display", "block");
                } else {
                    jQuery('#example_paginate').css("display", "none");
                }
            }

        });
        if (jQuery('input[name="cmd"]').length > 0) {
            var cmdarray = ["_xclick", "_cart", "_oe-gift-certificate", "_xclick-subscriptions", "_xclick-auto-billing", "_xclick-payment-plan", "_donations", "_s-xclick"];
            if (cmdarray.indexOf(jQuery('input[name="cmd"]').val()) > -1) {
                if (jQuery('input[name="bn"]').length > 0) {
                    jQuery('input[name="bn"]').val("mbjtechnolabs_SP");
                } else {
                    jQuery('input[name="cmd"]').after("<input type='hidden' name='bn' value='mbjtechnolabs_SP' />");
                }

            }
        }
    });    
});
