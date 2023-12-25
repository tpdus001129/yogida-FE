import { useState } from 'react';

export default function useCheckbox(list) {
  const [checkedIdsSet, setCheckedIdsSet] = useState(new Set());
  const numChecked = checkedIdsSet.size;

  const updateSet = (set, id) => {
    const updatedSet = new Set(set);

    if (updatedSet.has(id)) {
      updatedSet.delete(id);
    } else {
      updatedSet.add(id);
    }

    return updatedSet;
  };

  const handleOnChange = (id) => {
    setCheckedIdsSet((prevSet) => updateSet(prevSet, id));
  };

  const toggleAllCheckedById = ({ target: { checked } }) => {
    if (checked) {
      const allChecked = new Set(list.map(({ _id }) => _id));
      setCheckedIdsSet(allChecked);
    } else {
      setCheckedIdsSet(new Set());
    }
  };

  return {
    checkedIdsSet,
    numChecked,
    handleOnChange,
    toggleAllCheckedById,
  };
}
