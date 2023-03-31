/*
English
Hi how are you

Hindi
Hi, aap kaise ho

6:00 PM Jordan
8:30 PM Hindi
*/

const fourMessages = [
  {
    _: "Message",
    id: 171891,
    peer_id: { _: "PeerChannel", channel_id: 1282081918 },
    date: "2023-03-27T10:30:26+00:00",
    message: "Oll",
    out: false,
    mentioned: false,
    media_unread: false,
    silent: false,
    post: false,
    from_scheduled: false,
    legacy: false,
    edit_hide: false,
    pinned: false,
    noforwards: false,
    from_id: { _: "PeerUser", user_id: 946951537 },
    fwd_from: null,
    via_bot_id: null,
    reply_to: {
      _: "MessageReplyHeader",
      reply_to_msg_id: 171851,
      reply_to_scheduled: false,
      forum_topic: false,
      reply_to_peer_id: null,
      reply_to_top_id: 171797,
    },
    media: null,
    reply_markup: null,
    entities: [],
    views: null,
    forwards: null,
    replies: null,
    edit_date: null,
    post_author: null,
    grouped_id: null,
    reactions: null,
    restriction_reason: [],
    ttl_period: null,
  },
  {
    _: "Message",
    id: 171631,
    peer_id: { _: "PeerChannel", channel_id: 1282081918 },
    date: "2023-03-26T15:27:34+00:00",
    message: "Pighalne*",
    out: false,
    mentioned: false,
    media_unread: false,
    silent: false,
    post: false,
    from_scheduled: false,
    legacy: false,
    edit_hide: false,
    pinned: false,
    noforwards: false,
    from_id: { _: "PeerUser", user_id: 946951537 },
    fwd_from: null,
    via_bot_id: null,
    reply_to: {
      _: "MessageReplyHeader",
      reply_to_msg_id: 171630,
      reply_to_scheduled: false,
      forum_topic: false,
      reply_to_peer_id: null,
      reply_to_top_id: 171545,
    },
    media: null,
    reply_markup: null,
    entities: [],
    views: null,
    forwards: null,
    replies: null,
    edit_date: null,
    post_author: null,
    grouped_id: null,
    reactions: null,
    restriction_reason: [],
    ttl_period: null,
  },
  {
    _: "Message",
    id: 171381,
    peer_id: { _: "PeerChannel", channel_id: 1282081918 },
    date: "2023-03-26T07:06:53+00:00",
    message: "Bhosdike",
    out: false,
    mentioned: false,
    media_unread: false,
    silent: false,
    post: false,
    from_scheduled: false,
    legacy: false,
    edit_hide: false,
    pinned: false,
    noforwards: false,
    from_id: { _: "PeerUser", user_id: 5033767868 },
    fwd_from: null,
    via_bot_id: null,
    reply_to: null,
    media: null,
    reply_markup: null,
    entities: [],
    views: null,
    forwards: null,
    replies: {
      _: "MessageReplies",
      replies: 0,
      replies_pts: 348432,
      comments: false,
      recent_repliers: [],
      channel_id: null,
      max_id: null,
      read_max_id: null,
    },
    edit_date: null,
    post_author: null,
    grouped_id: null,
    reactions: null,
    restriction_reason: [],
    ttl_period: null,
  },
  {
    _: "Message",
    id: 171379,
    peer_id: { _: "PeerChannel", channel_id: 1282081918 },
    date: "2023-03-26T07:06:24+00:00",
    message: "Rakh le grp \nDaal le apni gand me grp ki\n\ud83d\ude12",
    out: false,
    mentioned: false,
    media_unread: false,
    silent: false,
    post: false,
    from_scheduled: false,
    legacy: false,
    edit_hide: false,
    pinned: false,
    noforwards: false,
    from_id: { _: "PeerUser", user_id: 5033767868 },
    fwd_from: null,
    via_bot_id: null,
    reply_to: null,
    media: null,
    reply_markup: null,
    entities: [],
    views: null,
    forwards: null,
    replies: {
      _: "MessageReplies",
      replies: 0,
      replies_pts: 348432,
      comments: false,
      recent_repliers: [],
      channel_id: null,
      max_id: null,
      read_max_id: null,
    },
    edit_date: null,
    post_author: null,
    grouped_id: null,
    reactions: null,
    restriction_reason: [],
    ttl_period: null,
  },
];

const usersName = {
  119606003: 7,
  652312946: 24,
  786667468: 14,
  912840061: 36,
  946951537: 3,
  1234465023: 2,
  1255181319: 1,
  1369236651: 2,
  1387564582: 2,
  1472669471: 21,
  1570464542: 14,
  1617675146: 1,
  1669861787: 2,
  1673298540: 213,
  1765318128: 18,
  1809333530: 1,
  1981032897: 2,
  2039521042: 441,
  2127343026: 73,
  5033767868: 12,
  undefined: 1,
};

const usersMessagesCount = {
  119606003: 7,
  652312946: 24,
  786667468: 14,
  912840061: 36,
  946951537: 3,
  1234465023: 2,
  1255181319: 1,
  1369236651: 2,
  1387564582: 2,
  1472669471: 21,
  1570464542: 14,
  1617675146: 1,
  1669861787: 2,
  1673298540: 213,
  1765318128: 18,
  1809333530: 1,
  1981032897: 2,
  2039521042: 441,
  2127343026: 73,
  5033767868: 12,
  undefined: 1,
};

const getAllUsersNames = (messages) => {
  messages.forEach((messageObj, i) => {
    const { from_id } = messageObj;
    if (from_id) {
      const { user_id, channel_id } = from_id;
      let currentUserID = user_id;

      if (!currentUserID) {
        currentUserID = `CHANNEL: ${channel_id}`;
      }

      if (usersName[currentUserID] > 0) {
        usersName[currentUserID] += 1;
      } else {
        usersName[currentUserID] = 1;
      }
    }
  });
  console.log("usersName:", usersName);
};

