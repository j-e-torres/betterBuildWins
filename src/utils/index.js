export const growthFormula = (growthStat, level) => {
  return growthStat * (level - 1) * (0.685 + 0.0175 * level);
};

export const effectiveHpFormula = (
  resist,
  hp,
  hpRegen,
  timeAlive,
  enemyPercentPenetration,
  enemyFlatPenetration,
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
