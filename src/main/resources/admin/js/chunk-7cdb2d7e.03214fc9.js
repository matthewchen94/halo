(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7cdb2d7e"],{"2ff4":function(t,a,e){"use strict";var o=e("8b84"),i=e.n(o);i.a},"307b":function(t,a,e){"use strict";var o=e("d4a9"),i=e.n(o);i.a},3993:function(t,a,e){"use strict";var o=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("a-drawer",{attrs:{title:t.title,width:t.isMobile()?"100%":t.drawerWidth,closable:"",visible:t.visible,destroyOnClose:""},on:{close:t.onClose}},[e("a-row",{attrs:{type:"flex",align:"middle"}},[e("a-input-search",{attrs:{placeholder:"搜索附件",enterButton:""}})],1),e("a-divider"),e("a-row",{attrs:{type:"flex",align:"middle"}},[e("a-skeleton",{attrs:{active:"",loading:t.skeletonLoading,paragraph:{rows:18}}},[e("a-col",{attrs:{span:24}},t._l(t.attachments,function(a,o){return e("div",{key:o,staticClass:"attach-item",on:{click:function(e){return t.handleSelectAttachment(a)}}},[e("img",{attrs:{src:a.thumbPath}})])}),0)],1)],1),e("a-divider"),e("div",{staticClass:"page-wrapper"},[e("a-pagination",{attrs:{defaultPageSize:t.pagination.size,total:t.pagination.total},on:{change:t.handlePaginationChange}})],1),e("a-divider",{staticClass:"divider-transparent"}),e("div",{staticClass:"bottom-control"},[t.isChooseAvatar?e("a-button",{staticStyle:{marginRight:"8px"},attrs:{type:"dashed"},on:{click:t.handleSelectGravatar}},[t._v("使用 Gravatar")]):t._e(),e("a-button",{attrs:{type:"primary"},on:{click:t.handleShowUploadModal}},[t._v("上传附件")])],1)],1),e("a-modal",{attrs:{title:"上传附件",footer:null,afterClose:t.onUploadClose},model:{value:t.uploadVisible,callback:function(a){t.uploadVisible=a},expression:"uploadVisible"}},[e("upload",{attrs:{name:"file",multiple:"",uploadHandler:t.attachmentUploadHandler}},[e("p",{staticClass:"ant-upload-drag-icon"},[e("a-icon",{attrs:{type:"inbox"}})],1),e("p",{staticClass:"ant-upload-text"},[t._v("点击选择文件或将文件拖拽到此处")]),e("p",{staticClass:"ant-upload-hint"},[t._v("支持单个或批量上传")])])],1)],1)},i=[],n=(e("d4d5"),e("ac0d")),s=e("a796"),l={name:"AttachmentSelectDrawer",mixins:[n["a"],n["b"]],model:{prop:"visible",event:"close"},props:{visible:{type:Boolean,required:!1,default:!1},drawerWidth:{type:Number,required:!1,default:460},title:{type:String,required:!1,default:"选择附件"},isChooseAvatar:{type:Boolean,required:!1,default:!1}},data:function(){return{uploadVisible:!1,skeletonLoading:!0,pagination:{page:1,size:12,sort:""},attachments:[],attachmentUploadHandler:s["a"].upload}},created:function(){this.loadSkeleton(),this.loadAttachments()},watch:{visible:function(t,a){t&&this.loadSkeleton()}},methods:{loadSkeleton:function(){var t=this;this.skeletonLoading=!0,setTimeout(function(){t.skeletonLoading=!1},500)},handleShowUploadModal:function(){this.uploadVisible=!0},loadAttachments:function(){var t=this,a=Object.assign({},this.pagination);a.page--,s["a"].query(a).then(function(a){t.attachments=a.data.data.content,t.pagination.total=a.data.data.total})},handleSelectAttachment:function(t){this.$emit("listenToSelect",t)},handleSelectGravatar:function(){this.$emit("listenToSelectGravatar")},handlePaginationChange:function(t,a){this.pagination.page=t,this.pagination.size=a,this.loadAttachments()},handleAttachmentUploadSuccess:function(){this.$message.success("上传成功！"),this.loadAttachments()},onUploadClose:function(){this.loadSkeleton(),this.loadAttachments()},onClose:function(){this.$emit("close",!1)}}},r=l,c=(e("307b"),e("6691")),d=Object(c["a"])(r,o,i,!1,null,null,null);a["a"]=d.exports},"6d0d":function(t,a,e){"use strict";e.r(a);var o=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"page-header-index-wide"},[e("a-row",{attrs:{gutter:12,type:"flex",align:"middle"}},[e("a-col",{staticClass:"search-box",attrs:{span:24}},[e("a-card",{attrs:{bordered:!1}},[e("div",{staticClass:"table-page-search-wrapper"},[e("a-form",{attrs:{layout:"inline"}},[e("a-row",{attrs:{gutter:48}},[e("a-col",{attrs:{md:6,sm:24}},[e("a-form-item",{attrs:{label:"关键词"}},[e("a-input",{model:{value:t.queryParam.keyword,callback:function(a){t.$set(t.queryParam,"keyword",a)},expression:"queryParam.keyword"}})],1)],1),e("a-col",{attrs:{md:6,sm:24}},[e("a-form-item",{attrs:{label:"分组"}},[e("a-select",[e("a-select-option",{attrs:{value:"11"}},[t._v("11")]),e("a-select-option",{attrs:{value:"22"}},[t._v("22")])],1)],1)],1),e("a-col",{attrs:{md:6,sm:24}},[e("span",{staticClass:"table-page-search-submitButtons"},[e("a-button",{attrs:{type:"primary"},on:{click:function(a){return t.loadPhotos(!0)}}},[t._v("查询")]),e("a-button",{staticStyle:{"margin-left":"8px"},on:{click:t.resetParam}},[t._v("重置")])],1)])],1)],1)],1),e("div",{staticClass:"table-operator"},[e("a-button",{attrs:{type:"primary",icon:"plus"},on:{click:t.handleAddClick}},[t._v("添加")])],1)])],1),e("a-col",{attrs:{span:24}},[e("a-list",{attrs:{grid:{gutter:12,xs:1,sm:2,md:4,lg:6,xl:6,xxl:6},dataSource:t.photos,loading:t.listLoading},scopedSlots:t._u([{key:"renderItem",fn:function(a,o){return e("a-list-item",{key:o},[e("a-card",{attrs:{bodyStyle:{padding:0},hoverable:""},on:{click:function(e){return t.showDrawer(a)}}},[e("div",{staticClass:"photo-thumb"},[e("img",{attrs:{src:a.thumbnail}})]),e("a-card-meta",[e("ellipsis",{attrs:{slot:"description",length:t.isMobile()?36:18,tooltip:""},slot:"description"},[t._v(t._s(a.name))])],1)],1)],1)}}])})],1)],1),e("div",{staticClass:"page-wrapper"},[e("a-pagination",{attrs:{total:t.pagination.total,defaultPageSize:t.pagination.size,pageSizeOptions:["18","36","54","72","90","108"],showSizeChanger:""},on:{change:t.handlePaginationChange,showSizeChange:t.handlePaginationChange}})],1),e("a-drawer",{attrs:{title:"图片详情",width:t.isMobile()?"100%":"460",closable:"",visible:t.drawerVisible,destroyOnClose:""},on:{close:t.onDrawerClose}},[e("a-row",{attrs:{type:"flex",align:"middle"}},[e("a-col",{attrs:{span:24}},[e("a-skeleton",{attrs:{active:"",loading:t.drawerLoading,paragraph:{rows:8}}},[e("div",{staticClass:"photo-detail-img"},[e("img",{attrs:{src:t.photo.url||"//i.loli.net/2019/05/05/5ccf007c0a01d.png"},on:{click:t.showThumbDrawer}})])])],1),e("a-divider"),e("a-col",{attrs:{span:24}},[e("a-skeleton",{attrs:{active:"",loading:t.drawerLoading,paragraph:{rows:8}}},[e("a-list",{attrs:{itemLayout:"horizontal"}},[e("a-list-item",[e("a-list-item-meta",[t.editable?e("template",{slot:"description"},[e("a-input",{model:{value:t.photo.thumbnail,callback:function(a){t.$set(t.photo,"thumbnail",a)},expression:"photo.thumbnail"}})],1):e("template",{slot:"description"},[t._v(t._s(t.photo.thumbnail))]),e("span",{attrs:{slot:"title"},slot:"title"},[t._v("\n                  缩略图地址：\n                ")])],2)],1),e("a-list-item",[e("a-list-item-meta",[t.editable?e("template",{slot:"description"},[e("a-input",{model:{value:t.photo.name,callback:function(a){t.$set(t.photo,"name",a)},expression:"photo.name"}})],1):e("template",{slot:"description"},[t._v(t._s(t.photo.name))]),e("span",{attrs:{slot:"title"},slot:"title"},[t._v("\n                  图片名称：\n                ")])],2)],1),e("a-list-item",[e("a-list-item-meta",[t.editable?e("template",{slot:"description"},[e("a-date-picker",{staticStyle:{width:"100%"},model:{value:t.photo.takeTime,callback:function(a){t.$set(t.photo,"takeTime",a)},expression:"photo.takeTime"}})],1):e("span",{attrs:{slot:"description"},slot:"description"},[t._v(t._s(t._f("moment")(t.photo.takeTime)))]),e("span",{attrs:{slot:"title"},slot:"title"},[t._v("拍摄日期：")])],2)],1),e("a-list-item",[e("a-list-item-meta",[t.editable?e("template",{slot:"description"},[e("a-input",{model:{value:t.photo.location,callback:function(a){t.$set(t.photo,"location",a)},expression:"photo.location"}})],1):e("span",{attrs:{slot:"description"},slot:"description"},[t._v(t._s(t.photo.location||"无"))]),e("span",{attrs:{slot:"title"},slot:"title"},[t._v("拍摄地点：")])],2)],1),e("a-list-item",[e("a-list-item-meta",[t.editable?e("template",{slot:"description"},[e("a-input",{model:{value:t.photo.team,callback:function(a){t.$set(t.photo,"team",a)},expression:"photo.team"}})],1):e("span",{attrs:{slot:"description"},slot:"description"},[t._v(t._s(t.photo.team||"无"))]),e("span",{attrs:{slot:"title"},slot:"title"},[t._v("分组：")])],2)],1),e("a-list-item",[e("a-list-item-meta",[t.editable?e("template",{slot:"description"},[e("a-input",{attrs:{type:"textarea",autosize:{minRows:5}},model:{value:t.photo.description,callback:function(a){t.$set(t.photo,"description",a)},expression:"photo.description"}})],1):e("span",{attrs:{slot:"description"},slot:"description"},[t._v(t._s(t.photo.description||"无"))]),e("span",{attrs:{slot:"title"},slot:"title"},[t._v("描述：")])],2)],1)],1)],1)],1)],1),e("AttachmentSelectDrawer",{attrs:{drawerWidth:460},on:{listenToSelect:t.selectPhotoThumb},model:{value:t.thumDrawerVisible,callback:function(a){t.thumDrawerVisible=a},expression:"thumDrawerVisible"}}),e("a-divider",{staticClass:"divider-transparent"}),e("div",{staticClass:"bottom-control"},[t.editable?e("a-button",{staticStyle:{marginRight:"8px"},attrs:{type:"primary"},on:{click:t.handleCreateOrUpdate}},[t._v("保存")]):e("a-button",{staticStyle:{marginRight:"8px"},attrs:{type:"dashed"},on:{click:t.handleEditClick}},[t._v("编辑")]),e("a-popconfirm",{attrs:{title:"你确定要删除该图片？",okText:"确定",cancelText:"取消"},on:{confirm:t.handleDeletePhoto}},[e("a-button",{attrs:{type:"danger"}},[t._v("删除")])],1)],1)],1)],1)},i=[],n=(e("b745"),e("3993")),s=e("ac0d"),l=e("975e"),r={components:{AttachmentSelectDrawer:n["a"]},mixins:[s["a"],s["b"]],data:function(){return{drawerVisible:!1,drawerLoading:!1,listLoading:!0,thumDrawerVisible:!1,photo:{},photos:[],editable:!1,pagination:{page:1,size:18,sort:null},queryParam:{page:0,size:18,sort:null,keyword:null}}},created:function(){this.loadPhotos()},methods:{loadPhotos:function(t){var a=this;this.queryParam.page=this.pagination.page-1,this.queryParam.size=this.pagination.size,this.queryParam.sort=this.pagination.sort,t&&(this.queryParam.page=0),this.listLoading=!0,l["a"].query(this.queryParam).then(function(t){a.photos=t.data.data.content,a.pagination.total=t.data.data.total,a.listLoading=!1})},handleCreateOrUpdate:function(){var t=this;this.photo.id?l["a"].update(this.photo.id,this.photo).then(function(a){t.$message.success("照片更新成功！"),t.loadPhotos()}):l["a"].create(this.photo).then(function(a){t.$message.success("照片添加成功！"),t.loadPhotos(),t.photo=a.data.data}),this.editable=!1},showDrawer:function(t){this.photo=t,this.drawerVisible=!0},handlePaginationChange:function(t,a){this.$log.debug("Current: ".concat(t,", PageSize: ").concat(a)),this.pagination.page=t,this.pagination.size=a,this.loadPhotos()},handleAddClick:function(){this.editable=!0,this.drawerVisible=!0},handleEditClick:function(){this.editable=!0},handleDeletePhoto:function(){var t=this;l["a"].delete(this.photo.id).then(function(a){t.$message.success("删除成功！"),t.onDrawerClose(),t.loadPhotos()})},showThumbDrawer:function(){this.thumDrawerVisible=!0},selectPhotoThumb:function(t){this.photo.url=encodeURI(t.path),this.thumDrawerVisible=!1},resetParam:function(){this.queryParam.keyword=null,this.loadPhotos()},onDrawerClose:function(){this.drawerVisible=!1,this.photo={},this.editable=!1}}},c=r,d=(e("2ff4"),e("6691")),p=Object(d["a"])(c,o,i,!1,null,"6bce3e01",null);a["default"]=p.exports},"8b84":function(t,a,e){},"975e":function(t,a,e){"use strict";var o=e("9efd"),i="/api/admin/photos",n={query:function(t){return Object(o["a"])({url:i,params:t,method:"get"})},create:function(t){return Object(o["a"])({url:i,data:t,method:"post"})},update:function(t,a){return Object(o["a"])({url:"".concat(i,"/").concat(t),method:"put",data:a})},delete:function(t){return Object(o["a"])({url:"".concat(i,"/").concat(t),method:"delete"})}};a["a"]=n},a796:function(t,a,e){"use strict";var o=e("f753"),i=e.n(o),n=e("9efd"),s="/api/admin/attachments",l={query:function(t){return Object(n["a"])({url:s,params:t,method:"get"})},get:function(t){return Object(n["a"])({url:"".concat(s,"/").concat(t),method:"get"})},delete:function(t){return Object(n["a"])({url:"".concat(s,"/").concat(t),method:"delete"})},update:function(t,a){return Object(n["a"])({url:"".concat(s,"/").concat(t),method:"put",data:a})},getMediaTypes:function(){return Object(n["a"])({url:"".concat(s,"/media_types"),method:"get"})}};l.CancelToken=i.a.CancelToken,l.isCancel=i.a.isCancel,l.upload=function(t,a,e){return Object(n["a"])({url:"".concat(s,"/upload"),timeout:864e4,data:t,onUploadProgress:a,cancelToken:e,method:"post"})},l.uploads=function(t,a,e){return Object(n["a"])({url:"".concat(s,"/uploads"),timeout:864e4,data:t,onUploadProgress:a,cancelToken:e,method:"post"})},l.type={LOCAL:{type:"local",text:"本地"},SMMS:{type:"smms",text:"SM.MS"},UPYUN:{type:"upyun",text:"又拍云"},QNYUN:{type:"qnyun",text:"七牛云"},ALIYUN:{type:"aliyun",text:"阿里云"},BAIDUYUN:{type:"baiduyun",text:"百度云"},TENCENTYUN:{type:"tencentyun",text:"腾讯云"}},a["a"]=l},d4a9:function(t,a,e){}}]);