export class Artist {
  constructor(id, name, genre, stage, time, country, headliner) {
    this.id = id;
    this.name = name;
    this.genre = genre;
    this.stage = stage;
    this.time = time;
    this.country = country;
    this._headliner = headliner; 
  }

  get summary() {
    return `${this.name} - ${this.genre} - ${this.stage}`;
  }

  get headliner() {
    return this._headliner;
  }

  set headliner(value) {
    if (typeof value !== 'boolean') {
      throw new Error("Validation Error: Headliner property must be a boolean value.");
    }
    this._headliner = value;
  }

  static fromObject(data) {
    if (!data.name || !data.genre || !data.stage) {
      throw new Error("Invalid data format parsed for Artist Object creation.");
    }
    return new Artist(
      data.id,
      data.name,
      data.genre,
      data.stage,
      data.time,
      data.country,
      data.headliner
    );
  }
}
