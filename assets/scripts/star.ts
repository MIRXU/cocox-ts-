// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property
    pickRadius:number=0;//星星和主角距离小于当前值就收集星星

    // LIFE-CYCLE CALLBACKS:

    onLoad () {

    }

    start () {
      
    }
    //计算星星和玩家的距离
    getPlayDistance():number{
        //没有按照官网给的例子写，不知道什么原因，已经拿不到了
        const playPos:cc.Vec3=this.node.getParent().getComponent('game').player.getPosition();
        // 计算距离
        const dis=this.node.position.sub(playPos).mag();
        return dis;
    }
    onPicked(){
        //星星被摘取，生成新的星星
        this.node.getParent().getComponent('game').spawnNewStar();
        //调用得分
        this.node.getParent().getComponent('game').gainScore();
        //销毁当前星星
        this.node.destroy();
    }

    update (dt) {
        //如果当前距离小于收集距离，就收取
        if(this.getPlayDistance()<this.pickRadius){
            //  收取星星
            this.onPicked();
            return;
        }
        //根据game脚本计时器更新星星透明度
        const opacityRatio=1-this.node.getParent().getComponent('game').timer/this.node.getParent().getComponent('game').starDuration;
        const minOpacity=50;
        this.node.opacity=minOpacity+Math.floor(opacityRatio*(255-minOpacity));
    }
}
