import React, { useState, createContext, useEffect } from "react";
import { v4 as uuid } from "uuid";

export const ItemsListContext = createContext();

const ItemsContextProvider = (props) => {
  const [companyNames, setCompanyNames] = useState([]);
  const [brandNames, setBrandNames] = useState([]);
  const [internalKeyword, setInternalKeyword] = useState([]);
  const [otherKeyword, setOtherKeyword] = useState([]);

  const [progress, setProgress] = useState(false);
  useEffect(() => {
    if (
      companyNames.length > 0 &&
      brandNames.length > 0 &&
      internalKeyword.length > 0 &&
      otherKeyword.length > 0
    ) {
      setProgress(true);
    } else {
      setProgress(false);
    }
  }, [progress, companyNames, brandNames, internalKeyword, otherKeyword]);

  //Add Company Name
  const addCompanyName = (companyTitle) => {
    setCompanyNames([...companyNames, { title: companyTitle, id: uuid() }]);
  };

  //Remove Company Name
  const removeCompanyName = (id) => {
    setCompanyNames(
      companyNames.filter((companyName) => companyName.id !== id)
    );
  };

  //Add Brand Name
  const addBrandName = (brandTitle) => {
    setBrandNames([...brandNames, { title: brandTitle, id: uuid() }]);
  };

  //Remove Brand Name
  const removeBrandName = (id) => {
    setBrandNames(brandNames.filter((brandName) => brandName.id !== id));
  };

  //Add Internal Keyword
  const addInternalKeyword = (internalKeywordTitle) => {
    setInternalKeyword([
      ...internalKeyword,
      { title: internalKeywordTitle, id: uuid() },
    ]);
  };

  //Remove Internal Keyword
  const removeInternalKeyword = (id) => {
    setInternalKeyword(internalKeyword.filter((keyword) => keyword.id !== id));
  };

  //Add Other Keyword
  const addOtherKeyword = (otherKeywordTitle) => {
    setOtherKeyword([
      ...otherKeyword,
      { title: otherKeywordTitle, id: uuid() },
    ]);
  };

  //Remove Other Keyword
  const removeOtherKeyword = (id) => {
    setOtherKeyword(otherKeyword.filter((keyword) => keyword.id !== id));
  };

  //Find edit element
  const findItem = (id, initialItemsArray, setEditFunction) => {
    const item = initialItemsArray.find((initialItem) => initialItem.id === id);
    setEditFunction(item);
  };

  //Edit Item
  // const editItem = (
  //   title,
  //   id,
  //   initialItemsArray,
  //   setInitialItemsArray,
  //   setEditFunction
  // ) => {
  //   const newItems = initialItemsArray.map((initialItem) =>
  //     initialItem.id === id ? { title, id } : initialItem
  //   );
  //   setInitialItemsArray(newItems);
  //   setEditFunction(null);
  // };

  return (
    <ItemsListContext.Provider
      value={{
        companyNames,
        brandNames,
        internalKeyword,
        otherKeyword,
        setCompanyNames,
        setBrandNames,
        setInternalKeyword,
        setOtherKeyword,
        addCompanyName,
        addBrandName,
        addInternalKeyword,
        addOtherKeyword,
        removeCompanyName,
        removeBrandName,
        removeInternalKeyword,
        removeOtherKeyword,
        findItem,
        progress,
      }}
    >
      {props.children}
    </ItemsListContext.Provider>
  );
};
export default ItemsContextProvider;
