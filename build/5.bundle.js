(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{103:function(e,t,s){"use strict";s.d(t,"a",function(){return c}),s.d(t,"b",function(){return r});var o=s(104),n=s.n(o);const c=e=>{let t="";const s="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";for(let o=0;o<e;o+=1)t+=s.charAt(Math.floor(Math.random()*s.length));return t},r=()=>{const e=n.a.parse(location.hash.slice(1));if(0!==Object.keys(e).length)return e}},106:function(e,t,s){"use strict";s.d(t,"b",function(){return C}),s.d(t,"a",function(){return S}),s.d(t,"d",function(){return I}),s.d(t,"c",function(){return A});var o,n,c,r,a,i=s(35),d=s.n(i),l=s(2),u=s(36);!function(e){e.Created="CREATED",e.Updated="UPDATED",e.Deleted="DELETED"}(o||(o={})),function(e){e.ContentTypeAsc="contentType_ASC",e.ContentTypeDesc="contentType_DESC",e.CreatedAtAsc="createdAt_ASC",e.CreatedAtDesc="createdAt_DESC",e.IdAsc="id_ASC",e.IdDesc="id_DESC",e.NameAsc="name_ASC",e.NameDesc="name_DESC",e.SecretAsc="secret_ASC",e.SecretDesc="secret_DESC",e.SizeAsc="size_ASC",e.SizeDesc="size_DESC",e.UpdatedAtAsc="updatedAt_ASC",e.UpdatedAtDesc="updatedAt_DESC",e.UrlAsc="url_ASC",e.UrlDesc="url_DESC"}(n||(n={})),function(e){e.HostIdAsc="hostID_ASC",e.HostIdDesc="hostID_DESC",e.IdAsc="id_ASC",e.IdDesc="id_DESC",e.SessionIdAsc="sessionID_ASC",e.SessionIdDesc="sessionID_DESC",e.ShortCodeAsc="shortCode_ASC",e.ShortCodeDesc="shortCode_DESC"}(c||(c={})),function(e){e.IdAsc="id_ASC",e.IdDesc="id_DESC",e.TrackIdAsc="trackID_ASC",e.TrackIdDesc="trackID_DESC"}(r||(r={})),function(e){e.CreatedAtAsc="createdAt_ASC",e.CreatedAtDesc="createdAt_DESC",e.IdAsc="id_ASC",e.IdDesc="id_DESC",e.UpdatedAtAsc="updatedAt_ASC",e.UpdatedAtDesc="updatedAt_DESC"}(a||(a={}));const D=d.a`
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
`;class C extends l.Component{render(){return l.createElement(u.b,Object.assign({mutation:D},this.props))}}d.a`
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
`;const h=d.a`
  mutation createTrack($trackID: String!, $sessionGID: ID!) {
    createTracks(trackID: $trackID, sessionId: $sessionGID) {
      id
      trackID
    }
  }
`;class S extends l.Component{render(){return l.createElement(u.b,Object.assign({mutation:h},this.props))}}const I=d.a`
  query getSession($shortCode: String!) {
    Session(shortCode: $shortCode) {
      id
      trackses {
        trackID
        id
      }
      sessionID
      hostID
    }
  }
`;class A extends l.Component{render(){return l.createElement(u.c,Object.assign({query:I},this.props))}}},133:function(e,t,s){"use strict";s.r(t);var o=s(2),n=s(36),c=s(124),r=s(120),a=s(119),i=s(129),d=s(130),l=s(121),u=s(122),D=s(131),C=s(123),h=s(132),S=s(114),I=s(103),A=s(106),m=function(e,t,s,o){return new(s||(s=Promise))(function(n,c){function r(e){try{i(o.next(e))}catch(e){c(e)}}function a(e){try{i(o.throw(e))}catch(e){c(e)}}function i(e){e.done?n(e.value):new s(function(t){t(e.value)}).then(r,a)}i((o=o.apply(e,t||[])).next())})};t.default=Object(c.a)(Object(n.d)(class extends o.Component{constructor(){super(...arguments),this.state={alertNotification:{alertText:"",color:"",visible:!1},code:"",codeFormFeedback:"Code cannot be empty.",codeInvalid:!1},this.isCodeValid=(()=>m(this,void 0,void 0,function*(){return""===this.state.code?(this.setState({codeFormFeedback:"Code cannot be empty.",codeInvalid:!0}),!1):(yield this.getRoom())?(this.setState({codeInvalid:!1}),!0):(this.setState({codeFormFeedback:"Invalid code.",codeInvalid:!0}),!1)})),this.onJoinRoomBtnClick=(()=>m(this,void 0,void 0,function*(){(yield this.isCodeValid())&&this.props.history.push(`/room/${this.state.code}`)}))}componentDidMount(){const e=Object(I.b)();e&&(localStorage.setItem("accessToken",e.access_token),localStorage.setItem("tokenType",e.token_type))}getRoom(){return m(this,void 0,void 0,function*(){try{if((yield this.props.client.query({query:A.d,variables:{shortCode:this.state.code}})).data.Session)return!0}catch(e){return!1}return!1})}render(){return o.createElement(r.a,{style:{maxWidth:"1000px",margin:"auto"}},o.createElement(a.a,null,o.createElement(i.a,{tag:"h3"},"Join a Room"),o.createElement(d.a,null,o.createElement(l.a,null,o.createElement(u.a,null,o.createElement(D.a,{for:"code"},"Code"),o.createElement(C.a,{type:"text",placeholder:"Enter the code for the room (ex. A6e7)",value:this.state.code,onChange:e=>this.setState({code:e.target.value,codeInvalid:!1}),valid:""!==this.state.code,invalid:this.state.codeInvalid}),o.createElement(h.a,null,this.state.codeFormFeedback))),o.createElement(S.a,{onClick:this.onJoinRoomBtnClick},"Join Room"))))}}))}}]);