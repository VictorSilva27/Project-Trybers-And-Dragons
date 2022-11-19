import Fighter, { SimpleFighter } from '../Fighter';
import Battle from './Battle';

export default class PVE extends Battle {
  constructor(
    private lutador: Fighter | SimpleFighter,
    private arrayMonster: SimpleFighter[],
  ) {
    super(lutador);
    super.fight();
  }

  fight(): number {
    let monster = 0;
    while (monster <= this.arrayMonster.length - 1) {
      while (this.lutador.lifePoints > 0
            && this.arrayMonster[monster].lifePoints > 0) {
        this.lutador.attack(this.arrayMonster[monster]);
        this.arrayMonster[monster].attack(this.lutador);
      }
      monster += 1;
    }

    return this.lutador.lifePoints === -1 ? -1 : 1;
  }
}