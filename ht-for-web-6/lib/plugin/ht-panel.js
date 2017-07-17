!function(F,w,D){"use strict";var L="ht",q=F[L],l=q.Default,H=l.isTouchable,c=q.Color,n="px",O="0",S="innerHTML",r="className",Z="position",i="absolute",Y="width",m="height",j="left",b="top",T="right",B="bottom",y="max-width",k="max-height",R=null,U="none",v="",N=F.parseInt,a=F.setTimeout,g=l.getInternal(),o=l.animate,s=c.titleIconBackground,Q=function(){return document},A=function(x){return Q().createElement(x)},W=function(){return A("div")},J=function(){return A("canvas")},M=function(e,Y,_){e.style.setProperty(Y,_,R)},z=function(j,t){return j.style.getPropertyValue(t)},_=function(T,L){T.appendChild(L)},h=function(C,t){C.removeChild(t)},I=function(t){var m=t.scrollWidth,v=t.scrollHeight;return t===Q().body&&(m=Math.max(m,Q().documentElement.scrollWidth),v=Math.max(v,Q().documentElement.scrollHeight)),{width:m,height:v}},t=function(d){var n=d.touches[0];return n?n:d.changedTouches[0]};g.addMethod(l,{panelExpandIcon:{width:16,height:16,comps:[{type:"triangle",rect:[4,4,10,8],background:s,rotation:3.14}]},panelCollapseIcon:{width:16,height:16,comps:[{type:"triangle",rect:[4,4,10,8],background:s}]},panelLockIcon:{width:100,height:100,comps:[{type:"roundRect",rect:[10,50,80,40],borderWidth:10,borderColor:s},{type:"shape",points:[37,45,37,20,37,13,43,13,63,13,69,13,70,19,70,44],segments:[1,2,3,2,3,2],borderWidth:10,borderColor:s}]},panelUnLockIcon:{width:100,height:100,comps:[{type:"roundRect",rect:[10,50,80,40],borderWidth:10,borderColor:s},{type:"shape",points:[37,45,37,20,37,13,43,13,63,13,69,13,70,19,70,26],segments:[1,2,3,2,3,2],borderWidth:10,borderColor:s}]},panelMinimizeIcon:{width:100,height:100,comps:[{type:"shape",points:[10,35,35,35,35,10],segments:[1,2,2],borderWidth:8,borderColor:s},{type:"shape",points:[90,35,65,35,65,10],segments:[1,2,2],borderWidth:8,borderColor:s},{type:"shape",points:[10,65,35,65,35,90],segments:[1,2,2],borderWidth:8,borderColor:s},{type:"shape",points:[65,90,65,65,90,65],segments:[1,2,2],borderWidth:8,borderColor:s}]},panelRestoreIcon:{width:300,height:300,comps:[{type:"rect",rect:[10,24,268,56],background:s},{type:"rect",rect:[10,118,268,56],background:s},{type:"rect",rect:[10,213,268,56],background:s}]},panelTitleLabelColor:l.labelSelectColor,panelTitleLabelFont:l.labelFont,panelContentLabelFont:l.labelFont,panelTitleBackground:c.titleBackground,panelSeparatorWidth:1,panelSeparatorColor:D},!0);var f=q.widget.Panel=function(V){var P=this,e=P._view=g.createView(null,P);P.$1i=0,P.$18i=new q.Notifier,P.$2i="leftTop",M(e,b,O),M(e,j,O),M(e,Z,i),M(e,"overflow","hidden"),P._interactor=new u(P),P.setConfig(V),P.addEventListener(function(V){var l=P.getPanelConfig(V.id),g=l.content;("beginRestore"===V.kind||"betweenResize"===V.kind||"endToggle"===V.kind)&&(g&&g.invalidate&&g.invalidate(),l.items&&l.items.forEach(function(A){A&&A.content&&A.content.invalidate&&A.content.invalidate()}))})};l.def(f,w,{ms_v:1,_dragContainment:"parent",setConfig:function(u){function w(b){b.expanded=!b.expanded,c.togglePanel(b.id,!0,!0)}if(u){var c=this;c._view[S]=v,c._config=u,c.$35i=[],u.expanded==R&&(u.expanded=u.expand!=R?u.expand:!0);var V=c._view,j=c.$24i(u,V,!0),f=j[2],p=u.width;c.$35i.push(j[1]),u.items&&u.items.forEach(function(b){b.expanded==R&&(b.expanded=b.expand!=R?b.expand:!0);var r=c.$24i(b,f.children[0]);c.$35i.push(r[1])});var g=W();M(g,Y,10+n),M(g,m,10+n),M(g,Z,i),M(g,B,O),M(g,T,O),g[r]="resize-area",_(V,g),c.$10i(),u.flowLayout&&M(V,Z,"relative"),M(V,"opacity",O),_(Q().body,V),p==R&&(p=V.offsetWidth),M(V,Y,p+n),M(V,y,p+n),u.items&&u.items.forEach(function(u){w(u)}),u.buttons&&u.buttons.indexOf("toggle")<0||w(u),u.minimized==R&&u.minimize!=R&&(u.minimized=u.minimize),u.minimized&&u.minimizable!==!1&&c.minimize(!0),h(Q().body,V),M(V,"opacity",v),c.iv()}},getPanelConfig:function(C){var Q=this,D=Q._config,v=D.items;if(D.id===C)return D;if(v)for(var c=0;c<v.length;c++){var r=v[c];if(r.id===C)return r}},getPanelView:function(Y){for(var T=this,N=T.$35i,X=0;X<N.length;X++){var y=N[X],i=y.parentNode;if(i.$15i===Y)return i}},setDragContainment:function(i){this._dragContainment=i},getDragContainment:function(){return this._dragContainment},$20i:function(){var f=this._config,O=f.restoreIconSize||24;return O},$5i:function(V){var p=V.titleIconSize||16;return H&&(p*=1.2),p},$4i:function(d){var B=d.titleHeight||l.widgetTitleHeight;return B},setTitle:function(E,u){if(u==R&&(u=this._config.id),u!=R){var j=this.getPanelConfig(u),A=this.getPanelView(u);j.title=E,A.querySelector(".panel-title span").innerHTML=E}},setInnerPanel:function(K){var H,L,z=this,W=K.id,g=z.$35i,i=!1;if(K.expanded==R&&(K.expanded=!0),W!=R){var Y=z.getPanelConfig(W);if(Y){i=!0;var b,s=z.getPanelView(W),n=s.parentNode,l=s.children[0];if(s!==z._view){z.$11i();for(b in Y)delete Y.key;for(b in K)Y[b]=K[b];H=z.$24i(K,n,!1,s),L=H[1],n.removeChild(s);for(var B=0;B<g.length;B++)if(g[B]===l){g.splice(B,1,L);break}z.$12i(),Y.expanded=!Y.expanded,z.togglePanel(Y.id,!0,!0),z.iv()}}}if(!i){z.$11i(),H=z.$24i(K,z._view.children[1]),L=H[1],g.push(L),z._config.items||(z._config.items=[]);var U=z._config.items;if(U.push(K),z.$12i(),U.length>1){var F=U[U.length-2],J=z.getPanelView(F.id).children[0];M(J,"border-bottom",z.$55i(F))}K.expanded=!K.expanded,z.togglePanel(K.id,!0,!0),z.iv()}},removeInnerPanel:function(p){var e,q=this,H=-1,k=q._config.items;if(k)for(e=0;e<k.length;e++){var c=k[e];if(c.id===p){H=e;break}}if(q.$11i(),H>=0){var z=q.$35i,j=q.getPanelView(p),T=j.children[0];for(e=0;e<z.length;e++)if(z[e]===T){z.splice(e,1);break}k.splice(H,1),j.parentNode.removeChild(j)}if(q.$12i(),k.length>0){var o=k[k.length-1],V=q.getPanelView(o.id).children[0];M(V,"border-bottom",q.$55i(o))}},$6i:function(L){M(L,"cursor","pointer"),M(L,"display","inline-block"),M(L,"margin-right",(H?8:4)+n),M(L,"vertical-align",b)},$24i:function(m,w,b,u){var t=this,y=t._config.flowLayout,S=b?w:W(),x=t.$50i(m),D=t.$3i(m,b);S[r]="ht-widget-panel"+(b?" outer-panel":" inner-panel"),m.borderWidth==R&&(m.borderWidth=b?2:0);var Q=m.borderWidth;if(Q="0 "+Q+n+" "+Q+n+" "+Q+n+" ",M(S,"padding",Q),_(S,D),_(S,x),b||(u?w.insertBefore(S,u):_(w,S)),!y&&b&&m.minimizable!==!1){var z=J(),e=t.$20i(),N=m.restoreToolTip;g.setCanvas(z,e,e),z[r]="control-button button-minimize button-minimize-restore",t.$6i(z),M(z,"display","none"),_(w,z),z.title=N||""}var Y=m.titleBackground||l.panelTitleBackground;if(M(S,"background-color",Y),m.id==R){for(var h=t.$1i++;t.getPanelConfig(h);)h=t.$1i++;m.id=h}return S.$15i=m.id,m.width&&(S.style.width=m.width+n),[S,D,x]},$9i:function(f){var T=J();T[r]="control-button button-toggle button-toggle-expand",T.title=f.toggleToolTip||"";var h=this.$4i(f),R=this.$5i(f);return this.$6i(T),g.setCanvas(T,R,h),T},$8i:function(e){var s=J(),x="control-button button-independent-switch";s[r]=e.independent===!0?x+" button-independent-switch-on":x+" button-independent-switch-off",s.title=e.independentSwitchToolTip||"";var v=this.$4i(e),h=this.$5i(e);return this.$6i(s),g.setCanvas(s,h,v),s},$7i:function(V){var v=J();v[r]="control-button button-minimize button-minimize-minimize",v.title=V.minimizeToolTip||"";var u=this.$4i(V),G=this.$5i(V);return this.$6i(v),g.setCanvas(v,G,u),v},$55i:function(H){var o=this._config,B=o.items,C=H.separatorWidth||l.panelSeparatorWidth,R=H.titleBackground||l.panelTitleBackground,O=H.expanded!==!1?R:H.separatorColor||l.panelSeparatorColor||l.brighter(R);return(o===H||B&&B.indexOf(H)===B.length-1)&&(C=0),C+n+" solid "+O},$3i:function(D,L){var p=this,k=p._config.flowLayout,s=W(),P=W(),u=p.$4i(D),X=D.titleBackground,v=D.titleColor,R=D.titleIcon,K=D.buttons;if(s[r]="panel-title",M(s,Z,"relative"),M(s,"background",X||l.panelTitleBackground),M(s,"color",v||l.panelTitleLabelColor),M(s,b,O),M(s,"box-sizing","border-box"),M(s,"-moz-box-sizing","border-box"),M(s,"padding","0 5px 0 0"),M(s,Y,"100%"),M(s,"cursor","default"),M(s,"white-space","nowrap"),M(s,"font",l.panelTitleLabelFont),R){var z=J();z[r]="control-button panel-title-icon";var F=p.$4i(D),C=p.$5i(D);p.$6i(z),g.setCanvas(z,C,F),_(s,z)}var t=A("span");M(t,"display","inline-block"),M(t,"margin-left","5px"),t[S]="<span>"+D.title+"</span>",_(s,t),M(s,"line-height",u+n),P[r]="panel-title-controls",M(P,Z,i),M(P,j,O),M(P,T,5+n),M(P,b,O),M(P,B,O),M(P,"text-align",T);var c=function(){var i=p.$9i(D);_(P,i)},x=function(){if(!k&&L&&D.minimizable!==!1){var z=p.$7i(D);_(P,z)}},N=function(){if(!L){var t=p.$8i(D);_(P,t)}},d=function(o){var u=J();u[r]="control-button custombutton-"+o.name,u.title=o.toolTip||"",u._action=o.action;var b=p.$4i(D),x=p.$5i(D);p.$6i(u),g.setCanvas(u,x,b),_(P,u)};if(K)for(var y=0;y<K.length;y++){var G=K[y];"string"==typeof G?"minimize"===G?x():"independentSwitch"===G?N():"toggle"===G&&c():"object"==typeof G&&d(G)}else x(),c();return _(s,P),s},$50i:function(u){var C=W(),F=u.contentHeight,j=W();if(M(j,Z,"relative"),C[r]="panel-body",M(C,"overflow","hidden"),M(C,"background","white"),M(C,"font",l.panelContentLabelFont),_(C,j),u.content){var v;u.content.getView?(_(j,u.content.getView()),v=j.children[0]):u.content instanceof Element?(_(j,u.content),v=j.children[0]):j[S]=u.content,v&&(M(v,Y,"100%"),M(v,m,"100%")),F&&M(j,m,F+n)}return C},$10i:function(){var Z=this,l=Z._config,I=Z._view,v=I.querySelector(".resize-area").style;v.display=l.flowLayout||l.minimized===!0||l.expanded===!1?U:"block"},$11i:function(){var h=this._view,R=h.children[1];this.$13i>=0?this.$13i++:this.$13i=1,M(R,k,v),M(h,y,v)},$12i:function(){var i=--this.$13i;if(0===i){var I=this._view,u=I.children[1];M(u,k,u.scrollHeight+n),M(I,y,I.offsetWidth+n)}},$14i:function(){var q=this._view,e=q.children[0],j=e.children[1].children,C=this._config,a=0;q.$26i=q.offsetWidth,a+=e.children[0].offsetWidth,C.titleIcon&&(a+=e.children[1].offsetWidth,j=e.children[2].children);for(var W=0;W<j.length;W++){var m=j[W];a+=m.offsetWidth+5}q.$51i=a+15},togglePanel:function(U,X,s){function J(v){var g=v.target,N=g.parentNode,J=u.getPanelConfig(N.$15i);delete N.$19i,g!==e&&u.$12i(),u.$18i.fire({kind:"endToggle",target:u,id:J.id})}for(var u=this,b=u._view,e=b.children[1],f=R,Z=u.$35i,c=Z.length,G=u._config.exclusive,D=u.$2i,m=[],L=u._config.narrowWhenCollapse,x=0;c>x;x++){var C=Z[x],F=C.parentNode,Q=F.$15i,V=u.getPanelConfig(Q);Q===U&&(f=F),!X&&G&&V.expanded&&F!==b&&Q!==U&&V.independent!==!0&&m.push(F)}if(f&&!f.$19i){f.$19i=!0;var H=f.children[1],h=f.querySelector(".button-toggle"),q=u.getPanelConfig(f.$15i);if(!h)return;f===b||q.expanded||q.independent===!0||m.forEach(function(H){u.togglePanel(H.$15i,!0)}),f!==b&&u.$11i();var S=200;if(s&&(S=0),u.$18i.fire({kind:"beginToggle",target:u,id:f.$15i}),q.expanded){var p=function(){h[r]="control-button button-toggle",h[r]+=D.indexOf("Bottom")>=0?" button-toggle-expand":" button-toggle-collapse",M(H,Y,H.clientWidth+n),q.expanded=!1,M(f.children[0],"border-bottom",u.$55i(q)),o(H).duration(S).set("opacity",O).set(k,O).end(J),L&&f===b&&o(f).duration(S).set(y,f.$51i+n).end(),f[r]+=" panel-collapse",o(f).duration(S).set("padding-bottom",O).end(),u.$28i(q,!0),u.$10i()};L&&f===b&&u.$14i(),p()}else h[r]="control-button button-toggle",h[r]+=D.indexOf("Bottom")>=0?" button-toggle-collapse":" button-toggle-expand",M(H,Y,v),q.expanded=!0,M(f.children[0],"border-bottom",u.$55i(q)),o(H).duration(S).set("opacity","1").set(k,H.scrollHeight+n).end(J),L&&f===b&&o(f).duration(S).set(y,(f.$26i||f.offsetWidth)+n).end(),f[r]=f[r].replace(" panel-collapse",v),o(f).duration(S).set("padding-bottom",q.borderWidth+n).end(),u.$28i(q,!0),u.$10i()}},$16i:function(){var M=this._view,x=M.$22i,e=M.$23i,E=this.$2i;return x==R&&(E.indexOf(j)>=0?x=M.$22i=0:E.indexOf(T)>=0&&(x=M.$22i=100)),e==R&&(E.indexOf("Top")>=0?e=M.$23i=0:E.indexOf("Bottom")>=0&&(e=M.$23i=100)),[x,e]},$25i:function(){var d=this,a=d._view,Y=a.$21i,l=d.$20i(),t=d.$16i(),k=t[0],P=t[1],f=d.$2i;a.children[0].style.display=U,a.children[1].style.display=U,a.children[2].style.display=v,M(a,"padding",O),M(a,y,l+n),"leftTop"===f?(M(a,j,N(z(a,j))+(Y.width-l)*k/100+n),M(a,b,N(z(a,b))+(Y.height-l)*P/100+n)):"leftBottom"===f?(M(a,j,N(z(a,j))+(Y.width-l)*k/100+n),M(a,B,N(z(a,B))+(Y.height-l)*(1-P/100)+n)):"rightTop"===f?(M(a,T,N(z(a,T))+(Y.width-l)*(1-k/100)+n),M(a,b,N(z(a,b))+(Y.height-l)*P/100+n)):"rightBottom"===f&&(M(a,T,N(z(a,T))+(Y.width-l)*(1-k/100)+n),M(a,B,N(z(a,B))+(Y.height-l)*(1-P/100)+n)),a[r]+=" panel-minimized",d.$18i.fire({kind:"endMinimize",target:d,id:a.$15i})},$17i:function(){var i=this,H=i._config,d=i._view;M(d,"-webkit-transform",v),M(d,"-ms-transform",v),M(d,"transform",v),H.minimized?i.$25i():(i.$18i.fire({kind:"endRestore",target:i,id:H.id}),d[r]=d[r].replace(" panel-minimized",v)),delete d.$19i},minimize:function(V){var j=this,w=j._view;if(!w.$19i&&w.children[0].style.display!==U){var D=j._config,i=w.getBoundingClientRect(),_=j.$20i(),W=i.width,S=i.height,a=_/W,G=_/S,H=j.$16i(),A=H[0],d=H[1];w.$52i=a,w.$53i=G,w.$21i=i,j.$18i.fire({kind:"beginMinimize",target:j,id:w.$15i});var $=200;V&&($=0),D.minimized=!0,w.$19i=!0,D.expanded&&(w.$26i=w.offsetWidth);var r=A+"% "+d+"%";M(w,"-webkit-transform-origin",r),M(w,"-ms-transform-origin",r),M(w,"transform-origin",r),o(w).duration($).scale(a,G).end(function(){j.$17i()}),j.$10i()}},restore:function(){var t,k,Z,r,e,w,d,p,Y,H,g,K,J=this,O=J._view,c=O.parentNode,S=J._config;if(!O.$19i&&S.minimized){var i=O.$21i,f=O.$52i,_=O.$53i,V=S.borderWidth+n,L=V,h=V,q=0,m=J.$20i(),$=I(c),F=J.$2i;"leftTop"===F?(t=N(z(O,j)),Z=N(z(O,b)),e=t,d=Z,Y=t+i.width-$.width,H=Z+i.height-$.height,Y>0&&(Y>=t?t=0:t-=Y),H>0&&(H>=Z?Z=0:Z-=H),g=100*((e-t)/(i.width-m)),K=100*((d-Z)/(i.height-m)),M(O,j,t+n),M(O,b,Z+n)):"leftBottom"===F?(t=N(z(O,j)),r=N(z(O,B)),e=t,p=r,Y=t+i.width-$.width,H=r+i.height-$.height,Y>0&&(Y>=t?t=0:t-=Y),H>0&&(H>=r?r=0:r-=H),g=100*((e-t)/(i.width-m)),K=100*(1-(p-r)/(i.height-m)),M(O,j,t+n),M(O,B,r+n)):"rightTop"===F?(k=N(z(O,T)),Z=N(z(O,b)),w=k,d=Z,Y=k+i.width-$.width,H=Z+i.height-$.height,Y>0&&(Y>=k?k=0:k-=Y),H>0&&(H>=Z?Z=0:Z-=H),g=100*(1-(w-k)/(i.width-m)),K=100*((d-Z)/(i.height-m)),M(O,T,k+n),M(O,b,Z+n)):"rightBottom"===F&&(k=N(z(O,T)),r=N(z(O,B)),w=k,p=r,Y=k+i.width-$.width,H=r+i.height-$.height,Y>0&&(Y>=k?k=0:k-=Y),H>0&&(H>=r?r=0:r-=H),g=100*(1-(w-k)/(i.width-m)),K=100*(1-(p-r)/(i.height-m)),M(O,T,k+n),M(O,B,r+n)),O.children[0].style.display="block",O.children[1].style.display="block",O.children[2].style.display=U,M(O,"padding",q+" "+L+" "+h+" "+V),M(O,"-webkit-transform","scale("+f+", "+_+")"),M(O,"-ms-transform","scale("+f+", "+_+")"),M(O,"transform","scale("+f+", "+_+")"),O.$22i=g,O.$23i=K,M(O,"-webkit-transform-origin",g+"% "+K+"%"),M(O,"-ms-transform-origin",g+"% "+K+"%"),M(O,"transform-origin",g+"% "+K+"%"),S.narrowWhenCollapse&&!S.expanded?M(O,y,O.$51i+n):M(O,y,O.$26i+n),J.$18i.fire({kind:"beginRestore",target:J,id:O.$15i}),O.$19i=!0,S.minimized=!1,a(function(){o(O).scale(1,1).end(function(){J.$17i()})},30),J.$10i()}},addEventListener:function(j,U,A){this.$18i.add(j,U,A)},removeEventListener:function(P,A){this.$18i.remove(P,A)},setPosition:function(J,h){var V=this._view,A=this.$2i;"leftTop"===A?(M(V,j,J+n),M(V,b,h+n),M(V,T,v),M(V,B,v)):"leftBottom"===A?(M(V,j,J+n),M(V,B,h+n),M(V,T,v),M(V,b,v)):"rightTop"===A?(M(V,T,J+n),M(V,b,h+n),M(V,j,v),M(V,B,v)):"rightBottom"===A&&(M(V,T,J+n),M(V,B,h+n),M(V,j,v),M(V,b,v)),delete V.$22i,delete V.$23i},getPosition:function(){var a=this._view,J=this.$2i;return"leftTop"===J?{x:N(z(a,j)),y:N(z(a,b))}:"leftBottom"===J?{x:N(z(a,j)),y:N(z(a,B))}:"rightTop"===J?{x:N(z(a,T)),y:N(z(a,b))}:"rightBottom"===J?{x:N(z(a,T)),y:N(z(a,B))}:void 0},setPositionRelativeTo:function(Z){var V=this,f=V._view.querySelectorAll(".button-toggle"),G="control-button button-toggle",U=V.getPosition();V.$2i=Z,V.setPosition(U.x,U.y);for(var x=0;x<f.length;x++){var B=f[x],d=V.getPanelConfig(B.parentNode.parentNode.parentNode.$15i);B[r]=d.expanded?Z.indexOf("Bottom")>=0?G+" button-toggle-collapse":G+" button-toggle-expand":Z.indexOf("Bottom")>=0?G+" button-toggle-expand":G+" button-toggle-collapse"}V.iv()},getPositionRelativeTo:function(){return this.$2i},invalidate:function(T){var U=this;U._68I||(U._68I=1,l.callLater(U.validate,U,R,T),U.onInvalidated&&U.onInvalidated(),U.fireViewEvent("invalidate"));var s=this._config,b=s.content;b&&b.invalidate&&b.invalidate(),s.items&&s.items.forEach(function(C){C&&C.content&&C.content.invalidate&&C.content.invalidate()})},$27i:function(P,M,$,t){var T=g.initContext(P);g.translateAndScale(T,0,0,1),T.clearRect(0,0,$,$);var j=($-t)/2;l.drawStretchImage(T,l.getImage(M),"fill",0,j,t,t),T.restore()},$28i:function(y){var E,P,g,N=this,W=y.id,s=N.getPanelView(W),p=s.querySelector(".button-toggle"),R=N.$2i.indexOf("Bottom")>=0;if(P=R?l.panelCollapseIcon:l.panelExpandIcon,g=R?l.panelExpandIcon:l.panelCollapseIcon,p){E=y.expanded?l.getImage(g):l.getImage(P);var w=N.$4i(y),L=N.$5i(y);N.$27i(p,E,w,L)}},$29i:function(w){var j,I=this,F=w.id,d=I.getPanelView(F),U=d.querySelector(".button-independent-switch"),h=l.panelUnLockIcon,S=l.panelLockIcon;if(U){j=w.independent!==!0?l.getImage(S):l.getImage(h);var t=I.$4i(w),L=I.$5i(w);I.$27i(U,j,t,L)}},$30i:function(N){var p=this,v=N.id,u=p.getPanelView(v),L=u.querySelector(".button-minimize-minimize"),E=l.panelMinimizeIcon;if(L){var k=p.$4i(N),s=p.$5i(N);p.$27i(L,l.getImage(E),k,s)}},$31i:function(k){var N=this,S=k.id,o=N.getPanelView(S),X=o.querySelector(".button-minimize-restore"),u=k.titleIcon||l.panelRestoreIcon;if(X){var K=N.$20i();N.$27i(X,l.getImage(u),K,K)}},$32i:function(e){var i=this,z=e.id,R=i.getPanelView(z);if(e.buttons){var j=e.buttons;j.forEach(function(f){var q=f.name,D=f.icon;if(q&&D){var B=R.querySelector(".custombutton-"+q);if(B){var S=i.$4i(e),I=i.$5i(e)-1;i.$27i(B,l.getImage(D),S,I)}}})}},$33i:function(j){var H=this,p=j.id,u=H.getPanelView(p),Y=u.querySelector(".panel-title-icon"),y=j.titleIcon;if(Y&&y){var E=H.$4i(j),r=H.$5i(j);H.$27i(Y,l.getImage(y),E,r)}},validateImpl:function(){var I=this,L=I._config;I.$28i(L),I.$30i(L),I.$31i(L),I.$32i(L),I.$33i(L),L.items&&L.items.forEach(function(E){I.$28i(E),I.$29i(E),I.$32i(E)})}});var u=function(K){var T=this,l=K.getView();T.$34i=K,T.addListeners(),l.addEventListener("dblclick",T.$42i.bind(T))};l.def(u,w,{ms_listener:1,getView:function(){return this.$34i.getView()},clear:function(){delete this.$37i,delete this.$38i,delete this.$36i,delete this.$39i},$42i:function(a){for(var Q=this.$34i,E=a.target,x=Q.$35i,g=x.length,_=0;g>_;_++){var e=x[_];e.contains(E)&&(a.preventDefault(),Q.togglePanel(e.parentNode.$15i))}},handle_touchstart:function(w){var I=this,L=I.$34i,E=L._config,J=E.flowLayout,R=w;if(l.preventDefault(w),l.isLeftButton(w)){var U=w.target,Z=L.getView().children[0],r=L.getView().querySelector(".button-minimize-restore");H&&(R=t(w));var X=I.$40i={x:R.pageX,y:R.pageY};I.$41i={x:X.x,y:X.y},(!J&&Z.contains(U)||r&&r.contains(U))&&(I.$38i=!0,l.startDragging(I,w)),!J&&I.handle_mousemove(w)&&(I.$37i=!0,l.startDragging(I,w),L.$11i())}},handle_mousedown:function(j){this.handle_touchstart(j)},handle_touchend:function(m){var k=this,G=k.$34i,e=m.target,V=G.$35i,Z=V.length,g=0,Q=G.getView(),f=Q.querySelector(".button-minimize"),i=Q.querySelector(".button-minimize-restore");if(!k.$39i&&!k.$36i){if(f&&f.contains(e)||i&&i.contains(e))m.preventDefault(),G._config.minimized?G.restore():G.minimize();else for(;Z>g;g++){var z=V[g],L=z.parentNode,N=L.$15i,K=G.getPanelConfig(N),j=z.querySelector(".button-toggle"),F=z.querySelector(".button-independent-switch");if(j===e)m.preventDefault(),G.togglePanel(N);else if(F===e){m.preventDefault();var u="button-independent-switch-off",h="button-independent-switch-on";K.independent=K.independent==R?!0:!K.independent,F[r]=K.independent?F[r].replace(u,h):F[r].replace(h,u),G.$29i(K)}else e[r]&&e[r].indexOf("control-button custombutton-")>=0&&z.contains(e)&&e._action.call(G,K,G.getPanelView(N),m)}delete k.$40i,delete k.$41i}},handle_mouseup:function(B){this.handle_touchend(B)},handleWindowTouchEnd:function(){var J=this,Z=J.$34i;J.$37i&&J.$36i?(Z.$18i.fire({kind:"endResize",target:Z,id:Z.getView().$15i}),Z.$12i()):J.$38i&&J.$39i&&Z.$18i.fire({kind:"endMove",target:Z,id:Z.getView().$15i}),this.clear()},handleWindowMouseUp:function(j){this.handleWindowTouchEnd(j)},handle_mousemove:function(O){var m=this,W=m.getView(),Z=W.querySelector(".resize-area"),I=Z.getBoundingClientRect(),Y={x:I.left,y:I.top,width:I.width,height:I.height};O=H?t(O):O;var S=O.clientX,d=O.clientY,B=m.$34i._config;return B.expanded&&B.minimized!==!0&&l.containsPoint(Y,{x:S,y:d})?(W.style.cursor="nwse-resize",!0):(W.style.cursor=v,void 0)},handleWindowTouchMove:function(U){U.preventDefault();var O=U;H&&(O=t(U));var X=this,k=X.$40i,s=X.$41i;if(!(s.x==k.x&&s.y==k.y&&l.getDistance(s,{x:O.pageX,y:O.pageY})<=1)){var x=X.$34i,V=X.getView(),u=V.parentNode,J=x._config,$=J.resizeMode||"wh",a=O.pageX-k.x,f=O.pageY-k.y,_=x.$2i;if(X.$37i){var q=V.children[1].children[0],G=V.clientWidth,D=q.clientHeight,W=G+a,Q=D+f;W=Math.max(W,100),Q=Math.max(Q,100),"w"===$?(M(V,Y,W+n),J.width=W,k.x+=W-G,_.indexOf(T)>=0&&M(V,T,N(z(V,T))-(W-G)+n)):"h"===$?(M(q,m,Q+n),J.contentHeight=Q,k.y+=Q-D,_.indexOf("Bottom")>=0&&M(V,B,N(z(V,B))-(Q-D)+n)):"wh"===$&&(M(V,Y,W+n),M(q,m,Q+n),J.width=W,J.contentHeight=Q,k.x+=W-G,k.y+=Q-D,_.indexOf("right")>=0&&M(V,T,N(z(V,T))-(W-G)+n),_.indexOf("Bottom")>=0&&M(V,B,N(z(V,B))-(Q-D)+n)),X.$36i?x.$18i.fire({kind:"betweenResize",target:x,id:x.getView().$15i}):(X.$36i=!0,x.$18i.fire({kind:"beginResize",target:x,id:x.getView().$15i}))}else if(X.$38i){var P,o,i,L,C,y,R,r,g,F,A=V.getBoundingClientRect(),h=A.width,e=A.height,c=I(u),E=c.width,p=c.height,w=x._dragContainment;"leftTop"===_?(P=N(z(V,j))||0,i=N(z(V,b))||0,C=P+a,R=i+f,"parent"===w&&(C+h>E&&(C=E-h),R+e>p&&(R=p-e),0>C&&(C=0),0>R&&(R=0)),g=C-P,F=R-i,x.setPosition(C,R),k.x+=g,k.y+=F):"rightBottom"===_?(o=N(z(V,T))||0,L=N(z(V,B))||0,y=o-a,r=L-f,"parent"===w&&(0>y&&(y=0),0>r&&(r=0),y+h>E&&(y=E-h),r+e>p&&(r=p-e)),g=y-o,F=r-L,x.setPosition(y,r),k.x-=g,k.y-=F):"rightTop"===_?(o=N(z(V,T))||0,i=N(z(V,b))||0,y=o-a,R=i+f,"parent"===w&&(0>y&&(y=0),0>R&&(R=0),y+h>E&&(y=E-h),R+e>p&&(R=p-e)),g=y-o,F=R-i,x.setPosition(y,R),k.x-=g,k.y+=F):"leftBottom"===_&&(P=N(z(V,j))||0,L=N(z(V,B))||0,C=P+a,r=L-f,"parent"===w&&(0>C&&(C=0),0>r&&(r=0),C+h>E&&(C=E-h),r+e>p&&(r=p-e)),g=C-P,F=r-L,x.setPosition(C,r),k.x+=g,k.y-=F),X.$39i?x.$18i.fire({kind:"betweenMove",target:x,id:x.getView().$15i}):(X.$39i=!0,x.$18i.fire({kind:"beginMove",target:x,id:x.getView().$15i}))}}},handleWindowMouseMove:function(t){this.handleWindowTouchMove(t)}});var G=q.widget.PanelGroup=function(h){var C=this,e=C._view=g.createView(null,C);e.style.border="1px dashed black",e.style.position="absolute",e.style.background="rgba(120, 120, 120, 0.4)",C.$48i=new q.List,C._tolerance=100,C._config=h||{hGap:0,vGap:0},C.bindHandlePanelMove=C.handlePanelMove.bind(C),C.bindHandlePanelEvent=C.handlePanelEvent.bind(C),C.invalidate()};l.def(G,w,{invalidate:function(){var E=this;E._68I||(E._68I=1,a(function(){E.validate()},50))},validate:function(){if(this._68I){delete this._68I;var I=this.$48i.get(0);if(I){var r=I.getView().parentNode;r&&(this.layoutPanels(r,"leftTop"),this.layoutPanels(r,"rightTop"),this.layoutPanels(r,"leftBottom"),this.layoutPanels(r,"rightBottom"))}}},setLeftTopPanels:function(){var k=this,b=k.$43i,w=k.$48i;b==R&&(b=k.$43i=new q.List);for(var a=0;a<arguments.length;a++){var Q=arguments[a];if("string"==typeof Q)b.$49i=Q;else{if(Q._config.flowLayout)continue;Q.setPositionRelativeTo("leftTop"),b.contains(Q)||b.add(Q),w.contains(Q)||k.add(Q)}}},setRightTopPanels:function(){var p=this,Z=p.$44i,j=p.$48i;Z==R&&(Z=p.$44i=new q.List);for(var V=0;V<arguments.length;V++){var P=arguments[V];if("string"==typeof P)Z.$49i=P;else{if(P._config.flowLayout)continue;P.setPositionRelativeTo("rightTop"),Z.contains(P)||Z.add(P),j.contains(P)||p.add(P)}}},setLeftBottomPanels:function(){var M=this,Q=M.$45i,l=M.$48i;Q==R&&(Q=M.$45i=new q.List);for(var G=0;G<arguments.length;G++){var g=arguments[G];if("string"==typeof g)Q.$49i=g;else{if(g._config.flowLayout)continue;g.setPositionRelativeTo("leftBottom"),Q.contains(g)||Q.add(g),l.contains(g)||M.add(g)}}},setRightBottomPanels:function(){var A=this,M=A.$46i,n=A.$48i;M==R&&(M=A.$46i=new q.List);for(var t=0;t<arguments.length;t++){var G=arguments[t];if("string"==typeof G)M.$49i=G;else{if(G._config.flowLayout)continue;G.setPositionRelativeTo("rightBottom"),M.contains(G)||M.add(G),n.contains(G)||A.add(G)}}},add:function(Y){if(!Y._config.flowLayout){var c=this,D=c.$48i;D.contains(Y)||(Y.addEventListener(c.bindHandlePanelMove),Y.addEventListener(c.bindHandlePanelEvent),D.add(Y))}},remove:function(R){var T=this,d=T.$48i;d.contains(R)&&(R.removeEventListener(T.bindHandlePanelMove),R.removeEventListener(T.bindHandlePanelEvent),d.remove(R),T.$43i.contains(R)&&T.$43i.remove(R),T.$44i.contains(R)&&T.$44i.remove(R),T.$45i.contains(R)&&T.$45i.remove(R),T.$46i.contains(R)&&T.$46i.remove(R))},layoutPanels:function(i,V,N){var L=this,s=L._config,O=s.hGap||0,E=s.vGap||0;if(i){var j=L.$43i;if("leftBottom"===V?j=L.$45i:"rightTop"===V?j=L.$44i:"rightBottom"===V&&(j=L.$46i),!j)return;var l=j.$49i,P=O,J=E;if(i.contains(L._view)&&i.removeChild(L._view),j&&j.size()>0)for(var b=0;b<j.size();b++){var a=j.get(b),U=a.getView();i=i||U.parentNode,N!==b?a.setPosition(P,J):("leftTop"===V?(L._view.style.right="",L._view.style.bottom="",L._view.style.left=P+n,L._view.style.top=J+n):"leftBottom"===V?(L._view.style.right="",L._view.style.top="",L._view.style.left=P+n,L._view.style.bottom=J+n):"rightTop"===V?(L._view.style.left="",L._view.style.bottom="",L._view.style.right=P+n,L._view.style.top=J+n):"rightBottom"===V&&(L._view.style.left="",L._view.style.top="",L._view.style.right=P+n,L._view.style.bottom=J+n),L._view.style.width=U.offsetWidth+n,L._view.style.height=U.offsetHeight+n,i.insertBefore(L._view,U)),"h"===l?P+=U.offsetWidth+O:"v"===l&&(J+=U.offsetHeight+E)}}},handlePanelEvent:function(u){if("beginToggle"===u.kind||"endToggle"===u.kind||"beginRestore"===u.kind||"endMinimize"===u.kind||"endResize"===u.kind){var C=this,f=u.target,k=f.getView(),E=k.parentNode,o=C.$43i,$=C.$44i,h=C.$45i,i=C.$46i,X=C._config,v=R,e=R,I=f.$47i;if(I==R&&(I=f.$47i=0),"beginToggle"===u.kind?I=f.$47i=I+1:"endToggle"===u.kind&&(I=f.$47i=I-1),o&&o.contains(f)?(v="leftTop",e=o):h&&h.contains(f)?(v="leftBottom",e=h):$&&$.contains(f)?(v="rightTop",e=$):i&&i.contains(f)&&(v="rightBottom",e=i),"beginToggle"===u.kind&&v&&1===I){var G=W(),Z=G.style,q=e.$49i,Q="each";Z.fontSize="0",Z.position="absolute",Z.width="100%","leftTop"===v?(Z.left=0,Z.top=0):"leftBottom"===v?(Z.left=0,Z.bottom=0,"v"===q&&(Q="reverseEach")):"rightTop"===v?(Z.right=0,Z.top=0,Z.textAlign="right","h"===q&&(Q="reverseEach")):"rightBottom"===v&&(Z.right=0,Z.bottom=0,Z.textAlign="right",Q="reverseEach"),e[Q](function(C){var x=C.getView(),u=x.style,H=W();u.position="static",H.style.textAlign="left",H.style.position="relative",H.style.display="inline-block","leftTop"===v?(H.style.marginLeft=X.hGap+n,H.style.marginTop=X.vGap+n):"leftBottom"===v?(H.style.marginLeft=X.hGap+n,H.style.marginBottom=X.vGap+n):"rightTop"===v?(H.style.marginRight=X.hGap+n,H.style.marginTop=X.vGap+n):"rightBottom"===v&&(H.style.marginRight=X.hGap+n,H.style.marginBottom=X.vGap+n),H.appendChild(x),G.appendChild(H),"h"===q?H.style.verticalAlign="leftTop"===v||"rightTop"===v?"top":"bottom":G.appendChild(A("br"))}),C.$54i=G,E.appendChild(G)}else"endToggle"===u.kind&&v&&0===I?a(function(){E=E.parentNode.parentNode,E.removeChild(C.$54i),delete C.$54i,e.each(function(W){var y=W.getView(),w=y.style;w.position="absolute",E.appendChild(y)}),C.layoutPanels(E,v)},30):("beginRestore"===u.kind||"endMinimize"===u.kind||"endResize"===u.kind)&&v&&C.layoutPanels(E,v)}},handlePanelMove:function(y){if(!(y.kind.indexOf("Move")<0)){var Q=this,Z=Q._config,C=Z.hGap||0,M=Z.vGap||0,W=y.target,d=W._view,_=d.getBoundingClientRect(),n=_.width,S=_.height,u=n/2,A=S/2,w=d.parentNode,H=Q.$43i,V=Q.$44i,k=Q.$45i,P=Q.$46i,z=w.getBoundingClientRect(),F=Q._tolerance;if("endMove"===y.kind){var B=Q._corner;B&&(W.setPositionRelativeTo(B),Q.layoutPanels(w,B)),delete Q._corner}if("betweenMove"===y.kind){var g=z.left,j=z.top,x=z.width,f=z.height,b=_.left+n/2,X=_.top+S/2;H==R&&(H=Q.$43i=new q.List),k==R&&(k=Q.$45i=new q.List),V==R&&(V=Q.$44i=new q.List),P==R&&(P=Q.$46i=new q.List),delete Q._corner,H.contains(W)?(H.remove(W),Q.layoutPanels(w,"leftTop")):k.contains(W)?(k.remove(W),Q.layoutPanels(w,"leftBottom")):V.contains(W)?(V.remove(W),Q.layoutPanels(w,"rightTop")):P.contains(W)&&(P.remove(W),Q.layoutPanels(w,"rightBottom"));var s=function(c,r){var n=g+C,y=j+M;if(0===r.size()){var Y=n+u,h=y+A;"leftBottom"===c?h=j+f-M-A:"rightTop"===c?Y=g+x-C-u:"rightBottom"===c&&(Y=g+x-C-u,h=j+f-M-A);var O=b-Y,V=X-h,s=Math.sqrt(O*O+V*V);if(F>s)return Q._corner=c,r.add(W),Q.layoutPanels(w,c,0),!0}else if(1===r.size()){var G=r.get(0),H=G.getView().getBoundingClientRect(),S=H.left+u,Z=H.top+A,a=H.left+H.width+C+u,J=y+A,P=n+u,k=H.top+H.height+M+A;"leftBottom"===c?(Z=H.top+H.height-A,J=j+f-M-A,k=H.top-M-A):"rightTop"===c?(S=H.left+H.width-u,a=H.left-C-u,P=g+x-C-u):"rightBottom"===c&&(S=H.left+H.width-u,Z=H.top+H.height-A,a=H.left-C-u,J=j+f-M-A,P=g+x-C-u,k=H.top-M-A);var I=b-S,m=X-Z,t=b-a,v=X-J,e=b-P,z=X-k,D=N(Math.sqrt(I*I+m*m)),p=N(Math.sqrt(t*t+v*v)),L=N(Math.sqrt(e*e+z*z)),d=[D,p,L];d.sort(function(l,B){return l-B});var E=d[0];if(F>E){if(Q._corner=c,E===D)return r.add(W,0),Q.layoutPanels(w,c,0),!0;if(E===p)return r.add(W),r.$49i="h",Q.layoutPanels(w,c,1),!0;if(E===L)return r.add(W),r.$49i="v",Q.layoutPanels(w,c,1),!0}}else if(r.size()>1){for(var q=R,T={},K=[],l=r.$49i,o=0;o<r.size();o++){var $=r.get(o),U=$.getView(),_=U.getBoundingClientRect(),B=_.left+u,i=_.top+A;"leftBottom"===c?i=_.top+_.height-A:"rightTop"===c?B=_.left+_.width-u:"rightBottom"===c&&(B=_.left+_.width-u,i=_.top+_.height-A),o===r.size()-1&&(q=_);var O=b-B,V=X-i,s=N(Math.sqrt(O*O+V*V));T[s]=o,K.push(s)}"leftTop"===c&&"h"===l?(Y=q.left+q.width+C+u,h=y+A):"leftTop"===c&&"v"===l?(Y=n+u,h=q.top+q.height+M+A):"leftBottom"===c&&"h"===l?(Y=q.left+q.width+C+u,h=j+f-M-A):"leftBottom"===c&&"v"===l?(Y=n+u,h=q.top-M-A):"rightTop"===c&&"h"===l?(Y=q.left-C-u,h=y+A):"rightTop"===c&&"v"===l?(Y=g+x-C-u,h=q.top+q.height+M+A):"rightBottom"===c&&"h"===l?(Y=q.left-C-u,h=j+f-M-A):"rightBottom"===c&&"v"===l&&(Y=g+x-C-u,h=q.top-M-A),O=b-Y,V=X-h,s=N(Math.sqrt(O*O+V*V)),T[s]=o,K.push(s),K.sort(function(K,G){return K-G});var E=K[0];if(F>E)return Q._corner=c,r.add(W,T[E]),Q.layoutPanels(w,c,T[E]),!0}};s("leftTop",H)||s("leftBottom",k)||s("rightTop",V)||s("rightBottom",P)}}}})}("undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:this,Object);