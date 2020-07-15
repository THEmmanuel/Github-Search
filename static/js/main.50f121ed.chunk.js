(this["webpackJsonpgithub-search"]=this["webpackJsonpgithub-search"]||[]).push([[0],{11:function(e,a,t){e.exports={UserCard:"UserCard_UserCard__BDOBY",ProfilePicture:"UserCard_ProfilePicture__3zyvc",UserName:"UserCard_UserName__177C8"}},2:function(e,a,t){e.exports={UserAccountInfo:"UserAccountInfo_UserAccountInfo__1ShLc",ProfilePicture:"UserAccountInfo_ProfilePicture__d8yIq",UserName:"UserAccountInfo_UserName__3mzfl",WorkInfo:"UserAccountInfo_WorkInfo__2w7Za",UserInfo:"UserAccountInfo_UserInfo__nrfLx",Stats:"UserAccountInfo_Stats__3v3Cw",StatsCount:"UserAccountInfo_StatsCount__3jbPS",StatsText:"UserAccountInfo_StatsText__3j7Aq"}},27:function(e,a,t){e.exports={Search:"Search_Search__2Tf2M"}},28:function(e,a,t){e.exports={SearchBar:"SearchBar_SearchBar__2icl9"}},29:function(e,a,t){e.exports={SearchButton:"searchButton_SearchButton__vhM2P"}},30:function(e,a,t){e.exports={SearchResults:"SearchResults_SearchResults__1wGvY"}},31:function(e,a,t){e.exports={ProfilePicture:"ProfilePicture_ProfilePicture__2e5O8"}},32:function(e,a,t){e.exports={Ripple:"Spinner_Ripple__18gJ8"}},34:function(e,a,t){},35:function(e,a,t){e.exports={UserInfo:"UserInfo_UserInfo__3JPxK"}},38:function(e,a,t){e.exports=t(68)},43:function(e,a,t){},44:function(e,a,t){},68:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(26),s=t.n(c),o=(t(43),t(6)),l=t(9),i=t(27),u=t.n(i),m=t(28),f=t.n(m),p=function(e){return r.a.createElement("input",{type:"text",className:f.a.SearchBar,placeholder:"Enter a username.",onChange:e.changed})},E=t(29),d=t.n(E),_=function(e){return r.a.createElement("button",{className:d.a.SearchButton,onClick:e.clicked},"Search")},S=function(e){var a=Object(n.useState)(""),t=Object(o.a)(a,2),c=t[0],s=t[1];return r.a.createElement("form",{className:u.a.Search},r.a.createElement(p,{changed:function(e){s(e.target.value)},value:c}),r.a.createElement(_,{clicked:function(a){a.preventDefault(),e.search(c),s("")}}))},h=t(30),g=t.n(h),v=function(e){return r.a.createElement("div",{className:g.a.SearchResults},e.children)},R=t(11),U=t.n(R),N=(t(31),function(e){return r.a.createElement("div",{className:U.a.UserCard,onClick:e.clicked},r.a.createElement("img",{src:e.userImage,className:U.a.ProfilePicture,alt:"profile"}),r.a.createElement("span",{className:U.a.UserName},e.userName))}),y=t(32),I=t.n(y),b=function(){return r.a.createElement("div",{className:I.a.Ripple},r.a.createElement("div",null),r.a.createElement("div",null))},C=function(){return r.a.createElement("div",null,r.a.createElement("span",null,"Sorry there was an error, please try the search again"))},w=(t(44),t(33)),k=t.n(w).a.create({baseURL:"https://api.github.com/"}),x=t(1),P=t(10),A=t(34),j=t.n(A),O=t(2),M=t.n(O),B=function(e){var a=Object(n.useState)({followers:null,followings:null,repos:null,profileImage:null,location:"",company:"",website:""}),t=Object(o.a)(a,2),c=t[0],s=t[1];return Object(n.useEffect)((function(){var a;a=e.user,k.get("users/".concat(a)).then((function(e){s({followers:e.data.followers,followings:e.data.following,repos:e.data.public_repos,profileImage:e.data.avatar_url,location:e.data.location,company:e.data.company,website:e.data.blog})}))}),[]),r.a.createElement("div",{className:M.a.UserAccountInfo},r.a.createElement("div",null,r.a.createElement("img",{src:c.profileImage,className:M.a.ProfilePicture,alt:""})),r.a.createElement("div",{className:M.a.UserInfo},r.a.createElement("span",{className:M.a.UserName},e.user),r.a.createElement("div",{className:M.a.WorkInfos},r.a.createElement("div",{className:M.a.WorkInfo},r.a.createElement("img",{src:"",alt:""}),r.a.createElement("span",null,c.company)),r.a.createElement("div",{className:M.a.WorkInfo},r.a.createElement("img",{src:"",alt:""}),r.a.createElement("span",null,c.location)),r.a.createElement("div",{className:M.a.WorkInfo},r.a.createElement("img",{src:"",alt:""}),r.a.createElement("span",null,c.website)))),r.a.createElement("div",{className:M.a.Stats},r.a.createElement("div",null,r.a.createElement("span",{className:M.a.StatsCount},c.followers),r.a.createElement("br",null),r.a.createElement("span",{className:M.a.StatsText},"followers")),r.a.createElement("div",null,r.a.createElement("span",{className:M.a.StatsCount},c.followings),r.a.createElement("br",null),r.a.createElement("span",{className:M.a.StatsText},"following")),r.a.createElement("div",null,r.a.createElement("span",{className:M.a.StatsCount},c.repos),r.a.createElement("br",null),r.a.createElement("span",{className:M.a.StatsText},"Repositories"))))},L=t(35),T=t.n(L),D=t(7),H=t.n(D),W=function(e){return r.a.createElement("div",{className:H.a.RepositoryCard},r.a.createElement("span",{className:H.a.RepositoryName},e.name),r.a.createElement("span",{className:H.a.RepositoryDescription},e.description),r.a.createElement("div",{className:H.a.RepositoryInformation},r.a.createElement("span",{className:H.a.RepositoryLanguage},e.language),r.a.createElement("div",null,r.a.createElement("span",null,e.stars)),r.a.createElement("div",null,r.a.createElement("span",null,e.forks)),r.a.createElement("div",null,r.a.createElement("span",null,e.pushTime))))},Y=t(36),F=t.n(Y),J=function(e){var a=Object(n.useState)([]),t=Object(o.a)(a,2),c=t[0],s=t[1];return Object(n.useEffect)((function(){var a;return a=e.user,k.get("users/".concat(a,"/repos?sort=updated&direction=desc")).then((function(e){s(c.concat(e.data))})),console.log(c)}),[]),r.a.createElement("div",{className:T.a.UserInfo},c.map((function(e){return r.a.createElement(W,{name:e.name,description:e.description,language:e.language,stars:e.stargazers_count,forks:e.forks_count,pushTime:F()(e.updated_at).format("DD-MMMM-YYYY HH:MM"),key:e.id})})))},q=function(e){return r.a.createElement("div",{className:j.a.UserDetails},r.a.createElement(B,{user:e.user}),r.a.createElement(J,{user:e.user}))},z={isLoading:!1,searchResults:[],errorMessage:null},G=function(e,a){switch(a.type){case"USER_SEARCH_REQUEST":return Object(l.a)({},e,{isLoading:!0,errorMessage:null});case"USER_SEARCH_SUCCESS":return Object(l.a)({},e,{isLoading:!1,searchResults:a.payload});case"USER_SEARCH_FAILURE":return Object(l.a)({},e,{isLoading:!1,errorMessage:a.error});case"GET_SELECTED_USER":return Object(l.a)({},e);default:return e}},Q=function(){var e=Object(n.useState)(""),a=Object(o.a)(e,2),t=a[0],c=a[1],s=Object(n.useReducer)(G,z),l=Object(o.a)(s,2),i=l[0],u=l[1],m=i.isLoading,f=i.searchResults,p=i.errorMessage;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"App"},r.a.createElement(S,{search:function(e){u({type:"USER_SEARCH_REQUEST"}),k.get("/search/users?q=".concat(e)).then((function(e){u({type:"USER_SEARCH_SUCCESS",payload:e.data.items})})).catch((function(e){u({type:"USER_SEARCH_FAILURE",payload:e})}))}}),r.a.createElement(x.c,null,r.a.createElement(x.a,{exact:!0,path:"/"},r.a.createElement(v,null,m&&!p?r.a.createElement(b,null):p?r.a.createElement(C,null):f.map((function(e){return r.a.createElement(P.b,{to:"/user/".concat(e.login),key:e.id},r.a.createElement(N,{userName:e.login,userImage:e.avatar_url,clicked:function(){return a=e.login,void c(a);var a}}))})))),r.a.createElement(x.a,{path:"/user/:userName",component:function(){return r.a.createElement(q,{user:t})}}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(P.a,{basename:"/Github-Search/"},r.a.createElement(Q,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},7:function(e,a,t){e.exports={RepositoryCard:"RepositoryCard_RepositoryCard__12x7F",RepositoryName:"RepositoryCard_RepositoryName__32cVr",RepositoryDescription:"RepositoryCard_RepositoryDescription__2wPyk",RepositoryInformation:"RepositoryCard_RepositoryInformation__2pxrE"}}},[[38,1,2]]]);
//# sourceMappingURL=main.50f121ed.chunk.js.map