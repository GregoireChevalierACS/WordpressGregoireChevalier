<?php
/*
Plugin Name: Plugin météo
Plugin URI: https://jaipasencoredesiteoueb.tinquietecavavenir
Description: Plugin météo de qualité, ma couille !
Author: Lui-même
Version: 1.0
Author URI: rien
*/

if ( ! defined ( 'ABSPATH')){
    die;
}

// defined('ABSPATH') or die('gtfo scrub');
// if ( ! function_exists( 'add_action' )){ die('gtfo scrub'); }

// echo "Ceci est un plugin météo. Enfin, pas encore, mais j'y travaille.";

$today_date = date('d F Y');
$tomorrow_date = new DateTime('tomorrow');
$twodaysplus_date = new DateTime('+2 days');
$threedaysplus_date = new DateTime('+3 days');

$languages = array('en-GB', 'fr', 'fr-BE', 'fr-CA', 'de', 'en-US', 'en-CA', 'en-AU', 'en-NZ', 'es-ES', 'es-MX', 'es-AR', 'it-IT', 'ja-JP', 'cn-CN');
$_SERVER['HTTP_ACCEPT_LANGUAGE']; //detecte le langage du browser
$user_language = explode(',',$_SERVER['HTTP_ACCEPT_LANGUAGE']);

$countryList = array( 'cn-CN',
        'de',
        'en-AU',
        'en-CA',
        'en-GB',
        'en-US',
        'en-NZ',
        'es-AR',
        'es-ES',
        'es-MX',
        'fr',
        'fr-BE',
        'fr-CA',
        'it-IT',
        'ja-JP'
    );

$countryName = array('Chine',
        'Allemagne',
        'Australie',
        'Canada',
        'Royaume-Uni',
        'États-Unis',
        'Nouvelle-Zélande',
        'Argentine',
        'Espagne',
        'Mexique',
        'France',
        'Belgique',
        'Québec',
        'Italie',
        'Japon'
        );

$countryLanguage = array('mandarin',
'allemand',
'anglais',
'anglais',
'anglais-Uni',
'anglais',
'anglais',
'espagnol',
'espagnol',
'espagnol',
'français',
'français',
'français',
'italien',
'japonais'
);

$subject = $countryList;
$subject2 = $countryLanguage;


class LagregzePluginMeteo{

    // function __construct(){
    //     add_action( 'init', array($this, 'custom_post_type') );
    // }

    function register_admin_scripts(){
        add_action( 'admin_enqueue_scripts', array($this, 'enqueue') );
    }

    function register_scripts(){
        add_action( 'wp_enqueue_scripts', array($this, 'enqueue') );
    }

    function enqueue(){
        wp_enqueue_style( 'pluginmeteo', plugins_url( '/css/pluginmeteo.css', __FILE__ )  );
        wp_enqueue_script( 'pluginmeteo', plugins_url( '/js/pluginmeteo.js', __FILE__ ) );
    }

}

if(class_exists('LagregzePluginMeteo')){
    $lagregzePluginMeteo = new LagregzePluginMeteo();
    $lagregzePluginMeteo->register_admin_scripts();
    $lagregzePluginMeteo->register_scripts();
}

register_activation_hook( __FILE__, array($LagregzePluginMeteo, 'activate') );

register_deactivation_hook( __FILE__, array($LagregzePluginMeteo, 'deactivate') ); 

// ============================CONSTRUCTION HTML DU PLUGIN==============================================
?>

<div class="containerPlugin">

<div class="containerBoutons">
<br>

<p class=centered>Ceci est un plugin météo. Enfin, pas encore, mais j'y travaille.</p>

<button class="bouton"> Date du jour : <?php echo $today_date;?></button>
<br>

<button class="bouton"> Date de demain : <?php echo $tomorrow_date->format('d F Y');?></button>
<br>

<button class="bouton"> Date dans 2 jours : <?php echo $twodaysplus_date->format('d F Y');?></button>
<br>

<button class="bouton"> Date dans 3 jours : <?php echo $threedaysplus_date->format('d F Y');?></button>
<br>


<?php


foreach($user_language as $lang)
{
	if(in_array($lang, $languages))
	{
        $paysConcerne = str_replace($countryList, $countryName, $lang);
        $langueParlee = str_replace($countryList, $countryLanguage, $lang);
        ?>
        <button class="bouton"> Vous parlez : <?php echo $langueParlee;?></button>
        <button class="bouton"> Votre pays de localisation : <?php echo $paysConcerne;?></button>
        
<?php        break;
	}else {
        setlocale('en-US');
    }
}
?>
<button class="bouton">Température actuelle : </button>
<br>
<button class="bouton">Temps prévu : </button>
<br>
</div>
</div>
