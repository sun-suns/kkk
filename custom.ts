
/**
* このファイルを使って、独自の関数やブロックを定義してください。
* 詳しくはこちらを参照してください：https://minecraft.makecode.com/blocks/custom
*/

enum Block {
    //% blockIdentity="blocks.block" enumval=2 block="Grass Block"
    //% jres alias=GRASS
    Grass = 2,
    //% blockIdentity="blocks.block" enumval=0 block="Air"
    //% jres alias=AIR
    Air = 0,
    //% blockIdentity="blocks.block" enumval=1 block="Stone"
    //% jres alias=STONE
    Stone = 1,
    //% blockIdentity="blocks.block" enumval=65537 block="Granite"
    //% jres alias=GRANITE
    Granite = 65537,
    //% blockIdentity="blocks.block" enumval=131073 block="Polished Granite"
    //% jres alias=POLISHED_GRANITE
    PolishedGranite = 131073,
    //% blockIdentity="blocks.block" enumval=196609 block="Diorite"
    //% jres alias=DIORITE
    Diorite = 196609
}

//% weight=999 color=#c71585 icon="\uf1b3"
//% block="体験（たいけん）"
namespace lesson0 {

    //% weight=90
    //% blockId=customPlace
    //% block="$block を $pos におく"
    //% block.shadow=customBlock
    //% pos.shadow="positionXY"
    //% topblock topblockWeight=85
    //% shim=blocks::placeAsync promise
    export function customPlace(block: number, pos: Position): void {
        blocks.place(block, pos);
    }

    //% weight=85
    //% blockId=customBlock
    //% block="$block"
    //% block.fieldEditor="gridpicker"
    //% block.fieldOptions.width=340
    //% block.fieldOptions.columns=8
    //% block.fieldOptions.tooltips=true
    //% block.fieldOptions.tooltipsXOffset="20"
    //% block.fieldOptions.tooltipsYOffset="-20"
    //% block.fieldOptions.maxRows="8"
    //% block.fieldOptions.hasSearchBar=true
    //% block.fieldOptions.hideRect=true
    export function customBlock(block: Block): number {
        return block;
    }

    //% weight=80
    //% blockId=positionXY
    //% block="たいよう：$x うえ：$y"
    //% inlineInputMode=inline
    //% x.defl=0
    //% y.defl=0
    export function positionXY(x: number, y: number): Position {
        return world(x, y, 0);
    }

}
