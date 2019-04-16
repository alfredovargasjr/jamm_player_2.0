(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{101:function(t,e,o){"use strict";var s=function(t,e,o,s){return new(o||(o=Promise))(function(i,n){function a(t){try{c(s.next(t))}catch(t){n(t)}}function r(t){try{c(s.throw(t))}catch(t){n(t)}}function c(t){t.done?i(t.value):new o(function(e){e(t.value)}).then(a,r)}c((s=s.apply(t,e||[])).next())})};const i="https://api.spotify.com";e.a={addTrackToPlaylist:function(t,e,o,n){return s(this,void 0,void 0,function*(){const s=encodeURI(n),a=yield fetch(`${i}/v1/playlists/${o}/tracks?uris=${s}`,{headers:{Authorization:`${t} ${e}`,"Content-Type":"application/json"},method:"POST"});if(201===a.status)return yield a.json()})},createPlaylist:function(t,e,o,n,a){return s(this,void 0,void 0,function*(){const s=yield fetch(`${i}/v1/users/${a}/playlists`,{body:JSON.stringify({collaborative:!0,description:n,name:o,public:!1}),headers:{Authorization:`${t} ${e}`,"Content-type":"application/json"},method:"POST"});if(201===s.status)return yield s.json()})},followPlaylist:function(t,e,o,n){return s(this,void 0,void 0,function*(){return 200===(yield fetch(`${i}/v1/users/${o}/playlists/${n}/followers`,{headers:{Authorization:`${t} ${e}`,"Content-Type":"application/json"},method:"PUT"})).status})},getPlaylist:function(t,e,o,n){return s(this,void 0,void 0,function*(){const s=yield fetch(`${i}/v1/users/${o}/playlists/${n}`,{headers:{Authorization:`${t} ${e}`},method:"GET"});if(200===s.status)return yield s.json()})},getPlaylistTracks:function(t,e,o,n){return s(this,void 0,void 0,function*(){const s=yield fetch(`${i}/v1/users/${o}/playlists/${n}/tracks`,{headers:{Authorization:`${t} ${e}`},method:"GET"});if(200===s.status)return yield s.json()})},getTracks:function(t,e,o){return s(this,void 0,void 0,function*(){const s=o.map(t=>t.trackID).join(","),n=yield fetch(`${i}/v1/tracks/?ids=${s}`,{headers:{Authorization:`${t} ${e}`},method:"Get"});if(200===n.status)return yield n.json()})},getUser:function(t,e){return s(this,void 0,void 0,function*(){const o=yield fetch(`${i}/v1/me`,{headers:{Authorization:`${t} ${e}`}});if(200===o.status)return yield o.json()})},searchTrack:function(t,e,o){return s(this,void 0,void 0,function*(){const s=encodeURI(o),n=yield fetch(`${i}/v1/search?q=${s}&type=track`,{headers:{Authorization:`${t} ${e}`,accept:"application/json"},method:"GET"});if(200===n.status)return yield n.json()})}}},103:function(t,e,o){"use strict";o.d(e,"a",function(){return n}),o.d(e,"b",function(){return a});var s=o(104),i=o.n(s);const n=t=>{let e="";const o="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";for(let s=0;s<t;s+=1)e+=o.charAt(Math.floor(Math.random()*o.length));return e},a=()=>{const t=i.a.parse(location.hash.slice(1));if(0!==Object.keys(t).length)return t}},141:function(t,e,o){"use strict";o.r(e);var s=o(2),i=o(124),n=o(120),a=o(119),r=o(129),c=o(130),l=o(121),d=o(122),u=o(131),h=o(123),m=o(132),f=o(114),p=o(36),v=o(103),y=o(98);var $=class extends s.Component{constructor(){super(...arguments),this.state={visible:!1}}componentDidMount(){const{visible:t}=this.props;this.setState({visible:t})}render(){const{color:t,alertText:e}=this.props;return s.createElement("div",null,s.createElement(y.a,{color:t,isOpen:this.state.visible,toggle:()=>{this.setState({visible:!1})}},e))}},I=o(31),g=o(35),k=o.n(g);k.a`
  mutation deleteTrackFromSession($trackId: ID!, $sessionId: ID!) {
    removeFromSessionOnTracks(
      tracksesTracksId: $trackId
      sessionSessionId: $sessionId
    ) {
      tracksesTracks {
        trackID
      }
      sessionSession {
        id
      }
    }
  }
`;const S=k.a`
  mutation createSession(
    $sessionID: String!
    $shortCode: String!
    $hostID: String!
  ) {
    createSession(
      sessionID: $sessionID
      shortCode: $shortCode
      hostID: $hostID
    ) {
      id
      shortCode
      sessionID
      hostID
    }
  }
`;k.a`
  mutation createTrack($trackID: String!, $sessionGID: ID!) {
    createTracks(trackID: $trackID, sessionId: $sessionGID) {
      id
      trackID
    }
  }
`;var D=o(101),T=function(t,e,o,s){return new(o||(o=Promise))(function(i,n){function a(t){try{c(s.next(t))}catch(t){n(t)}}function r(t){try{c(s.throw(t))}catch(t){n(t)}}function c(t){t.done?i(t.value):new o(function(e){e(t.value)}).then(a,r)}c((s=s.apply(t,e||[])).next())})};e.default=Object(i.a)(Object(p.d)(class extends s.Component{constructor(){super(...arguments),this.state={alertNotification:{alertText:"",color:"",visible:!1},isLoading:!1,roomDescription:"",roomName:"",roomNameInvalid:!1},this.onCreateRoomBtnClick=(()=>T(this,void 0,void 0,function*(){""!==this.state.roomName?yield this.createRoom():this.state.roomName||this.setState({roomNameInvalid:!0})}))}componentDidMount(){const t=Object(v.b)();t&&(localStorage.setItem("accessToken",t.access_token),localStorage.setItem("tokenType",t.token_type))}createRoom(){return T(this,void 0,void 0,function*(){const t=localStorage.getItem("tokenType"),e=localStorage.getItem("accessToken");if(e&&t){this.setState({isLoading:!0});const o=yield D.a.getUser(t,e);if(o){const s=yield D.a.createPlaylist(t,e,this.state.roomName,this.state.roomDescription,o.id);if(s){localStorage.setItem("createdPlaylistId",s.id);const t=Object(v.a)(4);try{const e=yield this.props.client.mutate({mutation:S,variables:{hostID:s.owner.id,sessionID:s.id,shortCode:t}});e.data.createSession&&(localStorage.setItem("graphSessionShortCode",e.data.createSession.shortCode),this.props.history.push("/room"))}catch(t){const e=Object.assign({},this.state.alertNotification);e.visible=!0,e.color="danger",e.alertText=t.message,this.setState({alertNotification:e})}}}}else{this.setState({isLoading:!1});const t=Object.assign({},this.state.alertNotification);t.visible=!0,t.color="danger",t.alertText="Spotify session has expired. Return home to reconnect to Spotify.",this.setState({alertNotification:t})}})}render(){return s.createElement(n.a,{style:{maxWidth:"1000px",margin:"auto"}},s.createElement(a.a,null,s.createElement(r.a,{tag:"h3"},"Create a Room"),s.createElement(c.a,null,s.createElement(l.a,null,s.createElement(d.a,null,s.createElement(u.a,{for:"roomName"},"Room Name"),s.createElement(h.a,{type:"text",name:"name",placeholder:"Enter a Room Name",value:this.state.roomName,onChange:t=>this.setState({roomName:t.target.value,roomNameInvalid:!1}),valid:""!==this.state.roomName,invalid:this.state.roomNameInvalid}),s.createElement(m.a,null,"Room name can not be empty.")),s.createElement(d.a,null,s.createElement(u.a,{for:"roomDescription"},"Room Description"),s.createElement(h.a,{type:"text",name:"description",placeholder:"Enter a Room Description",onChange:t=>{this.setState({roomDescription:t.target.value})}}))),s.createElement(f.a,{onClick:()=>this.onCreateRoomBtnClick()},"Create Room"),this.state.alertNotification.visible?s.createElement($,{visible:this.state.alertNotification.visible,color:this.state.alertNotification.color,alertText:this.state.alertNotification.alertText}):null,this.state.isLoading?s.createElement(I.a,null):null)))}}))}}]);