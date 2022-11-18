import { EnergyType } from '../Energy';

abstract class Archetype {
  private _cost = 0;
  private _special = 0;
  constructor(
    private _name: string,
  ) {
  }

  get name() {
    return this._name;
  }

  get cost() {
    return this._cost;
  }

  get special() {
    return this._special;
  }

  static createdArchetypeInstances(): number {
    throw new Error('Not implemented');
  }

  abstract get energyType(): EnergyType;
}

export default Archetype;