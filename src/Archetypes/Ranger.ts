import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Ranger extends Archetype {
  private ability: EnergyType = 'stamina';
  private static instances = 0;
    
  constructor(name: string) {
    super(name);
    Ranger.instances += 1;
  }
    
  get energyType(): EnergyType {
    return this.ability;
  }
    
  static createdArchetypeInstances(): number {
    return Ranger.instances;
  }
}