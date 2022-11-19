import Fighter from '../Fighter';
import Monster from '../Monster';
import Battle from './Battle';

export default class PVE extends Battle {
  constructor(
    private lutador: Fighter,
    private arrayMonster: Monster[],
  ) {
    super(lutador);
    super.fight();
  }

  fight(): number {
    while (this.lutador.lifePoints > 0 && this.arrayMonster[0].lifePoints > 0) {
    //   this.lutador.attack();
      this.arrayMonster[0].attack(this.lutador);
    }

    return this.lutador.lifePoints === -1 ? -1 : 1;
  }
}