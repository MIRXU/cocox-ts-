"use strict";
cc._RF.push(module, '065432Pnk9PfqwRTdfOnHFs', 'star');
// scripts/star.ts

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
        _this.pickRadius = 0; //星星和主角距离小于当前值就收集星星
        return _this;
    }
    // LIFE-CYCLE CALLBACKS:
    NewClass.prototype.onLoad = function () {
    };
    NewClass.prototype.start = function () {
    };
    //计算星星和玩家的距离
    NewClass.prototype.getPlayDistance = function () {
        //没有按照官网给的例子写，不知道什么原因，已经拿不到了
        var playPos = this.node.getParent().getComponent('game').player.getPosition();
        // 计算距离
        var dis = this.node.position.sub(playPos).mag();
        return dis;
    };
    NewClass.prototype.onPicked = function () {
        //星星被摘取，生成新的星星
        this.node.getParent().getComponent('game').spawnNewStar();
        //调用得分
        this.node.getParent().getComponent('game').gainScore();
        //销毁当前星星
        this.node.destroy();
    };
    NewClass.prototype.update = function (dt) {
        //如果当前距离小于收集距离，就收取
        if (this.getPlayDistance() < this.pickRadius) {
            //  收取星星
            this.onPicked();
            return;
        }
        //根据game脚本计时器更新星星透明度
        var opacityRatio = 1 - this.node.getParent().getComponent('game').timer / this.node.getParent().getComponent('game').starDuration;
        var minOpacity = 50;
        this.node.opacity = minOpacity + Math.floor(opacityRatio * (255 - minOpacity));
    };
    __decorate([
        property
    ], NewClass.prototype, "pickRadius", void 0);
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

cc._RF.pop();