<?php
session_start(); 
$site_name = "PENTAGONO ALPINISMO";
if($_POST){
    $name=$_POST['name'];
    $email=$_POST['email'];
    $phone=$_POST['phone'];
    $message=$_POST['message'];
 
if(isset($_POST['email'])) {
    $email_to = "orcamento@pentagonoalpinismo.com.br";
    $email_subject = "CONTATO - SITE - PENTAGONO : ".$site_name;
    function died($error) {
        echo "Erro. ";
        echo "Erro.<br /><br />";
        echo $error."<br /><br />";
        echo "Volte quando estiver tudo pronto.<br /><br />";
        die();
    }
    if(!isset($_POST['name']) ||
        !isset($_POST['email']) ||
        !isset($_POST['phone']) ||
        !isset($_POST['message'])) {
        died('Desculpe, acontecer um problema ao enviar.');       
    }
    if(isset($_POST['captcha'])) {
        if( empty($_SESSION['captcha']['code'] ) || strcasecmp($_SESSION['captcha']['code'], $_POST['captcha_input']) != 0 ){
            died('Escreva exatamente como na imagem! ');
        } 
    }
    $name = $_POST['name']; // required
    $email_from = $_POST['email']; // required
    $phone = $_POST['phone']; // not required
    $message = $_POST['message']; // required
    $error_message = "";
    $email_exp = '/^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/';
  if(!preg_match($email_exp,$email_from)) {
    $error_message .= 'Email invalido.<br />';
  }
  if(strlen($message) < 2) {
    $error_message .= 'Mensagem invalida.<br />';
  }
  if(strlen($error_message) > 0) {
    died($error_message);
  }
    //$email_message = '<html lang="pt-br"><body><div>';
    $email_message = "Detalhes da mensagem abaixo: \n\n";
    function clean_string($string) {
      $bad = array("content-type","bcc:","to:","cc:","href");
      return str_replace($bad,"",$string);
    }
    $email_message .= "Name: ".clean_string($name)."\n";
    $email_message .= "Email: ".clean_string($email_from)."\n";
    $email_message .= "phone: ".clean_string($phone)."\n";
    $email_message .= "Message: ".clean_string($message)."\n";
    //$email_message .='</div></body></html>';
    // email header
    $_header = "MIME-Version: 1.0\r\nContent-type: text/plain; charset=UTF-8\r\n";
    $headers = 'From: '.$email_from."\r\n".
    'Reply-To: '.$email_from."\r\n" .
    'X-Mailer: PHP/' . phpversion();
    @mail($email_to, '=?UTF-8?B?'.base64_encode($email_subject).'?=', $email_message, $_header . $headers);  
    $result=1;

    if($result){
        echo "Thanks ".clean_string($name)." Volte logo.";
    }
}
   
exit();
}
?>