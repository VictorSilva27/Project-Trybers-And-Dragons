import Race from './Race';

export default class Orc extends Race {
  private maxLife = 74;
  private static instances = 0; 

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Orc.instances += 1;
  }

  get maxLifePoints(): number {
    return this.maxLife;
  }

  static createdRacesInstances(): number {
    return this.instances;
  }
} 
