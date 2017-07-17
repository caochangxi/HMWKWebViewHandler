!function(T,n,r){"use strict";var $="ht",C=T[$],S=null,z=Math,A=z.abs,o=z.max,d=Number.MAX_VALUE,Q=C.Default,f=Q.getInternal(),y=Q.clone,H=f.vec3TransformMat4,e=f.appendArray,t=function(){var O=/v( +[\d|\.|\+|\-|e]+)( +[\d|\.|\+|\-|e]+)( +[\d|\.|\+|\-|e]+)/,G=/vt( +[\d|\.|\+|\-|e]+)( +[\d|\.|\+|\-|e]+)/,x=/vn( +[\d|\.|\+|\-|e]+)( +[\d|\.|\+|\-|e]+)( +[\d|\.|\+|\-|e]+)/,_=/f( +\d+)( +\d+)( +\d+)( +\d+)?/,R=/f( +(\d+)\/(\d+))( +(\d+)\/(\d+))( +(\d+)\/(\d+))( +(\d+)\/(\d+))?/,Z=/f( +(\d+)\/(\d+)\/(\d+))( +(\d+)\/(\d+)\/(\d+))( +(\d+)\/(\d+)\/(\d+))( +(\d+)\/(\d+)\/(\d+))?/,D=/f( +(\d+)\/\/(\d+))( +(\d+)\/\/(\d+))( +(\d+)\/\/(\d+))( +(\d+)\/\/(\d+))?/,h=function(Z,W){return W=parseInt(W),W>=0?Z[W-1]:Z[W+Z.length]},$=function(p,s,o,P,G,q){if(p.vs){var S=h(s,P),M=h(s,G),x=h(s,q),C=o.matrix,W=p.vs;if(o.flipFace){var J=M;M=x,x=J}C?(e(W,H(y(S),C)),e(W,H(y(M),C)),e(W,H(y(x),C))):(e(W,S),e(W,M),e(W,x))}},c=function(H,z,e,d,Q,D){if(H.vs){var v=h(z,d),M=h(z,Q),C=h(z,D),P=e.flipY;if(e.flipFace){var K=M;M=C,C=K}H.uv.push(v[0],P?1-v[1]:v[1],M[0],P?1-M[1]:M[1],C[0],P?1-C[1]:C[1])}},v=function(Y,n,O,w,j,U){if(Y.vs){var N=h(n,w),k=h(n,j),G=h(n,U),V=O.normalMatrix,R=Y.ns;if(O.flipFace){var s=k;k=G,G=s}V?(e(R,H(y(N),V)),e(R,H(y(k),V)),e(R,H(y(G),V))):(e(R,N),e(R,k),e(R,G))}},s=function(J,V,e,p,X,S,R,t){var q=p&&p.length&&t;S[3]===r?($(J,V,X,S[0],S[1],S[2]),R&&c(J,e,X,R[0],R[1],R[2]),q&&v(J,p,X,t[0],t[1],t[2])):($(J,V,X,S[0],S[1],S[3]),$(J,V,X,S[1],S[2],S[3]),R&&(c(J,e,X,R[0],R[1],R[3]),c(J,e,X,R[1],R[2],R[3])),q&&(v(J,p,X,t[0],t[1],t[3]),v(J,p,X,t[1],t[2],t[3])))},q=function(h,i,v,e){var q,K,U,S,$,z,X,J=d,k=d,f=d,c=-d,H=-d,u=-d;for(q in h)for(z=h[q].vs,X=z.length,K=0;X>K;K+=3)U=z[K+0],S=z[K+1],$=z[K+2],J>U&&(J=U),k>S&&(k=S),f>$&&(f=$),U>c&&(c=U),S>H&&(H=S),$>u&&(u=$);if(v){var P=J+(c-J)/2,b=k+(H-k)/2,N=f+(u-f)/2;for(q in h)for(z=h[q].vs,X=z.length,K=0;X>K;K+=3)z[K+0]-=P,z[K+1]-=b,z[K+2]-=N}var R,t,T;v?(R=c-J,t=H-k,T=u-f):(R=2*o(A(J),A(c)),t=2*o(A(k),A(H)),T=2*o(A(f),A(u))),e.rawS3=[R,t,T];for(q in h){if(z=h[q].vs,i)for(X=z.length,K=0;X>K;K+=3)R&&(z[K+0]/=R),t&&(z[K+1]/=t),T&&(z[K+2]/=T);h[q].rawS3=e.rawS3}};return function(M,Y,y){if(!M)return S;f.isString(Y)&&(Y=g(Y)),y||(y={}),y.flipY==S&&(y.flipY=!0),(y.s3||y.r3||y.t3||y.mat)&&(y.matrix=f.createWorldMatrix(y.mat,y.s3,y.r3,y.rotationMode,y.t3));var V,p,j,a,T,X,r=[],z=[],P=y.ignoreNormal?S:[],E=y.reverseFlipMtls,K={vs:[],uv:[],ns:P?[]:S},l={htdefault:K},c=M.split("\n"),h=0;for(P&&y.matrix&&(y.normalMatrix=f.createNormalMatrix(y.matrix));h<c.length;h++)if(p=c[h].trim(),0!==p.length&&"#"!==p.charAt(0))if(j=O.exec(p))r.push([parseFloat(j[1]),parseFloat(j[2]),parseFloat(j[3])]);else if(j=G.exec(p))z.push([parseFloat(j[1]),parseFloat(j[2])]);else if(P&&(j=x.exec(p)))y.flipFace?P.push([parseFloat(-j[1]),parseFloat(-j[2]),parseFloat(-j[3])]):P.push([parseFloat(j[1]),parseFloat(j[2]),parseFloat(j[3])]);else if(j=_.exec(p))s(K,r,z,P,y,[j[1],j[2],j[3],j[4]]);else if(j=R.exec(p))s(K,r,z,P,y,[j[2],j[5],j[8],j[11]],[j[3],j[6],j[9],j[12]]);else if(j=Z.exec(p))s(K,r,z,P,y,[j[2],j[6],j[10],j[14]],[j[3],j[7],j[11],j[15]],[j[4],j[8],j[12],j[16]]);else if(j=D.exec(p))s(K,r,z,P,y,[j[2],j[5],j[8],j[11]],S,[j[3],j[6],j[9],j[12]]);else if(/^usemtl /.test(p)&&(a=p.substring(7).trim(),!(K=l[a]))){if(K={name:a,vs:[],uv:[],ns:P?[]:S},y.ignoreMtls&&y.ignoreMtls.indexOf(a)>=0&&delete K.vs,(y.reverseFlip||"*"===E||E&&E.indexOf(a)>=0)&&(K.reverseFlip=!0),Y&&(T=Y[a],T&&(y.ignoreColor||(K.color=T.kd),!y.ignoreTransparent&&T.d>0&&T.d<1&&(K.transparent=!0,K.opacity=T.d),!y.ignoreImage&&(X=T.map_kd)))){for(X=X.split(" "),V=0;V<X.length;V++)"-o"===X[V]?(K.uvOffset=[parseFloat(X[V+1]),parseFloat(X[V+2])],V+=2):"-s"===X[V]&&(K.uvScale=[parseFloat(X[V+1]),parseFloat(X[V+2])],V+=2);K.image=(y.prefix||"")+X[X.length-1]}l[a]=K}var A=[];for(var v in l){var t=l[v].vs;t&&0!==t.length||A.push(v)}A.forEach(function(h){delete l[h]}),q(l,y.cube,y.center,y);var e=y.shape3d;if(e){var i=[];for(var a in l){var K=l[a];i.rawS3=K.rawS3,i.push(K)}Q.setShape3dModel(e,i)}return l}}(),g=function(n){var q={};if(n)for(var y,A,f,R,K,B,N=n.split("\n"),w=/\s+/,u=0;u<N.length;u++)A=N[u].trim(),0!==A.length&&"#"!==A.charAt(0)&&(f=A.indexOf(" "),R=(f?A.substring(0,f):A).toLowerCase(),K=(f?A.substring(f+1):"").trim(),"newmtl"===R?q[K]=y={name:K}:y&&("ka"===R||"kd"===R||"ks"===R?(B=K.split(w,3),y[R]=[parseFloat(B[0]),parseFloat(B[1]),parseFloat(B[2]),1]):y[R]="ns"===R||"d"===R?parseFloat(K):K));return q};f.addMethod(Q,{loadObj:function(W,R,f){f=f||{},Q.xhrLoad(R?[W,R]:[W],function(D){var R,r=f.finishFunc,K=f.shape3d,S=D?t(D[0],D[1],f):null;if(S){if(K)R=Q.getShape3dModel(K);else{R=[];for(var h in S){var v=S[h];R.rawS3=v.rawS3,R.push(v)}}r&&r(S,R,R.rawS3)}else r&&r(null)},f)},parseObj:function(r,S,n){return t(r,S,n)}})}("undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:this,Object);