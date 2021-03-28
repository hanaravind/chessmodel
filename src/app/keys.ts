class Direction {
    movingDirection : string
    moves: number
    notKeysPresent: boolean
    constructor(direction, moves, notKeysPresent) {
        this.movingDirection = direction
        this.moves = moves
        this.notKeysPresent = notKeysPresent
    }
}


class Keys extends Direction {
    direction
    movingKeys= {
        pawn: 1,
        king: 1,
        queen: 0,
        rooks: 0,
        knights: 3,
        bishop: 0
    }
    constructor(direction, moves, notKeysPresent) {
        super(direction, moves, notKeysPresent)
    }

    movePawn() {
     if(this.direction === 'V' && this.notKeysPresent) {
         this.movingKeys.pawn++
     } else {
         this.direction = 'D'
         this.movingKeys.pawn++
     }
    }
    moveKing() {
        if((this.direction === 'V' || this.direction === 'D' || this.direction === 'H')) {
            this.movingKeys.king++
        }
    }

    moveQueen() {
        if((this.direction === 'V' || this.direction === 'D' || this.direction === 'H')) {
            this.movingKeys.queen+= this.moves
        }
    }

    moveRooks() {
        if((this.direction === 'V' || this.direction === 'H')) {
            this.movingKeys.queen+= this.moves
        }
    }
}


class players extends Keys {
    white: boolean = true
    black : boolean = false
    keys

    playerMoves() {

    }
}
