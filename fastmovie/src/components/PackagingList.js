import React from 'react';
import Item from './Item';

function PackagingList() {
  return (
    <div>
        <h2>Packaging List</h2>
        <ul>
            <Item
            isPacked={true}
            name="HP laptop"
            />
             <Item
            isPacked={true}
            name="Lenovo Laptop"
            />
             <Item
            isPacked={false}
            name="MacOs laptop"
            />
        </ul>
    </div>
  )
}

export default PackagingList