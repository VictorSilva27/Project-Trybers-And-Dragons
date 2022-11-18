import Race from './Race';

export default class Dwarf extends Race {
  private maxLife = 80;
  private static instances = 0; 

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Dwarf.instances += 1;
  }

  get maxLifePoints(): number {
    return this.maxLife;
  }

  static createdRacesInstances(): number {
    return this.instances;
  }
}