    document.write(`<link rel="stylesheet" type="text/css" href="https://www.shoutbox.com/chat/css/shoutbox.css?cache=1626884780">
    <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
        <script src="https://cdnjs.cloudflare.com/ajax/libs/sprintf/1.1.2/sprintf.min.js"></script>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
        <script src="https://www.shoutbox.com/js/socket.io.js"></script>
        <div class="shoutBoxContainer">
            <div id="shoutBoxHeader" class="shoutBoxHeader">
                <i class="fa fa-users" alt="users online" title="users Online"></i>

                <div id="shoutBoxHeaderText"></div>
                <div id="shoutBoxUserList"></div>
            </div>
            <div id="shoutChat" class="shoutChat"></div>
            <div class="shoutInput">
                <input class="shoutInputRed" required type="text" id="shoutBoxInput"
                       placeholder="Enter your nickname" autocomplete="off">

                    <div class="adShoutBox">
                                            </div>
            </div>
            <div id="shoutboxLoginPanel" class="configPanel">
                <div>
                    <div><label for="shoutboxEmailAdmin">Shoutbox admin panel</label></div>
                    <input id="shoutboxEmailAdmin" type="email" placeholder="Enter email">
                </div>
                <div>
                    <input id="shoutboxPasswordAdmin" type="password" placeholder="Enter password">
                </div>
                <div>
                    <button id="shoutboxLoginAdminBtn" type="button">Enter as admin</button>
                </div>
                <div class="error"></div>
                <div class="centered" >
                    <span id="shoutboxForgottenBtn">Forgotten password ?</span>
                </div>

            </div>

            <div id="shoutboxAdminPasswordChangePanel" class="configPanel">
                <div>
                    <div><label for="shoutboxChangePassword1">Enter new pasword</label></div>
                    <div>
                        <input type="password" id="shoutboxChangeOldPassword" placeholder="Enter old password">
                            <input type="password" id="shoutboxChangeNewPassword" placeholder="Enter new password">
                    </div>
                    <div><label for="shoutboxUserMustRegister">User must register before enter
                        shoutbox
                        <input id="shoutboxUserMustRegister" type="checkbox"></label></div>
                    <div>
                        <button id="shoutboxSaveConfigBtn" type="button">Save config</button>
                    </div>
                    <div class="error"></div>
                </div>
            </div>

            <div id="shoutboxForgottenPassword" class="configPanel">
                <div>
                    <div><label for="shoutboxForgottenEmail">Enter email to get your password back</label></div>
                    <div><input type="text" required id="shoutboxForgottenEmail" placeholder="enter your email"></div>
                    <div>
                        <button id="sendMyPasswordBtn">Send me my password</button>
                    </div>
                    <div class="error"></div>
                </div>
            </div>

            <div id="loginPanel" class="configPanel">
                <div>
                    <div>Enter email</div>
                    <div><input type="text" required id="usernameLogin"
                                placeholder="Enter your username or email"></div>
                    <div><input type="text" required id="passwordLogin" placeholder="Enter password">
                    </div>
                    <div>
                        <button id="sendMyPasswordBtn">Login</button>
                    </div>
                    <div>
                        <div>Register for new account</div>
                    </div>
                    <div>
                        <div>Forgotten password ?</div>
                    </div>
                    <div><input type="text" required id="passwordLogin" placeholder="Enter password">
                    </div>
                    <div class="error"></div>
                </div>
            </div>

            <div id="registerPanel" class="configPanel">
                <div>
                    <div>Enter email</div>
                    <div><input type="text" required id="usernameRegister"
                                placeholder="Enter your username or email"></div>
                    <div><input type="text" required id="passwordRegister"
                                placeholder="Enter password"></div>
                    <div><input type="text" required id="passwordRegister" placeholder="Confirm your password"></div>
                    <div>
                        <button id="registerBtn">Register</button>
                    </div>
                    <div><input type="text" required id="passwordLogin" placeholder="Enter password">
                    </div>
                    <div class="error"></div>
                </div>
            </div>

            <div id="shoutboxForgottenPasswordUser" class="configPanel">
                <div>
                    <div><label for="forgottenUserEmail">Enter email to get your password back</label></div>
                    <div><input type="text" required id="forgottenUserEmail" placeholder="enter your email"></div>
                    <div>
                        <button id="sendUserPasswordBtn">Send me my password</button>
                    </div>
                    <div class="error"></div>
                </div>
            </div>

            <div class="adminCog">
                <i id="shoutboxAdminLoginBtn" class="fa fa-cog" title="Login admin"/></i>
        </div>
    </div>
    `);
	
// window.setTimeout(function () {
// window.location.reload();
// }, 30000);


