"use strict";
cc._RF.push(module, '454c4rEO/1ANLdWwTFo5sqq', 'game');
// scripts/game.ts

"use strict";
// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        //引入星星预制体
        _this.starPrefab = null;
        //星星产生后消失时间的随机范围
        _this.maxStarDuration = 0;
        _this.minStarDuration = 0;
        //地面
        _this.ground = null;
        //玩家
        _this.player = null;
        _this.groundY = 0;
        //得分
        _this.scoreDisplay = null;
        // LIFE-CYCLE CALLBACKS:
        //初始化得分
        _this.score = 0;
        // 初始化计时器
        _this.timer = 0;
        _this.starDuration = 0;
        //得分音效
        _this.scoreAudio = null;
        return _this;
    }
    NewClass.prototype.onLoad = function () {
        //获取地面y轴
        this.groundY = this.ground.y + this.ground.height / 2;
        //生成星星
        this.spawnNewStar();
    };
    NewClass.prototype.spawnNewStar = function () {
        //内置方法生成星星
        var newStar = cc.instantiate(this.starPrefab);
        //将星星添加至场景
        this.node.addChild(newStar);
        //设置星星随机点
        newStar.setPosition(this.getNewStarPosition());
        newStar.getComponent('star').game = this; //星星脚本保存game 对象的引用
        //根据消失时间，重置计时器
        this.starDuration = this.minStarDuration + Math.random() * (this.maxStarDuration - this.minStarDuration);
        this.timer = 0;
    };
    NewClass.prototype.getNewStarPosition = function () {
        var randX = 0;
        //根据地面和主角跳跃高度，随机生成星星y坐标
        var randY = this.groundY + Math.random() * this.player.getComponent('Player').jumpHeight + 50;
        // 根据屏幕宽度获取星星的x
        var maxX = this.node.width / 2;
        randX = (Math.random() - 0.5) * 2 * maxX;
        return cc.v2(randX, randY);
    };
    NewClass.prototype.gainScore = function () {
        this.score += 1;
        this.scoreDisplay.string = "Score:" + this.score;
        //播放得分音效
        cc.audioEngine.playEffect(this.scoreAudio, false);
    };
    NewClass.prototype.start = function () {
    };
    NewClass.prototype.update = function (dt) {
        if (this.timer > this.starDuration) {
            this.gameOver();
            return;
        }
        this.timer += dt;
    };
    NewClass.prototype.gameOver = function () {
        // 停止跳跃
        this.player.stopAllActions();
        //重新加载场景
        cc.director.loadScene('game');
    };
    __decorate([
        property(cc.Prefab)
    ], NewClass.prototype, "starPrefab", void 0);
    __decorate([
        property
    ], NewClass.prototype, "maxStarDuration", void 0);
    __decorate([
        property
    ], NewClass.prototype, "minStarDuration", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "ground", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "player", void 0);
    __decorate([
        property({ visible: false }),
        property
    ], NewClass.prototype, "groundY", void 0);
    __decorate([
        property(cc.Label)
    ], NewClass.prototype, "scoreDisplay", void 0);
    __decorate([
        property({ visible: false })
    ], NewClass.prototype, "score", void 0);
    __decorate([
        property({ visible: false })
    ], NewClass.prototype, "timer", void 0);
    __decorate([
        property({ visible: false })
    ], NewClass.prototype, "starDuration", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "scoreAudio", void 0);
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

cc._RF.pop();