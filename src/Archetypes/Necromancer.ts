import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Necromancer extends Archetype {
  private ability: EnergyType = 'mana';
  private static instances = 0;
  
  constructor(name: string) {
    super(name);
    Necromancer.instances += 1;
  }
  
  get energyType(): EnergyType {
    return this.ability;
  }
  
  static createdArchetypeInstances(): number {
    return Necromancer.instances;
  }
}