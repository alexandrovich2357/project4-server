(this["webpackJsonpget-scripts"]=this["webpackJsonpget-scripts"]||[]).push([[0],{34:function(e,t,a){e.exports=a(63)},39:function(e,t,a){},63:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(32),s=a.n(c),o=a(9),l=a(2),u=a(4),i=a(6),p=a(5),m=(a(39),a(3)),h=a(14),d=a.n(h),v=new(function(){function e(){Object(l.a)(this,e),this.auth=d.a.create({baseURL:"".concat("https://stayprof.herokuapp.com"),withCredentials:!0})}return Object(u.a)(e,[{key:"signup",value:function(e){var t=e.username,a=e.password;return this.auth.post("/auth/signup",{username:t,password:a}).then((function(e){return e.data}))}},{key:"login",value:function(e){var t=e.username,a=e.password;return this.auth.post("/auth/login",{username:t,password:a}).then((function(e){return e.data}))}},{key:"logout",value:function(){return this.auth.post("/auth/logout",{}).then((function(e){return e.data}))}},{key:"me",value:function(){return this.auth.get("/auth/me").then((function(e){return e.data}))}}]),e}()),f=r.a.createContext(),g=f.Consumer,b=f.Provider,E=function(e){return function(t){Object(i.a)(n,t);var a=Object(p.a)(n);function n(){return Object(l.a)(this,n),a.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){var t=this;return r.a.createElement(g,null,(function(a){var n=a.login,c=a.signup,s=a.user,o=a.logout,l=a.isLoggedin;return r.a.createElement(e,Object.assign({login:n,signup:c,user:s,logout:o,isLoggedin:l},t.props))}))}}]),n}(r.a.Component)},w=function(e){Object(i.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={isLoggedin:!1,user:null,isLoading:!0},e.signup=function(t){var a=t.username,n=t.password;v.signup({username:a,password:n}).then((function(t){return e.setState({isLoggedin:!0,user:t})})).catch((function(t){var a=t.response;return e.setState({message:a.data.statusMessage})}))},e.login=function(t){var a=t.username,n=t.password;v.login({username:a,password:n}).then((function(t){return e.setState({isLoggedin:!0,user:t})})).catch((function(e){return console.log(e)}))},e.logout=function(){v.logout().then((function(){return e.setState({isLoggedin:!1,user:null})})).catch((function(e){return console.log(e)}))},e}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=this;v.me().then((function(t){return e.setState({isLoggedin:!0,user:t,isLoading:!1})})).catch((function(t){return e.setState({isLoggedin:!1,user:null,isLoading:!1})}))}},{key:"render",value:function(){var e=this.state,t=e.isLoading,a=e.isLoggedin,n=e.user,c=this.login,s=this.logout,o=this.signup;return t?r.a.createElement("div",null,"Loading"):r.a.createElement(b,{value:{isLoggedin:a,user:n,login:c,logout:s,signup:o}},this.props.children)}}]),a}(r.a.Component),y=function(e){Object(i.a)(a,e);var t=Object(p.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{id:"home"},r.a.createElement("h1",{className:"encuentra"},"Encuentra a tu profesional"),r.a.createElement("img",{src:"",alt:""}),r.a.createElement("div",{className:"profesionales"},r.a.createElement("div",{className:"profesional"},r.a.createElement(o.b,{className:"enlace",to:"/cerrajeros"},"CERRAJEROS")),r.a.createElement("div",{className:"profesional"},r.a.createElement(o.b,{className:"enlace",to:"/pintores"},"PINTORES")),r.a.createElement("div",{className:"profesional"},r.a.createElement(o.b,{className:"enlace",to:"/fontaneros"},"FONTANEROS")),r.a.createElement("div",{className:"profesional"},r.a.createElement(o.b,{className:"enlace",to:"/alba\xf1iles"},"ALBA\xd1ILES"))),r.a.createElement("div",{className:"discurso"},r.a.createElement("p",null)))}}]),a}(n.Component);function O(){return r.a.createElement("div",{className:"navbar"},r.a.createElement(o.b,{className:"enlace",to:"/"},r.a.createElement("h1",{className:"home"},"STAYPROF")),r.a.createElement(o.b,{className:"login",to:"/login"},r.a.createElement("h1",null,"LOGIN")),r.a.createElement(o.b,{className:"signup",to:"/signup"},r.a.createElement("h1",null,"SIGNUP")))}var j=a(15),k=E(function(e){Object(i.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={username:"",password:""},e.handleFormSubmit=function(t){t.preventDefault();var a=e.state,n=a.username,r=a.password;e.props.signup({username:n,password:r})},e.handleChange=function(t){var a=t.target,n=a.name,r=a.value;e.setState(Object(j.a)({},n,r))},e}return Object(u.a)(a,[{key:"render",value:function(){var e=this.state,t=e.username,a=e.password;return r.a.createElement("div",{id:"idSignupAndLogin"},r.a.createElement("form",{onSubmit:this.handleFormSubmit},r.a.createElement("label",null,"Username:"),r.a.createElement("input",{type:"text",name:"username",value:t,onChange:this.handleChange}),r.a.createElement("label",null,"Password:"),r.a.createElement("input",{type:"password",name:"password",value:a,onChange:this.handleChange}),r.a.createElement("input",{className:"button",type:"submit",value:"Signup"})),r.a.createElement("div",{class:"already"},r.a.createElement("p",null,"Already have account?"),r.a.createElement(o.b,{to:"/login"}," Login")))}}]),a}(n.Component)),C=E(function(e){Object(i.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={username:"",password:""},e.handleFormSubmit=function(t){t.preventDefault();var a=e.state,n=a.username,r=a.password;e.props.login({username:n,password:r})},e.handleChange=function(t){var a=t.target,n=a.name,r=a.value;e.setState(Object(j.a)({},n,r))},e}return Object(u.a)(a,[{key:"render",value:function(){var e=this.state,t=e.username,a=e.password;return r.a.createElement("div",{id:"idSignupAndLogin"},r.a.createElement("form",{onSubmit:this.handleFormSubmit},r.a.createElement("label",null,"Username:"),r.a.createElement("input",{type:"text",name:"username",value:t,onChange:this.handleChange}),r.a.createElement("label",null,r.a.createElement("p",null,"Password:")),r.a.createElement("input",{type:"password",name:"password",value:a,onChange:this.handleChange}),r.a.createElement("input",{className:"button",type:"submit",value:"Login"})))}}]),a}(n.Component)),x=a(1),N=a.n(x),S=a(8),L=new function e(){var t=this;Object(l.a)(this,e),this.handleUpload=function(){var e=Object(S.a)(N.a.mark((function e(a){var n;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("file in service: ",a),e.prev=1,e.next=4,t.service.post("/upload",a);case 4:return n=e.sent,e.abrupt("return",n.data);case 8:e.prev=8,e.t0=e.catch(1),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}(),this.saveNewImage=function(){var e=Object(S.a)(N.a.mark((function e(a){var n;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("new thing is: ",a),e.prev=1,e.next=4,t.service.post("/images/create",a);case 4:return n=e.sent,e.abrupt("return",n.data);case 8:e.prev=8,e.t0=e.catch(1);case 10:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}(),this.saveNewImagePrue=function(){var e=Object(S.a)(N.a.mark((function e(a){var n;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("new thing is: ",a),e.prev=1,e.next=4,t.service.post("/images/create",a);case 4:return n=e.sent,e.abrupt("return",n.data);case 8:e.prev=8,e.t0=e.catch(1);case 10:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}(),this.getMovies=Object(S.a)(N.a.mark((function e(){var a;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.service.get("/movies");case 3:return a=e.sent,console.log(a.data),e.abrupt("return",a.data);case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])}))),this.service=d.a.create({baseURL:"".concat("https://stayprof.herokuapp.com","/fileup")})},U=function(e){Object(i.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={name:"",address:"",specialty:"",phone:"",web:"",imageUrl:""},e.handleChange=function(t){var a=t.target,n=a.name,r=a.value;e.setState(Object(j.a)({},n,r))},e.handleFileUpload=function(){var t=Object(S.a)(N.a.mark((function t(a){var n,r;return N.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log("the file to be uploaded is: ",a.target.files[0]),(n=new FormData).append("imageUrl",a.target.files[0]),t.prev=3,t.next=6,L.handleUpload(n);case 6:r=t.sent,console.log("response is",r),e.setState({imageUrl:r.secure_url}),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(3),console.log("error while uploading the file");case 14:case"end":return t.stop()}}),t,null,[[3,11]])})));return function(e){return t.apply(this,arguments)}}(),e.handleSubmit=function(){var t=Object(S.a)(N.a.mark((function t(a){var n,r,c,s,o,l,u,i;return N.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.preventDefault(),t.prev=1,n=e.state,r=n.name,c=n.address,s=n.specialty,o=n.phone,l=n.web,u=n.imageUrl,t.next=5,d.a.post("".concat("https://stayprof.herokuapp.com","/lock/locksmith"),{name:r,address:c,specialty:s,phone:o,web:l,imageUrl:u});case 5:i=t.sent,console.log("enviado",i),e.setState({name:"",address:"",specialty:"",phone:"",web:"",imageUrl:""}),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(1),console.log(t.t0);case 13:case"end":return t.stop()}}),t,null,[[1,10]])})));return function(e){return t.apply(this,arguments)}}(),e}return Object(u.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("div",{id:"idSignupAndLogin"},r.a.createElement("form",{onSubmit:function(t){return e.handleSubmit(t)}},r.a.createElement("label",{className:"label"},"Nombre"),r.a.createElement("input",{type:"text",name:"name",value:this.state.name,onChange:function(t){return e.handleChange(t)}}),r.a.createElement("label",{className:"label"},"Direcci\xf3n"),r.a.createElement("input",{type:"text",name:"address",value:this.state.address,onChange:function(t){return e.handleChange(t)}}),r.a.createElement("label",{className:"label"},"Especialidad"),r.a.createElement("input",{type:"text",name:"specialty",value:this.state.specialty,onChange:function(t){return e.handleChange(t)}}),r.a.createElement("label",{className:"label"},"Tel\xe9fono"),r.a.createElement("input",{type:"text",name:"phone",value:this.state.phone,onChange:function(t){return e.handleChange(t)}}),r.a.createElement("label",{className:"label"},"Web"),r.a.createElement("input",{type:"text",name:"web",value:this.state.web,onChange:function(t){return e.handleChange(t)}}),r.a.createElement("label",{className:"label"},"Foto"),r.a.createElement("input",{type:"file",className:"upfile",onChange:function(t){return e.handleFileUpload(t)}}),r.a.createElement("button",{type:"submit"},"Guardar"))),r.a.createElement("p",null,"Estos datos ser\xe1n revisados.")))}}]),a}(n.Component),F=E(function(e){Object(i.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={users:[],showForm:!1},e.showFormClick=function(){e.setState({showForm:!e.state.showForm}),console.log("adios")},e}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=Object(S.a)(N.a.mark((function e(){var t;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,d.a.get("".concat("https://stayprof.herokuapp.com","/api/users"));case 3:t=e.sent,console.log(t.data),this.setState({users:t.data}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,this,[[0,8]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.props.logout;return r.a.createElement("div",{id:"profile"},r.a.createElement("div",{className:"profileCard"},r.a.createElement("img",{src:this.props.user.image,alt:""}),r.a.createElement("br",null),r.a.createElement("h1",null,"Bienvenido, ",this.props.user.username),r.a.createElement("button",{onClick:e},"Logout"),r.a.createElement("p",null,"\xbfEres profesional?",r.a.createElement("p",{className:"unete",onClick:this.showFormClick},"\xdanete.")),this.state.showForm?r.a.createElement(U,null):null))}}]),a}(n.Component)),A=a(18);var D=E((function(e){var t=e.component,a=e.isLoggedin,n=Object(A.a)(e,["component","isLoggedin"]);return r.a.createElement(m.b,Object.assign({},n,{render:function(e){return a?r.a.createElement(m.a,{to:"/private"}):r.a.createElement(t,e)}}))}));var I=E((function(e){var t=e.component,a=e.isLoggedin,n=Object(A.a)(e,["component","isLoggedin"]);return r.a.createElement(m.b,Object.assign({},n,{render:function(e){return a?r.a.createElement(t,e):r.a.createElement(m.a,{to:"/login"})}}))})),R=function(e){Object(i.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={title:"",description:"",imageUrl:""},e.handleChange=function(t){var a=t.target,n=a.name,r=a.value;e.setState(Object(j.a)({},n,r))},e.handleFileUpload=function(){var t=Object(S.a)(N.a.mark((function t(a){var n,r;return N.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log("the file to be uploaded is: ",a.target.files[0]),(n=new FormData).append("imageUrl",a.target.files[0]),t.prev=3,t.next=6,L.handleUpload(n);case 6:r=t.sent,console.log("response is",r),e.setState({imageUrl:r.secure_url}),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(3),console.log("error while uploading the",t.t0);case 14:case"end":return t.stop()}}),t,null,[[3,11]])})));return function(e){return t.apply(this,arguments)}}(),e.handleSubmit=function(){var t=Object(S.a)(N.a.mark((function t(a){var n;return N.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.preventDefault(),t.prev=1,t.next=4,L.saveNewImage(e.state);case 4:n=t.sent,console.log("added",n),e.setState({title:"",description:"",imageUrl:""}),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(1),console.log("Error while adding the movie: ",t.t0);case 12:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e){return t.apply(this,arguments)}}(),e}return Object(u.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("h2",null,"New Movie"),r.a.createElement("form",{onSubmit:function(t){return e.handleSubmit(t)}},r.a.createElement("label",{htmlFor:""},"Name"),r.a.createElement("input",{type:"text",name:"title",value:this.state.title,onChange:function(t){return e.handleChange(t)}}),r.a.createElement("label",{htmlFor:""},"Description"),r.a.createElement("input",{type:"text",name:"description",value:this.state.description,onChange:function(t){return e.handleChange(t)}}),r.a.createElement("input",{type:"file",onChange:function(t){return e.handleFileUpload(t)}}),r.a.createElement("button",{type:"submit"},"Save new movie")))}}]),a}(n.Component);function P(){return r.a.createElement("div",{className:"footer"},r.a.createElement("div",null,r.a.createElement("p",null,"Si quieres aparecer en nuestra web env\xedanos un E-mail y revisaremos tus datos."),r.a.createElement("a",{href:"mailto:stayprof@prostarcompany.com"},"stayprof@stayprof.com")))}var M=function(e){Object(i.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={lockmasters:[]},e.getlockmasters=Object(S.a)(N.a.mark((function t(){var a;return N.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,d.a.get("".concat("https://stayprof.herokuapp.com","/lock/locksmith"));case 3:a=t.sent,e.setState({lockmasters:a.data}),console.log(a.data),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])}))),e.deleter=function(){var t=Object(S.a)(N.a.mark((function t(a){return N.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,d.a.delete("".concat("https://stayprof.herokuapp.com","/lock/locksmith/").concat(a));case 3:console.log(a),e.getlockmasters(),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}(),e}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=Object(S.a)(N.a.mark((function e(){return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.getlockmasters();case 1:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("div",{className:"tarjetas"},this.state.lockmasters.map((function(t){return r.a.createElement("div",{className:"tarjeta",key:t._id},r.a.createElement("p",{className:"nombre"},t.name),r.a.createElement("img",{className:"imagen",src:t.imageUrl,alt:""}),r.a.createElement("p",null,t.specialty),r.a.createElement("p",null,t.address),r.a.createElement("p",null,t.phone),r.a.createElement("p",null,t.web),r.a.createElement("button",{className:"delete",onClick:function(){return e.deleter(t._id)}},"Delete"))}))))}}]),a}(n.Component),T=function(e){Object(i.a)(a,e);var t=Object(p.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement(w,null,r.a.createElement("div",{className:"container"},r.a.createElement(O,null),r.a.createElement(m.d,null,r.a.createElement(m.b,{exact:!0,path:"/",component:y}),r.a.createElement(D,{exact:!0,path:"/signup",component:k}),r.a.createElement(D,{exact:!0,path:"/login",component:C}),r.a.createElement(I,{exact:!0,path:"/private",component:F}),r.a.createElement(I,{exact:!0,path:"/image",component:R}),r.a.createElement(m.b,{exact:!0,path:"/cerrajeros",component:M})),r.a.createElement(P,null)))}}]),a}(n.Component);s.a.render(r.a.createElement(o.a,null,r.a.createElement(T,null)),document.getElementById("root"))}},[[34,1,2]]]);
//# sourceMappingURL=main.8edaf0e7.chunk.js.map