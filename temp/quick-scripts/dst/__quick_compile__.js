
(function () {
var scripts = [{"deps":{"./assets/migration/use_reversed_rotateTo":5,"./assets/resources/SDK/module/qgameMoreGame/lieyou_qGamemoreGame_more":18,"./assets/resources/SDK/module/redPack/lieyou_redPackDialog":19,"./assets/resources/SDK/scripts/NativeManager":20,"./assets/resources/SDK/SdkAdConfigData":21,"./assets/resources/SDK/scripts/QQManager":22,"./assets/script/Framework/GameBgCtr":23,"./assets/resources/SDK/module/qgameMoreGame/lieyou_qGameMoreGamePrefab":31,"./assets/resources/SDK/module/tt_luPing/lieyou_tt_Prefab":32,"./assets/script/Framework/Msg":35,"./assets/script/Framework/QEasing":37,"./assets/script/Game/NewScript":41,"./assets/script/Framework/ResMgr":45,"./assets/script/Game/coin":48,"./assets/script/Game/otherCamera":55,"./assets/script/Game/limit3":56,"./assets/script/Game/propChainRocket":57,"./assets/script/Game/propCloud":59,"./assets/script/Game/mapMask":73,"./assets/script/Game/rain":78,"./assets/script/Game/rope":81,"./assets/script/Game/sandEffect":83,"./assets/script/Game/tes":85,"./assets/script/Game/thorn":86,"./assets/script/Ui/UIPage":90,"./assets/script/utils/ald-game-conf":96,"./assets/script/ysqszc/cloud":97,"./assets/script/ysqszc/nimiCactus":103,"./assets/script/ysqszc/propCactus":104,"./assets/script/ysqszc/bat2":105,"./assets/script/ysqszc/tt":108,"./assets/resources/SDK/module/BossKey/BossKey_SDK":109,"./assets/resources/SDK/module/qGameNativeAd/lieyou_nativeAdPrefab":110,"./assets/resources/SDK/scripts/BaseManager":111,"./assets/resources/SDK/scripts/VivoManager":112,"./assets/script/Framework/Constant":115,"./assets/resources/SDK/module/common/lieyou_interface":116,"./assets/resources/SDK/module/praise/lieyou_praiseDialog":117,"./assets/resources/SDK/module/qqAppBox/lieyou_qqAppBox":118,"./assets/resources/SDK/scripts/WxManager":120,"./assets/resources/SDK/scripts/SdkData":113,"./assets/resources/SDK/module/qGameNativeAd/lieyou_oppoNativeAdSdk":122,"./assets/resources/SDK/module/BossKey/lieyou_BossKey_Prefab":123,"./assets/resources/SDK/module/lieyou_InstallShortcutPrefab":124,"./assets/resources/SDK/module/common/lieyou_baseNode":125,"./assets/resources/SDK/module/qGameNativeAd/lieyou_nativeLoad":126,"./assets/resources/SDK/module/qGameNativeAd/nativePlayIconADSdk":127,"./assets/resources/SDK/scripts/OppoManager":128,"./assets/resources/SDK/module/qgameMoreGame/lieyou_qGamemoreGame_icon":129,"./assets/resources/SDK/module/qgameMoreGame/lieyou_qGamemoreGame_mid":130,"./assets/resources/SDK/scripts/FaceBookManager":131,"./assets/resources/SDK/module/qgameMoreGame/lieyou_qGameMoreGame_showMore":132,"./assets/resources/SDK/scripts/HuaweiManager":133,"./assets/resources/SDK/scripts/MagicManagerH5":134,"./assets/resources/SDK/module/tt_luPing/lieyou_tt_luPing":135,"./assets/resources/SDK/scripts/BaiDuManager":136,"./assets/resources/SDK/scripts/OppoH5Manager":137,"./assets/resources/SDK/scripts/QuTouTiaoManagerH5":138,"./assets/resources/SDK/scripts/lieyou_webManager":139,"./assets/resources/SDK/scripts/XiaoMiManagerH5":140,"./assets/resources/SDK/scripts/XiaoMiManager":141,"./assets/script/Game/bat":2,"./assets/script/Framework/AudioMgr":1,"./assets/script/Ui/LevelPanel":3,"./assets/script/ysqszc/levelNum":4,"./assets/script/Game/handTips":7,"./assets/script/Game/moveFloor":8,"./assets/script/Game/propCacTus":9,"./assets/script/Game/propMoveFloor":10,"./assets/script/Game/propHoneybee":11,"./assets/script/Game/propMoveFloor18":12,"./assets/script/Ui/UiFailed":13,"./assets/script/Ui/UiResurrection":14,"./assets/script/utils/ald-game":15,"./assets/script/Ui/UiLottery":16,"./assets/script/Ui/UiSucceed":17,"./assets/script/Game/fan":24,"./assets/script/Game/propBigFan":25,"./assets/script/Game/test":26,"./assets/script/Ui/UiBeforeSucceed":27,"./assets/script/Ui/UiGame":28,"./assets/script/Ui/UiShop":29,"./assets/script/Framework/CocosZ":30,"./assets/script/Framework/GameCtr":33,"./assets/script/Framework/GameMgr":34,"./assets/script/Framework/QRotation":38,"./assets/script/Game/balloon":39,"./assets/script/Framework/QMoveAction":36,"./assets/script/Framework/QScaleAction":40,"./assets/script/Game/cactus":42,"./assets/script/Game/balloon2":43,"./assets/script/Framework/SceneMgr":44,"./assets/script/Framework/UIMgr":46,"./assets/script/Game/boom":47,"./assets/script/Game/labelTips":49,"./assets/script/Game/controlCenter":50,"./assets/script/Game/gameBg":51,"./assets/script/Game/laser":52,"./assets/script/Game/laserEffect":53,"./assets/script/Game/listen":54,"./assets/script/Game/propMoveFloo10":58,"./assets/script/Game/propMoveFloor11":61,"./assets/script/Game/propMoveFloor12":60,"./assets/script/Game/propMoveFloor13":62,"./assets/script/Game/propMoveFloor15":63,"./assets/script/Game/propMoveFloor17":64,"./assets/script/Game/propMoveFloor16":65,"./assets/script/Game/propMoveFloor21":66,"./assets/script/Game/propMoveFloor14":67,"./assets/script/Game/propMoveFloor3":68,"./assets/script/Game/propMoveFloor9":69,"./assets/script/Game/propMoveFloor2":70,"./assets/script/Game/propRocket":71,"./assets/script/Game/role":72,"./assets/script/Game/propRotateFloor":74,"./assets/script/Game/propRocket2":75,"./assets/script/Game/rewardRocket":76,"./assets/script/Game/propWooldenBox":77,"./assets/script/Game/rocketEffect":79,"./assets/script/Ui/Lottery":80,"./assets/script/Ui/UiHome":82,"./assets/script/Game/stone":84,"./assets/script/Game/baffle":87,"./assets/script/Ui/PausePanel":88,"./assets/script/Ui/UiLoad":89,"./assets/script/Ui/UiSign":91,"./assets/script/Ui/propItem":92,"./assets/script/Ui/UiSet":93,"./assets/script/Ui/rewardLevel":94,"./assets/script/Ui/LevelItem":95,"./assets/script/Ui/rewardLevel2":98,"./assets/script/Ui/shopItem":99,"./assets/script/ysqszc/launchPoint":101,"./assets/script/ysqszc/game2":100,"./assets/script/ysqszc/stone2":102,"./assets/script/ysqszc/theBall":106,"./assets/script/ysqszc/sBoard":107,"./assets/resources/SDK/scripts/JinRiTouTiaoManager":6,"./assets/script/Framework/NormalModelCtr":114,"./assets/resources/SDK/scripts/SdkManager":119,"./assets/script/Framework/DataMgr":121},"path":"preview-scripts/__qc_index__.js"},{"deps":{"./CocosZ":30},"path":"preview-scripts/assets/script/Framework/AudioMgr.js"},{"deps":{"../Framework/Constant":115,"../Framework/CocosZ":30},"path":"preview-scripts/assets/script/Game/bat.js"},{"deps":{"./UIPage":90,"../Framework/Constant":115,"../Framework/CocosZ":30,"./LevelItem":95,"../Framework/Msg":35},"path":"preview-scripts/assets/script/Ui/LevelPanel.js"},{"deps":{"../Framework/CocosZ":30},"path":"preview-scripts/assets/script/ysqszc/levelNum.js"},{"deps":{},"path":"preview-scripts/assets/migration/use_reversed_rotateTo.js"},{"deps":{"BaseManager":111},"path":"preview-scripts/assets/resources/SDK/scripts/JinRiTouTiaoManager.js"},{"deps":{"../Framework/CocosZ":30,"../Framework/Constant":115},"path":"preview-scripts/assets/script/Game/handTips.js"},{"deps":{"../Framework/Constant":115,"../Framework/CocosZ":30},"path":"preview-scripts/assets/script/Game/moveFloor.js"},{"deps":{"../Framework/CocosZ":30,"../Framework/Constant":115},"path":"preview-scripts/assets/script/Game/propCacTus.js"},{"deps":{"../Framework/Constant":115,"../Framework/CocosZ":30},"path":"preview-scripts/assets/script/Game/propMoveFloor.js"},{"deps":{"../Framework/Constant":115,"../Framework/CocosZ":30},"path":"preview-scripts/assets/script/Game/propHoneybee.js"},{"deps":{"../Framework/Constant":115,"../Framework/CocosZ":30},"path":"preview-scripts/assets/script/Game/propMoveFloor18.js"},{"deps":{"../Framework/CocosZ":30,"../Framework/Constant":115,"../Framework/Msg":35,"./UIPage":90},"path":"preview-scripts/assets/script/Ui/UiFailed.js"},{"deps":{"./UIPage":90,"../Framework/Constant":115,"../Framework/CocosZ":30,"../Framework/Msg":35},"path":"preview-scripts/assets/script/Ui/UiResurrection.js"},{"deps":{"./ald-game-conf":96},"path":"preview-scripts/assets/script/utils/ald-game.js"},{"deps":{"../Framework/CocosZ":30,"./UIPage":90,"../Framework/Constant":115,"../Framework/Msg":35},"path":"preview-scripts/assets/script/Ui/UiLottery.js"},{"deps":{"./UIPage":90,"../Framework/CocosZ":30,"../Framework/Constant":115,"../Framework/Msg":35},"path":"preview-scripts/assets/script/Ui/UiSucceed.js"},{"deps":{},"path":"preview-scripts/assets/resources/SDK/module/qgameMoreGame/lieyou_qGamemoreGame_more.js"},{"deps":{},"path":"preview-scripts/assets/resources/SDK/module/redPack/lieyou_redPackDialog.js"},{"deps":{"BaseManager":111},"path":"preview-scripts/assets/resources/SDK/scripts/NativeManager.js"},{"deps":{},"path":"preview-scripts/assets/resources/SDK/SdkAdConfigData.js"},{"deps":{"BaseManager":111},"path":"preview-scripts/assets/resources/SDK/scripts/QQManager.js"},{"deps":{},"path":"preview-scripts/assets/script/Framework/GameBgCtr.js"},{"deps":{"../Framework/CocosZ":30,"../Framework/Constant":115},"path":"preview-scripts/assets/script/Game/fan.js"},{"deps":{"../Framework/Constant":115,"../Framework/CocosZ":30},"path":"preview-scripts/assets/script/Game/propBigFan.js"},{"deps":{"../Framework/CocosZ":30,"../Framework/Constant":115},"path":"preview-scripts/assets/script/Game/test.js"},{"deps":{"../Framework/Constant":115,"./UIPage":90,"../Framework/Msg":35,"../Framework/CocosZ":30},"path":"preview-scripts/assets/script/Ui/UiBeforeSucceed.js"},{"deps":{"../Framework/CocosZ":30,"./UIPage":90,"../Framework/Msg":35,"../Framework/Constant":115},"path":"preview-scripts/assets/script/Ui/UiGame.js"},{"deps":{"./UIPage":90,"../Framework/CocosZ":30,"../Framework/Constant":115,"../Framework/Msg":35},"path":"preview-scripts/assets/script/Ui/UiShop.js"},{"deps":{"./GameMgr":34,"./DataMgr":121,"./UIMgr":46,"./ResMgr":45,"./AudioMgr":1,"./Constant":115,"./SceneMgr":44},"path":"preview-scripts/assets/script/Framework/CocosZ.js"},{"deps":{},"path":"preview-scripts/assets/resources/SDK/module/qgameMoreGame/lieyou_qGameMoreGamePrefab.js"},{"deps":{},"path":"preview-scripts/assets/resources/SDK/module/tt_luPing/lieyou_tt_Prefab.js"},{"deps":{"./Constant":115,"./CocosZ":30},"path":"preview-scripts/assets/script/Framework/GameCtr.js"},{"deps":{"./CocosZ":30,"./Constant":115},"path":"preview-scripts/assets/script/Framework/GameMgr.js"},{"deps":{},"path":"preview-scripts/assets/script/Framework/Msg.js"},{"deps":{"./QEasing":37},"path":"preview-scripts/assets/script/Framework/QMoveAction.js"},{"deps":{},"path":"preview-scripts/assets/script/Framework/QEasing.js"},{"deps":{"./QEasing":37},"path":"preview-scripts/assets/script/Framework/QRotation.js"},{"deps":{"../Framework/CocosZ":30,"../Framework/Constant":115},"path":"preview-scripts/assets/script/Game/balloon.js"},{"deps":{"./QEasing":37},"path":"preview-scripts/assets/script/Framework/QScaleAction.js"},{"deps":{},"path":"preview-scripts/assets/script/Game/NewScript.js"},{"deps":{"../Framework/CocosZ":30},"path":"preview-scripts/assets/script/Game/cactus.js"},{"deps":{"../Framework/Constant":115,"../Framework/CocosZ":30},"path":"preview-scripts/assets/script/Game/balloon2.js"},{"deps":{"./CocosZ":30},"path":"preview-scripts/assets/script/Framework/SceneMgr.js"},{"deps":{},"path":"preview-scripts/assets/script/Framework/ResMgr.js"},{"deps":{"./Constant":115,"../Ui/UiFailed":13,"../Ui/UiHome":82,"../Ui/UiLoad":89,"../Ui/UiShop":29,"../Ui/UiSucceed":17,"../Ui/UiGame":28,"../Ui/PausePanel":88,"../Ui/UiSign":91,"../Ui/UiSet":93,"../Ui/UiLottery":16,"../Ui/LevelPanel":3,"../Ui/UiBeforeSucceed":27,"../Ui/UiResurrection":14},"path":"preview-scripts/assets/script/Framework/UIMgr.js"},{"deps":{"../Framework/CocosZ":30,"../Framework/Constant":115},"path":"preview-scripts/assets/script/Game/boom.js"},{"deps":{},"path":"preview-scripts/assets/script/Game/coin.js"},{"deps":{"../Framework/CocosZ":30},"path":"preview-scripts/assets/script/Game/labelTips.js"},{"deps":{"../Framework/CocosZ":30},"path":"preview-scripts/assets/script/Game/controlCenter.js"},{"deps":{"../Framework/CocosZ":30},"path":"preview-scripts/assets/script/Game/gameBg.js"},{"deps":{"../Framework/Constant":115,"../Framework/CocosZ":30},"path":"preview-scripts/assets/script/Game/laser.js"},{"deps":{"../Framework/CocosZ":30},"path":"preview-scripts/assets/script/Game/laserEffect.js"},{"deps":{"../Framework/Constant":115},"path":"preview-scripts/assets/script/Game/listen.js"},{"deps":{},"path":"preview-scripts/assets/script/Game/otherCamera.js"},{"deps":{},"path":"preview-scripts/assets/script/Game/limit3.js"},{"deps":{},"path":"preview-scripts/assets/script/Game/propChainRocket.js"},{"deps":{"../Framework/CocosZ":30},"path":"preview-scripts/assets/script/Game/propMoveFloo10.js"},{"deps":{},"path":"preview-scripts/assets/script/Game/propCloud.js"},{"deps":{"../Framework/CocosZ":30},"path":"preview-scripts/assets/script/Game/propMoveFloor12.js"},{"deps":{"../Framework/CocosZ":30},"path":"preview-scripts/assets/script/Game/propMoveFloor11.js"},{"deps":{"../Framework/CocosZ":30},"path":"preview-scripts/assets/script/Game/propMoveFloor13.js"},{"deps":{"../Framework/CocosZ":30},"path":"preview-scripts/assets/script/Game/propMoveFloor15.js"},{"deps":{"../Framework/CocosZ":30},"path":"preview-scripts/assets/script/Game/propMoveFloor17.js"},{"deps":{"../Framework/CocosZ":30},"path":"preview-scripts/assets/script/Game/propMoveFloor16.js"},{"deps":{"../Framework/CocosZ":30},"path":"preview-scripts/assets/script/Game/propMoveFloor21.js"},{"deps":{"../Framework/Constant":115},"path":"preview-scripts/assets/script/Game/propMoveFloor14.js"},{"deps":{"../Framework/CocosZ":30},"path":"preview-scripts/assets/script/Game/propMoveFloor3.js"},{"deps":{"../Framework/CocosZ":30},"path":"preview-scripts/assets/script/Game/propMoveFloor9.js"},{"deps":{"../Framework/CocosZ":30},"path":"preview-scripts/assets/script/Game/propMoveFloor2.js"},{"deps":{"../Framework/CocosZ":30,"../Framework/Constant":115},"path":"preview-scripts/assets/script/Game/propRocket.js"},{"deps":{"../Framework/CocosZ":30,"../Framework/Constant":115,"../Framework/Msg":35,"../Ui/UiGame":28},"path":"preview-scripts/assets/script/Game/role.js"},{"deps":{},"path":"preview-scripts/assets/script/Game/mapMask.js"},{"deps":{"../Framework/CocosZ":30},"path":"preview-scripts/assets/script/Game/propRotateFloor.js"},{"deps":{"../Framework/CocosZ":30,"../Framework/Constant":115},"path":"preview-scripts/assets/script/Game/propRocket2.js"},{"deps":{"../Framework/CocosZ":30},"path":"preview-scripts/assets/script/Game/rewardRocket.js"},{"deps":{"../Framework/CocosZ":30,"../Framework/Constant":115},"path":"preview-scripts/assets/script/Game/propWooldenBox.js"},{"deps":{},"path":"preview-scripts/assets/script/Game/rain.js"},{"deps":{"../Framework/CocosZ":30,"../Framework/Constant":115},"path":"preview-scripts/assets/script/Game/rocketEffect.js"},{"deps":{"../Framework/CocosZ":30,"../Framework/Constant":115,"../Framework/Msg":35},"path":"preview-scripts/assets/script/Ui/Lottery.js"},{"deps":{},"path":"preview-scripts/assets/script/Game/rope.js"},{"deps":{"./UIPage":90,"../Framework/CocosZ":30,"../Framework/Constant":115,"../Framework/Msg":35},"path":"preview-scripts/assets/script/Ui/UiHome.js"},{"deps":{},"path":"preview-scripts/assets/script/Game/sandEffect.js"},{"deps":{"../Framework/CocosZ":30,"../Framework/Constant":115},"path":"preview-scripts/assets/script/Game/stone.js"},{"deps":{},"path":"preview-scripts/assets/script/Game/tes.js"},{"deps":{},"path":"preview-scripts/assets/script/Game/thorn.js"},{"deps":{"../Framework/Constant":115},"path":"preview-scripts/assets/script/Game/baffle.js"},{"deps":{"./UIPage":90,"../Framework/CocosZ":30,"../Framework/Constant":115},"path":"preview-scripts/assets/script/Ui/PausePanel.js"},{"deps":{"./UIPage":90,"../Framework/CocosZ":30,"../Framework/Constant":115},"path":"preview-scripts/assets/script/Ui/UiLoad.js"},{"deps":{},"path":"preview-scripts/assets/script/Ui/UIPage.js"},{"deps":{"../Framework/CocosZ":30,"../Framework/Constant":115,"./UIPage":90,"../Framework/Msg":35},"path":"preview-scripts/assets/script/Ui/UiSign.js"},{"deps":{"../Framework/CocosZ":30,"../Framework/Constant":115,"../Framework/Msg":35},"path":"preview-scripts/assets/script/Ui/propItem.js"},{"deps":{"./UIPage":90,"../Framework/CocosZ":30,"../Framework/Constant":115},"path":"preview-scripts/assets/script/Ui/UiSet.js"},{"deps":{"../Framework/CocosZ":30,"../Framework/Constant":115,"../Framework/Msg":35},"path":"preview-scripts/assets/script/Ui/rewardLevel.js"},{"deps":{"../Framework/CocosZ":30,"../Framework/Msg":35,"../Framework/Constant":115},"path":"preview-scripts/assets/script/Ui/LevelItem.js"},{"deps":{},"path":"preview-scripts/assets/script/utils/ald-game-conf.js"},{"deps":{},"path":"preview-scripts/assets/script/ysqszc/cloud.js"},{"deps":{"../Framework/Constant":115,"../Framework/CocosZ":30,"../Framework/Msg":35},"path":"preview-scripts/assets/script/Ui/rewardLevel2.js"},{"deps":{"../Framework/CocosZ":30,"../Framework/Constant":115,"../Framework/Msg":35},"path":"preview-scripts/assets/script/Ui/shopItem.js"},{"deps":{"../Framework/CocosZ":30,"../Framework/Constant":115,"../Ui/UiGame":28},"path":"preview-scripts/assets/script/ysqszc/game2.js"},{"deps":{"../Framework/CocosZ":30},"path":"preview-scripts/assets/script/ysqszc/launchPoint.js"},{"deps":{"../Framework/CocosZ":30,"../Framework/Constant":115},"path":"preview-scripts/assets/script/ysqszc/stone2.js"},{"deps":{},"path":"preview-scripts/assets/script/ysqszc/nimiCactus.js"},{"deps":{},"path":"preview-scripts/assets/script/ysqszc/propCactus.js"},{"deps":{},"path":"preview-scripts/assets/script/ysqszc/bat2.js"},{"deps":{"../Framework/CocosZ":30,"../Framework/Constant":115},"path":"preview-scripts/assets/script/ysqszc/theBall.js"},{"deps":{"../Framework/CocosZ":30},"path":"preview-scripts/assets/script/ysqszc/sBoard.js"},{"deps":{},"path":"preview-scripts/assets/script/ysqszc/tt.js"},{"deps":{},"path":"preview-scripts/assets/resources/SDK/module/BossKey/BossKey_SDK.js"},{"deps":{},"path":"preview-scripts/assets/resources/SDK/module/qGameNativeAd/lieyou_nativeAdPrefab.js"},{"deps":{},"path":"preview-scripts/assets/resources/SDK/scripts/BaseManager.js"},{"deps":{"BaseManager":111},"path":"preview-scripts/assets/resources/SDK/scripts/VivoManager.js"},{"deps":{"SdkAdConfigData":21},"path":"preview-scripts/assets/resources/SDK/scripts/SdkData.js"},{"deps":{"./Constant":115,"./CocosZ":30,"./GameCtr":33,"./GameBgCtr":23},"path":"preview-scripts/assets/script/Framework/NormalModelCtr.js"},{"deps":{},"path":"preview-scripts/assets/script/Framework/Constant.js"},{"deps":{},"path":"preview-scripts/assets/resources/SDK/module/common/lieyou_interface.js"},{"deps":{},"path":"preview-scripts/assets/resources/SDK/module/praise/lieyou_praiseDialog.js"},{"deps":{},"path":"preview-scripts/assets/resources/SDK/module/qqAppBox/lieyou_qqAppBox.js"},{"deps":{"BaseManager":111,"WxManager":120,"FaceBookManager":131,"NativeManager":20,"OppoManager":128,"VivoManager":112,"JinRiTouTiaoManager":6,"QQManager":22,"XiaoMiManagerH5":140,"OppoH5Manager":137,"HuaweiManager":133,"XiaoMiManager":141,"MagicManagerH5":134,"BaiDuManager":136,"QuTouTiaoManagerH5":138,"lieyou_webManager":139},"path":"preview-scripts/assets/resources/SDK/scripts/SdkManager.js"},{"deps":{"BaseManager":111},"path":"preview-scripts/assets/resources/SDK/scripts/WxManager.js"},{"deps":{"./Constant":115},"path":"preview-scripts/assets/script/Framework/DataMgr.js"},{"deps":{},"path":"preview-scripts/assets/resources/SDK/module/qGameNativeAd/lieyou_oppoNativeAdSdk.js"},{"deps":{},"path":"preview-scripts/assets/resources/SDK/module/BossKey/lieyou_BossKey_Prefab.js"},{"deps":{},"path":"preview-scripts/assets/resources/SDK/module/lieyou_InstallShortcutPrefab.js"},{"deps":{},"path":"preview-scripts/assets/resources/SDK/module/common/lieyou_baseNode.js"},{"deps":{},"path":"preview-scripts/assets/resources/SDK/module/qGameNativeAd/lieyou_nativeLoad.js"},{"deps":{},"path":"preview-scripts/assets/resources/SDK/module/qGameNativeAd/nativePlayIconADSdk.js"},{"deps":{"BaseManager":111},"path":"preview-scripts/assets/resources/SDK/scripts/OppoManager.js"},{"deps":{},"path":"preview-scripts/assets/resources/SDK/module/qgameMoreGame/lieyou_qGamemoreGame_icon.js"},{"deps":{},"path":"preview-scripts/assets/resources/SDK/module/qgameMoreGame/lieyou_qGamemoreGame_mid.js"},{"deps":{"BaseManager":111},"path":"preview-scripts/assets/resources/SDK/scripts/FaceBookManager.js"},{"deps":{},"path":"preview-scripts/assets/resources/SDK/module/qgameMoreGame/lieyou_qGameMoreGame_showMore.js"},{"deps":{"BaseManager":111},"path":"preview-scripts/assets/resources/SDK/scripts/HuaweiManager.js"},{"deps":{"BaseManager":111},"path":"preview-scripts/assets/resources/SDK/scripts/MagicManagerH5.js"},{"deps":{},"path":"preview-scripts/assets/resources/SDK/module/tt_luPing/lieyou_tt_luPing.js"},{"deps":{"BaseManager":111},"path":"preview-scripts/assets/resources/SDK/scripts/BaiDuManager.js"},{"deps":{"BaseManager":111},"path":"preview-scripts/assets/resources/SDK/scripts/OppoH5Manager.js"},{"deps":{"BaseManager":111},"path":"preview-scripts/assets/resources/SDK/scripts/QuTouTiaoManagerH5.js"},{"deps":{"BaseManager":111},"path":"preview-scripts/assets/resources/SDK/scripts/lieyou_webManager.js"},{"deps":{"BaseManager":111},"path":"preview-scripts/assets/resources/SDK/scripts/XiaoMiManagerH5.js"},{"deps":{"BaseManager":111},"path":"preview-scripts/assets/resources/SDK/scripts/XiaoMiManager.js"}];
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
    