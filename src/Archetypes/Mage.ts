import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Mage extends Archetype {
  private ability: EnergyType = 'mana';
  private static instances = 0;

  constructor(name: string) {
    super(name);
    Mage.instances += 1;
  }

  get energyType(): EnergyType {
    return this.ability;
  }

  static createdArchetypeInstances(): number {
    return Mage.instances;
  }
}