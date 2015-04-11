//json object returned by
//filtered for payload
//GET https://www.googleapis.com/gmail/v1/users/{user_id}/messages/{message_id}?fields=payload&key={YOUR_API_KEY}

var fullMessage = {
 "id": "14caa14879f39821",
 "threadId": "14caa14879f39821",
 "labelIds": [
  "INBOX",
  "IMPORTANT",
  "CATEGORY_PERSONAL"
 ],
 "snippet": "This is a body formatted and such text exfdx Gmail",
 "historyId": "195012",
 "payload": {
  "mimeType": "multipart/alternative",
  "filename": "",
  "headers": [
   {
    "name": "Delivered-To",
    "value": "kp1578@nyu.edu"
   },
   {
    "name": "Received",
    "value": "by 10.182.114.228 with SMTP id jj4csp489100obb;        Sat, 11 Apr 2015 13:03:34 -0700 (PDT)"
   },
   {
    "name": "X-Received",
    "value": "by 10.141.28.14 with SMTP id f14mr9494664qhe.74.1428782614119;        Sat, 11 Apr 2015 13:03:34 -0700 (PDT)"
   },
   {
    "name": "Return-Path",
    "value": "<kimmykong123@gmail.com>"
   },
   {
    "name": "Received",
    "value": "from gmx3.home.nyu.edu (GMX18.HOME.NYU.EDU. [128.122.118.145])        by mx.google.com with ESMTP id 197si5650280qhc.26.2015.04.11.13.03.33        for <kp1578@nyu.edu>;        Sat, 11 Apr 2015 13:03:34 -0700 (PDT)"
   },
   {
    "name": "Received-SPF",
    "value": "softfail (google.com: domain of transitioning kimmykong123@gmail.com does not designate 128.122.118.240 as permitted sender) client-ip=128.122.118.240;"
   },
   {
    "name": "Authentication-Results",
    "value": "mx.google.com;       spf=softfail (google.com: domain of transitioning kimmykong123@gmail.com does not designate 128.122.118.240 as permitted sender) smtp.mail=kimmykong123@gmail.com;       dkim=pass header.i=@gmail.com"
   },
   {
    "name": "Received",
    "value": "from mx3.nyu.edu (mx3.local [10.100.100.243]) by gmx3.home.nyu.edu (8.14.5+Sun/8.14.5) with ESMTP id t3BK3XUa017697 for <kp1578@nyu.edu>; Sat, 11 Apr 2015 16:03:33 -0400 (EDT)"
   },
   {
    "name": "Received",
    "value": "from r1.home.nyu.edu (R1.HOME.NYU.EDU [128.122.118.240]) by mx3.nyu.edu (8.14.5+Sun/8.14.5) with ESMTP id t3BK3VSk017671 for <kp1578@nyu.edu>; Sat, 11 Apr 2015 16:03:32 -0400 (EDT)"
   },
   {
    "name": "Received",
    "value": "from mail-ig0-f176.google.com ([209.85.213.176])  by r1.home.nyu.edu with ESMTP; 11 Apr 2015 16:03:12 -0400"
   },
   {
    "name": "Received",
    "value": "by iggg4 with SMTP id g4so20889913igg.0        for <kp1578@nyu.edu>; Sat, 11 Apr 2015 13:03:12 -0700 (PDT)"
   },
   {
    "name": "DKIM-Signature",
    "value": "v=1; a=rsa-sha256; c=relaxed/relaxed;        d=gmail.com; s=20120113;        h=mime-version:from:date:message-id:subject:to:content-type;        bh=Ao1ecWesCPM1WRTGRwBrE0Xju3O5Svki/qWSaztqnoc=;        b=YvOpDFgcvsNM2f9L+jW8wYkKFEobnQn+ILgh39noLjuMW/J8Wy/eW2IbMKmakZApWh         E7siedlBlyaRmzwr+xZw3Di5SNf5hGUs/6qs6t+GWFglF4gk+u6CtU5TKn76zQnr3qsX         9AKWmXiuEwxjxnTYrDrdeEwEqhjAQOTkS+2a3K5+FX5Dv5nXG5mqTk0bPlVSvEOUNFTT         2CMThwRsDpekB1154P7dFhF3HnJyA1bT6PxJqQtybxFCpZk4pR/OYiTM2U+D+99+lSLa         Iyrg9d6kc25L7L+rgxN3a9THwlUhBS2sneZGzkL4qcIp0iVM+mN9pMKyXZf4dDztSOux         5VIQ=="
   },
   {
    "name": "X-Received",
    "value": "by 10.42.172.9 with SMTP id l9mr10714468icz.6.1428782592614; Sat, 11 Apr 2015 13:03:12 -0700 (PDT)"
   },
   {
    "name": "MIME-Version",
    "value": "1.0"
   },
   {
    "name": "From",
    "value": "Kim Phillip <kimmykong123@gmail.com>"
   },
   {
    "name": "Date",
    "value": "Sat, 11 Apr 2015 20:03:12 +0000"
   },
   {
    "name": "Message-ID",
    "value": "<CAEG_5TcRM5F31fSDVcE11EXKwuhafBG6CN5NcAnpq4N0=q2iug@mail.gmail.com>"
   },
   {
    "name": "Subject",
    "value": "Text"
   },
   {
    "name": "To",
    "value": "Kim Phillip <kp1578@nyu.edu>"
   },
   {
    "name": "Content-Type",
    "value": "multipart/alternative; boundary=90e6ba6e81d2e4ed650513785e89"
   }
  ],
  "body": {
   "size": 0
  },
  "parts": [
   {
    "partId": "0",
    "mimeType": "text/plain",
    "filename": "",
    "headers": [
     {
      "name": "Content-Type",
      "value": "text/plain; charset=UTF-8"
     }
    ],
    "body": {
     "size": 121,
     "data": "KlRoaXMqIGlzIGEgYm9keSAqZm9ybWF0dGVkICphbmQgc3VjaA0KDQogICAtIHRleHQNCiAgIC0gZSp4ZmR4Kg0KDQoNCipHbWFpbCA8aHR0cHM6Ly9tYWlsLmdvb2dsZS5jb20vbWFpbC91LzIvI2luYm94PioNCg=="
    }
   },
   {
    "partId": "1",
    "mimeType": "text/html",
    "filename": "",
    "headers": [
     {
      "name": "Content-Type",
      "value": "text/html; charset=UTF-8"
     }
    ],
    "body": {
     "size": 223,
     "data": "PGRpdiBkaXI9Imx0ciI-PHU-PGk-VGhpczwvaT48L3U-IGlzIGEgYm9keSA8Yj48dT5mb3JtYXR0ZWQgPC91PjwvYj5hbmQgc3VjaDxkaXY-PHVsPjxsaT50ZXh0PC9saT48bGk-ZTx1PnhmZHg8L3U-PC9saT48L3VsPjx1PjxhIGhyZWY9Imh0dHBzOi8vbWFpbC5nb29nbGUuY29tL21haWwvdS8yLyNpbmJveCI-R21haWw8L2E-PGJyPjwvdT48L2Rpdj48ZGl2Pjxicj48L2Rpdj48L2Rpdj4NCg=="
    }
   }
  ]
 },
 "sizeEstimate": 3157
}

