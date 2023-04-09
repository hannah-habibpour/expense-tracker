import React from 'react'
import categories from '../categories'


interface Props {
    onSelectCategory: (category: string) => void
}

function ExpenseFilter({ onSelectCategory }: Props ) {
  return (
      <select className='form-select' onChange={(e) => onSelectCategory(e.target.value)}>
          <option value="">All categories</option>  
          {categories.map(category => <option key={category} value={category}>{category}</option>)}
    </select>
  )
}

export default ExpenseFilter