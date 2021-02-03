window.lieyou_qqAppBox = function(){
    var node = new cc.Node();
    node.width = 110;
    node.height = 110;

    var dragon = new cc.Node();
    var dragon_1 = new cc.Node();
    var dragon_2 = new cc.Node();

    dragon.y = -40;
    dragon.scale = 0.35;
    dragon_1.y = -40;
    dragon_1.scale = 0.2;
    dragon_2.x = -15;
    dragon_2.y = 24;
    dragon_2.scale = 0.6;
    if(lieyou_moreGame_type == 1){
        cc.loader.loadRes('SDK/lieyou_sdkRes/qgameMoreGame/dragon/dragon1/jingling2_tex.json',dragonBones.DragonBonesAtlasAsset, (error, atlasJson) => {
            cc.loader.loadRes('SDK/lieyou_sdkRes/qgameMoreGame/dragon/dragon1/jingling2_ske.json',dragonBones.DragonBonesAsset, (error, dragonBonesJson) => {
                var dragon_1_arm = dragon_1.addComponent(dragonBones.ArmatureDisplay);
                dragon_1_arm.dragonAtlasAsset = atlasJson;
                dragon_1_arm.dragonAsset = dragonBonesJson;
                dragon_1_arm.armatureName = 'armatureName';
                dragon_1_arm.playAnimation('stand', 0);
            });
        });
    }else if(lieyou_moreGame_type == 2){
        cc.loader.loadRes('SDK/lieyou_sdkRes/qgameMoreGame/dragon/dragon2/jinglingdonghu_2_ske_tex.json',dragonBones.DragonBonesAtlasAsset, (error, atlasJson) => {
            cc.loader.loadRes('SDK/lieyou_sdkRes/qgameMoreGame/dragon/dragon2/jinglingdonghu_2_ske_ske.json',dragonBones.DragonBonesAsset, (error, dragonBonesJson) => {
                var dragon_2_arm = dragon_2.addComponent(dragonBones.ArmatureDisplay);
                dragon_2_arm.dragonAtlasAsset = atlasJson;
                dragon_2_arm.dragonAsset = dragonBonesJson;
                dragon_2_arm.armatureName = 'armatureName';
                dragon_2_arm.playAnimation('newAnimation', 0);
            });
        });
    }else{
        cc.loader.loadRes('SDK/lieyou_sdkRes/qgameMoreGame/dragon/jingling_tex',dragonBones.DragonBonesAtlasAsset, (error, atlasJson) => {
            cc.loader.loadRes('SDK/lieyou_sdkRes/qgameMoreGame/dragon/jingling_ske',dragonBones.DragonBonesAsset, (error, dragonBonesJson) => {
                var dragon_arm = dragon.addComponent(dragonBones.ArmatureDisplay);
                dragon_arm.dragonAtlasAsset = atlasJson;
                dragon_arm.dragonAsset = dragonBonesJson;
                dragon_arm.armatureName = 'armatureName';
                dragon_arm.playAnimation('anim_1', 0);
            });
        });
    }

    node.addChild(dragon);
    node.addChild(dragon_1);
    node.addChild(dragon_2);

    return node;
}