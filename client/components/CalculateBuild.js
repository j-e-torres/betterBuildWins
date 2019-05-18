import React from 'react'

// import { calculateAttackDamage } from '../helperFunctions'

export const CalculateBuild = ({ champion, localItems }) => {
  console.log('calculateBuild', champion, localItems)

  const champDmg = Object.keys(champion).reduce((acc, key) => {
    return acc + champion[key].stats.attackdamage
  }, 0)

  const champAttackSpeed = Object.keys(champion).reduce((acc, key) => {
    return acc + champion[key].stats.attackspeed
  }, 0)

  const itemsDamage = localItems
    .map(itemObj =>
      Object.keys(itemObj).reduce((acc, key) => {
        if (itemObj[key].stats.FlatPhysicalDamageMod)
          acc += itemObj[key].stats.FlatPhysicalDamageMod

        return acc
      }, 0)
    )
    .reduce((acc, num) => {
      return acc + num
    }, 0)

  const itemsCritChance = localItems
    .map(itemObj =>
      Object.keys(itemObj).reduce((acc, key) => {
        if (itemObj[key].stats.FlatCritChanceMod)
          acc += itemObj[key].stats.FlatCritChanceMod

        return acc
      }, 0)
    )
    .reduce((acc, num) => {
      return acc + num
    }, 0)

  const itemsAttackSpeed = localItems
    .map(itemObj =>
      Object.keys(itemObj).reduce((acc, key) => {
        if (itemObj[key].stats.PercentAttackSpeedMod)
          acc += itemObj[key].stats.PercentAttackSpeedMod

        return acc
      }, 0)
    )
    .reduce((acc, num) => {
      return acc + num
    }, 0)

  const totalAttackDamage = champDmg + itemsDamage
  const totalCrit = itemsCritChance
  const totalAttackSpeed = champAttackSpeed * (1 + itemsAttackSpeed)
  const dmgPerHit =
    totalAttackDamage * (1 - totalCrit) +
    totalAttackDamage * totalCrit * (2 + 0)

  const beforeResist = totalAttackSpeed * dmgPerHit
  return (
    <div>
      <div>
        <p>Here are your stats</p>
        <div>Auto Attack DPS before mitigation: {beforeResist} </div>
        <div>Auto Attack DPS: </div>
        <div>Effective Health: </div>
      </div>
      <br />
      <div>
        <div>Total Attack Damage: {totalAttackDamage}</div>
        <div>Total Attack Speed: {totalAttackSpeed}</div>
      </div>
    </div>
  )
}