const countUserMessages = (user_id) => {
  if (usersMessagesCount[user_id] > 0) {
    usersMessagesCount[user_id] += 1;
  } else {
    usersMessagesCount[user_id] = 1;
  }
};

const messages = fourMessages.map((messageObj, i) => messageObj.message);
// console.log("MESSAGES", messages);

const renderMessages = (messages) => {
  console.log("messages: ", messages);
  messages.forEach((messageObj, i) => {
    const { id, date, from_id, message, reply_to } = messageObj;

    // console.log(i);
    if (from_id) {
      let { user_id, channel_id } = from_id;
      let currentUserID = user_id;

      if (!currentUserID) {
        currentUserID = `CHANNEL: ${channel_id}`;
      }
      countUserMessages(currentUserID);
    }

    const newDiv = $(`
      <div id='message'>
        <p id='message-id'>
        MESSAGE_ID: 
          <br>
          ${id}
        </p>

        <p id='message-date'>
          DATE: 
          <br>
          ${date}
        </p>

        <p id='message-text'>
        ${message}
        </p>

        ${
          from_id &&
          `
        <p id='message-from'>
          FROM [USER_ID]: 
          <br> 
          <b> ${from_id.user_id}</b> 
        </p>

        `
        }

        ${
          reply_to &&
          `
        <p id='message-replayTo'>
          REPLAY TO [MESSAGE_ID]: 
          <br> 
          <b>${reply_to.reply_to_msg_id}</b>
        </p>
        `
        }
        
      </div>
      `);

    allMessagesDiv.append(newDiv);
  });
  console.log("usersMessagesCount:", usersMessagesCount);
};

const renderBtn = $("#renderBtn");

const allMessagesDiv = $("#allMessages");

renderBtn.on("click", function () {
  console.log("Clicked");
  // messagesArray called arr
  renderMessages(arr);
  // getAllUsersNames(arr);
});

// renderMessages(arr);
// getAllUsersNames(arr);

const oneMessage = {
  _: "Message",
  id: 171891,
  peer_id: {
    _: "PeerChannel",
    channel_id: 1282081918,
  },
  date: "2023-03-27T10:30:26+00:00",
  message: "Oll",
  out: false,
  mentioned: false,
  media_unread: false,
  silent: false,
  post: false,
  from_scheduled: false,
  legacy: false,
  edit_hide: false,
  pinned: false,
  noforwards: false,
  from_id: {
    _: "PeerUser",
    user_id: 946951537,
  },
  fwd_from: null,
  via_bot_id: null,
  reply_to: {
    _: "MessageReplyHeader",
    reply_to_msg_id: 171851,
    reply_to_scheduled: false,
    forum_topic: false,
    reply_to_peer_id: null,
    reply_to_top_id: 171797,
  },
  media: null,
  reply_markup: null,
  entities: [],
  views: null,
  forwards: null,
  replies: null,
  edit_date: null,
  post_author: null,
  grouped_id: null,
  reactions: null,
  restriction_reason: [],
  ttl_period: null,
};

const tryTheFile_UsersMessagesCount = {
  119606003: 14,
  121302967: 118,
  236917324: 27,
  300860929: 9,
  461843263: 8,
  586671199: 3,
  652312946: 48,
  726881165: 46,
  736915577: 4337,
  739849178: 341,
  741412862: 5581,
  786667468: 27851,
  804898199: 234,
  823888691: 1868,
  830116167: 33,
  853821967: 1284,
  857982839: 40,
  912840061: 72,
  913916617: 4705,
  926570142: 200,
  930290769: 51,
  931997106: 221,
  946951537: 8196,
  976312778: 230,
  981169515: 1338,
  1011271793: 52698,
  1021167727: 32,
  1035273233: 270,
  1113924494: 99,
  1124185173: 5,
  1145256764: 2,
  1167270818: 164,
  1170470179: 141,
  1174190708: 4724,
  1202766600: 2592,
  1234465023: 33,
  1237445866: 4553,
  1255181319: 3373,
  1315837500: 162,
  1333490190: 3543,
  1369236651: 4,
  1387564582: 4,
  1461406580: 655,
  1472669471: 42,
  1486051816: 3800,
  1505073746: 2,
  1540484907: 3,
  1556834195: 373,
  1570464542: 75,
  1605735650: 44,
  1617675146: 34,
  1669861787: 4,
  1673298540: 493,
  1684187102: 23,
  1722149872: 2,
  1726072229: 2,
  1765318128: 38,
  1767229843: 5897,
  1800774444: 131,
  1809333530: 3,
  1819362678: 154,
  1828181668: 18,
  1834836552: 32,
  1857160949: 2,
  1861021109: 1,
  1864748150: 20,
  1881697593: 2,
  1883733620: 12,
  1887496274: 261,
  1889962025: 265,
  1931959682: 2,
  1943684625: 7,
  1981032897: 4,
  1992147185: 28,
  2012176669: 4166,
  2027207272: 544,
  2039521042: 1196,
  2090653834: 380,
  2127343026: 146,
  5033767868: 11894,
  undefined: 1,
  "CHANNEL: 1551229725": 1,
  5003182805: 62,
  5306644146: 2,
  5152489111: 2,
  5524757792: 2,
  5264101811: 190,
  5256860597: 504,
  5420591027: 680,
  5406915898: 2,
  5305555230: 288,
  5281020570: 59,
  5307536769: 219,
  5366019388: 78,
  5829163886: 27,
  5346264764: 1,
  6259322754: 11,
  5531639146: 6,
  5518740209: 806,
  5895380528: 15,
  5411432551: 6,
};
