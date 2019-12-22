//champion
/*
hp: 600
hpperlevel: 95
mp: 400
mpperlevel: 47
movespeed: 330
armor: 35
armorperlevel: 3.6
spellblock: 32.1
spellblockperlevel: 1.25
attackrange: 125
hpregen: 5.5
hpregenperlevel: 0.5
mpregen: 6
mpregenperlevel: 0.8
crit: 0
critperlevel: 0
attackdamage: 64
attackdamageperlevel: 3.5
attackspeedperlevel: 2.05
attackspeed: 0.675
*/

//items
/*
  for ap
    FlatMagicDamageMod

  for Movespeed
    FlatMovementSpeedMod

  for Mana
    FlatMPPoolMod

  for Defense
    FlatHPPoolMod
    FlatArmorMod
    FlatSpellBlockMod
    FlatHPRegenMod

  for Ad
    FlatPhysicalDamageMod
    FlatCritChanceMod
    PercentAttackSpeedMod
    PercentLifeStealMod
*/

export const growthFormula = (growthStat, level) => {
  return growthStat * (level - 1) * (0.685 + 0.0175 * level);
};

export const effectiveHpFormula = (
  resist,
  hp,
  hpRegen,
  timeAlive,
  enemyPercentPenetration,
  enemyFlatPenetration
) => {
  const hpRegenPerSecond = hpRegen / 5;

  return (
    (hp + hpRegenPerSecond * timeAlive) *
    (1 +
      (1 -
        100 /
          (100 +
            (resist * (1 - enemyPercentPenetration) - enemyFlatPenetration))))
  );
};
