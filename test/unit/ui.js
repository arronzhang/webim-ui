module("ui");
webim.notification.defaults.url = _path + "data/notifications.php";
test("webim.ui", 1, function() {
	stop();
	webim.ui.ready(function(){
		webim = window.webim;
		_path = "images/";
		//webim.extend(webim.setting.defaults.data,{});
		//webim.extend(webim.setting.defaults.data,{block_list: ["1000001"]});
		var menu = [{"title":"doing","icon": _path + "image\/app\/doing.gif","link":"space.php?do=doing"},{"title":"album","icon": _path + "image\/app\/album.gif","link":"space.php?do=album"},{"title":"blog","icon": _path + "image\/app\/blog.gif","link":"space.php?do=blog"},{"title":"thread","icon": _path + "image\/app\/mtag.gif","link":"space.php?do=thread"},{"title":"share","icon": _path + "image\/app\/share.gif","link":"space.php?do=share"},{"title":"doing","icon": _path + "image\/app\/doing.gif","link":"space.php?do=doing"},{"title":"doing","icon": _path + "image\/app\/doing.gif","link":"space.php?do=doing"},{"title":"doing","icon": _path + "image\/app\/doing.gif","link":"space.php?do=doing"},{"title":"doing","icon": _path + "image\/app\/doing.gif","link":"space.php?do=doing"},{"title":"doing","icon": _path + "image\/app\/doing.gif","link":"space.php?do=doing"},{"title":"doing","icon": _path + "image\/app\/doing.gif","link":"space.php?do=doing"},{"title":"doing","icon": _path + "image\/app\/doing.gif","link":"space.php?do=doing"},{"title":"doing","icon": _path + "image\/app\/doing.gif","link":"space.php?do=doing"},{"title":"doing","icon": _path + "image\/app\/doing.gif","link":"space.php?do=doing"},{"title":"doing","icon": _path + "image\/app\/doing.gif","link":"space.php?do=doing"},{"title":"doing","icon": _path + "image\/app\/doing.gif","link":"space.php?do=doing"},{"title":"doing","icon": _path + "image\/app\/doing.gif","link":"space.php?do=doing"}];
		_path = "../";
		webim.ui.emot.init({"dir": _path + "images/emot/default"});
		var _d = webim.setting.defaults.data, _sd = {};
		for(var k in _d){
			if(typeof _d[k] == "boolean"){
				_sd[k] = _d[k];
			}
		}
		var ui = new webim.ui(document.body, {
			soundUrls: {
				lib: _path + "assets/sound.swf",
				msg: _path + "assets/sound/msg.mp3"
			}
		}), im = ui.im;
		ui.addApp("menu", {"data": menu});
		ui.layout.addShortcut( menu);
		ui.addApp("buddy");
		ui.addApp("room");
		ui.addApp("notification");
		ui.addApp("setting", {"data": _sd});
		ui.render();
		//im.autoOnline() && im.online();
		//im.online();
		im.bind("go", function(data){
			data.connection.server = "../im/test/" + data.connection.server;
		});
		ok(ui, "create");
		start();
	});
});
