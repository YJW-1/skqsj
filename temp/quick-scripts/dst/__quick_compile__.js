
(function () {
var scripts = [{"deps":{"./assets/migration/use_reversed_rotateTo":5,"./assets/resources/SDK/module/BossKey/lieyou_BossKey_Prefab":123,"./assets/resources/SDK/module/BossKey/BossKey_SDK":116,"./assets/resources/SDK/module/common/lieyou_interface":127,"./assets/resources/SDK/module/common/lieyou_baseNode":117,"./assets/resources/SDK/module/lieyou_InstallShortcutPrefab":124,"./assets/resources/SDK/module/praise/lieyou_praiseDialog":122,"./assets/resources/SDK/module/qGameNativeAd/lieyou_oppoNativeAdSdk":126,"./assets/resources/SDK/module/qGameNativeAd/lieyou_nativeLoad":125,"./assets/resources/SDK/module/qGameNativeAd/nativePlayIconADSdk":128,"./assets/resources/SDK/module/qGameNativeAd/lieyou_nativeAdPrefab":110,"./assets/resources/SDK/module/qgameMoreGame/lieyou_qGameMoreGame_showMore":133,"./assets/resources/SDK/module/qgameMoreGame/lieyou_qGamemoreGame_icon":132,"./assets/resources/SDK/module/qgameMoreGame/lieyou_qGamemoreGame_mid":135,"./assets/resources/SDK/module/qgameMoreGame/lieyou_qGamemoreGame_more":32,"./assets/resources/SDK/module/qgameMoreGame/lieyou_qGameMoreGamePrefab":18,"./assets/resources/SDK/module/qqAppBox/lieyou_qqAppBox":119,"./assets/resources/SDK/module/redPack/lieyou_redPackDialog":19,"./assets/resources/SDK/module/tt_luPing/lieyou_tt_luPing":134,"./assets/resources/SDK/module/tt_luPing/lieyou_tt_Prefab":33,"./assets/resources/SDK/scripts/BaseManager":111,"./assets/resources/SDK/scripts/FaceBookManager":130,"./assets/resources/SDK/scripts/HuaweiManager":137,"./assets/resources/SDK/scripts/JinRiTouTiaoManager":20,"./assets/resources/SDK/scripts/MagicManagerH5":131,"./assets/resources/SDK/scripts/NativeManager":6,"./assets/resources/SDK/scripts/OppoH5Manager":136,"./assets/resources/SDK/scripts/OppoManager":129,"./assets/resources/SDK/scripts/QQManager":21,"./assets/resources/SDK/scripts/QuTouTiaoManagerH5":139,"./assets/resources/SDK/scripts/SdkData":113,"./assets/resources/SDK/scripts/SdkManager":118,"./assets/resources/SDK/scripts/VivoManager":112,"./assets/resources/SDK/scripts/WxManager":120,"./assets/resources/SDK/scripts/XiaoMiManager":138,"./assets/resources/SDK/scripts/XiaoMiManagerH5":141,"./assets/resources/SDK/scripts/lieyou_webManager":140,"./assets/resources/SDK/scripts/BaiDuManager":24,"./assets/resources/SDK/SdkAdConfigData":22,"./assets/script/Framework/DataMgr":121,"./assets/script/Framework/Constant":115,"./assets/script/Framework/GameBgCtr":35,"./assets/script/Framework/GameCtr":36,"./assets/script/Framework/GameMgr":23,"./assets/script/Framework/Msg":34,"./assets/script/Framework/NormalModelCtr":114,"./assets/script/Framework/QEasing":37,"./assets/script/Framework/QMoveAction":38,"./assets/script/Framework/QRotation":40,"./assets/script/Framework/QScaleAction":41,"./assets/script/Framework/ResMgr":48,"./assets/script/Framework/SceneMgr":44,"./assets/script/Framework/UIMgr":43,"./assets/script/Framework/AudioMgr":1,"./assets/script/Game/baffle":39,"./assets/script/Game/balloon":42,"./assets/script/Game/balloon2":47,"./assets/script/Game/bat":2,"./assets/script/Game/boom":45,"./assets/script/Game/cactus":46,"./assets/script/Game/coin":51,"./assets/script/Game/controlCenter":49,"./assets/script/Game/fan":25,"./assets/script/Game/gameBg":52,"./assets/script/Game/handTips":7,"./assets/script/Game/labelTips":50,"./assets/script/Game/laser":54,"./assets/script/Game/laserEffect":56,"./assets/script/Game/limit3":53,"./assets/script/Game/listen":55,"./assets/script/Game/mapMask":58,"./assets/script/Game/moveFloor":8,"./assets/script/Game/otherCamera":57,"./assets/script/Game/propCacTus":9,"./assets/script/Game/propBigFan":26,"./assets/script/Game/propChainRocket":60,"./assets/script/Game/propCloud":61,"./assets/script/Game/propHoneybee":10,"./assets/script/Game/propMoveFloo10":59,"./assets/script/Game/propMoveFloor":11,"./assets/script/Game/propMoveFloor11":62,"./assets/script/Game/propMoveFloor13":66,"./assets/script/Game/propMoveFloor12":63,"./assets/script/Game/propMoveFloor14":67,"./assets/script/Game/propMoveFloor15":64,"./assets/script/Game/propMoveFloor17":65,"./assets/script/Game/propMoveFloor18":12,"./assets/script/Game/propMoveFloor16":68,"./assets/script/Game/propMoveFloor2":71,"./assets/script/Game/propMoveFloor3":70,"./assets/script/Game/propMoveFloor21":75,"./assets/script/Game/propMoveFloor9":69,"./assets/script/Game/propRocket":73,"./assets/script/Game/propRocket2":72,"./assets/script/Game/propRotateFloor":74,"./assets/script/Game/propWooldenBox":76,"./assets/script/Game/rain":84,"./assets/script/Game/rocketEffect":78,"./assets/script/Game/rewardRocket":82,"./assets/script/Game/role":77,"./assets/script/Game/rope":79,"./assets/script/Game/stone":80,"./assets/script/Game/sandEffect":83,"./assets/script/Game/tes":86,"./assets/script/Game/test":27,"./assets/script/Game/thorn":85,"./assets/script/Game/NewScript":88,"./assets/script/Ui/LevelPanel":3,"./assets/script/Ui/Lottery":81,"./assets/script/Ui/PausePanel":87,"./assets/script/Ui/UiBeforeSucceed":28,"./assets/script/Ui/UIPage":89,"./assets/script/Ui/UiFailed":13,"./assets/script/Ui/UiGame":29,"./assets/script/Ui/UiHome":90,"./assets/script/Ui/UiLoad":91,"./assets/script/Ui/UiLottery":14,"./assets/script/Ui/UiResurrection":15,"./assets/script/Ui/UiSet":94,"./assets/script/Ui/UiShop":30,"./assets/script/Ui/propItem":99,"./assets/script/Ui/UiSign":92,"./assets/script/Ui/UiSucceed":16,"./assets/script/Ui/rewardLevel":95,"./assets/script/Ui/rewardLevel2":97,"./assets/script/Ui/shopItem":93,"./assets/script/Ui/LevelItem":96,"./assets/script/utils/ald-game":17,"./assets/script/utils/ald-game-conf":101,"./assets/script/ysqszc/cloud":100,"./assets/script/ysqszc/game2":102,"./assets/script/ysqszc/launchPoint":106,"./assets/script/ysqszc/levelNum":4,"./assets/script/ysqszc/nimiCactus":98,"./assets/script/ysqszc/propCactus":104,"./assets/script/ysqszc/sBoard":103,"./assets/script/ysqszc/stone2":107,"./assets/script/ysqszc/theBall":105,"./assets/script/ysqszc/tt":109,"./assets/script/ysqszc/bat2":108,"./assets/script/Framework/CocosZ":31},"path":"preview-scripts/__qc_index__.js"},{"deps":{"./CocosZ":31},"path":"preview-scripts/assets/script/Framework/AudioMgr.js"},{"deps":{"../Framework/CocosZ":31,"../Framework/Constant":115},"path":"preview-scripts/assets/script/Game/bat.js"},{"deps":{"./UIPage":89,"../Framework/CocosZ":31,"../Framework/Constant":115,"../Framework/Msg":34,"./LevelItem":96},"path":"preview-scripts/assets/script/Ui/LevelPanel.js"},{"deps":{"../Framework/CocosZ":31},"path":"preview-scripts/assets/script/ysqszc/levelNum.js"},{"deps":{},"path":"preview-scripts/assets/migration/use_reversed_rotateTo.js"},{"deps":{"BaseManager":111},"path":"preview-scripts/assets/resources/SDK/scripts/NativeManager.js"},{"deps":{"../Framework/Constant":115,"../Framework/CocosZ":31},"path":"preview-scripts/assets/script/Game/handTips.js"},{"deps":{"../Framework/CocosZ":31,"../Framework/Constant":115},"path":"preview-scripts/assets/script/Game/moveFloor.js"},{"deps":{"../Framework/CocosZ":31,"../Framework/Constant":115},"path":"preview-scripts/assets/script/Game/propCacTus.js"},{"deps":{"../Framework/CocosZ":31,"../Framework/Constant":115},"path":"preview-scripts/assets/script/Game/propHoneybee.js"},{"deps":{"../Framework/CocosZ":31,"../Framework/Constant":115},"path":"preview-scripts/assets/script/Game/propMoveFloor.js"},{"deps":{"../Framework/CocosZ":31,"../Framework/Constant":115},"path":"preview-scripts/assets/script/Game/propMoveFloor18.js"},{"deps":{"./UIPage":89,"../Framework/CocosZ":31,"../Framework/Msg":34,"../Framework/Constant":115},"path":"preview-scripts/assets/script/Ui/UiFailed.js"},{"deps":{"./UIPage":89,"../Framework/Constant":115,"../Framework/Msg":34,"../Framework/CocosZ":31},"path":"preview-scripts/assets/script/Ui/UiLottery.js"},{"deps":{"./UIPage":89,"../Framework/Constant":115,"../Framework/Msg":34,"../Framework/CocosZ":31},"path":"preview-scripts/assets/script/Ui/UiResurrection.js"},{"deps":{"./UIPage":89,"../Framework/CocosZ":31,"../Framework/Constant":115,"../Framework/Msg":34},"path":"preview-scripts/assets/script/Ui/UiSucceed.js"},{"deps":{"./ald-game-conf":101},"path":"preview-scripts/assets/script/utils/ald-game.js"},{"deps":{},"path":"preview-scripts/assets/resources/SDK/module/qgameMoreGame/lieyou_qGameMoreGamePrefab.js"},{"deps":{},"path":"preview-scripts/assets/resources/SDK/module/redPack/lieyou_redPackDialog.js"},{"deps":{"BaseManager":111},"path":"preview-scripts/assets/resources/SDK/scripts/JinRiTouTiaoManager.js"},{"deps":{"BaseManager":111},"path":"preview-scripts/assets/resources/SDK/scripts/QQManager.js"},{"deps":{},"path":"preview-scripts/assets/resources/SDK/SdkAdConfigData.js"},{"deps":{"./Constant":115,"./CocosZ":31},"path":"preview-scripts/assets/script/Framework/GameMgr.js"},{"deps":{"BaseManager":111},"path":"preview-scripts/assets/resources/SDK/scripts/BaiDuManager.js"},{"deps":{"../Framework/Constant":115,"../Framework/CocosZ":31},"path":"preview-scripts/assets/script/Game/fan.js"},{"deps":{"../Framework/CocosZ":31,"../Framework/Constant":115},"path":"preview-scripts/assets/script/Game/propBigFan.js"},{"deps":{"../Framework/CocosZ":31,"../Framework/Constant":115},"path":"preview-scripts/assets/script/Game/test.js"},{"deps":{"./UIPage":89,"../Framework/CocosZ":31,"../Framework/Msg":34,"../Framework/Constant":115},"path":"preview-scripts/assets/script/Ui/UiBeforeSucceed.js"},{"deps":{"./UIPage":89,"../Framework/CocosZ":31,"../Framework/Constant":115,"../Framework/Msg":34},"path":"preview-scripts/assets/script/Ui/UiGame.js"},{"deps":{"./UIPage":89,"../Framework/CocosZ":31,"../Framework/Constant":115,"../Framework/Msg":34},"path":"preview-scripts/assets/script/Ui/UiShop.js"},{"deps":{"./DataMgr":121,"./GameMgr":23,"./UIMgr":43,"./Constant":115,"./AudioMgr":1,"./ResMgr":48,"./SceneMgr":44},"path":"preview-scripts/assets/script/Framework/CocosZ.js"},{"deps":{},"path":"preview-scripts/assets/resources/SDK/module/qgameMoreGame/lieyou_qGamemoreGame_more.js"},{"deps":{},"path":"preview-scripts/assets/resources/SDK/module/tt_luPing/lieyou_tt_Prefab.js"},{"deps":{},"path":"preview-scripts/assets/script/Framework/Msg.js"},{"deps":{},"path":"preview-scripts/assets/script/Framework/GameBgCtr.js"},{"deps":{"./CocosZ":31,"./Constant":115},"path":"preview-scripts/assets/script/Framework/GameCtr.js"},{"deps":{},"path":"preview-scripts/assets/script/Framework/QEasing.js"},{"deps":{"./QEasing":37},"path":"preview-scripts/assets/script/Framework/QMoveAction.js"},{"deps":{"../Framework/Constant":115},"path":"preview-scripts/assets/script/Game/baffle.js"},{"deps":{"./QEasing":37},"path":"preview-scripts/assets/script/Framework/QRotation.js"},{"deps":{"./QEasing":37},"path":"preview-scripts/assets/script/Framework/QScaleAction.js"},{"deps":{"../Framework/CocosZ":31,"../Framework/Constant":115},"path":"preview-scripts/assets/script/Game/balloon.js"},{"deps":{"./Constant":115,"../Ui/UiFailed":13,"../Ui/UiHome":90,"../Ui/UiLoad":91,"../Ui/UiShop":30,"../Ui/UiGame":29,"../Ui/PausePanel":87,"../Ui/UiSign":92,"../Ui/UiSet":94,"../Ui/UiSucceed":16,"../Ui/LevelPanel":3,"../Ui/UiLottery":14,"../Ui/UiResurrection":15,"../Ui/UiBeforeSucceed":28},"path":"preview-scripts/assets/script/Framework/UIMgr.js"},{"deps":{"./CocosZ":31},"path":"preview-scripts/assets/script/Framework/SceneMgr.js"},{"deps":{"../Framework/CocosZ":31,"../Framework/Constant":115},"path":"preview-scripts/assets/script/Game/boom.js"},{"deps":{"../Framework/CocosZ":31},"path":"preview-scripts/assets/script/Game/cactus.js"},{"deps":{"../Framework/CocosZ":31,"../Framework/Constant":115},"path":"preview-scripts/assets/script/Game/balloon2.js"},{"deps":{},"path":"preview-scripts/assets/script/Framework/ResMgr.js"},{"deps":{"../Framework/CocosZ":31},"path":"preview-scripts/assets/script/Game/controlCenter.js"},{"deps":{"../Framework/CocosZ":31},"path":"preview-scripts/assets/script/Game/labelTips.js"},{"deps":{},"path":"preview-scripts/assets/script/Game/coin.js"},{"deps":{"../Framework/CocosZ":31},"path":"preview-scripts/assets/script/Game/gameBg.js"},{"deps":{},"path":"preview-scripts/assets/script/Game/limit3.js"},{"deps":{"../Framework/CocosZ":31,"../Framework/Constant":115},"path":"preview-scripts/assets/script/Game/laser.js"},{"deps":{"../Framework/Constant":115},"path":"preview-scripts/assets/script/Game/listen.js"},{"deps":{"../Framework/CocosZ":31},"path":"preview-scripts/assets/script/Game/laserEffect.js"},{"deps":{},"path":"preview-scripts/assets/script/Game/otherCamera.js"},{"deps":{},"path":"preview-scripts/assets/script/Game/mapMask.js"},{"deps":{"../Framework/CocosZ":31},"path":"preview-scripts/assets/script/Game/propMoveFloo10.js"},{"deps":{},"path":"preview-scripts/assets/script/Game/propChainRocket.js"},{"deps":{},"path":"preview-scripts/assets/script/Game/propCloud.js"},{"deps":{"../Framework/CocosZ":31},"path":"preview-scripts/assets/script/Game/propMoveFloor11.js"},{"deps":{"../Framework/CocosZ":31},"path":"preview-scripts/assets/script/Game/propMoveFloor12.js"},{"deps":{"../Framework/CocosZ":31},"path":"preview-scripts/assets/script/Game/propMoveFloor15.js"},{"deps":{"../Framework/CocosZ":31},"path":"preview-scripts/assets/script/Game/propMoveFloor17.js"},{"deps":{"../Framework/CocosZ":31},"path":"preview-scripts/assets/script/Game/propMoveFloor13.js"},{"deps":{"../Framework/Constant":115},"path":"preview-scripts/assets/script/Game/propMoveFloor14.js"},{"deps":{"../Framework/CocosZ":31},"path":"preview-scripts/assets/script/Game/propMoveFloor16.js"},{"deps":{"../Framework/CocosZ":31},"path":"preview-scripts/assets/script/Game/propMoveFloor9.js"},{"deps":{"../Framework/CocosZ":31},"path":"preview-scripts/assets/script/Game/propMoveFloor3.js"},{"deps":{"../Framework/CocosZ":31},"path":"preview-scripts/assets/script/Game/propMoveFloor2.js"},{"deps":{"../Framework/Constant":115,"../Framework/CocosZ":31},"path":"preview-scripts/assets/script/Game/propRocket2.js"},{"deps":{"../Framework/Constant":115,"../Framework/CocosZ":31},"path":"preview-scripts/assets/script/Game/propRocket.js"},{"deps":{"../Framework/CocosZ":31},"path":"preview-scripts/assets/script/Game/propRotateFloor.js"},{"deps":{"../Framework/CocosZ":31},"path":"preview-scripts/assets/script/Game/propMoveFloor21.js"},{"deps":{"../Framework/Constant":115,"../Framework/CocosZ":31},"path":"preview-scripts/assets/script/Game/propWooldenBox.js"},{"deps":{"../Framework/Msg":34,"../Framework/CocosZ":31,"../Framework/Constant":115,"../Ui/UiGame":29},"path":"preview-scripts/assets/script/Game/role.js"},{"deps":{"../Framework/CocosZ":31,"../Framework/Constant":115},"path":"preview-scripts/assets/script/Game/rocketEffect.js"},{"deps":{},"path":"preview-scripts/assets/script/Game/rope.js"},{"deps":{"../Framework/CocosZ":31,"../Framework/Constant":115},"path":"preview-scripts/assets/script/Game/stone.js"},{"deps":{"../Framework/CocosZ":31,"../Framework/Constant":115,"../Framework/Msg":34},"path":"preview-scripts/assets/script/Ui/Lottery.js"},{"deps":{"../Framework/CocosZ":31},"path":"preview-scripts/assets/script/Game/rewardRocket.js"},{"deps":{},"path":"preview-scripts/assets/script/Game/sandEffect.js"},{"deps":{},"path":"preview-scripts/assets/script/Game/rain.js"},{"deps":{},"path":"preview-scripts/assets/script/Game/thorn.js"},{"deps":{},"path":"preview-scripts/assets/script/Game/tes.js"},{"deps":{"./UIPage":89,"../Framework/CocosZ":31,"../Framework/Constant":115},"path":"preview-scripts/assets/script/Ui/PausePanel.js"},{"deps":{},"path":"preview-scripts/assets/script/Game/NewScript.js"},{"deps":{},"path":"preview-scripts/assets/script/Ui/UIPage.js"},{"deps":{"./UIPage":89,"../Framework/CocosZ":31,"../Framework/Msg":34,"../Framework/Constant":115},"path":"preview-scripts/assets/script/Ui/UiHome.js"},{"deps":{"./UIPage":89,"../Framework/CocosZ":31,"../Framework/Constant":115},"path":"preview-scripts/assets/script/Ui/UiLoad.js"},{"deps":{"./UIPage":89,"../Framework/CocosZ":31,"../Framework/Constant":115,"../Framework/Msg":34},"path":"preview-scripts/assets/script/Ui/UiSign.js"},{"deps":{"../Framework/CocosZ":31,"../Framework/Constant":115,"../Framework/Msg":34},"path":"preview-scripts/assets/script/Ui/shopItem.js"},{"deps":{"./UIPage":89,"../Framework/CocosZ":31,"../Framework/Constant":115},"path":"preview-scripts/assets/script/Ui/UiSet.js"},{"deps":{"../Framework/CocosZ":31,"../Framework/Constant":115,"../Framework/Msg":34},"path":"preview-scripts/assets/script/Ui/rewardLevel.js"},{"deps":{"../Framework/CocosZ":31,"../Framework/Constant":115,"../Framework/Msg":34},"path":"preview-scripts/assets/script/Ui/LevelItem.js"},{"deps":{"../Framework/CocosZ":31,"../Framework/Constant":115,"../Framework/Msg":34},"path":"preview-scripts/assets/script/Ui/rewardLevel2.js"},{"deps":{},"path":"preview-scripts/assets/script/ysqszc/nimiCactus.js"},{"deps":{"../Framework/CocosZ":31,"../Framework/Msg":34,"../Framework/Constant":115},"path":"preview-scripts/assets/script/Ui/propItem.js"},{"deps":{},"path":"preview-scripts/assets/script/ysqszc/cloud.js"},{"deps":{},"path":"preview-scripts/assets/script/utils/ald-game-conf.js"},{"deps":{"../Framework/CocosZ":31,"../Framework/Constant":115,"../Ui/UiGame":29},"path":"preview-scripts/assets/script/ysqszc/game2.js"},{"deps":{"../Framework/CocosZ":31},"path":"preview-scripts/assets/script/ysqszc/sBoard.js"},{"deps":{},"path":"preview-scripts/assets/script/ysqszc/propCactus.js"},{"deps":{"../Framework/CocosZ":31,"../Framework/Constant":115},"path":"preview-scripts/assets/script/ysqszc/theBall.js"},{"deps":{"../Framework/CocosZ":31},"path":"preview-scripts/assets/script/ysqszc/launchPoint.js"},{"deps":{"../Framework/CocosZ":31,"../Framework/Constant":115},"path":"preview-scripts/assets/script/ysqszc/stone2.js"},{"deps":{},"path":"preview-scripts/assets/script/ysqszc/bat2.js"},{"deps":{},"path":"preview-scripts/assets/script/ysqszc/tt.js"},{"deps":{},"path":"preview-scripts/assets/resources/SDK/module/qGameNativeAd/lieyou_nativeAdPrefab.js"},{"deps":{},"path":"preview-scripts/assets/resources/SDK/scripts/BaseManager.js"},{"deps":{"BaseManager":111},"path":"preview-scripts/assets/resources/SDK/scripts/VivoManager.js"},{"deps":{"SdkAdConfigData":22},"path":"preview-scripts/assets/resources/SDK/scripts/SdkData.js"},{"deps":{"./GameCtr":36,"./Constant":115,"./GameBgCtr":35,"./CocosZ":31},"path":"preview-scripts/assets/script/Framework/NormalModelCtr.js"},{"deps":{},"path":"preview-scripts/assets/script/Framework/Constant.js"},{"deps":{},"path":"preview-scripts/assets/resources/SDK/module/BossKey/BossKey_SDK.js"},{"deps":{},"path":"preview-scripts/assets/resources/SDK/module/common/lieyou_baseNode.js"},{"deps":{"BaseManager":111,"FaceBookManager":130,"WxManager":120,"NativeManager":6,"OppoManager":129,"VivoManager":112,"JinRiTouTiaoManager":20,"BaiDuManager":24,"QQManager":21,"HuaweiManager":137,"XiaoMiManagerH5":141,"XiaoMiManager":138,"OppoH5Manager":136,"lieyou_webManager":140,"QuTouTiaoManagerH5":139,"MagicManagerH5":131},"path":"preview-scripts/assets/resources/SDK/scripts/SdkManager.js"},{"deps":{},"path":"preview-scripts/assets/resources/SDK/module/qqAppBox/lieyou_qqAppBox.js"},{"deps":{"BaseManager":111},"path":"preview-scripts/assets/resources/SDK/scripts/WxManager.js"},{"deps":{"./Constant":115},"path":"preview-scripts/assets/script/Framework/DataMgr.js"},{"deps":{},"path":"preview-scripts/assets/resources/SDK/module/praise/lieyou_praiseDialog.js"},{"deps":{},"path":"preview-scripts/assets/resources/SDK/module/BossKey/lieyou_BossKey_Prefab.js"},{"deps":{},"path":"preview-scripts/assets/resources/SDK/module/lieyou_InstallShortcutPrefab.js"},{"deps":{},"path":"preview-scripts/assets/resources/SDK/module/qGameNativeAd/lieyou_nativeLoad.js"},{"deps":{},"path":"preview-scripts/assets/resources/SDK/module/qGameNativeAd/lieyou_oppoNativeAdSdk.js"},{"deps":{},"path":"preview-scripts/assets/resources/SDK/module/common/lieyou_interface.js"},{"deps":{},"path":"preview-scripts/assets/resources/SDK/module/qGameNativeAd/nativePlayIconADSdk.js"},{"deps":{"BaseManager":111},"path":"preview-scripts/assets/resources/SDK/scripts/OppoManager.js"},{"deps":{"BaseManager":111},"path":"preview-scripts/assets/resources/SDK/scripts/FaceBookManager.js"},{"deps":{"BaseManager":111},"path":"preview-scripts/assets/resources/SDK/scripts/MagicManagerH5.js"},{"deps":{},"path":"preview-scripts/assets/resources/SDK/module/qgameMoreGame/lieyou_qGamemoreGame_icon.js"},{"deps":{},"path":"preview-scripts/assets/resources/SDK/module/qgameMoreGame/lieyou_qGameMoreGame_showMore.js"},{"deps":{},"path":"preview-scripts/assets/resources/SDK/module/tt_luPing/lieyou_tt_luPing.js"},{"deps":{},"path":"preview-scripts/assets/resources/SDK/module/qgameMoreGame/lieyou_qGamemoreGame_mid.js"},{"deps":{"BaseManager":111},"path":"preview-scripts/assets/resources/SDK/scripts/OppoH5Manager.js"},{"deps":{"BaseManager":111},"path":"preview-scripts/assets/resources/SDK/scripts/HuaweiManager.js"},{"deps":{"BaseManager":111},"path":"preview-scripts/assets/resources/SDK/scripts/XiaoMiManager.js"},{"deps":{"BaseManager":111},"path":"preview-scripts/assets/resources/SDK/scripts/QuTouTiaoManagerH5.js"},{"deps":{"BaseManager":111},"path":"preview-scripts/assets/resources/SDK/scripts/lieyou_webManager.js"},{"deps":{"BaseManager":111},"path":"preview-scripts/assets/resources/SDK/scripts/XiaoMiManagerH5.js"}];
var entries = ["preview-scripts/__qc_index__.js"];

/**
 * Notice: This file can not use ES6 (for IE 11)
 */
var modules = {};
var name2path = {};

if (typeof global === 'undefined') {
    window.global = window;
}

function loadScript (src, cb) {
    if (typeof require !== 'undefined') {
        require(src);
        return cb();
    }

    // var timer = 'load ' + src;
    // console.time(timer);

    var scriptElement = document.createElement('script');

    function done() {
        // console.timeEnd(timer);
        // deallocation immediate whatever
        scriptElement.remove();
    }

    scriptElement.onload = function () {
        done();
        cb();
    };
    scriptElement.onerror = function () {
        done();
        var error = 'Failed to load ' + src;
        console.error(error);
        cb(new Error(error));
    };
    scriptElement.setAttribute('type','text/javascript');
    scriptElement.setAttribute('charset', 'utf-8');
    scriptElement.setAttribute('src', src);

    document.head.appendChild(scriptElement);
}

function loadScripts (srcs, cb) {
    var n = srcs.length;

    srcs.forEach(function (src) {
        loadScript(src, function () {
            n--;
            if (n === 0) {
                cb();
            }
        });
    })
}

function formatPath (path) {
    let destPath = window.__quick_compile_project__.destPath;
    if (destPath) {
        let prefix = 'preview-scripts';
        if (destPath[destPath.length - 1] === '/') {
            prefix += '/';
        }
        path = path.replace(prefix, destPath);
    }
    return path;
}

window.__quick_compile_project__ = {
    destPath: '',

    registerModule: function (path, module) {
        path = formatPath(path);
        modules[path].module = module;
    },

    registerModuleFunc: function (path, func) {
        path = formatPath(path);
        modules[path].func = func;

        var sections = path.split('/');
        var name = sections[sections.length - 1];
        name = name.replace(/\.(?:js|ts|json)$/i, '');
        name2path[name] = path;
    },

    require: function (request, path) {
        var m, requestScript;

        path = formatPath(path);
        if (path) {
            m = modules[path];
            if (!m) {
                console.warn('Can not find module for path : ' + path);
                return null;
            }
        }

        if (m) {
            requestScript = scripts[ m.deps[request] ];
        }
        
        path = '';
        if (!requestScript) {
            // search from name2path when request is a dynamic module name
            if (/^[\w- .]*$/.test(request)) {
                path = name2path[request];
            }

            if (!path) {
                if (CC_JSB) {
                    return require(request);
                }
                else {
                    console.warn('Can not find deps [' + request + '] for path : ' + path);
                    return null;
                }
            }
        }
        else {
            path = formatPath(requestScript.path);
        }

        m = modules[path];
        
        if (!m) {
            console.warn('Can not find module for path : ' + path);
            return null;
        }

        if (!m.module && m.func) {
            m.func();
        }

        if (!m.module) {
            console.warn('Can not find module.module for path : ' + path);
            return null;
        }

        return m.module.exports;
    },

    run: function () {
        entries.forEach(function (entry) {
            entry = formatPath(entry);
            var module = modules[entry];
            if (!module.module) {
                module.func();
            }
        });
    },

    load: function (cb) {
        var self = this;

        var srcs = scripts.map(function (script) {
            var path = formatPath(script.path);
            modules[path] = script;
        
            if (script.mtime) {
                path += ("?mtime=" + script.mtime);
            }
        
            return path;
        });

        loadScripts(srcs, function () {
            self.run();
            cb();
        });
    }
};

// Polyfill for IE 11
if (!('remove' in Element.prototype)) {
    Element.prototype.remove = function () {
        if (this.parentNode) {
            this.parentNode.removeChild(this);
        }
    };
}
})();
    