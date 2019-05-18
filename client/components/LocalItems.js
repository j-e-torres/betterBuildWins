import React from 'react'

export const LocalItems = ({ localItems }) => {
  const justNames = localItems.map(itemObj =>
    Object.keys(itemObj).reduce((acc, key) => {
      const name = itemObj[key].name
      acc.push(name)

      return acc
    }, [])
  )
  return (
    <div>
      {justNames ? (
        <ul>
          {justNames.map((i, idx) => (
            <li key={idx}>{i}</li>
          ))}
        </ul>
      ) : (
        'No Items Select'
      )}
    </div>
  )
}