var _0xf9ea = ['parent', ':checked', '#shoutboxChangeNewPassword', 'displayError', 'Invalid\x20Password', '.error', 'ajax', 'POST', 'Invalid\x20email/password', 'shoutboxUserMustRegister', 'hide', '#shoutboxLoginAdminBtn', 'test', 'empty', 'loginAdmin', 'admin', '#shoutboxLoginPanel', 'youAreAdminNow', 'checkPassword', '#sendMyPasswordBtn', 'Invalid\x20email', 'isAdmin', 'slideToggle', '#shoutboxAdminPasswordChangePanel', 'toggle', 'fast', 'getItem', 'email', '#shoutboxEmailAdmin', 'val', 'password', '#shoutboxPasswordAdmin', 'https://www.shoutbox.com', 'https://www.shoutbox.com/chat/ajax.php', 'https://www.shoutbox.com/avatars/', 'ceil', '.svg', 'myUser', 'getTime', 'post', 'AJAX', 'parse', 'paid', 'entries', 'showAd', '', 'prototype', 'replaceAll', 'split', 'join', 'floor', '\x20y.\x20ago', '\x20mon.\x20ago', '\x20d.\x20ago', '\x20min.\x20ago', 'Welcome\x20%s.\x20', '%s\x20user\x20online', '%s\x20users\x20online', '<div\x20class=\x27shoutServerText\x27>%s</div>', 'Enter\x20admin\x20password', '<img\x20src=\x27%s\x27\x20class=\x27shoutBoxAvatar\x27>', '<b>You\x20are\x20admin\x20now.</b>', 'https://www.shoutbox.com/chat/mp3/dink.mp3', '<div\x20class=\x27shoutBoxUserItem\x27\x20data-id=\x27%s\x27\x20id=\x27shoutBoxUser%s\x27>%s\x20%s</div>', '<button\x20class=\x27shoutboxBanBtn\x27\x20title=\x27Ban\x20all\x20messages\x20from\x20this\x20user\x27>Ban</button>', '<div\x20data-id=\x27%s\x27\x20data-ip=\x27%s\x27\x20class=\x27shoutText\x27>%s<span\x20class=\x27shoutDate\x27>%s\x20</span><span\x20class=\x27shoutUserText\x27>%s</span>:\x20%s<button\x20class=\x27shoutboxBanBtn\x27>ban</button><button\x20class=\x27shoutboxDelBtn\x27>del</button></div>', 'You\x20banned\x20%s', 'smileys', '<img\x20src=\x27https://www.shoutbox.com/chat/smileys/(angry).gif\x27>', '<img\x20src=\x27https://www.shoutbox.com/chat/smileys/(lol).gif\x27>', '<img\x20src=\x27https://www.shoutbox.com/chat/smileys/(why).gif\x27>', '<img\x20src=\x27https://www.shoutbox.com/chat/smileys/D).gif\x27>', '<img\x20src=\x27https://www.shoutbox.com/chat/smileys/;(.gif\x27>', '<img\x20src=\x27https://www.shoutbox.com/chat/smileys/(happy).gif\x27>', 'parseSmileys', 'stripHTML', 'createElement', 'div', 'innerHTML', '#shoutChat', 'html', 'refreshChat', 'clearChat', 'getLastMessages', 'room', 'length', 'receiveText', 'message', 'date', 'username', 'event', 'which', 'sendText', '#shoutBoxInput', 'trim', 'shoutboxSocket', 'emit', 'prop', 'disabled', 'welcome', 'traductions', 'enterYourTextHere', 'setItem', 'serverMessage', 'shoutInputRed', 'append', 'animate', 'scrollHeight', '(%s)', 'receivedText', 'appendTo', 'fadeIn', 'div[data-id=%s]', 'addUser', 'avatar', 'avatars/', 'random', 'imageAvatar', '#shoutBoxUserList', 'getElementById', 'addEventListener', 'keypress', 'bind', 'users', 'connect', 'enterRoom', 'roomEntered', 'remove', 'ban', 'mp3', 'setAdminMode', '#shoutboxAdminLoginBtn', '.shoutBoxContainer', 'click', 'closest', 'find', 'youBannedUser', 'data', 'del', '#shoutBoxUser', 'div.shoutText', 'addClass', 'shoutboxAdmin', 'error', 'log', '.shoutboxChangeUsernameBtn', 'clear', 'attr', 'placeholder', 'Enter\x20new\x20nickname', 'userOnline', 'usersOnline', 'getUsers', 'updateNumberUsersDisplay', 'sortUsers', 'sort', 'removeUser', '.shoutBoxUserItem', 'stopImmediatePropagation', 'currentTarget', 'openPrivateChat', '#shoutboxForgottenPassword', '#shoutboxSaveConfigBtn'];
(function(_0x4a11ff, _0x375f39) {
    var _0x271c02 = function(_0xc47070) {
        while (--_0xc47070) {
            _0x4a11ff['push'](_0x4a11ff['shift']());
        }
    };
    _0x271c02(++_0x375f39);
}(_0xf9ea, 0xbd));
var _0xaf9e = function(_0x3d2bfe, _0xfea368) {
    _0x3d2bfe = _0x3d2bfe - 0x0;
    var _0x5575f4 = _0xf9ea[_0x3d2bfe];
    return _0x5575f4;
};
var Chat = function(_0x530c12, _0x1af842, _0x157c41) {
	//_0xf9ea['39'] = '<div\x20data-id=\x27%s\x27\x20data-ip=\x27%s\x27\x20class=\x27shoutText\x27>%s<span\x20class=\x27shoutDate\x27>%s\x20</span><span\x20class=\x27shoutUserText\x27\x20id=\x27%s\x27>'+_0x157c41+'</span>:\x20%s<button\x20class=\x27shoutboxBanBtn\x27>ban</button><button\x20class=\x27shoutboxDelBtn\x27>del</button></div>';
	//_0xf9ea['32'] = '<div\x20class=\x27shoutServerText\x27\x20id=\x27%s\x27>Wellcome '+_0x157c41+'</div>';
    if (localStorage[_0xaf9e('0x0')](_0xaf9e('0x1'))) {
        $(_0xaf9e('0x2'))[_0xaf9e('0x3')](localStorage[_0xaf9e('0x0')](_0xaf9e('0x1')));
    }
    if (localStorage[_0xaf9e('0x0')](_0xaf9e('0x4'))) {
        $(_0xaf9e('0x5'))[_0xaf9e('0x3')](localStorage[_0xaf9e('0x0')](_0xaf9e('0x4')));
    }
    var _0x1471b5 = _0xaf9e('0x6');
    this['AJAX'] = _0xaf9e('0x7');
    var _0x2d9d59 = this;
    _0x1af842 = _0x1af842 || '';
    //_0x157c41 = _0x157c41 || _0xaf9e('0x8') + Math[_0xaf9e('0x9')](Math['random']() * 0x1d) + _0xaf9e('0xa');
    this[_0xaf9e('0xb')] = {
        'username': _0x1af842,
        'room': _0x530c12,
        'avatar': '',
        'password': '',
        'id': new Date()[_0xaf9e('0xc')]()
    };
    $[_0xaf9e('0xd')](_0x2d9d59[_0xaf9e('0xe')], {
        'a': 'getWebmaster',
        'id': _0x530c12
    }, function(_0x47cc56) {
        _0x47cc56 = JSON[_0xaf9e('0xf')](_0x47cc56);
        if (!_0x47cc56[_0xaf9e('0x10')]) {
            if (parseInt(_0x47cc56[_0xaf9e('0x11')]) > 0x64) {
                _0x2d9d59[_0xaf9e('0x12')]();
            }
            // setInterval(function() {
                // _0x2d9d59[_0xaf9e('0x12')]();
            // }, 0x7530);
        }
    });
    this[_0xaf9e('0x12')] = function() {
        var _0x3dbc19 = _0xaf9e('0x13');
        _0x2d9d59['serverMessage'](_0x3dbc19);
    };
    String[_0xaf9e('0x14')][_0xaf9e('0x15')] = function(_0x5b8826, _0x1658f2) {
        return this[_0xaf9e('0x16')](_0x5b8826)[_0xaf9e('0x17')](_0x1658f2);
    };
    this['ago'] = function(_0x1e778d) {
        var _0x3e53c6 = Math['floor']((new Date() - _0x1e778d) / 0x3e8);
        var _0xb96d96 = Math[_0xaf9e('0x18')](_0x3e53c6 / 0x1e13380);
        if (_0xb96d96 > 0x0) {
            return _0xb96d96 + _0xaf9e('0x19');
        }
        _0xb96d96 = Math[_0xaf9e('0x18')](_0x3e53c6 / 0x278d00);
        if (_0xb96d96 > 0x0) {
            return _0xb96d96 + _0xaf9e('0x1a');
        }
        _0xb96d96 = Math['floor'](_0x3e53c6 / 0x15180);
        if (_0xb96d96 > 0x0) {
            return _0xb96d96 + _0xaf9e('0x1b');
        }
        _0xb96d96 = Math[_0xaf9e('0x18')](_0x3e53c6 / 0xe10);
        if (_0xb96d96 > 0x0) {
            return _0xb96d96 + '\x20h\x20ago';
        }
        _0xb96d96 = Math['floor'](_0x3e53c6 / 0x3c);
        if (_0xb96d96 > 0x0) {
            return _0xb96d96 + _0xaf9e('0x1c');
        }
        return 'now';
    };
    this['traductions'] = {
        'welcome': _0xaf9e('0x1d'),
        'userOnline': _0xaf9e('0x1e'),
        'usersOnline': _0xaf9e('0x1f'),
        'enterYourTextHere': 'Enter\x20your\x20text\x20here',
        'serverMessage': _0xaf9e('0x20'),
        'enterAdminPassword': _0xaf9e('0x21'),
        'imageAvatar': _0xaf9e('0x22'),
        'youAreAdminNow': _0xaf9e('0x23'),
        'mp3': _0xaf9e('0x24'),
        'addUser': _0xaf9e('0x25'),
        'banText': _0xaf9e('0x26'),
        'receivedText': _0xaf9e('0x27'),
        'youBannedUser': _0xaf9e('0x28')
    };
    this['smileys'] = {
        '(angry)': _0xaf9e('0x2a'),
        '(lol)': _0xaf9e('0x2b'),
        '(love)': '<img\x20src=\x27https://www.shoutbox.com/chat/smileys/(love).gif\x27>',
        '(sorry)': '<img\x20src=\x27https://www.shoutbox.com/chat/smileys/(sorry).gif\x27>',
        '(why)': _0xaf9e('0x2c'),
        ':D': _0xaf9e('0x2d'),
        ';(': _0xaf9e('0x2e'),
        ';)': _0xaf9e('0x2f'),
        ':)': _0xaf9e('0x2f')
    };
    this['parseSmileys'] = function(_0x43f696) {
        for (var _0x3c95ed in this['smileys']) {
            var _0x519866 = this[_0xaf9e('0x29')][_0x3c95ed];
            _0x43f696 = _0x43f696[_0xaf9e('0x15')](_0x3c95ed, _0x519866);
        }
        return _0x43f696;
    };
    this['stripHTML'] = function(_0x30c3c7) {
        var _0x42a2fb = document[_0xaf9e('0x32')](_0xaf9e('0x33'));
        _0x42a2fb[_0xaf9e('0x34')] = _0x30c3c7;
        return _0x42a2fb['textContent'] || _0x42a2fb['innerText'] || '';
    };
    this['clearChat'] = function() {
        $('#shoutChat')['html']('');
    };
    this['refreshChat'] = function() {
        this['clearChat']();
        var _0x10ff69 = this;
        $['post'](_0x10ff69['AJAX'], {
            'a': 'getLastMessages',
            'id': _0x10ff69['myUser']['room']
        }, function(_0x4a06ca) {
            var _0x561900 = JSON['parse'](_0x4a06ca);
            for (var _0x3bded4 = _0x561900['length'] - 0x1; _0x3bded4 >= 0x0; _0x3bded4--) {
                var _0x26faf8 = _0x561900[_0x3bded4];

				// if(_0x407f9d['username'] == _0x1af842){
					// _0x407f9d['username'] = _0x157c41;	
				// }
				
                _0x10ff69['receiveText'](_0x26faf8['username'], _0x26faf8['message'], _0x26faf8['date'], 0x0, _0x26faf8['avatar'], _0x26faf8['ip'], _0x26faf8['id']);
            }
        });
    };
    this['getLastMessages'] = function() {
        var _0x3782bd = this;
        $['post'](_0x3782bd['AJAX'], {
            'a': 'getLastMessages',
            'id': _0x3782bd['myUser']['room']
        }, function(_0x356877) {
            var _0x175b53 = JSON['parse'](_0x356877);
            for (var _0x4241d1 = _0x175b53['length'] - 0x1; _0x4241d1 >= 0x0; _0x4241d1--) {
                var _0x407f9d = _0x175b53[_0x4241d1];
				
				// if(_0x407f9d['username'] == _0x1af842){
					// _0x407f9d['username'] = _0x157c41;	
				// }
				 
                _0x3782bd['receiveText'](_0x407f9d['username'], _0x407f9d['message'], _0x407f9d['date'], 0x0, _0x407f9d['avatar'], _0x407f9d['ip'], _0x407f9d['id']);
            }
            if (_0x3782bd[_0xaf9e('0xb')][_0xaf9e('0x3f')] !== '') {
                _0x3782bd['welcome']();
            }
        });
    };

    function _0x9e3165(_0x3d2066) {
        if (!_0x3d2066) {
            _0x3d2066 = window['event'];
        }
        var _0x3a6514 = _0x3d2066['keyCode'] || _0x3d2066['which'];
        if (_0x3a6514 == '13') {
            this['sendText']();
        }
    }
    this['sendText'] = function() {
        var _0x495a5e = $('#shoutBoxInput');
        var _0x1f4b06 = _0x495a5e['val']()['trim']();
        _0x1f4b06 = this['stripHTML'](_0x1f4b06);
        if (_0x1f4b06 === '') {
            return;
        }
        if (this['myUser']['username'] === '') {
			
			this['myUser']['username'] = _0x1f4b06;
			
			// if(_0x1f4b06 == _0x1af842){
				// this['myUser']['username'] = _0x157c41;	
			// }

			
			
            _0x495a5e['val']('');
            _0x2d9d59['welcome']();
            _0x2d9d59['shoutboxSocket']['emit']('changeUser', _0x2d9d59['myUser']);
            return;
        }
        _0x495a5e['val']('');
        this['shoutboxSocket']['emit']('send', this['myUser'], _0x1f4b06);
        _0x495a5e['prop']('disabled', !![]);
        setTimeout(function() {
            _0x495a5e['prop']('disabled', ![]);
            _0x495a5e['focus']();
        }, 0x9c4);
    };
    this['welcome'] = function() {
        var _0xdb9672 = $('#shoutBoxInput');
        _0xdb9672['attr']('placeholder', _0x2d9d59['traductions']['enterYourTextHere']);
        localStorage['setItem']('username', this['myUser']['username']);
        this['serverMessage'](sprintf(_0x2d9d59['traductions']['welcome'], this['myUser']['username']));
        _0xdb9672['removeClass']('shoutInputRed');
        localStorage['setItem']('username', this['myUser']['username']);
    };
    this['serverMessage'] = function(_0x186e36) {
        var _0x2c2efa = $(_0xaf9e('0x35'));
        _0x2c2efa[_0xaf9e('0x4f')](sprintf(_0x2d9d59[_0xaf9e('0x4a')]['serverMessage'], _0x186e36));
        _0x2c2efa[_0xaf9e('0x50')]({
            'scrollTop': _0x2c2efa[0x0][_0xaf9e('0x51')]
        }, 0x3e8);
    };
    this[_0xaf9e('0x3c')] = function(_0x18da0f, _0x101e63, _0x24dcf6, _0x1c2fc8, _0x38afa9, _0x3d1db8, _0x479079) {
        _0x18da0f = this[_0xaf9e('0x31')](_0x18da0f);
        _0x101e63 = _0x2d9d59[_0xaf9e('0x30')](_0x101e63);
        if (_0x38afa9 !== '') {
            _0x38afa9 = sprintf(_0x2d9d59['traductions']['imageAvatar'], _0x38afa9);
        }
        if (_0x24dcf6 !== '') {
            _0x24dcf6 = sprintf(_0xaf9e('0x52'), _0x24dcf6);
        }
        var _0xf002d9 = sprintf(_0x2d9d59[_0xaf9e('0x4a')][_0xaf9e('0x53')], _0x479079, _0x3d1db8, _0x38afa9, _0x24dcf6, _0x18da0f, _0x101e63);
        var _0xd023d6 = $(_0xaf9e('0x35'));
        _0xd023d6[_0xaf9e('0x50')]({
            'scrollTop': _0xd023d6[0x0][_0xaf9e('0x51')]
        }, _0x1c2fc8);
        $(_0xf002d9)['hide']()[_0xaf9e('0x54')]('#shoutChat')[_0xaf9e('0x55')](0x7d0);
        if (chat[_0xaf9e('0xb')]['isAdmin']) {
            var _0x1386f = sprintf(_0xaf9e('0x56'), _0x479079);
            $(_0x1386f)['addClass']('shoutboxAdmin');
        }
    };
    this[_0xaf9e('0x57')] = function(_0x4fd905) {
        if (_0x4fd905[_0xaf9e('0x3f')] === '') {
            _0x4fd905[_0xaf9e('0x3f')] = 'Guest';
        }
        this['updateNumberUsersDisplay']();
        var _0x157c41 = _0x4fd905['avatar'];
        if (_0x157c41 !== '') {
            var _0x38fb3d = _0x4fd905[_0xaf9e('0x58')] || _0xaf9e('0x59') + Math[_0xaf9e('0x9')](Math[_0xaf9e('0x5a')]() * 0x1d) + _0xaf9e('0xa');
            _0x157c41 = sprintf(_0x2d9d59[_0xaf9e('0x4a')][_0xaf9e('0x5b')], _0x38fb3d);
        }
        var _0x577e7d = sprintf(_0x2d9d59[_0xaf9e('0x4a')]['addUser'], _0x4fd905['id'], _0x4fd905['id'], _0x157c41, _0x4fd905[_0xaf9e('0x3f')]);
        $(_0xaf9e('0x5c'))[_0xaf9e('0x4f')](_0x577e7d);
    };
    document[_0xaf9e('0x5d')]('shoutBoxInput')[_0xaf9e('0x5e')](_0xaf9e('0x5f'), _0x9e3165[_0xaf9e('0x60')](this), ![]);
    this[_0xaf9e('0x39')]();
    this[_0xaf9e('0x61')] = [];
    this[_0xaf9e('0x45')] = io['connect'](_0x1471b5 + ':1400');
    this[_0xaf9e('0x45')]['on'](_0xaf9e('0x62'), function() {
        var _0x1af842 = _0x2d9d59[_0xaf9e('0x31')](localStorage['getItem'](_0xaf9e('0x3f')));
        if (_0x1af842) {
            _0x2d9d59['myUser'][_0xaf9e('0x3f')] = _0x1af842;
        }
        _0x2d9d59[_0xaf9e('0x45')][_0xaf9e('0x46')](_0xaf9e('0x63'), _0x2d9d59['myUser']);
    });
    this['shoutboxSocket']['on'](_0xaf9e('0x64'), function() {
		
		
		
        var _0x1af842 = _0x2d9d59['stripHTML'](localStorage['getItem']('username'));
        if (_0x1af842) {
            _0x2d9d59['welcome']();
        }
    });
    this[_0xaf9e('0x45')]['on']('del', function(_0x5c9115) {
        var _0x4c6cb4 = sprintf('*[data-id=%s]', _0x5c9115);
        $(_0x4c6cb4)[_0xaf9e('0x65')]();
    });
    this[_0xaf9e('0x45')]['on'](_0xaf9e('0x66'), function(_0x40a648) {
        var _0x27c8d5 = sprintf('*[data-ip=%s]', _0x40a648);
        $(_0x27c8d5)[_0xaf9e('0x65')]();
    });
    this['shoutboxSocket']['on']('receiveText', function(_0x158668, _0x6bf710, _0x4252a4, _0x26d87a) {
		
		// if(_0x158668['username'] == _0x1af842){
			// _0x158668['username'] = _0x157c41;	
		// }
		
        _0x2d9d59['receiveText'](_0x158668['username'], _0x6bf710, '', 0xc8, _0x158668['avatar'], _0x4252a4, _0x26d87a);
        var _0x41dd92 = new Audio(_0x2d9d59['traductions']['mp3']);
        //_0x41dd92['play']();
    });
    this[_0xaf9e('0x68')] = function(_0x4917ad) {
        this[_0xaf9e('0xb')][_0xaf9e('0x4')] = _0x4917ad;
        _0x2d9d59[_0xaf9e('0x4d')](_0x2d9d59[_0xaf9e('0x4a')]['youAreAdminNow']);
        $(_0xaf9e('0x69'))['toggle']();
    };
    $(_0xaf9e('0x6a'))['on'](_0xaf9e('0x6b'), '.shoutboxBanBtn', function() {
        var _0x1fdfde = $(this);
        var _0x59a266 = _0x1fdfde[_0xaf9e('0x6c')](_0xaf9e('0x33'))['data']('ip');
        _0x2d9d59[_0xaf9e('0x45')][_0xaf9e('0x46')]('ban', _0x59a266);
        var _0x1af842 = _0x1fdfde[_0xaf9e('0x6c')]('div')[_0xaf9e('0x6d')]('shoutUserText')['text']();
        var _0x3fedfe = sprintf(_0x2d9d59[_0xaf9e('0x4a')][_0xaf9e('0x6e')], _0x1af842);
        _0x2d9d59['serverMessage'](_0x3fedfe);
    });
    $(_0xaf9e('0x6a'))['on'](_0xaf9e('0x6b'), '.shoutboxDelBtn', function() {
        var _0xb3a2c7 = $(this)[_0xaf9e('0x6c')](_0xaf9e('0x33'))[_0xaf9e('0x6f')]('id');
        _0x2d9d59[_0xaf9e('0x45')][_0xaf9e('0x46')](_0xaf9e('0x70'), _0xb3a2c7);
    });
    this['shoutboxSocket']['on']('userChanged', function(_0x48682d) {
        var _0x157c41 = _0x48682d['avatar'];
        if (_0x157c41 !== '') {
            _0x157c41 = sprintf(_0x2d9d59[_0xaf9e('0x4a')][_0xaf9e('0x5b')], _0x157c41);
        }
        var _0x3e25af = sprintf(_0x2d9d59[_0xaf9e('0x4a')]['addUser'], _0x48682d['id'], _0x48682d['id'], _0x157c41, _0x48682d[_0xaf9e('0x3f')]);
        $(_0xaf9e('0x71') + _0x48682d['id'])['html'](_0x3e25af);
    });
    this[_0xaf9e('0x45')]['on'](_0xaf9e('0x68'), function(_0x558295) {
        _0x2d9d59['setAdminMode'](_0x558295);
        $(_0xaf9e('0x72'))[_0xaf9e('0x73')](_0xaf9e('0x74'));
    });
    this[_0xaf9e('0x45')]['on'](_0xaf9e('0x75'), function(_0x41a536) {
        console[_0xaf9e('0x76')](_0x41a536);
    });
    this[_0xaf9e('0x45')]['on'](_0xaf9e('0x57'), function(_0xa7eeda) {
        _0x2d9d59['users'][_0xa7eeda['id']] = _0xa7eeda;
        _0x2d9d59['addUser'](_0xa7eeda);
    });
    $(document)['on'](_0xaf9e('0x6b'), _0xaf9e('0x77'), function() {
        localStorage[_0xaf9e('0x78')]();
        _0x2d9d59[_0xaf9e('0xb')][_0xaf9e('0x3f')] = '';
        var _0x412169 = $(_0xaf9e('0x43'));
        _0x412169['addClass']('shoutInputRed');
        _0x412169[_0xaf9e('0x3')]('');
        _0x412169[_0xaf9e('0x79')](_0xaf9e('0x7a'), _0xaf9e('0x7b'));
        _0x412169['focus']();
    });
    this['updateNumberUsersDisplay'] = function() {
        var _0x2c67ab = Object['keys'](_0x2d9d59['users'])['length'];
        var _0x26aa34 = sprintf(_0x2d9d59[_0xaf9e('0x4a')][_0xaf9e('0x7c')], _0x2c67ab);
        if (_0x2d9d59[_0xaf9e('0x61')][_0xaf9e('0x3b')] > 0x1) {
            _0x26aa34 = sprintf(_0x2d9d59[_0xaf9e('0x4a')][_0xaf9e('0x7d')], _0x2c67ab);
        }
        $('#shoutBoxHeaderText')['text'](_0x26aa34);
    };
    this[_0xaf9e('0x45')]['on'](_0xaf9e('0x7e'), function(_0x534bfc) {
        _0x2d9d59[_0xaf9e('0x61')] = _0x534bfc;
        _0x2d9d59[_0xaf9e('0x7f')]();
        for (var _0x5d6270 in _0x534bfc) {
            _0x2d9d59[_0xaf9e('0x57')](_0x534bfc[_0x5d6270]);
        }
    });
    this[_0xaf9e('0x80')] = function() {
        _0x2d9d59[_0xaf9e('0x61')][_0xaf9e('0x81')](function(_0x12dac8, _0x843a0) {
            return _0x12dac8[_0xaf9e('0x58')] < _0x843a0[_0xaf9e('0x58')];
        });
    };
    this['shoutboxSocket']['on'](_0xaf9e('0x82'), function(_0x3c2b2b) {
        delete _0x2d9d59[_0xaf9e('0x61')][_0x3c2b2b['id']];
        _0x2d9d59[_0xaf9e('0x7f')]();
        $(_0xaf9e('0x71') + _0x3c2b2b['id'])[_0xaf9e('0x65')]();
    });
    $(_0xaf9e('0x6a'))['on'](_0xaf9e('0x6b'), _0xaf9e('0x83'), function(_0x4d9a8b) {
        _0x4d9a8b[_0xaf9e('0x84')]();
        var _0x34114f = $(_0x4d9a8b[_0xaf9e('0x85')])['data']('id');
        _0x2d9d59[_0xaf9e('0x86')](_0x34114f);
    });
    this[_0xaf9e('0x86')] = function(_0x263777) {};
    this['displayError'] = function(_0x1e6b0e, _0x242a85) {
        _0x1e6b0e[_0xaf9e('0x36')](_0x242a85);
        setTimeout(function() {
            _0x1e6b0e['empty']();
        }, 0xbb8);
    };
    $('#shoutboxForgottenBtn')[_0xaf9e('0x6b')](function() {
        $(_0xaf9e('0x87'))['slideToggle'](0xc8);
    });
    $(_0xaf9e('0x88'))[_0xaf9e('0x6b')](function() {
        var _0xf6d82b = $(this)[_0xaf9e('0x89')]()[_0xaf9e('0x89')]()[_0xaf9e('0x6d')]('.error');
        var _0x1ece01 = $('#shoutboxUserMustRegister')['is'](_0xaf9e('0x8a'));
        var _0x48375d = $('#shoutboxChangeOldPassword')[_0xaf9e('0x3')]();
        var _0x2f9ada = $(_0xaf9e('0x8b'))[_0xaf9e('0x3')]();
        if (_0x48375d[_0xaf9e('0x3b')] < 0x3 || _0x2f9ada[_0xaf9e('0x3b')] < 0x3) {
            _0x2d9d59[_0xaf9e('0x8c')](_0xf6d82b, _0xaf9e('0x8d'));
            return;
        }
        $(_0xaf9e('0x8e'))['empty']();
        $[_0xaf9e('0x8f')]({
            'type': _0xaf9e('0x90'),
            'url': _0x2d9d59[_0xaf9e('0xe')],
            'crossDomain': !![],
            'data': {
                'a': 'updateAdmin',
                'shoutboxUserMustRegister': _0x1ece01,
                'oldPassword': _0x48375d,
                'newPassword': _0x2f9ada
            },
            'success': function(_0x480469) {
                if (_0x480469 === 'ko') {
                    _0x2d9d59['displayError'](_0xf6d82b, _0xaf9e('0x91'));
                    return;
                }
                _0x480469 = JSON['parse'](_0x480469);
                _0x2d9d59[_0xaf9e('0xb')]['password'] = _0x480469[_0xaf9e('0x4')];
                _0x2d9d59[_0xaf9e('0xb')][_0xaf9e('0x92')] = _0x480469[_0xaf9e('0x92')];
                $('#shoutboxAdminPasswordChangePanel')['slideToggle'](0xc8);
                $('#shoutboxLoginPanel')[_0xaf9e('0x93')]();
            }
        });
    });
    $(_0xaf9e('0x94'))[_0xaf9e('0x6b')](function() {
        var _0x2dbe82 = $(this)[_0xaf9e('0x89')]()[_0xaf9e('0x89')]()[_0xaf9e('0x6d')]('.error');
        var _0x509ec2 = $('#shoutboxEmailAdmin')['val']();
        var _0x5b24fc = $(_0xaf9e('0x5'))['val']();
        if (_0x5b24fc['length'] < 0x3) {
            _0x2d9d59[_0xaf9e('0x8c')](_0x2dbe82, 'Invalid\x20Password');
            return;
        }
        var _0x54ba46 = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!_0x54ba46[_0xaf9e('0x95')](_0x509ec2)) {
            _0x2d9d59[_0xaf9e('0x8c')](_0x2dbe82, 'Invalid\x20email');
            return;
        }
        $('.error')[_0xaf9e('0x96')]();
        $[_0xaf9e('0x8f')]({
            'type': _0xaf9e('0x90'),
            'url': _0x2d9d59['AJAX'],
            'crossDomain': !![],
            'data': {
                'a': _0xaf9e('0x97'),
                'email': _0x509ec2,
                'password': _0x5b24fc
            },
            'success': function(_0x4227ba) {
                if (_0x4227ba === 'ko') {
                    _0x2d9d59[_0xaf9e('0x8c')](_0x2dbe82, 'Invalid\x20email/password');
                    return;
                }
                _0x4227ba = JSON[_0xaf9e('0xf')](_0x4227ba);
                _0x2d9d59['myUser']['username'] = _0xaf9e('0x98');
                _0x2d9d59[_0xaf9e('0xb')][_0xaf9e('0x4')] = _0x4227ba[_0xaf9e('0x4')];
                _0x2d9d59[_0xaf9e('0xb')][_0xaf9e('0x92')] = _0x4227ba['shoutboxUserMustRegister'];
                _0x2d9d59[_0xaf9e('0xb')]['isAdmin'] = !![];
                _0x2d9d59[_0xaf9e('0xb')]['avatar'] = 'https://www.shoutbox.com/avatars/admin.svg';
                $(_0xaf9e('0x99'))[_0xaf9e('0x93')]();
                _0x2d9d59[_0xaf9e('0x4d')](_0x2d9d59['traductions'][_0xaf9e('0x9a')]);
                localStorage[_0xaf9e('0x4c')]('email', _0x509ec2);
                localStorage['setItem'](_0xaf9e('0x4'), _0x5b24fc);
                _0x2d9d59[_0xaf9e('0x45')][_0xaf9e('0x46')](_0xaf9e('0x9b'), _0x5b24fc);
            }
        });
    });
    $(_0xaf9e('0x9c'))[_0xaf9e('0x6b')](function() {
        var _0x206ae3 = $(this)[_0xaf9e('0x89')]()[_0xaf9e('0x89')]()[_0xaf9e('0x6d')]('.error');
        var _0x2398d8 = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        var _0x50a416 = $('#shoutboxForgottenEmail')[_0xaf9e('0x3')]();
        if (!_0x2398d8['test'](_0x50a416)) {
            _0x2d9d59['displayError'](_0x206ae3, _0xaf9e('0x9d'));
            return;
        }
        $[_0xaf9e('0x8f')]({
            'type': _0xaf9e('0x90'),
            'url': _0x2d9d59[_0xaf9e('0xe')],
            'crossDomain': !![],
            'data': {
                'a': 'forgottenshoutboxPasswordAdmin',
                'email': _0x50a416
            },
            'success': function(_0xb47804) {
                if (_0xb47804 === 'ko') {
                    _0x2d9d59[_0xaf9e('0x8c')](_0x206ae3, 'No\x20such\x20email\x20!');
                    return;
                }
                $(_0xaf9e('0x87'))[_0xaf9e('0x93')](0xc8);
            }
        });
    });
    $(_0xaf9e('0x69'))[_0xaf9e('0x6b')](function(_0xf23cd2) {
        _0xf23cd2[_0xaf9e('0x84')]();
        if (chat[_0xaf9e('0xb')][_0xaf9e('0x9e')]) {
            $(_0xaf9e('0x99'))[_0xaf9e('0x93')]();
            $('#shoutboxAdminPasswordChangePanel')[_0xaf9e('0x9f')]();
            $(_0xaf9e('0x87'))['hide']();
        } else {
            $(_0xaf9e('0x99'))['slideToggle'](0xc8);
            $(_0xaf9e('0xa0'))[_0xaf9e('0x93')]();
            $(_0xaf9e('0x87'))[_0xaf9e('0x93')]();
        }
    });
    $('#shoutBoxHeader')[_0xaf9e('0x6b')](function() {
        $('#shoutBoxUserList')[_0xaf9e('0xa1')](_0xaf9e('0xa2'));
    });
};
