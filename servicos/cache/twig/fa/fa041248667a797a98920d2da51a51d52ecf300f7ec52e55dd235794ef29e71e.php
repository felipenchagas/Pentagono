<?php

/* partials/logo.html.twig */
class __TwigTemplate_acae0edba7c1b6a77da62ad0ac6712ac9f355cbf366d7b186efe2d12f6663875 extends Twig_Template
{
    public function __construct(Twig_Environment $env)
    {
        parent::__construct($env);

        $this->parent = false;

        $this->blocks = array(
        );
    }

    protected function doDisplay(array $context, array $blocks = array())
    {
        // line 1
        $context["logo"] = $this->env->getExtension('Grav\Common\Twig\TwigExtension')->themeVarFunc((((isset($context["mobile"]) ? $context["mobile"] : null)) ? ("custom_logo_mobile") : ("custom_logo")));
        // line 2
        echo "<a href=\"";
        echo (isset($context["home_url"]) ? $context["home_url"] : null);
        echo "\" class=\"navbar-brand mr-10\">
";
        // line 3
        if ((isset($context["logo"]) ? $context["logo"] : null)) {
            // line 4
            echo "  ";
            $context["logo_file"] = $this->getAttribute(twig_first($this->env, (isset($context["logo"]) ? $context["logo"] : null)), "name", array());
            // line 5
            echo "  <img src=\"";
            echo $this->env->getExtension('Grav\Common\Twig\TwigExtension')->urlFunc(("theme://images/logo/" . (isset($context["logo_file"]) ? $context["logo_file"] : null)));
            echo "\" alt=\"";
            echo $this->getAttribute((isset($context["site"]) ? $context["site"] : null), "name", array());
            echo "\" />
";
        } else {
            // line 7
            echo "  ";
            $this->loadTemplate("@images/grav-logo.svg", "partials/logo.html.twig", 7)->display($context);
        }
        // line 9
        echo "</a>";
    }

    public function getTemplateName()
    {
        return "partials/logo.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  43 => 9,  39 => 7,  31 => 5,  28 => 4,  26 => 3,  21 => 2,  19 => 1,);
    }

    /** @deprecated since 1.27 (to be removed in 2.0). Use getSourceContext() instead */
    public function getSource()
    {
        @trigger_error('The '.__METHOD__.' method is deprecated since version 1.27 and will be removed in 2.0. Use getSourceContext() instead.', E_USER_DEPRECATED);

        return $this->getSourceContext()->getCode();
    }

    public function getSourceContext()
    {
        return new Twig_Source("{% set logo = theme_var(mobile ? 'custom_logo_mobile' : 'custom_logo') %}
<a href=\"{{ home_url }}\" class=\"navbar-brand mr-10\">
{% if logo %}
  {% set logo_file = (logo|first).name %}
  <img src=\"{{ url('theme://images/logo/' ~ logo_file)  }}\" alt=\"{{ site.name }}\" />
{% else %}
  {% include('@images/grav-logo.svg') %}
{% endif %}
</a>", "partials/logo.html.twig", "/home/penta/public_html/servicos/user/themes/quark/templates/partials/logo.html.twig");
    }
}
