export class Activities {
    initializer() {
        this._literary = 'None';
        this._cultural = 'None';
        this._sports = 'None';
    }

    set literary (literary) {
        this._literary = literary;
    }

    get literary () {
        return this._literary;
    }

    set cultural (cultural) {
        this._cultural = cultural;
    }

    get cultural () {
        return this._cultural;
    }

    set sports (sports) {
        this._sports = sports;
    }

    get sports () {
        return this._sports;
    }
}