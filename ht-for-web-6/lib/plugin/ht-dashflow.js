!function(v){"use strict";var Z="ht",s=v[Z],O=s.Default,T=Math,X=(T.PI,T.sin,T.cos,T.atan2,T.sqrt,T.max),o=T.floor,h=(T.round,T.ceil),M=s.Shape,N=(s.Edge,s.List),B=s.Style,z=s.graph,n=O.getInternal(),H=n.ui(),j=null,$="prototype",r=v.clearInterval,k=v.setInterval,F=function(O){var k=O.data,w=this.dm();if(k&&"add"===O.kind){var u=w.$1c,F=k instanceof M?"shape.":"edge.";u&&k.s(F+"dash.flow")&&u.indexOf(k)<0&&u.push(k)}"clear"===O.kind&&(w.$1c=[])},V=function(K){var u=K.property,A=K.data,P=K.newValue,W=this.dm().$1c,n=A instanceof M?"s:shape.dash.flow":"s:edge.dash.flow";if(W&&u===n)if(P)W.indexOf(A)<0&&W.push(A);else for(var N=W.length,o=0;N>o;o++)if(W[o]===A){W.splice(o,1);break}},A=z.GraphView[$],t=H.EdgeUI[$],U=H.ShapeUI[$],u=U._80o,E=t._80o,Y=s.DataModel[$],y=Y.prepareRemove,g=A.setDataModel;B["edge.dash.flow.step"]==j&&(B["edge.dash.flow.step"]=3),B["shape.dash.flow.step"]==j&&(B["shape.dash.flow.step"]=3),Y.prepareRemove=function(B){y.call(this,B);var R=B._dataModel,X=R.$1c;if(X)for(var C=X.length,f=0;C>f;f++)if(X[f]===B){X.splice(f,1);break}},A.setDataModel=function(K){var h=this,W=h._dataModel;if(W!==K){W&&(W.umm(F,h),W.umd(V,h),W.$1c=[]),K.mm(F,h),K.md(V,h);var m=K.$1c=[];K.each(function(Z){var l=Z instanceof M?"shape.":"edge.";Z.s(l+"dash.flow")&&m.indexOf(Z)<0&&m.push(Z)}),g.call(h,K)}},A.setDashFlowInterval=function(T){var k=this,m=k.$2c;k.$2c=T,k.fp("dashFlowInterval",m,T),k.$3c!=j&&(r(k.$3c),delete k.$3c,k.enableDashFlow(T))},A.getDashFlowInterval=function(){return this.$2c},A.$4c=function(){var Q,y,K,W=this,f=W.tx(),g=W.ty(),U=W._zoom,_=W.getWidth(),x=W.getHeight(),T={x:-f/U,y:-g/U,width:_/U,height:x/U},G=W.dm().$1c,H=W._56I,z=new N;if(G.forEach(function(m){H[m.getId()]&&(Q=W.getDataUI(m),Q&&(K=Q._79o(),K&&z.add(K)))}),0!==z.size()&&(z.each(function(F){O.intersectsRect(T,F)&&(y=O.unionRect(y,F))}),y&&(y&&(O.grow(y,X(1,1/U)),y.x=o(y.x*U)/U,y.y=o(y.y*U)/U,y.width=h(y.width*U)/U,y.height=h(y.height*U)/U,y=O.intersection(T,y)),y))){var S=W._canvas.getContext("2d");S.save(),S.lineCap=O.lineCap,S.lineJoin=O.lineJoin,n.translateAndScale(S,f,g,U),S.beginPath(),S.rect(y.x,y.y,y.width,y.height),S.clip(),S.clearRect(y.x,y.y,y.width,y.height),W.$5c(S,y),S.restore()}},A.$5c=function(w,f){var i,B,l=this;l._93db(w),l.each(function(x){l._56I[x._id]&&(i=l.getDataUI(x),i&&(B=i._79o(),(!f||O.intersectsRect(f,B))&&(i.$7c=!0,i._42(w),delete i.$7c)))}),l._92db(w)},A.enableDashFlow=function(Q){var m=this;m.$3c==j&&(m.$3c=k(function(){m.$4c()},Q||m.$2c||50))},A.disableDashFlow=function(){var h=this;r(h.$3c),delete h.$3c};var P=function(){var D=this,Q=D._data,U=Q instanceof M?"shape.":"edge.",g=Q.s(U+"dash.pattern"),j=Q.s(U+"dash.flow.reverse");if(g&&Q.s(U+"dash")&&Q.s(U+"dash.flow")&&D.$7c){var i=D.s(U+"dash.offset")||0,h=Q.s(U+"dash.flow.step"),l=Q.getStyleMap(),z=0;g.forEach(function(V){z+=V}),j&&(h=-h),i-=h,i%=z,l||(Q._styleMap=l={}),l[U+"dash.offset"]=i}};t._80o=function(b){E.call(this,b),P.call(this)},U._80o=function(E){u.call(this,E),P.call(this)}}("undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:this,Object);