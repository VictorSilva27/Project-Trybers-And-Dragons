import Battle, { PVE, PVP } from './Battle';
import Character from './Character';
import Dragon from './Dragon';
import Monster from './Monster';

const player1 = new Character('player1');
const player2 = new Character('player2');
const player3 = new Character('player3');

player1.levelUp();

export { player1, player2, player3 };

const monster1 = new Monster();
const monster2 = new Dragon();

export { monster1, monster2 };

const pvp = new PVP(player2, player3);

export { pvp };

const pve = new PVE(player1, [monster1, monster2]);

export { pve };

const runBattles = (battles: Battle[]): void => {
  let battle = 0;
  while (battle < battles.length - 1) {
    battles[battle].fight();
    battle += 1;
  }
//   battles.forEach((battle) => {
//     battle.fight();
//   });
};

export { runBattles };