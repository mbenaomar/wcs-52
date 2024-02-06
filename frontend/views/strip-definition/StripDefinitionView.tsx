import React, {useEffect, useState} from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

export default function StripDefinition () {

    const [selectedTab, setSelectedTab] = useState(0);

    const handleTabSelect = (index: number) => {
        setSelectedTab(index);
    };

    return (
        <div>
            <h1>Strip Definition</h1>
            <Tabs selectedIndex={selectedTab} onSelect={handleTabSelect}>
                <TabList>
                    <Tab>TEMP DB</Tab>
                    <Tab>Strip Definition</Tab>
                    <Tab>Strip Attributes</Tab>
                </TabList>

                <TabPanel>
                    <h2>Content for TEMP DB 1</h2>
                </TabPanel>
                <TabPanel>
                    <h2>Content for Strip Definition tab</h2>
                </TabPanel>
                <TabPanel>
                    <h2>Content for Strip Attributes tab</h2>
                </TabPanel>
            </Tabs>

        </div>
    );
}