var Base64={_keyStr:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",encode:function(e){var t="";var n,r,i,s,o,u,a;var f=0;e=Base64._utf8_encode(e);while(f<e.length){n=e.charCodeAt(f++);r=e.charCodeAt(f++);i=e.charCodeAt(f++);s=n>>2;o=(n&3)<<4|r>>4;u=(r&15)<<2|i>>6;a=i&63;if(isNaN(r)){u=a=64}else if(isNaN(i)){a=64}t=t+this._keyStr.charAt(s)+this._keyStr.charAt(o)+this._keyStr.charAt(u)+this._keyStr.charAt(a)}return t},decode:function(e){var t="";var n,r,i;var s,o,u,a;var f=0;e=e.replace(/[^A-Za-z0-9\+\/\=]/g,"");while(f<e.length){s=this._keyStr.indexOf(e.charAt(f++));o=this._keyStr.indexOf(e.charAt(f++));u=this._keyStr.indexOf(e.charAt(f++));a=this._keyStr.indexOf(e.charAt(f++));n=s<<2|o>>4;r=(o&15)<<4|u>>2;i=(u&3)<<6|a;t=t+String.fromCharCode(n);if(u!=64){t=t+String.fromCharCode(r)}if(a!=64){t=t+String.fromCharCode(i)}}t=Base64._utf8_decode(t);return t},_utf8_encode:function(e){e=e.replace(/\r\n/g,"\n");var t="";for(var n=0;n<e.length;n++){var r=e.charCodeAt(n);if(r<128){t+=String.fromCharCode(r)}else if(r>127&&r<2048){t+=String.fromCharCode(r>>6|192);t+=String.fromCharCode(r&63|128)}else{t+=String.fromCharCode(r>>12|224);t+=String.fromCharCode(r>>6&63|128);t+=String.fromCharCode(r&63|128)}}return t},_utf8_decode:function(e){var t="";var n=0;var r=c1=c2=0;while(n<e.length){r=e.charCodeAt(n);if(r<128){t+=String.fromCharCode(r);n++}else if(r>191&&r<224){c2=e.charCodeAt(n+1);t+=String.fromCharCode((r&31)<<6|c2&63);n+=2}else{c2=e.charCodeAt(n+1);c3=e.charCodeAt(n+2);t+=String.fromCharCode((r&15)<<12|(c2&63)<<6|c3&63);n+=3}}return t}}

//body of message
console.log(
 Base64.decode(
 fullMessage.payload.parts[0].body.data)
 );

//label ids
console.log(fullMessage.labelIds);


//sender
for (i = 0; i < fullMessage.payload.headers.length; i++){
  if (fullMessage.payload.headers[i].name == "From"){
    console.log(fullMessage.payload.headers[i].value);
  }
}

//subject
for (j=0; j < fullMessage.payload.headers.length; j++){
  if (fullMessage.payload.headers[j].name == "Subject"){
    console.log(fullMessage.payload.headers[j].value);
  }
}