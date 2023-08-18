<?php if(!defined('PARENT')) { exit; }

/* HEADER TEMPLATE
----------------------------------*/

?>
<!DOCTYPE html>
<html lang="<?php echo $this->META['lang']; ?>" dir="<?php echo $this->META['dir']; ?>">


 <head>
<meta name="theme-color" content="#db5945">
<meta name="robots" content="index, follow" />
<meta name="author" content="empresarialweb" />
<meta name="dc.language" content="pt-br" />
<meta name="geo.region" content="BR-PR" />

		    	
		<!-- CSS StyleSheets -->
		
		<link rel="stylesheet" href="../../../css/font-awesome.min.css">
		<link rel="stylesheet" href="../../../css/animate.css">
		<link rel="stylesheet" href="../../../css/prettyPhoto.css">
		<link rel="stylesheet" href="../../../css/slick.css">
		<link rel="stylesheet" href="../../../rs-plugin/css/settings.css">
		<link rel="stylesheet" href="../../../css/style.css">
		<link rel="stylesheet" href="../../../css/responsive.css">
		<link rel="stylesheet" href="../../../css/skins/skin3.css">


    <meta charset="<?php echo $this->META['charset']; ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <base href="<?php echo $this->META['basehref']; ?>">

    <link rel="stylesheet" href="<?php echo $this->META['basehref'] . $this->META['themefolder']; ?>css/normalize.css" type="text/css">
    <link rel="stylesheet" href="<?php echo $this->META['basehref'] . $this->META['themefolder']; ?>css/animate.css" type="text/css">
    <link rel="stylesheet" href="<?php echo $this->META['basehref'] . $this->META['themefolder']; ?>css/bootstrap.css" type="text/css">
   <!-- <link rel="stylesheet" href="<?php echo $this->META['basehref'] . $this->META['themefolder']; ?>css/msw-base.css" type="text/css"> -->
    <link rel="stylesheet" href="<?php echo $this->META['basehref'] . $this->META['themefolder']; ?>css/font-awesome/font-awesome.css" type="text/css">
    <link rel="stylesheet" href="<?php echo $this->META['basehref'] . $this->META['themefolder']; ?>css/msw.css" type="text/css">
    <link rel="stylesheet" href="<?php echo $this->META['basehref'] . $this->META['themefolder']; ?>css/mobile.css" type="text/css">
    <link rel="stylesheet" href="<?php echo $this->META['basehref'] . $this->META['themefolder']; ?>css/plugins.css" type="text/css">
	
	
	
	
    <link rel="alternate" type="application/rss+xml" title="RSS" href="<?php echo $this->RSS_LINK; ?>">
    <?php
    // Only include meta keys if they are present..
    if ($this->META['keys']) {
    ?>
    <meta name="keywords" content="<?php echo $this->META['keys']; ?>">
    <?php
    }
    // Only include meta desc if it is present..
    if ($this->META['desc']) {
    ?>
    <meta name="description" content="<?php echo $this->META['desc']; ?>">
    <?php
    }
    ?>
    <title><?php echo $this->META['title']; ?></title>
    <?php
    // Loads page specific CSS files.
    echo $this->MODULES;

    // Structured data..
    // html/social/*
    echo $this->STRUCTURED_DATA;
    ?>
    <link rel="shortcut icon" href="../../../images/favicon.ico">

  </head>

  <body>
  
  <div class="pageWrapper">
		    
		    <!-- login box start -->
					<div class="login-box">
				<a class="close-login" href="#"><i class="fa fa-times"></i></a>
				<form>
					<div class="container">
						<p>Logar no Webmail da Pentagono Alpinismo</p>
						<div class="">
							<div class="skew-25 input-box left">
								
							</div>
							<div class="skew-25 input-box left">
								
							</div>
							<a href="../../../empresa-alpinismo-industrial.html"><div class="left skew-25 main-bg">
								<input type="Enviar" class="btn skew25" value="Login" />
							</div>
</a>
						</div>
					</div>
				</form>
			</div>
			<!-- login box End -->

			<!-- Header Start -->
			<div id="headWrapper" class="clearfix">
		    	
		    	<!-- top bar start -->
		    	<div class="top-bar">
				    <div class="container">
						<div class="row"><div class="cell-12">
							    <ul><li><a href="#"><b>Pentagono Alpinismo</b></a></li></ul><ul><li><a href="#"><i class="fa fa-phone"></i><b>Brasil</b> (41) 3049-7499</a></li></ul>
								<ul><li><span><img src="../../../images/whats.png" height="37" width="32" alt="WhatsApp Pentagono Alpinismo (41) 9 9833-2112" title="WhatsApp Pentagono Alpinismo (41) 9 9833-2112" class="testimonials-img"> <b>WhatsApp</b> (41) 9 9833-2112</span></li></ul>
								
								
								
							</div>
					</div>
				    </div>
			    </div>
			    <!-- top bar end -->
			    
			    <!-- Logo, global navigation menu and search start -->
