// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

   //引入星星预制体
    @property(cc.Prefab)
    starPrefab:cc.Prefab=null;

    //星星产生后消失时间的随机范围
    @property
    maxStarDuration:number=0;
    @property
    minStarDuration:number=0;

    //地面
    @property(cc.Node)
    ground:cc.Node=null;

    //玩家
    @property(cc.Node)
    player:cc.Node=null;

    @property({visible:false})
    @property
    groundY:number=0;

    //得分
    @property(cc.Label)
    scoreDisplay:cc.Label=null;
    // LIFE-CYCLE CALLBACKS:
    //初始化得分
    @property({visible:false})
    score:number=0;


    // 初始化计时器
    @property({visible:false})
    timer:number=0;
    @property({visible:false})
    starDuration:number=0;

    //得分音效
    @property(cc.AudioClip)
    scoreAudio:cc.AudioClip=null;
    onLoad () {
        //获取地面y轴
        this.groundY=this.ground.y+this.ground.height/2;
        //生成星星
        this.spawnNewStar();
    }
    spawnNewStar():void{
        //内置方法生成星星
        const newStar=cc.instantiate(this.starPrefab);
        //将星星添加至场景
        this.node.addChild(newStar);
        //设置星星随机点
        newStar.setPosition(this.getNewStarPosition());
        newStar.getComponent('star').game=this;//星星脚本保存game 对象的引用
        //根据消失时间，重置计时器
        this.starDuration=this.minStarDuration+Math.random()*(this.maxStarDuration-this.minStarDuration);
        this.timer=0;
    }
    getNewStarPosition():cc.Vec2{
        let randX:number=0;
        //根据地面和主角跳跃高度，随机生成星星y坐标
        const randY=this.groundY+Math.random()*this.player.getComponent('Player').jumpHeight+50;
        // 根据屏幕宽度获取星星的x
        const maxX=this.node.width/2;
        randX=(Math.random()-0.5)*2*maxX;

        return cc.v2(randX,randY);
    }
    gainScore():void{
        this.score+=1;
        this.scoreDisplay.string=`Score:${this.score}`;
        //播放得分音效
        cc.audioEngine.playEffect(this.scoreAudio,false);
    }
    start () {

    }

    update (dt) {
        if(this.timer>this.starDuration){
            this.gameOver();
            return;
        }
        this.timer+=dt;
    }
    gameOver():void{
        // 停止跳跃
        this.player.stopAllActions();
        //重新加载场景
        cc.director.loadScene('game');
    }
}
