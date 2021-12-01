"use strict";
cc._RF.push(module, '3a55acCGGVG0JIHtU/1MDIg', 'Player');
// scripts/Player.ts

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
        // @property(cc.Label)
        // label: cc.Label = null;
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // @property
        // text: string = 'hello';
        _this.jumpHeight = 0; //主角跳跃高度
        _this.jumpDuration = 0; //主角跳跃持续时常
        _this.maxMoveSpeed = 0; //最大移动速度
        _this.accel = 0; //加速度
        // LIFE-CYCLE CALLBACKS:
        //加速度开关方向
        _this.accLeft = false;
        _this.accRight = false;
        _this.xSpeed = 0; //主角水平方向速度
        //跳跃音效
        _this.jumpAudio = null;
        return _this;
    }
    NewClass.prototype.onLoad = function () {
        var jumpAction = this.runJumpAction();
        cc.tween(this.node).then(jumpAction).start();
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDwon, this);
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
    };
    NewClass.prototype.runJumpAction = function () {
        //向上跳跃
        var jumpUp = cc.tween().by(this.jumpDuration, { y: this.jumpHeight }, { easing: 'sineOut' });
        // 下落
        var jumpDwon = cc.tween().by(this.jumpDuration, { y: -this.jumpHeight }, { easing: 'sineIn' });
        // 缓动动画
        var tween1 = cc.tween().sequence(jumpUp, jumpDwon).call(this.playJumpSound, this);
        // 　重复执行
        var jumpAction = cc.tween().repeatForever(tween1);
        return jumpAction;
    };
    NewClass.prototype.playJumpSound = function () {
        cc.audioEngine.playEffect(this.jumpAudio, false);
    };
    NewClass.prototype.onKeyDwon = function (event) {
        switch (event.keyCode) {
            case cc.macro.KEY.a:
                this.accLeft = true;
                break;
            case cc.macro.KEY.d:
                this.accRight = true;
                break;
        }
    };
    NewClass.prototype.onKeyUp = function (event) {
        switch (event.keyCode) {
            case cc.macro.KEY.a:
                this.accLeft = false;
                break;
            case cc.macro.KEY.d:
                this.accRight = false;
                break;
        }
    };
    NewClass.prototype.start = function () {
    };
    NewClass.prototype.update = function (dt) {
        //根据加速度方向更新每帧方向
        if (this.accLeft) {
            this.xSpeed -= this.accel * dt;
        }
        else if (this.accRight) {
            this.xSpeed += this.accel * dt;
        }
        //限制主角的速度
        if (Math.abs(this.xSpeed) > this.maxMoveSpeed) {
            this.xSpeed = this.maxMoveSpeed * this.xSpeed / Math.abs(this.xSpeed);
        }
        //根据速度更新主角位置
        this.node.x += this.xSpeed * dt;
    };
    __decorate([
        property
    ], NewClass.prototype, "jumpHeight", void 0);
    __decorate([
        property
    ], NewClass.prototype, "jumpDuration", void 0);
    __decorate([
        property
    ], NewClass.prototype, "maxMoveSpeed", void 0);
    __decorate([
        property
    ], NewClass.prototype, "accel", void 0);
    __decorate([
        property({ visible: false })
    ], NewClass.prototype, "accLeft", void 0);
    __decorate([
        property({ visible: false })
    ], NewClass.prototype, "accRight", void 0);
    __decorate([
        property({ visible: false })
    ], NewClass.prototype, "xSpeed", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "jumpAudio", void 0);
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

cc._RF.pop();