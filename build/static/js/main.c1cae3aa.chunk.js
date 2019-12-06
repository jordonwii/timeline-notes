(window.webpackJsonpnotetaker=window.webpackJsonpnotetaker||[]).push([[0],{40:function(e,t,n){e.exports=n(64)},45:function(e,t,n){},47:function(e,t,n){},64:function(e,t,n){"use strict";n.r(t);var i=n(0),a=n.n(i),r=n(14),o=n.n(r),s=(n(45),n(12)),u=n.n(s),c=n(17),l=n(3),d=n(4),h=n(9),f=n(8),v=n(10),p=(n(47),n(48),function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(h.a)(this,Object(f.a)(t).call(this,e))).interval=void 0,n.state={timestamp:n.props.initialTimestamp},n.interval=-1,n}return Object(v.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return a.a.createElement("span",{className:"timestamp"},this.state.timestamp.toLocaleString("en-us",{hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:!1}))}},{key:"tick",value:function(){this.setState((function(e){return{timestamp:new Date}}))}},{key:"componentDidMount",value:function(){this.props.shouldTick&&this.setupTimer()}},{key:"componentDidUpdate",value:function(e,t){e.shouldTick!==this.props.shouldTick&&(this.props.shouldTick?this.setupTimer():window.clearInterval(this.interval))}},{key:"setupTimer",value:function(){var e=this;this.interval=window.setInterval((function(){return e.tick()}),500)}},{key:"componentWillUnmount",value:function(){window.clearInterval(this.interval)}}]),t}(a.a.Component)),m=n(39);function y(e){return new Array(e*w).fill(" ").join("")}var g,k,w=4,I=function(){function e(t,n,i){Object(l.a)(this,e),this.editTimestamp=t,this.note=n,this.content="",this.indentedUnits=0,this.creationTimestamp=void 0,this.creationTimestamp=new Date,this.indentedUnits=i||0}return Object(d.a)(e,[{key:"setCreationTimestamp",value:function(e){this.creationTimestamp=e}},{key:"getContent",value:function(){return this.content}},{key:"setContent",value:function(e,t){this.content=e,t&&this.setEditTimestamp(new Date)}},{key:"getLastEditTimestamp",value:function(){return this.editTimestamp}},{key:"setEditTimestamp",value:function(e){this.editTimestamp=e}},{key:"getIndentedUnits",value:function(){return this.indentedUnits}},{key:"setIndentedUnits",value:function(e){this.indentedUnits=e}},{key:"isEmpty",value:function(){return 0===this.content.trim().length}},{key:"convertToText",value:function(){return this.editTimestamp.toLocaleString("en-us",{hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:!1})+" - "+y(this.indentedUnits)+this.content}},{key:"serialize",value:function(){return{id:this.id,content:this.content,indentedUnits:this.indentedUnits,editTimestamp:this.editTimestamp.getTime()}}},{key:"id",get:function(){return this.creationTimestamp.getTime()}}],[{key:"deserialize",value:function(t,n){var i=new e(new Date(n.editTimestamp),t,n.indentedUnits);return i.setContent(n.content),i.setCreationTimestamp(new Date(n.id)),i}}]),e}(),b=function(){function e(){Object(l.a)(this,e),this.noteLines=new Map,this.noteLineIdsOrdered=[],this.title=void 0,this.creationTime=void 0,this.timestampsLocked=!1,this.driveId="",this.creationTime=new Date,this.title=this.makeDefaultTitle()}return Object(d.a)(e,[{key:"makeDefaultTitle",value:function(){return"Interview on "+this.creationTime.toLocaleDateString()}},{key:"makeNewLine",value:function(e){return new I(new Date,this,e)}},{key:"addLine",value:function(e){var t=this.makeNewLine(e);return this.noteLines.set(t.id,t),this.noteLineIdsOrdered.push(t.id),t}},{key:"addLineAfter",value:function(e,t){var n=this.noteLineIdsOrdered.indexOf(e);if(-1===n)return console.error("Got bad line id in addLineAfter:",e,"; current note:",this),null;var i=this.makeNewLine(t);return this.noteLines.set(i.id,i),this.noteLineIdsOrdered.splice(n+1,0,i.id),i}},{key:"getLines",value:function(){var e=this;return Array.from(this.noteLineIdsOrdered.flatMap((function(t){var n=e.noteLines.get(t);return n?[n]:[]})))}},{key:"getLine",value:function(e){return this.noteLines.get(e)}},{key:"getFirstNoteLineId",value:function(){return Math.min.apply(Math,Object(m.a)(Array.from(this.noteLines.keys())))}},{key:"getTitle",value:function(){return this.title}},{key:"setTitle",value:function(e){this.title=e}},{key:"getTimestampsLocked",value:function(){return this.timestampsLocked}},{key:"setTimestampsLocked",value:function(e){this.timestampsLocked=e}},{key:"getDriveId",value:function(){return this.driveId||""}},{key:"setDriveId",value:function(e){this.driveId=e}},{key:"isEmpty",value:function(){var e=!0,t=!1,n=void 0;try{for(var i,a=this.noteLines.values()[Symbol.iterator]();!(e=(i=a.next()).done);e=!0){if(!i.value.isEmpty())return!1}}catch(r){t=!0,n=r}finally{try{e||null==a.return||a.return()}finally{if(t)throw n}}return!0}},{key:"convertToText",value:function(){var e="";return this.noteLines.forEach((function(t){e+=t.convertToText()+"\n"})),e}},{key:"getPreviousRowId",value:function(e){var t=this.noteLineIdsOrdered.indexOf(e);return-1===t?null:this.noteLineIdsOrdered[Math.max(0,t-1)]}},{key:"getNextRowId",value:function(e){var t=this.noteLineIdsOrdered.indexOf(e);return-1===t?null:this.noteLineIdsOrdered[Math.min(this.noteLineIdsOrdered.length-1,t+1)]}},{key:"deleteRow",value:function(e){this.noteLines.delete(e);var t=this.noteLineIdsOrdered.indexOf(e);-1!==t?this.noteLineIdsOrdered.splice(t,1):console.error("Tried to delete non-existent row with ID: ",e,this)}},{key:"setNoteLines",value:function(e,t){this.noteLineIdsOrdered=e,this.noteLines=t}},{key:"serialize",value:function(){var e=this;return{title:this.title,id:this.id,timestampsLocked:this.timestampsLocked,driveId:this.driveId,noteLines:this.noteLineIdsOrdered.map((function(t){var n=e.noteLines.get(t);if(void 0===n)throw console.error("Note: ",e),new Error("Got undefined note line during serialization.");return n.serialize()}))}}},{key:"id",get:function(){return this.creationTime.getTime()}}],[{key:"deserialize",value:function(t){var n=new e;n.setTitle(t.title),n.setTimestampsLocked(t.timestampsLocked),n.setDriveId(t.driveId);var i=t.noteLines.map((function(e){return I.deserialize(n,e)})),a=new Map;return i.forEach((function(e){return a.set(e.id,e)})),n.setNoteLines(t.noteLines.map((function(e){return e.id})),a),n}}]),e}(),S=new(function(){function e(){Object(l.a)(this,e)}return Object(d.a)(e,[{key:"saveNote",value:function(e){var t=this.getNoteStorageId(e);window.localStorage[t]=JSON.stringify(e.serialize()),window.localStorage.lastEditedNote=t}},{key:"getLastEditedNote",value:function(){var e=window.localStorage.lastEditedNote;if(void 0===e)return null;var t=window.localStorage[e];return void 0===t?(console.error("Tried to fetch non-existent note: ",e),null):b.deserialize(JSON.parse(t))}},{key:"getNoteStorageId",value:function(e){return"note-"+e.id}}]),e}()),N=new(function(){function e(){Object(l.a)(this,e)}return Object(d.a)(e,[{key:"updateNote",value:function(e){console.debug("Updating note: ",e),S.saveNote(e)}},{key:"getLastEditedNote",value:function(){return S.getLastEditedNote()}}]),e}()),L=n(23),T=function(e){function t(e){var n;Object(l.a)(this,t),(n=Object(h.a)(this,Object(f.a)(t).call(this,e))).timestampElement=a.a.createRef(),n.entryboxElement=a.a.createRef(),n.noteLine=void 0;var i=e.note.getLine(e.rowId);if(void 0===i)throw console.error("Note: ",e.note),new Error("Got bad row id. Provided row id: "+e.rowId);return n.noteLine=i,n.state={indentedUnits:n.noteLine.getIndentedUnits(),entryboxContent:n.computeEntryboxContent(n.noteLine.getIndentedUnits(),n.noteLine.getContent()),editedSinceLastFocus:!1},n}return Object(v.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return a.a.createElement("div",{className:"noterow ".concat(this.props.focused?"noterow-focused":"noterow-unfocused")},a.a.createElement(p,{ref:this.timestampElement,initialTimestamp:this.noteLine.getLastEditTimestamp(),shouldTick:this.computeTimestampShouldTick()}),a.a.createElement(L.a,{inputRef:this.entryboxElement,onFocus:this.handleEntryboxFocus.bind(this),onKeyDown:this.handleKeyDown.bind(this),onKeyUp:this.handleKeyUp.bind(this),onChange:this.handleChange.bind(this),onClick:this.handleClick.bind(this),value:this.state.entryboxContent,readOnly:!this.props.focused,className:"entrybox"}))}},{key:"computeTimestampShouldTick",value:function(){if(this.props.note.getTimestampsLocked())return!1;var e=0===this.state.entryboxContent.trim().length;return!(!e||!this.props.focused)||!(e||!this.state.editedSinceLastFocus)}},{key:"computeEntryboxContent",value:function(e,t){return y(e)+t.trim()}},{key:"componentDidUpdate",value:function(e,t){var n=this;t.indentedUnits!==this.state.indentedUnits&&(this.setState((function(e){return{entryboxContent:n.computeEntryboxContent(n.state.indentedUnits,n.state.entryboxContent)}})),this.noteLine.setIndentedUnits(this.state.indentedUnits)),t.entryboxContent!==this.state.entryboxContent&&(this.noteLine.setContent(this.state.entryboxContent,!0),N.updateNote(this.props.note)),e.focused===this.props.focused||this.props.focused||this.setState({editedSinceLastFocus:!1}),null!==this.entryboxElement.current&&this.props.focused&&this.entryboxElement.current.focus()}},{key:"componentDidMount",value:function(){null!==this.entryboxElement.current&&this.props.focused&&this.entryboxElement.current.focus()}},{key:"getTextUntilCursor",value:function(){var e=this.entryboxElement.current;return null!==e?e.value.slice(0,e.selectionStart+1):null}},{key:"getNumRows",value:function(){var e=this.entryboxElement.current;return null!==e?Math.floor(e.clientHeight/39):0}},{key:"getNoteLine",value:function(){return this.noteLine}},{key:"handleClick",value:function(e){this.props.clickHandler(this)}},{key:"handleKeyUp",value:function(e){this.props.keyUpHandler(this)}},{key:"handleChange",value:function(e){this.setState({entryboxContent:e.target.value,editedSinceLastFocus:!0}),N.updateNote(this.props.note)}},{key:"handleKeyDown",value:function(e){this.props.keyDownHandler(this,e)&&"Tab"===e.key&&(e.preventDefault(),e.shiftKey?this.setState((function(e){return{indentedUnits:Math.max(e.indentedUnits-1,0)}})):this.setState((function(e){return{indentedUnits:e.indentedUnits+1}})))}},{key:"handleEntryboxFocus",value:function(e){if(this.props.focusHandler(this.noteLine),0===this.state.entryboxContent.trim().length&&null!=this.entryboxElement.current){var t=this.entryboxElement.current.textLength;this.entryboxElement.current.setSelectionRange(t,t)}}}]),t}(a.a.Component),E=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(h.a)(this,Object(f.a)(t).call(this,e))).inputRef=a.a.createRef(),n.state={editing:!1,titleValue:e.title},n}return Object(v.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return a.a.createElement("div",{className:"note-title"},a.a.createElement("input",{type:"text",ref:this.inputRef,onClick:this.handleClick.bind(this),onKeyDown:this.handleKeyDown.bind(this),onChange:this.handleChange.bind(this),onBlur:this.handleBlur.bind(this),value:this.state.titleValue}))}},{key:"handleClick",value:function(e){this.setState({editing:!0})}},{key:"handleKeyDown",value:function(e){"Enter"===e.key&&(e.preventDefault(),this.props.titleChangeHandler(this.state.titleValue),this.setState({editing:!1}))}},{key:"handleChange",value:function(e){e.preventDefault(),this.setState({titleValue:e.currentTarget.value})}},{key:"handleBlur",value:function(e){this.setState({titleValue:this.props.title})}}]),t}(a.a.Component),O=function(e){function t(){var e,n;Object(l.a)(this,t);for(var i=arguments.length,r=new Array(i),o=0;o<i;o++)r[o]=arguments[o];return(n=Object(h.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(r)))).mirrorElem=a.a.createRef(),n}return Object(v.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return a.a.createElement(L.a,{inputRef:this.mirrorElem,value:this.props.value,className:"entrybox entrybox-mirror"})}},{key:"componentDidUpdate",value:function(){null!==this.mirrorElem.current&&(this.mirrorElem.current.style.width=this.getEntryboxWidth()+"px")}},{key:"getCurrentRow",value:function(){return null!==this.mirrorElem.current?Math.floor(this.mirrorElem.current.clientHeight/39):null}},{key:"getEntryboxWidth",value:function(){var e=document.getElementsByClassName("entrybox")[0];return e?e.clientWidth:0}}]),t}(a.a.Component),C=n(13),D=n(38),x=["https://www.googleapis.com/discovery/v1/apis/drive/v3/rest"],j="application/vnd.google-apps.document";!function(e){e[e.LOADING=0]="LOADING",e[e.SIGNED_OUT=1]="SIGNED_OUT",e[e.SIGNED_IN=2]="SIGNED_IN"}(g||(g={})),function(e){e[e.LOADING=0]="LOADING",e[e.SIGNED_OUT=1]="SIGNED_OUT",e[e.SYNCING=2]="SYNCING",e[e.SYNCED=3]="SYNCED"}(k||(k={}));var R=new(function(){function e(){Object(l.a)(this,e),this.signedInEventHandlers=[],this.syncStatusChangeHandlers=[]}return Object(d.a)(e,[{key:"init",value:function(){var e=Object(c.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.fireSyncStatusChange(k.LOADING),e.abrupt("return",gapi.load("client:auth2",this.initClient.bind(this)));case 2:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"initClient",value:function(){var e=this;gapi.client.init({apiKey:"AIzaSyBEH9v-TByqUFESw8vjl2YEDgAKoWm7n_8",clientId:"370774814885-7kseam56ntmpklgnr9p00f8gh968cmtb.apps.googleusercontent.com",discoveryDocs:x,scope:"https://www.googleapis.com/auth/drive.file"}).then((function(){gapi.auth2.getAuthInstance().isSignedIn.listen(e.handleIsSignedInState.bind(e)),e.handleIsSignedInState(gapi.auth2.getAuthInstance().isSignedIn.get())}))}},{key:"handleIsSignedInState",value:function(e){console.log("user is now",e),e||this.fireSyncStatusChange(k.SIGNED_OUT);var t=e?g.SIGNED_IN:g.SIGNED_OUT,n=!0,i=!1,a=void 0;try{for(var r,o=this.signedInEventHandlers[Symbol.iterator]();!(n=(r=o.next()).done);n=!0){(0,r.value)(t)}}catch(s){i=!0,a=s}finally{try{n||null==o.return||o.return()}finally{if(i)throw a}}}},{key:"addSignInStateHandler",value:function(e){this.signedInEventHandlers.push(e)}},{key:"addSyncStatusChangeHandler",value:function(e){this.syncStatusChangeHandlers.push(e)}},{key:"fireSyncStatusChange",value:function(e){var t=!0,n=!1,i=void 0;try{for(var a,r=this.syncStatusChangeHandlers[Symbol.iterator]();!(t=(a=r.next()).done);t=!0){(0,a.value)(e)}}catch(o){n=!0,i=o}finally{try{t||null==r.return||r.return()}finally{if(n)throw i}}}},{key:"isUserSignedIn",value:function(){return gapi.auth2.getAuthInstance().isSignedIn.get()}},{key:"saveNote",value:function(){var e=Object(c.a)(u.a.mark((function e(t){var n,i,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this.isUserSignedIn()){e.next=2;break}return e.abrupt("return","");case 2:if(this.fireSyncStatusChange(k.SYNCING),n="",0!==t.getDriveId().length||t.isEmpty()){e.next=18;break}return console.log("Creating new note to drive: ",t),e.next=8,this.getParentFolderId();case 8:return i=e.sent,e.next=11,gapi.client.drive.files.create({name:t.getTitle(),mimeType:j,parents:[i]});case 11:if(a=e.sent,console.log("Got create response: ",a),200===a.status){e.next=15;break}throw new Error("Got bad create response code");case 15:n=a.result.id,e.next=19;break;case 18:0!==t.getDriveId().length&&(console.log("Saving note to drive: ",t),n=t.getDriveId());case 19:if(!(n.length>0)){e.next=22;break}return e.next=22,this.uploadContent(n,t.convertToText());case 22:return this.fireSyncStatusChange(k.SYNCED),e.abrupt("return",n);case 24:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"getParentFolderId",value:function(){var e=Object(c.a)(u.a.mark((function e(){var t,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(void 0!==(t=window.localStorage["parent-drive-id"])){e.next=13;break}return console.log("Creating new parent folder..."),e.next=5,gapi.client.drive.files.create({mimeType:"application/vnd.google-apps.folder",name:"Synced Interview Notes"});case 5:if(n=e.sent,console.log("got create response: ",n),200===n.status){e.next=9;break}throw new Error("Got bad create response code");case 9:t=n.result.id,window.localStorage["parent-drive-id"]=t,e.next=14;break;case 13:console.log("Reusing drive id: ",t);case 14:return e.abrupt("return",t);case 15:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"uploadContent",value:function(){var e=Object(c.a)(u.a.mark((function e(t,n){var i;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("About to upload content for",t),(i=new XMLHttpRequest).open("PATCH","https://www.googleapis.com/upload/drive/v3/files/"+t+"?uploadType=media"),i.setRequestHeader("Authorization","Bearer "+gapi.client.getToken().access_token),i.setRequestHeader("Content-Type",j),e.abrupt("return",new Promise((function(e,t){i.onload=function(){return e()},i.send(n)})));case 6:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()}]),e}()),U=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(h.a)(this,Object(f.a)(t).call(this,e))).state={open:!1,driveSignInState:g.LOADING},R.addSignInStateHandler((function(e){n.setState({driveSignInState:e})})),n}return Object(v.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this,t=this.props.timestampsLocked?"Unlock Timestamps":"Lock Timestamps",n=[];return n=this.state.driveSignInState===g.SIGNED_IN?[a.a.createElement(C.a.Item,{key:"signout",onClick:function(t){return e.props.signOutHandler()}},"Sign out of Google Drive")]:this.state.driveSignInState===g.SIGNED_OUT?[a.a.createElement(C.a.Item,{key:"signin",onClick:function(t){return e.props.signInHandler()}},"Sign into Google Drive")]:[a.a.createElement(C.a.Item,{key:"loading",onClick:function(t){return e.props.signInHandler()}},"Drive Login Loading...")],a.a.createElement(D.a,{alignRight:!0,id:"menu",title:"Menu"},a.a.createElement(C.a.Item,{onClick:function(t){return e.props.newNoteHandler()}},"New Note"),a.a.createElement(C.a.Item,{onClick:function(t){return e.props.timestampLockToggleHandler()}},t),a.a.createElement(C.a.Divider,null),n)}},{key:"handleMenuIconClick",value:function(e){}},{key:"resetHandler",value:function(e){}}]),t}(a.a.Component),H=n(19),G=function(e){function t(e){var n;return Object(l.a)(this,t),n=Object(h.a)(this,Object(f.a)(t).call(this,e)),R.addSyncStatusChangeHandler(n.handleSyncStatusChange.bind(Object(H.a)(n))),n.state={syncStatus:k.LOADING},n}return Object(v.a)(t,e),Object(d.a)(t,[{key:"handleSyncStatusChange",value:function(e){this.setState({syncStatus:e})}},{key:"render",value:function(){var e="",t="";switch(this.state.syncStatus){case k.SYNCING:e="syncing",t="Syncing note to Drive...";break;case k.SYNCED:e="synced",t="Add content to sync note...";break;case k.LOADING:e="loading",t="Loading Drive state...";break;case k.SIGNED_OUT:e="signed-out",t="Not signed into Drive"}var n=this.props.noteDriveId.length>0&&(this.state.syncStatus===k.SYNCED||this.state.syncStatus===k.SYNCING);return a.a.createElement("div",{className:"view-in-docs-link "+e},n&&a.a.createElement("a",{href:"https://docs.google.com/document/d/"+this.props.noteDriveId+"/edit",rel:"noopener noreferrer",target:"_blank"},"View Note in Drive"),!n&&t)}}]),t}(a.a.Component),A=function(e){function t(){return Object(l.a)(this,t),Object(h.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(v.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this.props.noteLocked?"visible":"invisible";return a.a.createElement("span",{className:"note-locked-icon "+e,title:"Timestamps are locked. Unlock via the menu."})}}]),t}(a.a.Component),K=function(e){function t(){return Object(l.a)(this,t),Object(h.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(v.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return a.a.createElement("div",{className:"status-area"},a.a.createElement(G,{noteDriveId:this.props.noteDriveId}),a.a.createElement(A,{noteLocked:this.props.timestampsLocked}))}}]),t}(a.a.Component),F=function(e){function t(e){var n;Object(l.a)(this,t),(n=Object(h.a)(this,Object(f.a)(t).call(this,e))).wrapperElement=a.a.createRef(),n.mirrorRef=a.a.createRef(),n.editedSinceLastDriveSync=!1,n.syncTimer=null,R.init();var i,r=N.getLastEditedNote();return i=null===r?(r=n.createNewNote()).getFirstNoteLineId():r.getFirstNoteLineId(),n.state={note:r,focusedNoteRowId:i,currentRowCursorText:""},n}return Object(v.a)(t,e),Object(d.a)(t,[{key:"createNewNote",value:function(){var e=new b;return e.addLine(),e}},{key:"componentDidMount",value:function(){var e=this;this.updateWindowTitle(),R.addSignInStateHandler((function(t){t===g.SIGNED_IN?R.saveNote(e.state.note).then((function(t){var n=e.state.note;t.length>0&&(n.setDriveId(t),e.setState({note:n})),setTimeout(e.syncTimerHandler.bind(e),2e3)})):null!==e.syncTimer&&(clearTimeout(e.syncTimer),e.syncTimer=null)}))}},{key:"componentDidUpdate",value:function(e,t){t.note.getTitle()!==this.state.note.getTitle()&&this.updateWindowTitle()}},{key:"syncTimerHandler",value:function(){var e=Object(c.a)(u.a.mark((function e(){var t,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!this.editedSinceLastDriveSync){e.next=6;break}return e.next=3,R.saveNote(this.state.note);case 3:(t=e.sent).length>0&&((n=this.state.note).setDriveId(t),this.setState({note:n})),this.editedSinceLastDriveSync=!1;case 6:this.syncTimer=setTimeout(this.syncTimerHandler.bind(this),2e3);case 7:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.state.note.getLines().map((function(t){return a.a.createElement(T,{keyDownHandler:e.handleNoteRowKeyDown.bind(e),keyUpHandler:e.handleNoteRowKeyUp.bind(e),focusHandler:e.noteRowFocusHandler.bind(e),clickHandler:e.handleNoteRowClick.bind(e),note:e.state.note,rowId:t.id,key:t.id,focused:t.id===e.state.focusedNoteRowId})}));return a.a.createElement("div",{className:"App",ref:this.wrapperElement},a.a.createElement("div",{className:"header"},a.a.createElement(E,{title:this.state.note.getTitle(),titleChangeHandler:this.handleTitleChange.bind(this)}),a.a.createElement(K,{noteDriveId:this.state.note.getDriveId(),timestampsLocked:this.state.note.getTimestampsLocked()}),a.a.createElement(U,{timestampsLocked:this.state.note.getTimestampsLocked(),newNoteHandler:this.newNoteHandler.bind(this),timestampLockToggleHandler:this.handleToggleTimestampsLocked.bind(this),signOutHandler:this.signOutHandler.bind(this),signInHandler:this.signInHandler.bind(this)})),t,a.a.createElement(O,{value:this.state.currentRowCursorText,ref:this.mirrorRef}))}},{key:"signInHandler",value:function(){gapi.auth2.getAuthInstance().signIn()}},{key:"signOutHandler",value:function(){gapi.auth2.getAuthInstance().signOut()}},{key:"handleTitleChange",value:function(e){this.state.note.setTitle(e),this.setState({note:this.state.note}),N.updateNote(this.state.note)}},{key:"updateWindowTitle",value:function(){document.title=this.state.note.getTitle()+" - Interview Notes"}},{key:"handleToggleTimestampsLocked",value:function(){var e=this.state.note;e.setTimestampsLocked(!e.getTimestampsLocked()),this.setState({note:e})}},{key:"newNoteHandler",value:function(){var e=this.createNewNote();this.editedSinceLastDriveSync=!0,this.setState({note:e,focusedNoteRowId:e.getFirstNoteLineId()})}},{key:"handleNoteRowClick",value:function(e){this.setState({currentRowCursorText:e.getTextUntilCursor()||""})}},{key:"handleNoteRowKeyDown",value:function(e,t){this.editedSinceLastDriveSync=!0;var n=e.getNoteLine();if("Enter"===t.key&&!t.shiftKey){t.preventDefault();var i,a=this.state.note;return null!==(i=t.ctrlKey?a.addLine(n.getIndentedUnits()):a.addLineAfter(this.state.focusedNoteRowId,n.getIndentedUnits()))&&(this.setState({note:a,focusedNoteRowId:i.id}),!1)}if("Backspace"===t.key){var r=this.state.note.getLine(this.state.focusedNoteRowId);if(void 0!==r&&r.isEmpty()&&this.state.note.getLines().length>1){var o=this.state.note.getPreviousRowId(this.state.focusedNoteRowId);this.state.note.deleteRow(this.state.focusedNoteRowId),null!==o?(o===this.state.focusedNoteRowId&&(o=this.state.note.getFirstNoteLineId()),this.setState({focusedNoteRowId:o})):(console.error("Got a null previous row id relative to: ",this.state.focusedNoteRowId),this.setState({focusedNoteRowId:this.state.note.getFirstNoteLineId()})),N.updateNote(this.state.note),t.preventDefault()}}else if("s"===t.key&&t.ctrlKey)R.saveNote(this.state.note),t.preventDefault();else if("ArrowUp"===t.key||"ArrowDown"===t.key){var s=null;if(null!==this.mirrorRef.current&&(s=this.mirrorRef.current.getCurrentRow()),null===s)return!0;var u=null;"ArrowUp"===t.key&&0===s?u=this.state.note.getPreviousRowId(this.state.focusedNoteRowId):"ArrowDown"===t.key&&s===e.getNumRows()&&(u=this.state.note.getNextRowId(this.state.focusedNoteRowId)),null!==u&&this.setState({focusedNoteRowId:u})}return!0}},{key:"handleNoteRowKeyUp",value:function(e){this.setState({currentRowCursorText:e.getTextUntilCursor()||""})}},{key:"noteRowFocusHandler",value:function(e){this.setState({focusedNoteRowId:e.id})}}]),t}(a.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(a.a.createElement(F,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[40,1,2]]]);
//# sourceMappingURL=main.c1cae3aa.chunk.js.map