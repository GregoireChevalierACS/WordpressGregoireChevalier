<?php

function pluginmeteolagregze_script_enqueue(){

        wp_enqueue_style('plugintmeteo', get_template_directory_uri() . '/css/pluginmeteo.css', array(), '1.0.0', 'all');
    
}

add_action('wp_enqueue_scripts', 'pluginmeteolagregze_script_enqueue');