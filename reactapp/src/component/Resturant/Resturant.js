import React, {useState} from  'react';
import "./style.css";
import Menu from './menuApi';
import MenuCard from './MenuCard';
import Navbar from './Navbar';

const uniqueList = [
...new Set(Menu.map((curElem) =>
{
    return curElem.category;
})
),
"All",
];

console.log(uniqueList);

const Resturant = () => {
    const [menudata, setMenuData] = useState(Menu);
    const [list, setList] = useState(uniqueList);
    console.log(Menu);

    const filterItem = (category)=>
    {
        if(category === "All")
        {
            setMenuData(Menu);
            return;
        }
        const updatedList = Menu.filter((curElem)=>
        {
            return curElem.category === category;
        });
        setMenuData(updatedList);
    }
    return (
        <>
        <Navbar list = {list} filter = {filterItem}/>
        <MenuCard menu = {menudata} />  
        </>
    )
}

export default Resturant