<header class="top-head" data-sticky="true">
				    <div class="container">
					    <div class="row">
						
						<div id="logonova"><a href="../../../index.html"><img src="../../../images/logos/logo-3.png" alt="Pentagono Alpinismo" title="Pentagono Alpinismo" /></a></div>
					    <!-- 	<div class="logo cell-3">
						
						    	<a href="home.html"></a>
						    </div>-->
						    <div class="cell-9 top-menu">
							    
							    <!-- top navigation menu start -->
							    <nav class="top-nav mega-menu">
								    <ul>
								      <li class="selected"><a href="../../../index.html"><i class="fa fa-home"></i><span>Início</span></a></li>
								      <li><a href="../../../empresa-alpinismo-industrial.html"><i class="fa fa-send"></i><span>Empresa</span></a></li>
								      <li><a href="../../../alpinismo-industrial.html"><i class="fa fa-building"></i><span>Alpinismo Industrial</span></a>
								      		<ul>
											   	<li><a href="#"><i class="fa fa-send"></i>Linha de vida</a>
										      		<ul>
											  <li><a href="../../../ponto-de-ancoragem-pr-sc-rj-sp.html"><i class="fa fa-bars"></i>Ponto de Ancoragem</a></li>
											  <li><a href="../../../linha-de-vida-pr-sc-rj-sp.html"><i class="fa fa-send"></i>Linha de vida</a></li>
										      		</ul>
										      </li>
										      <li><a href="#"><i class="fa fa-send"></i>Serviços em altura</a>
										      		<ul>
														<li><a href="../../../manutencao-predial.html">Manutenção Predial</a></li>
										      			<li><a href="../../../pintura-em-altura.html">Pintura em Altura</a></li>
	                                                    <li><a href="../../../manutencao-torre-eolica.html">Manutençao Torre Eólica</a></li>
										      		</ul>
										      </li>
										      <li><a href="#"><i class="fa fa-bars"></i>Limpeza</a>
										      		<ul>
										      			<li><a href="../../../limpeza-caixa-d-agua.html">Limpeza Caixa D'Água</a></li>
<li><a href="../../../limpeza-de-vidros.html">Limpeza de Vidros</a></li>
										      			
										      		</ul>
										      </li>
											  <li><a href="#"><i class="fa fa-send"></i>Esporte Radical</a>
										      		<ul><li><a href="#">Arvorismo</a></li></ul>
										      </li>
									      </ul>
								      </li>
									  

								      <li><a href="../../../clientes.html"><i class="fa fa-users"></i><span>Clientes</span></a></li>
								      <li><a href="../../../contato.php"><i class="fa fa-hand-scissors-o"></i><span>Contato</span></a>
								      	
								      </li>
								    </ul>
							    </nav>
							    <!-- top navigation menu end -->
							    
							    <!-- top search start -->
							    <div class="top-search">
						    		<a href="#"><span class="fa fa-search"></span></a>
							    	<div class="search-box">
							    		<div class="input-box left">
							    			<input type="text" name="t" id="t-search" class="txt-box" placeHolder="Pesquise aqui..." />
							    		</div>
							    		<div class="left">
							    			<input type="submit" id="b-search" class="btn main-bg" value="GO" />
							    		</div>
							    	</div>
							    </div>
							    <!-- top search end -->
							</div>
					    </div>
				    </div>
			    </header>
			    <!-- Logo, Global navigation menu and search end -->
			    
			</div>
			<!-- Header End -->
			
			<!-- Content Start -->
			<div id="contentWrapper">
				<div class="page-title title-1">
					<div class="container">
						<div class="row">
							<div class="cell-12">
								<h1 class="fx" data-animate="fadeInLeft">Alguns de nossos clientes</h1>
								<div class="breadcrumbs main-bg fx" data-animate="fadeInUp">
															<span class="bold">Vocês está em:</span><a href="https://www.pentagonoalpinismo.com.br">Início</a><span class="line-separate">/</span><a href="alpinismo-industrial.html">Alpinismo Instustrial </a><span class="line-separate">/</span><span>Clientes</span>
								</div>
								
							</div>
						</div>
					</div>
				</div>
				</div>
				
				
			</div>

    <?php
    // Shows only on extra small screens
    ?>
    <div class="toppagebar hidden-sm hidden-md hidden-lg push">
      <a href="<?php echo $this->META['basehref']; ?>" title="<?php echo mswSH($this->SETTINGS['website']); ?>"><?php echo $this->SETTINGS['website']; ?></a>
    </div>

    <div class="navbar push">
      <div class="navbar-inner">
        <div class="container">
          <div class="row">
            <div class="col-lg-8 col-md-8 col-sm-6 col-xs-6 leftblock">
              <i class="fa fa-bars fa-fw menu-btn" title="<?php echo mswSH($this->TEXT[1]); ?>"></i><span class="hidden-xs"> <a href="<?php echo $this->META['basehref']; ?>" title="<?php echo mswSH($this->SETTINGS['website']); ?>"><?php echo $this->SETTINGS['website']; ?></a></span>
            </div>
            <div class="col-lg-4 col-md-4 col-sm-6 col-xs-6">
              <form method="get" action="<?php echo $this->META['basehref']; ?>" id="sform">
              <div class="form-group">
                <div class="form-group input-group">
                  <input type="text" class="form-control" name="q" value="<?php echo (isset($_GET['q']) ? mswSH($_GET['q']) : ''); ?>" placeholder="<?php echo mswSH($this->TEXT[0]); ?>">
                  <span class="input-group-addon"><i class="fa fa-search fa-fw mswcursor_p" onclick="jQuery('#sform').submit()"></i></span>
                </div>
              </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="container mainmswarea push" id="container">
	