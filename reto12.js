/**
 * @param {string} elf1 - The moves of the first elf
 * @param {string} elf2 - The moves of the second elf
 * @return {number} - The result of the battle
 */
function elfBattle(elf1, elf2) {
  let health1 = 3;
  let health2 = 3;

  const calculateDamage = (attack, defense) => attack === 'F' ? 2 : attack === 'A' && defense !== 'B' ? 1 : 0;

  const rounds = Math.max(elf1.length, elf2.length);

  for (let i = 0; i < rounds; i++) {
    const move1 = elf1[i] || '';
    const move2 = elf2[i] || '';

    health1 -= calculateDamage(move2, move1);
    health2 -= calculateDamage(move1, move2);

    if (health1 <= 0 || health2 <= 0) break;
  }

  if (health1 === health2) return 0;
  return health1 > health2 ? 1 : 2;
}

console.log(elfBattle('A', 'B'))
// Ronda 1: A vs B -> Elfo 2 bloquea
// Resultado: Elfo 1 = 3 de vida
//            Elfo 2 = 3 de vida
// → 0

console.log(elfBattle('F', 'B'))
// Ronda 1: F vs B -> Elfo 2 recibe 2 de daño (F no se bloquea)
// Resultado: Elfo 1 = 3 de vida
//            Elfo 2 = 1 de vida
// → 1

console.log(elfBattle('AAB', 'BBA'))
// R1: A vs B → Elfo 2 bloquea
// R2: A vs B → Elfo 2 bloquea
// R3: B vs A → Elfo 1 bloquea
// Resultado: Elfo 1 = 3, Elfo 2 = 3
// → 0

console.log(elfBattle('AFA', 'BBA'))
// R1: A vs B → Elfo 2 bloquea
// R2: F vs B → Elfo 2 recibe 2 de daño (F no se bloquea)
// R3: A vs A → ambos -1
// Resultado: Elfo 1 = 2, Elfo 2 = 0
// → 1

console.log(elfBattle('AFAB', 'BBAF'))
// R1: A vs B → Elfo 2 bloquea
// R2: F vs B → Elfo 2 recibe 2 de daño (F no se bloquea)
// R3: A vs A → ambos -1 → Elfo 2 llega a 0 ¡Batalla termina!
// R4: no se juega, ya que Elfo 2 no tiene vida
// → 1

console.log(elfBattle('AA', 'FF'))
// R1: A vs F → Elfo 1 -2, Elfo 2 -1
// R2: A vs F → Elfo 1 -2, Elfo 2 -1 → Elfo 1 llega a -1
// → 2