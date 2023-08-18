(function(d){"function"===typeof define&&define.amd?define(["jquery","./core","./widget","./position"],d):d(jQuery)})(function(d){return d.widget("ui.tooltip",{version:"1.11.4",options:{content:function(){var a=d(this).attr("title")||"";return d("<a>").text(a).html()},hide:!0,items:"[title]:not([disabled])",position:{my:"left top+15",at:"left bottom",collision:"flipfit flip"},show:!0,tooltipClass:null,track:!1,close:null,open:null},_addDescribedBy:function(a,c){var b=(a.attr("aria-describedby")||
"").split(/\s+/);b.push(c);a.data("ui-tooltip-id",c).attr("aria-describedby",d.trim(b.join(" ")))},_removeDescribedBy:function(a){var c=a.data("ui-tooltip-id"),b=(a.attr("aria-describedby")||"").split(/\s+/),c=d.inArray(c,b);-1!==c&&b.splice(c,1);a.removeData("ui-tooltip-id");(b=d.trim(b.join(" ")))?a.attr("aria-describedby",b):a.removeAttr("aria-describedby")},_create:function(){this._on({mouseover:"open",focusin:"open"});this.tooltips={};this.parents={};this.options.disabled&&this._disable();this.liveRegion=
d("<div>").attr({role:"log","aria-live":"assertive","aria-relevant":"additions"}).addClass("ui-helper-hidden-accessible").appendTo(this.document[0].body)},_setOption:function(a,c){var b=this;"disabled"===a?(this[c?"_disable":"_enable"](),this.options[a]=c):(this._super(a,c),"content"===a&&d.each(this.tooltips,function(a,c){b._updateContent(c.element)}))},_disable:function(){var a=this;d.each(this.tooltips,function(c,b){var e=d.Event("blur");e.target=e.currentTarget=b.element[0];a.close(e,!0)});this.element.find(this.options.items).addBack().each(function(){var a=
d(this);a.is("[title]")&&a.data("ui-tooltip-title",a.attr("title")).removeAttr("title")})},_enable:function(){this.element.find(this.options.items).addBack().each(function(){var a=d(this);a.data("ui-tooltip-title")&&a.attr("title",a.data("ui-tooltip-title"))})},open:function(a){var c=this,b=d(a?a.target:this.element).closest(this.options.items);b.length&&!b.data("ui-tooltip-id")&&(b.attr("title")&&b.data("ui-tooltip-title",b.attr("title")),b.data("ui-tooltip-open",!0),a&&"mouseover"===a.type&&b.parents().each(function(){var a=
d(this),b;a.data("ui-tooltip-open")&&(b=d.Event("blur"),b.target=b.currentTarget=this,c.close(b,!0));a.attr("title")&&(a.uniqueId(),c.parents[this.id]={element:this,title:a.attr("title")},a.attr("title",""))}),this._registerCloseHandlers(a,b),this._updateContent(b,a))},_updateContent:function(a,c){var b;b=this.options.content;var d=this,f=c?c.type:null;if("string"===typeof b)return this._open(c,a,b);(b=b.call(a[0],function(b){d._delay(function(){a.data("ui-tooltip-open")&&(c&&(c.type=f),this._open(c,
a,b))})}))&&this._open(c,a,b)},_open:function(a,c,b){function e(a){h.of=a;g.is(":hidden")||g.position(h)}var f,g,k,h=d.extend({},this.options.position);b&&((f=this._find(c))?f.tooltip.find(".ui-tooltip-content").html(b):(c.is("[title]")&&(a&&"mouseover"===a.type?c.attr("title",""):c.removeAttr("title")),f=this._tooltip(c),g=f.tooltip,this._addDescribedBy(c,g.attr("id")),g.find(".ui-tooltip-content").html(b),this.liveRegion.children().hide(),b.clone&&(b=b.clone(),b.removeAttr("id").find("[id]").removeAttr("id")),
d("<div>").html(b).appendTo(this.liveRegion),this.options.track&&a&&/^mouse/.test(a.type)?(this._on(this.document,{mousemove:e}),e(a)):g.position(d.extend({of:c},this.options.position)),g.hide(),this._show(g,this.options.show),this.options.show&&this.options.show.delay&&(k=this.delayedShow=setInterval(function(){g.is(":visible")&&(e(h.of),clearInterval(k))},d.fx.interval)),this._trigger("open",a,{tooltip:g})))},_registerCloseHandlers:function(a,c){var b={keyup:function(a){a.keyCode===d.ui.keyCode.ESCAPE&&
(a=d.Event(a),a.currentTarget=c[0],this.close(a,!0))}};c[0]!==this.element[0]&&(b.remove=function(){this._removeTooltip(this._find(c).tooltip)});a&&"mouseover"!==a.type||(b.mouseleave="close");a&&"focusin"!==a.type||(b.focusout="close");this._on(!0,c,b)},close:function(a){var c,b=this,e=d(a?a.currentTarget:this.element),f=this._find(e);f?(c=f.tooltip,f.closing||(clearInterval(this.delayedShow),e.data("ui-tooltip-title")&&!e.attr("title")&&e.attr("title",e.data("ui-tooltip-title")),this._removeDescribedBy(e),
f.hiding=!0,c.stop(!0),this._hide(c,this.options.hide,function(){b._removeTooltip(d(this))}),e.removeData("ui-tooltip-open"),this._off(e,"mouseleave focusout keyup"),e[0]!==this.element[0]&&this._off(e,"remove"),this._off(this.document,"mousemove"),a&&"mouseleave"===a.type&&d.each(this.parents,function(a,c){d(c.element).attr("title",c.title);delete b.parents[a]}),f.closing=!0,this._trigger("close",a,{tooltip:c}),f.hiding||(f.closing=!1))):e.removeData("ui-tooltip-open")},_tooltip:function(a){var c=
d("<div>").attr("role","tooltip").addClass("ui-tooltip ui-widget ui-corner-all ui-widget-content "+(this.options.tooltipClass||"")),b=c.uniqueId().attr("id");d("<div>").addClass("ui-tooltip-content").appendTo(c);c.appendTo(this.document[0].body);return this.tooltips[b]={element:a,tooltip:c}},_find:function(a){return(a=a.data("ui-tooltip-id"))?this.tooltips[a]:null},_removeTooltip:function(a){a.remove();delete this.tooltips[a.attr("id")]},_destroy:function(){var a=this;d.each(this.tooltips,function(c,
b){var e=d.Event("blur"),f=b.element;e.target=e.currentTarget=f[0];a.close(e,!0);d("#"+c).remove();f.data("ui-tooltip-title")&&(f.attr("title")||f.attr("title",f.data("ui-tooltip-title")),f.removeData("ui-tooltip-title"))});this.liveRegion.remove()}})});