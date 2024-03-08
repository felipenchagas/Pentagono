<?php
/** Enable W3 Total Cache */
define('WP_CACHE', true); // Added by W3 Total Cache

if ( !defined('ABSPATH') )
 define('ABSPATH', dirname(__FILE__) . '/');

$__hasconfigured = false;
$__configuration_files = array(
 'localhost' => "wp-config-localhost.php",
 'triibeta' => "wp-config-triibeta.php",
);
foreach ($__configuration_files as $enviroment => $file) {
 if( file_exists( ABSPATH . $file ) && !$__hasconfigured) {
  require_once( ABSPATH . $file );

  $__hasconfigured = true;

  define('WP_ENV', $enviroment);
 }
}

if( !$__hasconfigured ) {
// ** Configurações do MySQL - Você pode pegar essas informações com o serviço de hospedagem ** //
/** O nome do banco de dados do WordPress */
define('DB_NAME', 'empre028_oliveira');

/** Usuário do banco de dados MySQL */
define('DB_USER', 'empre028_oliveira');

/** Senha do banco de dados MySQL */
define('DB_PASSWORD', 'ootrii0809@Z!');

/** nome do host do MySQL */
define('DB_HOST', '162.214.145.189');

/** Conjunto de caracteres do banco de dados a ser usado na criação das tabelas. */
define('DB_CHARSET', 'utf8');

/** O tipo de collate do banco de dados. Não altere isso se tiver dúvidas. */
define('DB_COLLATE', '');

}

if ( !defined('DB_CHARSET') ) define('DB_CHARSET', 'utf8');
if ( !defined('DB_COLLATE') ) define('DB_COLLATE', '');

/**#@+
 * Chaves únicas de autenticação e salts.
 *
 * Altere cada chave para um frase única!
 * Você pode gerá-las usando o {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * Você pode alterá-las a qualquer momento para desvalidar quaisquer cookies existentes. Isto irá forçar todos os usuários a fazerem login novamente.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'G=`EBDZv:FI-VbYt9:Q~tLP2Mf<W8>+9Wemm;0/9KZEy+h8x==G`}?WH?n,#K[r^');
define('SECURE_AUTH_KEY',  '--l{%*-Nk.*;?smrCcTR:4NkvjV=>fQ+MJkl)#mo]+{;(jCM}y`_,cde+*gl`D-g');
define('LOGGED_IN_KEY',    'l+^&~U}^jFw}Q,)~`$OrdR8A[xmsHj/9y0%FS:<-+v(on/JkUlt[ptm0GVmA|u=6');
define('NONCE_KEY',        '?(i:rIn>hia!DN&hd|yXy$$~-L.U1gnF&1ldhbTEEIA%=ctS U5:PuJ Hg0+%&E.');
define('AUTH_SALT',        'SRvEoCNB*=GR6|B=1:X>!cxfq--.7(aPlF,S;=<guDt3!&6b1%pFJTXd:6o<e8O~');
define('SECURE_AUTH_SALT', '~QxJD[xwicSb0lhv?e12h#vThye$(D?|}}QnRfHo%HL$$NF}1d_y]k2Oxb+fEJVq');
define('LOGGED_IN_SALT',   'yD5{D}/1v-cI0GcZrz`Hk32Y+G+~gCq*8R6q_c(g;Agl$t)sG;[!<3O^bg5|8j!-');
define('NONCE_SALT',       '7yVC.No3ZWn8JZV[w=ZmFdhtinv`]3b-Hzsf*YJp8dFlDvZ0YZH@h.6p</-]f#Vy');

/**#@-*/

/**
 * Prefixo da tabela do banco de dados do WordPress.
 *
 * Você pode ter várias instalações em um único banco de dados se você der para cada um um único
 * prefixo. Somente números, letras e sublinhados!
 */
$table_prefix  = 'wp_';


/**
 * Para desenvolvedores: Modo debugging WordPress.
 *
 * altere isto para true para ativar a exibição de avisos durante o desenvolvimento.
 * é altamente recomendável que os desenvolvedores de plugins e temas usem o WP_DEBUG
 * em seus ambientes de desenvolvimento.
 */
define('WP_DEBUG', false);
define ( 'AUTOMATIC_UPDATER_DISABLED' , true);
define( 'WP_MEMORY_LIMIT', '128M');

/* Isto é tudo, pode parar de editar! :) */

/** Caminho absoluto para o diretório WordPress. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');
	
/** Configura as variáveis do WordPress e arquivos inclusos. */
require_once(ABSPATH . 'wp-settings.php');

// limit revisions
define( 'WP_POST_REVISIONS', 10 );


