(self.webpackChunkgovmap_angular=self.webpackChunkgovmap_angular||[]).push([[665],{6665:(e,t,i)=>{"use strict";i.r(t),i.d(t,{GovMapModule:()=>C});var s=i(8583),n=i(7716),a=i(1841),o=i(6215),r=i(7574),h=(i(9765),i(739),i(3190));i(5257),i(8002),i(6782);const g=["*"];class p{constructor(e){this._ngZone=e,this._pending=[],this._listeners=[],this._targetStream=new o.X(void 0)}_clearListeners(){for(const e of this._listeners)e.remove();this._listeners=[]}getLazyEmitter(e){return this._targetStream.pipe((0,h.w)(t=>{const i=new r.y(s=>{if(!t)return void this._pending.push({observable:i,observer:s});const n=t.addListener(e,e=>{this._ngZone.run(()=>s.next(e))});return this._listeners.push(n),()=>n.remove()});return i}))}setTarget(e){const t=this._targetStream.value;e!==t&&(t&&(this._clearListeners(),this._pending=[]),this._targetStream.next(e),this._pending.forEach(e=>e.observable.subscribe(e.observer)),this._pending=[])}destroy(){this._clearListeners(),this._pending=[],this._targetStream.complete()}}const l={center:{lat:37.421995,lng:-122.084092},zoom:17,mapTypeId:"roadmap"},d="500px",m="500px";let c=(()=>{class e{constructor(e,t,i){this._elementRef=e,this._ngZone=t,this._eventManager=new p(this._ngZone),this.height=d,this.width=m,this._options=l,this.boundsChanged=this._eventManager.getLazyEmitter("bounds_changed"),this.centerChanged=this._eventManager.getLazyEmitter("center_changed"),this.mapClick=this._eventManager.getLazyEmitter("click"),this.mapDblclick=this._eventManager.getLazyEmitter("dblclick"),this.mapDrag=this._eventManager.getLazyEmitter("drag"),this.mapDragend=this._eventManager.getLazyEmitter("dragend"),this.mapDragstart=this._eventManager.getLazyEmitter("dragstart"),this.headingChanged=this._eventManager.getLazyEmitter("heading_changed"),this.idle=this._eventManager.getLazyEmitter("idle"),this.maptypeidChanged=this._eventManager.getLazyEmitter("maptypeid_changed"),this.mapMousemove=this._eventManager.getLazyEmitter("mousemove"),this.mapMouseout=this._eventManager.getLazyEmitter("mouseout"),this.mapMouseover=this._eventManager.getLazyEmitter("mouseover"),this.projectionChanged=this._eventManager.getLazyEmitter("projection_changed"),this.mapRightclick=this._eventManager.getLazyEmitter("rightclick"),this.tilesloaded=this._eventManager.getLazyEmitter("tilesloaded"),this.tiltChanged=this._eventManager.getLazyEmitter("tilt_changed"),this.zoomChanged=this._eventManager.getLazyEmitter("zoom_changed"),this._isBrowser=(0,s.NF)(i),this._isBrowser&&window}set center(e){this._center=e}set zoom(e){this._zoom=e}set options(e){this._options=e||l}ngOnChanges(e){(e.height||e.width)&&this._setSize();const t=this.googleMap;t&&(e.options&&t.setOptions(this._combineOptions()),e.center&&this._center&&t.setCenter(this._center),e.zoom&&null!=this._zoom&&t.setZoom(this._zoom),e.mapTypeId&&this.mapTypeId&&t.setMapTypeId(this.mapTypeId))}ngOnInit(){this._isBrowser&&(this._mapEl=this._elementRef.nativeElement.querySelector(".map-container"),this._setSize(),this._ngZone.runOutsideAngular(()=>{this.googleMap=new google.maps.Map(this._mapEl,this._combineOptions())}),this._eventManager.setTarget(this.googleMap))}ngOnDestroy(){this._eventManager.destroy()}fitBounds(e,t){this._assertInitialized(),this.googleMap.fitBounds(e,t)}panBy(e,t){this._assertInitialized(),this.googleMap.panBy(e,t)}panTo(e){this._assertInitialized(),this.googleMap.panTo(e)}panToBounds(e,t){this._assertInitialized(),this.googleMap.panToBounds(e,t)}getBounds(){return this._assertInitialized(),this.googleMap.getBounds()||null}getCenter(){return this._assertInitialized(),this.googleMap.getCenter()}getClickableIcons(){return this._assertInitialized(),this.googleMap.getClickableIcons()}getHeading(){return this._assertInitialized(),this.googleMap.getHeading()}getMapTypeId(){return this._assertInitialized(),this.googleMap.getMapTypeId()}getProjection(){return this._assertInitialized(),this.googleMap.getProjection()}getStreetView(){return this._assertInitialized(),this.googleMap.getStreetView()}getTilt(){return this._assertInitialized(),this.googleMap.getTilt()}getZoom(){return this._assertInitialized(),this.googleMap.getZoom()}get controls(){return this._assertInitialized(),this.googleMap.controls}get data(){return this._assertInitialized(),this.googleMap.data}get mapTypes(){return this._assertInitialized(),this.googleMap.mapTypes}get overlayMapTypes(){return this._assertInitialized(),this.googleMap.overlayMapTypes}_setSize(){if(this._mapEl){const e=this._mapEl.style;e.height=null===this.height?"":_(this.height)||d,e.width=null===this.width?"":_(this.width)||m}}_combineOptions(){var e,t;const i=this._options||{};return Object.assign(Object.assign({},i),{center:this._center||i.center||l.center,zoom:null!==(t=null!==(e=this._zoom)&&void 0!==e?e:i.zoom)&&void 0!==t?t:l.zoom,mapTypeId:this.mapTypeId||i.mapTypeId||l.mapTypeId})}_assertInitialized(){}}return e.\u0275fac=function(t){return new(t||e)(n.Y36(n.SBq),n.Y36(n.R0b),n.Y36(n.Lbi))},e.\u0275cmp=n.Xpm({type:e,selectors:[["google-map"]],inputs:{height:"height",width:"width",center:"center",zoom:"zoom",options:"options",mapTypeId:"mapTypeId"},outputs:{boundsChanged:"boundsChanged",centerChanged:"centerChanged",mapClick:"mapClick",mapDblclick:"mapDblclick",mapDrag:"mapDrag",mapDragend:"mapDragend",mapDragstart:"mapDragstart",headingChanged:"headingChanged",idle:"idle",maptypeidChanged:"maptypeidChanged",mapMousemove:"mapMousemove",mapMouseout:"mapMouseout",mapMouseover:"mapMouseover",projectionChanged:"projectionChanged",mapRightclick:"mapRightclick",tilesloaded:"tilesloaded",tiltChanged:"tiltChanged",zoomChanged:"zoomChanged"},exportAs:["googleMap"],features:[n.TTD],ngContentSelectors:g,decls:2,vars:0,consts:[[1,"map-container"]],template:function(e,t){1&e&&(n.F$t(),n._UZ(0,"div",0),n.Hsn(1))},encapsulation:2,changeDetection:0}),e})();const u=/([A-Za-z%]+)$/;function _(e){return null==e?"":u.test(e)?e:`${e}px`}let z=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=n.oAB({type:e}),e.\u0275inj=n.cJS({}),e})(),M=(()=>{class e{constructor(e){this.apiLoaded=!1,this.zoom=12,this.options={mapTypeId:"hybrid",zoomControl:!0,scrollwheel:!0,disableDoubleClickZoom:!0}}ngOnInit(){navigator.geolocation.getCurrentPosition(e=>{this.center={lat:e.coords.latitude,lng:e.coords.longitude}})}zoomInOut(e){}moveMap(e){this.center=e.latLng.toJSON()}move(e){this.display=e.latLng.toJSON()}}return e.\u0275fac=function(t){return new(t||e)(n.Y36(a.eN))},e.\u0275cmp=n.Xpm({type:e,selectors:[["app-govmap"]],decls:1,vars:3,consts:[["height","780px","width","100%",3,"zoom","center","options","mapClick","mapMousemove","wheel"]],template:function(e,t){1&e&&(n.TgZ(0,"google-map",0),n.NdJ("mapClick",function(e){return t.moveMap(e)})("mapMousemove",function(e){return t.move(e)})("wheel",function(e){return t.zoomInOut(e)}),n.qZA()),2&e&&n.Q6J("zoom",t.zoom)("center",t.center)("options",t.options)},directives:[c],styles:[""]}),e})();var v=i(9763);const y=[{path:"",component:M}];let C=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=n.oAB({type:e}),e.\u0275inj=n.cJS({imports:[[s.ez,v.Bz.forChild(y),z,a.JF]]}),e})()}}]);