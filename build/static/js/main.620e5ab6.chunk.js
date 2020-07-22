(this["webpackJsonpsecoia-app"]=this["webpackJsonpsecoia-app"]||[]).push([[0],{26:function(e,a,t){},40:function(e,a,t){e.exports=t(72)},45:function(e,a,t){},46:function(e,a,t){},72:function(e,a,t){"use strict";t.r(a);var n=t(0),s=t.n(n),l=t(13),r=t.n(l),m=(t(45),t(46),t(3)),c=t(2);function o(){return s.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark  bg-dark "},s.a.createElement(m.b,{className:"navbar-brand",to:"/"},"Secoia Manager"),s.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"/navbarNavAltMarkup","aria-controls":"navbarNavAltMarkup","aria-expanded":"false","aria-label":"Toggle navigation"},s.a.createElement("span",{className:"navbar-toggler-icon"})),s.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarNavAltMarkup"},s.a.createElement("div",{className:"navbar-nav"},s.a.createElement(m.b,{className:"nav-item nav-link",to:"/students"},"Students"),s.a.createElement(m.b,{className:"nav-item nav-link",to:"/partners"},"Partners"),s.a.createElement(m.b,{className:"nav-item nav-link",to:"/schools"},"Schools"),s.a.createElement(m.b,{className:"nav-item nav-link",to:"/logout"},"Log out"))))}var i=t(15),u=t(19),d=t(23),E=(t(26),t(10)),N=t(21),p=t.n(N),v=t(36),f=t(37),h=t.n(f),b=function(){return function(){var e=Object(v.a)(p.a.mark((function e(a){var t;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a({type:"FETCH_STUDENTS"}),e.next=4,h.a.get("https://secoia-api-rest.herokuapp.com/students/list/");case 4:t=e.sent,a({type:"STUDENTS_SUCCESS",payload:t.data.data}),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0),a({type:"STUDENTS_FAIL"});case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(a){return e.apply(this,arguments)}}()};function g(e){var a=e.match,t=Object(E.b)(),l=Object(n.useState)(10),r=Object(d.a)(l,2),o=r[0],N=r[1],p=Object(n.useState)({firstName:"",lastName:"",email:"",partner:"",school:""}),v=Object(d.a)(p,2),f=v[0],h=v[1],g=function(e){return h(Object(u.a)(Object(u.a)({},f),{},Object(i.a)({},e.target.name,e.target.value)))};Object(n.useEffect)((function(){t(b())}),[N,h]);var y=o,w=Object(E.c)((function(e){return e.students})),S=Number(a.params.page)||1,C=function(){var e=w.students&&w.students;if(e&&""!==f.firstName&&(e=w.students&&w.students.filter((function(e){return e.firstName&&e.firstName.toLowerCase().includes(f.firstName.toLowerCase())}))),e&&""!==f.lastName&&(e=e&&e.filter((function(e){return e.lastName&&e.lastName.toLowerCase().includes(f.lastName.toLowerCase())}))),e&&""!==f.email&&(e=e.filter((function(e){return e.email&&e.email.toLowerCase().includes(f.email.toLowerCase())}))),e&&""!==f.partner)try{e=e.filter((function(e){return e.partner&&e.partner.toLowerCase().includes(f.partner.toLowerCase())}))}catch(a){}return e&&""!==f.school&&(e=e.filter((function(e){return e.programDetail.school&&e.programDetail.school.toLowerCase().includes(f.school.toLowerCase())}))),e}(),x=C&&C.slice(S*y-y,y*S),j=w.students&&w.students.length||0,k=w.students&&Math.ceil(j/y),D=!w.students||k!=S,O=Object(c.f)(),T=function(e){var a=e.target.parentNode.id;O.push("/student/"+a)};return s.a.createElement("div",null,s.a.createElement("h1",null,"Students"),s.a.createElement("div",{className:"tool-bar my-3"},s.a.createElement("div",{className:"tool-column"},s.a.createElement("label",{htmlFor:"firstName",className:"mr-2"},"First Name: "),s.a.createElement("input",{type:"text",name:"firstName",id:"firstName",value:f.firstName,onChange:g,className:"mr-2"})),s.a.createElement("div",{className:"tool-column"},s.a.createElement("label",{htmlFor:"lastName",className:"mr-2"},"Last Name: "),s.a.createElement("input",{type:"text",name:"lastName",id:"lastName",value:f.lastName,onChange:g,className:"mr-2"})),s.a.createElement("div",{className:"tool-column"},s.a.createElement("label",{htmlFor:"email",className:"mr-2"},"Email: "),s.a.createElement("input",{type:"text",name:"email",id:"email",value:f.email,onChange:g,className:"mr-2"})),s.a.createElement("div",{className:"tool-column"},s.a.createElement("label",{htmlFor:"partner",className:"mr-2"},"Partner: "),s.a.createElement("input",{type:"text",name:"partner",id:"partner",className:"mr-2",value:f.partner,onChange:g})),s.a.createElement("div",{className:"tool-column"},s.a.createElement("label",{htmlFor:"school",className:"mr-2"},"School: "),s.a.createElement("input",{type:"text",name:"school",id:"school",className:"mr-2",value:f.school,onChange:g})),s.a.createElement("div",{className:"tool-column"},s.a.createElement("label",{htmlFor:"rows",className:"mr-2"},"Rows: "),s.a.createElement("select",{name:"rows",id:"rows",className:"mr-2",onChange:function(e){return N(Number(e.target.value))}},s.a.createElement("option",{value:"10"},"10"),s.a.createElement("option",{value:"20"},"20"),s.a.createElement("option",{value:"40"},"40"),s.a.createElement("option",{value:"10"},"60"),s.a.createElement("option",{value:"10"},"100"))),s.a.createElement("div",{className:"tool-column"},s.a.createElement("button",{onClick:function(e){return h({firstName:"",lastName:"",email:"",partner:"",school:""})}},"Reset"))),s.a.createElement("table",{className:"table"},s.a.createElement("thead",null,s.a.createElement("tr",null,s.a.createElement("th",{scope:"col"},"First Name"),s.a.createElement("th",{scope:"col"},"Last Name"),s.a.createElement("th",{scope:"col"},"Email"),s.a.createElement("th",{scope:"col"},"Partner"),s.a.createElement("th",{scope:"col"},"School"))),s.a.createElement("tbody",null,x&&x.map((function(e){return s.a.createElement("tr",{key:e._id,id:e._id,className:"students-row",onClick:T},s.a.createElement("td",null,e.firstName),s.a.createElement("td",null,e.lastName),s.a.createElement("td",null,e.email),s.a.createElement("td",null,e.partner),s.a.createElement("td",null,e.programDetail.school))})))),s.a.createElement("div",{className:"container"},s.a.createElement("nav",{"aria-label":"Page navigation "},s.a.createElement("ul",{className:"pagination justify-content-center"},S>1&&s.a.createElement(s.a.Fragment,null,s.a.createElement("li",{className:"page-item"},s.a.createElement(m.b,{className:"page-link",to:"/students/","aria-label":"Previous"},s.a.createElement("span",{"aria-hidden":"true"},"\xab"))),s.a.createElement("li",{className:"page-item"},s.a.createElement(m.b,{className:"page-link",to:"/students/"+(S-1),"aria-label":"Previous"},s.a.createElement("span",{"aria-hidden":"true"},"\xab"))),s.a.createElement("li",{className:"page-item"},s.a.createElement(m.b,{className:"page-link",to:"/students/"+(S-1)},S-1))),s.a.createElement("li",{className:"page-item disabled"},s.a.createElement(m.b,{className:"page-link",to:"#"},S)),D&&s.a.createElement(s.a.Fragment,null,s.a.createElement("li",{className:"page-item"},s.a.createElement(m.b,{className:"page-link",to:"/students/"+(S+1)},S+1)),s.a.createElement("li",{className:"page-item"},s.a.createElement(m.b,{className:"page-link",to:"/students/"+(S+1),"aria-label":"Next"},s.a.createElement("span",{"aria-hidden":"true"},"\xbb"))),s.a.createElement("li",{className:"page-item"},s.a.createElement(m.b,{className:"page-link",to:"/students/"+k,"aria-label":"Next"},s.a.createElement("span",{"aria-hidden":"true"},"\xbb\xbb"))))))))}var y=t(22),w=t.n(y);function S(e){var a=e.match,t=Object(E.b)();Object(n.useEffect)((function(){t(b())}),[]);var l=Object(E.c)((function(e){return e.students})),r=l.students&&l.students.filter((function(e){return e._id===a.params.id}))[0];return s.a.createElement("div",null,s.a.createElement("div",{className:"subtitle"},s.a.createElement("h3",{className:"my-4 text-center  py-2"},"Student Information")),r&&s.a.createElement("div",{className:"container text-left student-container"},s.a.createElement("div",{className:"row my-2"},s.a.createElement("div",{className:"column mr-5"},s.a.createElement("span",{className:"student-fields mr-1"},"Segoia Student ID Number: "),s.a.createElement("br",null),s.a.createElement("span",{className:"student-values"},r.studentId),s.a.createElement("br",null))),s.a.createElement("div",{className:"row my-2 text-justify"},s.a.createElement("div",{className:"column mr-5"},s.a.createElement("span",{className:"student-fields  mr-1"},"Gender: "),s.a.createElement("span",{className:"student-values"},r.gender)),s.a.createElement("div",{className:"column mr-5 "},s.a.createElement("span",{className:"student-fields  mr-1"},"Nationality: "),s.a.createElement("span",{className:"student-values"},r.nationality)),s.a.createElement("div",{className:"column mr-5"},s.a.createElement("span",{className:"student-fields  mr-1"},"Idiom: "),s.a.createElement("span",{className:"student-values"},r.motherTongue)),s.a.createElement("div",{className:"column mr-5"},s.a.createElement("span",{className:"student-fields  mr-1"},"Passport #: "),s.a.createElement("span",{className:"student-values"},r.passportNumber))),s.a.createElement("div",{className:"row my-2 text-justify"},s.a.createElement("div",{className:"column mr-5"},s.a.createElement("span",{className:"student-fields  mr-1"},"Last Name: "),s.a.createElement("span",{className:"student-values"},r.lastName)),s.a.createElement("div",{className:"column mr-5 "},s.a.createElement("span",{className:"student-fields  mr-1"},"First Name: "),s.a.createElement("span",{className:"student-values"},r.firstName)),s.a.createElement("div",{className:"column mr-5"},s.a.createElement("span",{className:"student-fields  mr-1"},"Date of Birth: "),s.a.createElement("span",{className:"student-values"},s.a.createElement(w.a,{format:"YYYY/MM/DD"},r.dateOfBirth)))),s.a.createElement("div",{className:"row my-2 text-justify"},s.a.createElement("div",{className:"column mr-5"},s.a.createElement("span",{className:"student-fields  mr-1"},"Home Address: "),s.a.createElement("span",{className:"student-values"},r.address)),s.a.createElement("div",{className:"column mr-5 "},s.a.createElement("span",{className:"student-fields  mr-1"},"City: "),s.a.createElement("span",{className:"student-values"},r.city)),s.a.createElement("div",{className:"column mr-5"},s.a.createElement("span",{className:"student-fields  mr-1"},"State: "),s.a.createElement("span",{className:"student-values"},r.state)),s.a.createElement("div",{className:"column mr-5"},s.a.createElement("span",{className:"student-fields  mr-1"},"Postal Code: "),s.a.createElement("span",{className:"student-values"},r.postalCode)),s.a.createElement("div",{className:"column mr-5"},s.a.createElement("span",{className:"student-fields  mr-1"},"Country: "),s.a.createElement("span",{className:"student-values"},r.country))),s.a.createElement("div",{className:"row my-2 text-justify"},s.a.createElement("div",{className:"column mr-5"},s.a.createElement("span",{className:"student-fields  mr-1"},"Email: "),s.a.createElement("span",{className:"student-values"},r.address)),s.a.createElement("div",{className:"column mr-5 "},s.a.createElement("span",{className:"student-fields  mr-1"},"Telephone: "),s.a.createElement("span",{className:"student-values"},r.city))),s.a.createElement("div",{className:"row my-2 text-justify"},s.a.createElement("div",{className:"column mr-5"},s.a.createElement("span",{className:"student-fields  mr-1"},"Emergency Contact Person: "),s.a.createElement("span",{className:"student-values"},r.emergencyContact.emergencyName)),s.a.createElement("div",{className:"column mr-5 "},s.a.createElement("span",{className:"student-fields  mr-1"},"Emergency Contact Telephone: "),s.a.createElement("span",{className:"student-values"},r.emergencyContact.emergencyPhone))),s.a.createElement("div",{className:"subtitle"},s.a.createElement("h4",{className:"my-4 text-center  py-2"},"Program Details")),s.a.createElement("div",{className:"row my-2 text-justify"},s.a.createElement("div",{className:"column mr-5"},s.a.createElement("span",{className:"student-fields  mr-1"},"Location: "),s.a.createElement("span",{className:"student-values"},r.programDetail.location)),s.a.createElement("div",{className:"column mr-5 "},s.a.createElement("span",{className:"student-fields  mr-1"},"School: "),s.a.createElement("span",{className:"student-values"},r.programDetail.school))),s.a.createElement("div",{className:"subtitle"},s.a.createElement("h4",{className:"my-4 text-center  py-2"},"Course Information")),s.a.createElement("div",{className:"row my-2 text-justify"},s.a.createElement("div",{className:"column mr-5"},s.a.createElement("span",{className:"student-fields  mr-1"},"Course: "),s.a.createElement("span",{className:"student-values"},r.courseInformation.name))),s.a.createElement("div",{className:"row my-2 text-justify"},s.a.createElement("div",{className:"column mr-5"},s.a.createElement("span",{className:"student-fields  mr-1"},"Start Date: "),s.a.createElement("span",{className:"student-values"},s.a.createElement(w.a,{format:"YYYY/MM/DD"},r.courseInformation.startDate))),s.a.createElement("div",{className:"column mr-5 "},s.a.createElement("span",{className:"student-fields  mr-1"},"Weeks of Study: "),s.a.createElement("span",{className:"student-values"},r.courseInformation.weeksOfStudy)))))}function C(){return s.a.createElement("div",null,s.a.createElement("h1",null,"Dashboard"),s.a.createElement("hr",null))}var x=function(){return s.a.createElement("div",{className:"App"},s.a.createElement(m.a,null,s.a.createElement(o,null),s.a.createElement(c.c,null,s.a.createElement(c.a,{exact:!0,path:"/",component:C}),s.a.createElement(c.a,{exact:!0,path:"/students/",component:g}),s.a.createElement(c.a,{exact:!0,path:"/students/:page",component:g}),s.a.createElement(c.a,{exact:!0,path:"/student/:id",component:S}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var j=t(9),k={loading:!1},D=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"STUDENTS_FAIL":return{loading:!1};case"FETCH_STUDENTS":return{loading:!0};case"STUDENTS_SUCCESS":return{loading:!1,students:a.payload};default:return e}},O=Object(j.combineReducers)({students:D}),T=t(38),L=t(39),F=Object(j.createStore)(O,Object(T.composeWithDevTools)(Object(j.applyMiddleware)(L.a)));r.a.render(s.a.createElement(E.a,{store:F},s.a.createElement(x,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[40,1,2]]]);
//# sourceMappingURL=main.620e5ab6.chunk.js.map