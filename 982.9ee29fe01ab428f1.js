"use strict";(self.webpackChunkapp_efnol=self.webpackChunkapp_efnol||[]).push([[982],{3982:(ct,V,n)=>{n.r(V),n.d(V,{ViewsOrchestrationModule:()=>u});var a=n(6895),x=n(1955),P=n(2999),T=n(2323),U=n(6258),$=n(655),t=n(1571),p=n(6551),M=n(5532);class c{constructor(){this.phoneNumber=M._.PHONE_NUMBER}}c.\u0275fac=function(e){return new(e||c)},c.\u0275cmp=t.Xpm({type:c,selectors:[["app-kin-page-not-found"]],decls:14,vars:2,consts:[[1,"container"],[1,"row"],[1,"col-sm-10","col-sm-offset-3"],[1,"v-list"],[1,"text","text--36"],["href","/",1,"text","text__link","text__primary"],[1,"text","text__link","text__primary",3,"href"]],template:function(e,o){1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"h1",4),t._uU(5,"404 Page Not Found"),t.qZA(),t.TgZ(6,"p"),t._uU(7," Please "),t.TgZ(8,"a",5),t._uU(9,"start over"),t.qZA(),t._uU(10,", or call us at "),t.TgZ(11,"a",6),t._uU(12),t.qZA(),t._uU(13,". "),t.qZA()()()()()),2&e&&(t.xp6(11),t.MGl("href","tel:",o.phoneNumber,"",t.LSH),t.xp6(1),t.Oqu(o.phoneNumber))},styles:[".container[_ngcontent-%COMP%]{padding:1.5rem;max-width:96rem;margin:0 auto}@media only screen and (min-width: 992px){.container[_ngcontent-%COMP%]{padding:4.375rem 1.5rem 1.5rem}}"],changeDetection:0});const R=[{path:"",component:c}];class l{}l.\u0275fac=function(e){return new(e||l)},l.\u0275mod=t.oAB({type:l}),l.\u0275inj=t.cJS({imports:[a.ez,p.Bz.forChild(R)]});var r,Z=n(6911),B=n(9364);let w=((r=class extends B.K{constructor(){super(...arguments),this.onSubmit=new t.vpe}}).\u0275fac=function(){let i;return function(o){return(i||(i=t.n5z(r)))(o||r)}}(),r.\u0275cmp=t.Xpm({type:r,selectors:[["app-kin-view-not-found"]],inputs:{prefill:"prefill"},outputs:{onSubmit:"onSubmit"},standalone:!0,features:[t.qOj,t.jDz],decls:1,vars:0,template:function(e,o){1&e&&t._UZ(0,"app-kin-page-not-found")},dependencies:[a.ez,l,c],changeDetection:0}),r);w=(0,$.gn)([(0,Z.R)({label:"View Not Found Component"})],w);var Y=n(7216),E=n(1449),j=n(5469),z=n(433),f=n(3050);class m{}m.\u0275fac=function(e){return new(e||m)},m.\u0275mod=t.oAB({type:m}),m.\u0275inj=t.cJS({imports:[a.ez,z.UX,f.zS,f.h8,f.Dt,f.HZ]});var D=n(2107),H=n(4568),X=n(9078),J=n(2010),I=n(464),Q=n(885),G=n(1466),N=n(7579),K=n(1135),O=n(2722),L=n(3504),W=n(9841),k=n(5698),C=n(3905),q=n(3828),A=n(6377),F=n(7746),b=n(6003);class h{get loadedView(){return this._loadedView}constructor(e,o,s,S){this.viewContainerRef=e,this.store=o,this.router=s,this.viewNavigationService=S,this.unSubAll$=new N.x,this.storeStream$=this.store.select(A.Pp)}ngOnDestroy(){this.viewContainerRef.clear(),this.unSubAll$.next(),this.unSubAll$.complete()}loadView(e){if(e){const{prefillSelector:o}=e;(0,W.a)([this.store.select(A.Pp),this.store.select(q.Vr),...o?[this.store.select(o)]:[]]).pipe((0,k.q)(1),(0,O.R)(this.unSubAll$)).subscribe(([s,S,y])=>{const v=this.createComponent(e);v&&(v.claimNoticeState=s,v.claimConfigState=S,y&&(v.prefill=y))})}else console.warn("component reference empty, nothing loaded or removed")}destroyLoadedView(){this.unSubAll$.next(),this.viewContainerRef.clear()}reactToOnExitEvent(e){e?.pipe((0,O.R)(this.unSubAll$)).subscribe(o=>{this.router.navigateByUrl(o.routeUrl,{state:o.routeState}),this.store.dispatch((0,C.hl)())})}reactToOnSubmitEvent(e){e?.pipe((0,O.R)(this.unSubAll$)).subscribe(o=>{this.store.dispatch((0,C.ow)({formData:o})),this.viewNavigationService.canMoveForward()?this.viewNavigationService.moveForward():this.router.navigateByUrl("/processing")})}createComponent(e){return this._loadedView&&this.destroyLoadedView(),this._loadedView=this.viewContainerRef.createComponent(e),this.reactToOnSubmitEvent(this._loadedView.instance.onSubmit),this.reactToOnExitEvent(this._loadedView.instance.onExit),this._loadedView.instance}}h.\u0275fac=function(e){return new(e||h)(t.Y36(t.s_b),t.Y36(F.yh),t.Y36(p.F0),t.Y36(b.R))},h.\u0275dir=t.lG2({type:h,selectors:[["","appKinOrchestrationViewHost",""]]});var _=n(8624),tt=n(3361),et=n(4997);function nt(i,e){1&i&&t._UZ(0,"div",4),2&i&&t.Q6J("@fadeInOutOfExistence",void 0)}function ot(i,e){}class g{constructor(e,o,s,S,y,v,at,rt){this.store=e,this.router=o,this.ref=s,this.viewportScroller=S,this.viewNavigationService=y,this.authService=v,this.sessionStorage=at,this.document=rt,this.translateXAnimationState=0,this.unSubAll$=new N.x,this.viewOptionsSubject$=new K.X({}),this.viewOptions$=this.viewOptionsSubject$.asObservable()}ngOnInit(){const e=this.sessionStorage.getItem(_.iW);this.authService.isSessionActive()&&e&&e.length>1&&this.restoreSession(e),this.viewNavigationService.navigationState$.pipe((0,O.R)(this.unSubAll$)).subscribe(o=>{this.reactToViewNavigationChanges(o)})}ngOnDestroy(){this.unSubAll$.next(),this.unSubAll$.complete(),this.viewOptionsSubject$.complete()}reactToViewNavigationChanges(e){this.changeViewComponent(e),this.translateXAnimationState=e.previousViews.length}changeViewComponent(e){const o=tt.B.get(e.currentView?.componentUniqueId)??w;this.viewHost.loadedView?.instance instanceof o||(this.viewHost.loadView(o),this.viewOptionsSubject$.next(o.options),this.ref.markForCheck(),setTimeout(()=>{this.viewportScroller.scrollToPosition([0,0]),this.document.activeElement?.blur(),this.document.defaultView?.focus()}))}restoreSession(e){const o=JSON.parse(e);this.store.dispatch((0,C.cl)({formData:o.formData,config:o.config}))}}g.\u0275fac=function(e){return new(e||g)(t.Y36(F.yh),t.Y36(p.F0),t.Y36(t.sBO),t.Y36(a.EM),t.Y36(b.R),t.Y36(et.r),t.Y36(f.EA),t.Y36(a.K0))},g.\u0275cmp=t.Xpm({type:g,selectors:[["app-kin-orchestration-container"]],viewQuery:function(e,o){if(1&e&&t.Gf(h,7),2&e){let s;t.iGM(s=t.CRH())&&(o.viewHost=s.first)}},decls:5,vars:4,consts:[["class","view-background view-background__half-ellipse",4,"ngIf"],[1,"container"],["appKinOrchestrationViewHost",""],["mode","body"],[1,"view-background","view-background__half-ellipse"]],template:function(e,o){if(1&e&&(t.YNc(0,nt,1,1,"div",0),t.ALo(1,"async"),t.TgZ(2,"div",1),t.YNc(3,ot,0,0,"ng-template",2),t.qZA(),t._UZ(4,"app-kin-back-button",3)),2&e){let s;t.Q6J("ngIf","circle"===(null==(s=t.lcZ(1,2,o.viewOptions$))?null:s.background)),t.xp6(2),t.Q6J("@routeTranslateX",o.translateXAnimationState)}},dependencies:[a.O5,x.c,h,a.Ov],styles:[".container[_ngcontent-%COMP%]{padding:1.5rem;max-width:96rem;margin:0 auto;position:relative}@media only screen and (min-width: 992px){.container[_ngcontent-%COMP%]{padding:4.375rem 1.5rem 1.5rem}}"],data:{animation:[G.PO,L.U]},changeDetection:0});const it=[{path:"",component:g,data:{transitionAnimation:"translateX"}}];class d{}d.\u0275fac=function(e){return new(e||d)},d.\u0275mod=t.oAB({type:d}),d.\u0275inj=t.cJS({imports:[p.Bz.forChild(it),p.Bz]});var st=n(1913);class u{}u.\u0275fac=function(e){return new(e||u)},u.\u0275mod=t.oAB({type:u}),u.\u0275inj=t.cJS({imports:[a.ez,d,w,U.Z,x.c,P.g,E.P,j.g,H.V,J.W,I.g,X.n,Q.F,m,Y.x,T.z,st.X,D.S]})}}]);