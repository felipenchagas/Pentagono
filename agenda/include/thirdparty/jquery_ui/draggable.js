(function(d){"function"===typeof define&&define.amd?define(["jquery","./core","./mouse","./widget"],d):d(jQuery)})(function(d){d.widget("ui.draggable",d.ui.mouse,{version:"1.11.4",widgetEventPrefix:"drag",options:{addClasses:!0,appendTo:"parent",axis:!1,connectToSortable:!1,containment:!1,cursor:"auto",cursorAt:!1,grid:!1,handle:!1,helper:"original",iframeFix:!1,opacity:!1,refreshPositions:!1,revert:!1,revertDuration:500,scope:"default",scroll:!0,scrollSensitivity:20,scrollSpeed:20,snap:!1,snapMode:"both",
snapTolerance:20,stack:!1,zIndex:!1,drag:null,start:null,stop:null},_create:function(){"original"===this.options.helper&&this._setPositionRelative();this.options.addClasses&&this.element.addClass("ui-draggable");this.options.disabled&&this.element.addClass("ui-draggable-disabled");this._setHandleClassName();this._mouseInit()},_setOption:function(a,c){this._super(a,c);"handle"===a&&(this._removeHandleClassName(),this._setHandleClassName())},_destroy:function(){(this.helper||this.element).is(".ui-draggable-dragging")?
this.destroyOnClear=!0:(this.element.removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled"),this._removeHandleClassName(),this._mouseDestroy())},_mouseCapture:function(a){var c=this.options;this._blurActiveElement(a);if(this.helper||c.disabled||0<d(a.target).closest(".ui-resizable-handle").length)return!1;this.handle=this._getHandle(a);if(!this.handle)return!1;this._blockFrames(!0===c.iframeFix?"iframe":c.iframeFix);return!0},_blockFrames:function(a){this.iframeBlocks=this.document.find(a).map(function(){var a=
d(this);return d("<div>").css("position","absolute").appendTo(a.parent()).outerWidth(a.outerWidth()).outerHeight(a.outerHeight()).offset(a.offset())[0]})},_unblockFrames:function(){this.iframeBlocks&&(this.iframeBlocks.remove(),delete this.iframeBlocks)},_blurActiveElement:function(a){var c=this.document[0];if(this.handleElement.is(a.target))try{c.activeElement&&"body"!==c.activeElement.nodeName.toLowerCase()&&d(c.activeElement).blur()}catch(b){}},_mouseStart:function(a){var c=this.options;this.helper=
this._createHelper(a);this.helper.addClass("ui-draggable-dragging");this._cacheHelperProportions();d.ui.ddmanager&&(d.ui.ddmanager.current=this);this._cacheMargins();this.cssPosition=this.helper.css("position");this.scrollParent=this.helper.scrollParent(!0);this.offsetParent=this.helper.offsetParent();this.hasFixedAncestor=0<this.helper.parents().filter(function(){return"fixed"===d(this).css("position")}).length;this.positionAbs=this.element.offset();this._refreshOffsets(a);this.originalPosition=
this.position=this._generatePosition(a,!1);this.originalPageX=a.pageX;this.originalPageY=a.pageY;c.cursorAt&&this._adjustOffsetFromHelper(c.cursorAt);this._setContainment();if(!1===this._trigger("start",a))return this._clear(),!1;this._cacheHelperProportions();d.ui.ddmanager&&!c.dropBehaviour&&d.ui.ddmanager.prepareOffsets(this,a);this._normalizeRightBottom();this._mouseDrag(a,!0);d.ui.ddmanager&&d.ui.ddmanager.dragStart(this,a);return!0},_refreshOffsets:function(a){this.offset={top:this.positionAbs.top-
this.margins.top,left:this.positionAbs.left-this.margins.left,scroll:!1,parent:this._getParentOffset(),relative:this._getRelativeOffset()};this.offset.click={left:a.pageX-this.offset.left,top:a.pageY-this.offset.top}},_mouseDrag:function(a,c){this.hasFixedAncestor&&(this.offset.parent=this._getParentOffset());this.position=this._generatePosition(a,!0);this.positionAbs=this._convertPositionTo("absolute");if(!c){var b=this._uiHash();if(!1===this._trigger("drag",a,b))return this._mouseUp({}),!1;this.position=
b.position}this.helper[0].style.left=this.position.left+"px";this.helper[0].style.top=this.position.top+"px";d.ui.ddmanager&&d.ui.ddmanager.drag(this,a);return!1},_mouseStop:function(a){var c=this,b=!1;d.ui.ddmanager&&!this.options.dropBehaviour&&(b=d.ui.ddmanager.drop(this,a));this.dropped&&(b=this.dropped,this.dropped=!1);"invalid"===this.options.revert&&!b||"valid"===this.options.revert&&b||!0===this.options.revert||d.isFunction(this.options.revert)&&this.options.revert.call(this.element,b)?d(this.helper).animate(this.originalPosition,
parseInt(this.options.revertDuration,10),function(){!1!==c._trigger("stop",a)&&c._clear()}):!1!==this._trigger("stop",a)&&this._clear();return!1},_mouseUp:function(a){this._unblockFrames();d.ui.ddmanager&&d.ui.ddmanager.dragStop(this,a);this.handleElement.is(a.target)&&this.element.focus();return d.ui.mouse.prototype._mouseUp.call(this,a)},cancel:function(){this.helper.is(".ui-draggable-dragging")?this._mouseUp({}):this._clear();return this},_getHandle:function(a){return this.options.handle?!!d(a.target).closest(this.element.find(this.options.handle)).length:
!0},_setHandleClassName:function(){this.handleElement=this.options.handle?this.element.find(this.options.handle):this.element;this.handleElement.addClass("ui-draggable-handle")},_removeHandleClassName:function(){this.handleElement.removeClass("ui-draggable-handle")},_createHelper:function(a){var c=this.options,b=d.isFunction(c.helper);a=b?d(c.helper.apply(this.element[0],[a])):"clone"===c.helper?this.element.clone().removeAttr("id"):this.element;a.parents("body").length||a.appendTo("parent"===c.appendTo?
this.element[0].parentNode:c.appendTo);b&&a[0]===this.element[0]&&this._setPositionRelative();a[0]===this.element[0]||/(fixed|absolute)/.test(a.css("position"))||a.css("position","absolute");return a},_setPositionRelative:function(){/^(?:r|a|f)/.test(this.element.css("position"))||(this.element[0].style.position="relative")},_adjustOffsetFromHelper:function(a){"string"===typeof a&&(a=a.split(" "));d.isArray(a)&&(a={left:+a[0],top:+a[1]||0});"left"in a&&(this.offset.click.left=a.left+this.margins.left);
"right"in a&&(this.offset.click.left=this.helperProportions.width-a.right+this.margins.left);"top"in a&&(this.offset.click.top=a.top+this.margins.top);"bottom"in a&&(this.offset.click.top=this.helperProportions.height-a.bottom+this.margins.top)},_isRootNode:function(a){return/(html|body)/i.test(a.tagName)||a===this.document[0]},_getParentOffset:function(){var a=this.offsetParent.offset(),c=this.document[0];"absolute"===this.cssPosition&&this.scrollParent[0]!==c&&d.contains(this.scrollParent[0],this.offsetParent[0])&&
(a.left+=this.scrollParent.scrollLeft(),a.top+=this.scrollParent.scrollTop());this._isRootNode(this.offsetParent[0])&&(a={top:0,left:0});return{top:a.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:a.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)}},_getRelativeOffset:function(){if("relative"!==this.cssPosition)return{top:0,left:0};var a=this.element.position(),c=this._isRootNode(this.scrollParent[0]);return{top:a.top-(parseInt(this.helper.css("top"),10)||0)+(c?
0:this.scrollParent.scrollTop()),left:a.left-(parseInt(this.helper.css("left"),10)||0)+(c?0:this.scrollParent.scrollLeft())}},_cacheMargins:function(){this.margins={left:parseInt(this.element.css("marginLeft"),10)||0,top:parseInt(this.element.css("marginTop"),10)||0,right:parseInt(this.element.css("marginRight"),10)||0,bottom:parseInt(this.element.css("marginBottom"),10)||0}},_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()}},
_setContainment:function(){var a,c,b;a=this.options;c=this.document[0];this.relativeContainer=null;if(a.containment)if("window"===a.containment)this.containment=[d(window).scrollLeft()-this.offset.relative.left-this.offset.parent.left,d(window).scrollTop()-this.offset.relative.top-this.offset.parent.top,d(window).scrollLeft()+d(window).width()-this.helperProportions.width-this.margins.left,d(window).scrollTop()+(d(window).height()||c.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top];
else if("document"===a.containment)this.containment=[0,0,d(c).width()-this.helperProportions.width-this.margins.left,(d(c).height()||c.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top];else if(a.containment.constructor===Array)this.containment=a.containment;else{if("parent"===a.containment&&(a.containment=this.helper[0].parentNode),c=d(a.containment),b=c[0])a=/(scroll|auto)/.test(c.css("overflow")),this.containment=[(parseInt(c.css("borderLeftWidth"),10)||0)+(parseInt(c.css("paddingLeft"),
10)||0),(parseInt(c.css("borderTopWidth"),10)||0)+(parseInt(c.css("paddingTop"),10)||0),(a?Math.max(b.scrollWidth,b.offsetWidth):b.offsetWidth)-(parseInt(c.css("borderRightWidth"),10)||0)-(parseInt(c.css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left-this.margins.right,(a?Math.max(b.scrollHeight,b.offsetHeight):b.offsetHeight)-(parseInt(c.css("borderBottomWidth"),10)||0)-(parseInt(c.css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top-this.margins.bottom],
this.relativeContainer=c}else this.containment=null},_convertPositionTo:function(a,c){c||(c=this.position);var b="absolute"===a?1:-1,d=this._isRootNode(this.scrollParent[0]);return{top:c.top+this.offset.relative.top*b+this.offset.parent.top*b-("fixed"===this.cssPosition?-this.offset.scroll.top:d?0:this.offset.scroll.top)*b,left:c.left+this.offset.relative.left*b+this.offset.parent.left*b-("fixed"===this.cssPosition?-this.offset.scroll.left:d?0:this.offset.scroll.left)*b}},_generatePosition:function(a,
c){var b,d,e,f=this.options,l=this._isRootNode(this.scrollParent[0]);e=a.pageX;d=a.pageY;l&&this.offset.scroll||(this.offset.scroll={top:this.scrollParent.scrollTop(),left:this.scrollParent.scrollLeft()});c&&(this.containment&&(this.relativeContainer?(b=this.relativeContainer.offset(),b=[this.containment[0]+b.left,this.containment[1]+b.top,this.containment[2]+b.left,this.containment[3]+b.top]):b=this.containment,a.pageX-this.offset.click.left<b[0]&&(e=b[0]+this.offset.click.left),a.pageY-this.offset.click.top<
b[1]&&(d=b[1]+this.offset.click.top),a.pageX-this.offset.click.left>b[2]&&(e=b[2]+this.offset.click.left),a.pageY-this.offset.click.top>b[3]&&(d=b[3]+this.offset.click.top)),f.grid&&(d=f.grid[1]?this.originalPageY+Math.round((d-this.originalPageY)/f.grid[1])*f.grid[1]:this.originalPageY,d=b?d-this.offset.click.top>=b[1]||d-this.offset.click.top>b[3]?d:d-this.offset.click.top>=b[1]?d-f.grid[1]:d+f.grid[1]:d,e=f.grid[0]?this.originalPageX+Math.round((e-this.originalPageX)/f.grid[0])*f.grid[0]:this.originalPageX,
e=b?e-this.offset.click.left>=b[0]||e-this.offset.click.left>b[2]?e:e-this.offset.click.left>=b[0]?e-f.grid[0]:e+f.grid[0]:e),"y"===f.axis&&(e=this.originalPageX),"x"===f.axis&&(d=this.originalPageY));return{top:d-this.offset.click.top-this.offset.relative.top-this.offset.parent.top+("fixed"===this.cssPosition?-this.offset.scroll.top:l?0:this.offset.scroll.top),left:e-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+("fixed"===this.cssPosition?-this.offset.scroll.left:l?0:
this.offset.scroll.left)}},_clear:function(){this.helper.removeClass("ui-draggable-dragging");this.helper[0]===this.element[0]||this.cancelHelperRemoval||this.helper.remove();this.helper=null;this.cancelHelperRemoval=!1;this.destroyOnClear&&this.destroy()},_normalizeRightBottom:function(){"y"!==this.options.axis&&"auto"!==this.helper.css("right")&&(this.helper.width(this.helper.width()),this.helper.css("right","auto"));"x"!==this.options.axis&&"auto"!==this.helper.css("bottom")&&(this.helper.height(this.helper.height()),
this.helper.css("bottom","auto"))},_trigger:function(a,c,b){b=b||this._uiHash();d.ui.plugin.call(this,a,[c,b,this],!0);/^(drag|start|stop)/.test(a)&&(this.positionAbs=this._convertPositionTo("absolute"),b.offset=this.positionAbs);return d.Widget.prototype._trigger.call(this,a,c,b)},plugins:{},_uiHash:function(){return{helper:this.helper,position:this.position,originalPosition:this.originalPosition,offset:this.positionAbs}}});d.ui.plugin.add("draggable","connectToSortable",{start:function(a,c,b){var g=
d.extend({},c,{item:b.element});b.sortables=[];d(b.options.connectToSortable).each(function(){var c=d(this).sortable("instance");c&&!c.options.disabled&&(b.sortables.push(c),c.refreshPositions(),c._trigger("activate",a,g))})},stop:function(a,c,b){var g=d.extend({},c,{item:b.element});b.cancelHelperRemoval=!1;d.each(b.sortables,function(){this.isOver?(this.isOver=0,b.cancelHelperRemoval=!0,this.cancelHelperRemoval=!1,this._storedCSS={position:this.placeholder.css("position"),top:this.placeholder.css("top"),
left:this.placeholder.css("left")},this._mouseStop(a),this.options.helper=this.options._helper):(this.cancelHelperRemoval=!0,this._trigger("deactivate",a,g))})},drag:function(a,c,b){d.each(b.sortables,function(){var g=!1,e=this;e.positionAbs=b.positionAbs;e.helperProportions=b.helperProportions;e.offset.click=b.offset.click;e._intersectsWith(e.containerCache)&&(g=!0,d.each(b.sortables,function(){this.positionAbs=b.positionAbs;this.helperProportions=b.helperProportions;this.offset.click=b.offset.click;
this!==e&&this._intersectsWith(this.containerCache)&&d.contains(e.element[0],this.element[0])&&(g=!1);return g}));g?(e.isOver||(e.isOver=1,b._parent=c.helper.parent(),e.currentItem=c.helper.appendTo(e.element).data("ui-sortable-item",!0),e.options._helper=e.options.helper,e.options.helper=function(){return c.helper[0]},a.target=e.currentItem[0],e._mouseCapture(a,!0),e._mouseStart(a,!0,!0),e.offset.click.top=b.offset.click.top,e.offset.click.left=b.offset.click.left,e.offset.parent.left-=b.offset.parent.left-
e.offset.parent.left,e.offset.parent.top-=b.offset.parent.top-e.offset.parent.top,b._trigger("toSortable",a),b.dropped=e.element,d.each(b.sortables,function(){this.refreshPositions()}),b.currentItem=b.element,e.fromOutside=b),e.currentItem&&(e._mouseDrag(a),c.position=e.position)):e.isOver&&(e.isOver=0,e.cancelHelperRemoval=!0,e.options._revert=e.options.revert,e.options.revert=!1,e._trigger("out",a,e._uiHash(e)),e._mouseStop(a,!0),e.options.revert=e.options._revert,e.options.helper=e.options._helper,
e.placeholder&&e.placeholder.remove(),c.helper.appendTo(b._parent),b._refreshOffsets(a),c.position=b._generatePosition(a,!0),b._trigger("fromSortable",a),b.dropped=!1,d.each(b.sortables,function(){this.refreshPositions()}))})}});d.ui.plugin.add("draggable","cursor",{start:function(a,c,b){a=d("body");b=b.options;a.css("cursor")&&(b._cursor=a.css("cursor"));a.css("cursor",b.cursor)},stop:function(a,c,b){a=b.options;a._cursor&&d("body").css("cursor",a._cursor)}});d.ui.plugin.add("draggable","opacity",
{start:function(a,c,b){a=d(c.helper);b=b.options;a.css("opacity")&&(b._opacity=a.css("opacity"));a.css("opacity",b.opacity)},stop:function(a,c,b){a=b.options;a._opacity&&d(c.helper).css("opacity",a._opacity)}});d.ui.plugin.add("draggable","scroll",{start:function(a,c,b){b.scrollParentNotHidden||(b.scrollParentNotHidden=b.helper.scrollParent(!1));b.scrollParentNotHidden[0]!==b.document[0]&&"HTML"!==b.scrollParentNotHidden[0].tagName&&(b.overflowOffset=b.scrollParentNotHidden.offset())},drag:function(a,
c,b){c=b.options;var g=!1,e=b.scrollParentNotHidden[0],f=b.document[0];e!==f&&"HTML"!==e.tagName?(c.axis&&"x"===c.axis||(b.overflowOffset.top+e.offsetHeight-a.pageY<c.scrollSensitivity?e.scrollTop=g=e.scrollTop+c.scrollSpeed:a.pageY-b.overflowOffset.top<c.scrollSensitivity&&(e.scrollTop=g=e.scrollTop-c.scrollSpeed)),c.axis&&"y"===c.axis||(b.overflowOffset.left+e.offsetWidth-a.pageX<c.scrollSensitivity?e.scrollLeft=g=e.scrollLeft+c.scrollSpeed:a.pageX-b.overflowOffset.left<c.scrollSensitivity&&(e.scrollLeft=
g=e.scrollLeft-c.scrollSpeed))):(c.axis&&"x"===c.axis||(a.pageY-d(f).scrollTop()<c.scrollSensitivity?g=d(f).scrollTop(d(f).scrollTop()-c.scrollSpeed):d(window).height()-(a.pageY-d(f).scrollTop())<c.scrollSensitivity&&(g=d(f).scrollTop(d(f).scrollTop()+c.scrollSpeed))),c.axis&&"y"===c.axis||(a.pageX-d(f).scrollLeft()<c.scrollSensitivity?g=d(f).scrollLeft(d(f).scrollLeft()-c.scrollSpeed):d(window).width()-(a.pageX-d(f).scrollLeft())<c.scrollSensitivity&&(g=d(f).scrollLeft(d(f).scrollLeft()+c.scrollSpeed))));
!1!==g&&d.ui.ddmanager&&!c.dropBehaviour&&d.ui.ddmanager.prepareOffsets(b,a)}});d.ui.plugin.add("draggable","snap",{start:function(a,c,b){a=b.options;b.snapElements=[];d(a.snap.constructor!==String?a.snap.items||":data(ui-draggable)":a.snap).each(function(){var a=d(this),c=a.offset();this!==b.element[0]&&b.snapElements.push({item:this,width:a.outerWidth(),height:a.outerHeight(),top:c.top,left:c.left})})},drag:function(a,c,b){var g,e,f,l,m,p,n,q,h,u,v=b.options,k=v.snapTolerance,r=c.offset.left,w=
r+b.helperProportions.width,t=c.offset.top,x=t+b.helperProportions.height;for(h=b.snapElements.length-1;0<=h;h--)m=b.snapElements[h].left-b.margins.left,p=m+b.snapElements[h].width,n=b.snapElements[h].top-b.margins.top,q=n+b.snapElements[h].height,w<m-k||r>p+k||x<n-k||t>q+k||!d.contains(b.snapElements[h].item.ownerDocument,b.snapElements[h].item)?(b.snapElements[h].snapping&&b.options.snap.release&&b.options.snap.release.call(b.element,a,d.extend(b._uiHash(),{snapItem:b.snapElements[h].item})),b.snapElements[h].snapping=
!1):("inner"!==v.snapMode&&(g=Math.abs(n-x)<=k,e=Math.abs(q-t)<=k,f=Math.abs(m-w)<=k,l=Math.abs(p-r)<=k,g&&(c.position.top=b._convertPositionTo("relative",{top:n-b.helperProportions.height,left:0}).top),e&&(c.position.top=b._convertPositionTo("relative",{top:q,left:0}).top),f&&(c.position.left=b._convertPositionTo("relative",{top:0,left:m-b.helperProportions.width}).left),l&&(c.position.left=b._convertPositionTo("relative",{top:0,left:p}).left)),u=g||e||f||l,"outer"!==v.snapMode&&(g=Math.abs(n-t)<=
k,e=Math.abs(q-x)<=k,f=Math.abs(m-r)<=k,l=Math.abs(p-w)<=k,g&&(c.position.top=b._convertPositionTo("relative",{top:n,left:0}).top),e&&(c.position.top=b._convertPositionTo("relative",{top:q-b.helperProportions.height,left:0}).top),f&&(c.position.left=b._convertPositionTo("relative",{top:0,left:m}).left),l&&(c.position.left=b._convertPositionTo("relative",{top:0,left:p-b.helperProportions.width}).left)),!b.snapElements[h].snapping&&(g||e||f||l||u)&&b.options.snap.snap&&b.options.snap.snap.call(b.element,
a,d.extend(b._uiHash(),{snapItem:b.snapElements[h].item})),b.snapElements[h].snapping=g||e||f||l||u)}});d.ui.plugin.add("draggable","stack",{start:function(a,c,b){var g;a=d.makeArray(d(b.options.stack)).sort(function(a,b){return(parseInt(d(a).css("zIndex"),10)||0)-(parseInt(d(b).css("zIndex"),10)||0)});a.length&&(g=parseInt(d(a[0]).css("zIndex"),10)||0,d(a).each(function(a){d(this).css("zIndex",g+a)}),this.css("zIndex",g+a.length))}});d.ui.plugin.add("draggable","zIndex",{start:function(a,c,b){a=
d(c.helper);b=b.options;a.css("zIndex")&&(b._zIndex=a.css("zIndex"));a.css("zIndex",b.zIndex)},stop:function(a,c,b){a=b.options;a._zIndex&&d(c.helper).css("zIndex",a._zIndex)}});return d.ui.draggable});