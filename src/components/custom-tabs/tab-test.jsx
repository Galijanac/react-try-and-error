import Tabs from "./tabs";
import "./tabs.css"

function RandomContent(){
    return <div style={{fontWeight: 'bold'}}>Some Random Content</div>
}

export default function TabTest(){

    const tabs = [
        {
            label: 'Tab1',
            content : 't1'
        },
        {
            label: 'Tab2',
            content : 't2'
        },
        {
            label: 'Tab3',
            content : <RandomContent/>
        }
    ];

    function hanleChange(currentTabIndex){
        console.log(currentTabIndex);
    }
    
    return <Tabs tabsContent = {tabs} onChange={hanleChange}/>
}