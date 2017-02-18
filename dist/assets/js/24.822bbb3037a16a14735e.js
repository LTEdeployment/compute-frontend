webpackJsonp([24,45],{109:function(s,e,t){t(511);var a=t(0)(t(375),t(609),"data-v-c65fbfba",null);s.exports=a.exports},375:function(s,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=t(541),r=t.n(a);e.default={components:{ProgressBar:r.a},data:function(){return{dynamicValue:60}},methods:{plus:function(){100!==this.dynamicValue&&(this.dynamicValue+=10)},minus:function(){0!==this.dynamicValue&&(this.dynamicValue-=10)}}}},406:function(s,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{type:String,size:String,value:{type:Number,required:!0,default:0},max:{type:Number,required:!0,default:0},showLabel:Boolean},computed:{percentage:function(){return this.value/this.max*100}}}},447:function(s,e,t){e=s.exports=t(90)(),e.push([s.i,".progress-container{-ms-flex-align:center;align-items:center;margin-bottom:20px}.progress-container .progress{position:relative;margin-bottom:0!important}.progress-container .progress+span{margin-left:10px;min-width:36px;text-align:right}","",{version:3,sources:["/./node_modules/vue-bulma-progress-bar/src/ProgressBar.vue"],names:[],mappings:"AACA,oBAAoB,sBAAsB,mBAAmB,kBAAkB,CAC9E,AACD,8BAA8B,kBAAkB,yBAA0B,CACzE,AACD,mCAAmC,iBAAiB,eAAe,gBAAgB,CAClF",file:"ProgressBar.vue",sourcesContent:["\n.progress-container{-ms-flex-align:center;align-items:center;margin-bottom:20px\n}\n.progress-container .progress{position:relative;margin-bottom:0 !important\n}\n.progress-container .progress+span{margin-left:10px;min-width:36px;text-align:right\n}\n"],sourceRoot:"webpack://"}])},467:function(s,e,t){e=s.exports=t(90)(),e.push([s.i,".button[data-v-c65fbfba]{margin:5px 0 0}","",{version:3,sources:["/./client/views/components/ProgressBar.vue"],names:[],mappings:"AACA,yBAAyB,cAAc,CACtC",file:"ProgressBar.vue",sourcesContent:["\n.button[data-v-c65fbfba]{margin:5px 0 0\n}\n"],sourceRoot:"webpack://"}])},491:function(s,e,t){var a=t(447);"string"==typeof a&&(a=[[s.i,a,""]]);t(91)(a,{});a.locals&&(s.exports=a.locals)},511:function(s,e,t){var a=t(467);"string"==typeof a&&(a=[[s.i,a,""]]);t(91)(a,{});a.locals&&(s.exports=a.locals)},541:function(s,e,t){t(491);var a=t(0)(t(406),t(584),null,null);s.exports=a.exports},584:function(s,e){s.exports={render:function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("div",{staticClass:"progress-container is-flex"},[t("progress",{class:["progress",s.type?"is-"+s.type:"",s.size?"is-"+s.size:""],attrs:{value:s.value,max:s.max}}),s._v(" "),s.showLabel?t("span",[s._v(s._s(s.percentage+"%"))]):s._e()])},staticRenderFns:[]}},609:function(s,e){s.exports={render:function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("div",[t("div",{staticClass:"tile is-ancestor"},[t("div",{staticClass:"tile is-parent is-4"},[t("article",{staticClass:"tile is-child box"},[t("h1",{staticClass:"title"},[s._v("Bar Styles")]),s._v(" "),t("div",{staticClass:"block styles-box"},[t("progress-bar",{attrs:{value:15,max:100}}),s._v(" "),t("progress-bar",{attrs:{type:"primary",value:30,max:100}}),s._v(" "),t("progress-bar",{attrs:{type:"info",value:45,max:100}}),s._v(" "),t("progress-bar",{attrs:{type:"success",value:60,max:100}}),s._v(" "),t("progress-bar",{attrs:{type:"warning",value:75,max:100}}),s._v(" "),t("progress-bar",{attrs:{type:"danger",value:90,max:100}})],1)])]),s._v(" "),t("div",{staticClass:"tile is-parent is-4"},[t("article",{staticClass:"tile is-child box"},[t("h1",{staticClass:"title"},[s._v("Bar Sizes")]),s._v(" "),t("div",{staticClass:"block"},[t("progress-bar",{attrs:{size:"small",value:15,max:100,"show-label":!0}}),s._v(" "),t("progress-bar",{attrs:{size:"",value:30,max:100,"show-label":!0}}),s._v(" "),t("progress-bar",{attrs:{size:"medium",value:45,max:100,"show-label":!0}}),s._v(" "),t("progress-bar",{attrs:{size:"large",value:60,max:100,"show-label":!0}})],1)])]),s._v(" "),t("div",{staticClass:"tile is-parent is-4"},[t("article",{staticClass:"tile is-child box"},[t("h1",{staticClass:"title"},[s._v("Bar Dynamics")]),s._v(" "),t("div",{staticClass:"block"},[t("progress-bar",{attrs:{type:"success",size:"large",value:s.dynamicValue,max:100,"show-label":!0}}),s._v(" "),t("p",{staticClass:"control has-addons"},[t("a",{staticClass:"button",on:{click:s.plus}},[s._m(0)]),s._v(" "),t("a",{staticClass:"button",on:{click:s.minus}},[s._m(1)])])],1)])])])])},staticRenderFns:[function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("span",{staticClass:"icon is-small"},[t("i",{staticClass:"fa fa-plus"})])},function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("span",{staticClass:"icon is-small"},[t("i",{staticClass:"fa fa-minus"})])}]}}});
//# sourceMappingURL=24.822bbb3037a16a14735e.js.map