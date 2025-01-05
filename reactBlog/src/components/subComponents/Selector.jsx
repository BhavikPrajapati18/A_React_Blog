import React , {useId} from 'react'

function Selector({
  option = [],
  label,
  classname = "",
  ...props
  }, ref
) {
  const id = useId()
  return (
    <div>
      {label && <label htmlFor={id} className=''>{label}</label>}

      <select
      classname={`w-full ${classname}`}
      ref={ref}
      {...props}
      id={id}
      >
        {option?.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  )
}

export default React.forwardRef = Selector
