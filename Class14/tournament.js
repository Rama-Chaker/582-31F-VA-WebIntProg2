export class Tournament {

    constructor(
        id,
        name,
        game,
        entryFee,
        maxPlayers,
        registeredPlayers,
        status
    ) {
        this.id = id;
        this.name = name;
        this.game = game;
        this.entryFee = entryFee;
        this._maxPlayers = maxPlayers;
        this.registeredPlayers = registeredPlayers;
        this.status = status;
    }

    get spotsLeft() {
        return this._maxPlayers - this.registeredPlayers;
    }

    get maxPlayers() {
        return this._maxPlayers;
    }

    set maxPlayers(value) {

        if (
            value <= 0 ||
            value < this.registeredPlayers
        ) {
            throw new Error("Invalid max players value");
        }

        this._maxPlayers = value;
    }

    static fromObject(data) {

        return new Tournament(
            data.id,
            data.name,
            data.game,
            data.entryFee,
            data.maxPlayers,
            data.registeredPlayers,
            data.status
        );
    }
}