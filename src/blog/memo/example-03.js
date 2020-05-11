import React from "react"

const Select = React.memo(function Select({ options, ...props }) {
  return (
    <select {...props}>
      {options.map(option => (
        <option key={option}>{option}</option>
      ))}
    </select>
  )
})

function ColorSelect({ data }) {
  const options = React.useMemo(() => data.colors.map(c => c.name), [])
  return <Select options={options} />
}

export default ColorSelect
