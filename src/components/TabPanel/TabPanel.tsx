import { useState } from "react";
import TabPanelBody from "./TabPanelBody";
import { eduWorkData } from "./TabPanelData";

const TabPanel = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="rounded-md w-full">
      <div role="tablist" aria-orientation="horizontal" className={`grid grid-cols-2 grid-rows-1 w-full rounded-lg px-1 py-1.5 bg-zinc-200 dark:bg-zinc-700`}>
        {eduWorkData.map((panel, i) => (
          <button
            type="button"
            role="tab"
            key={i}
            onClick={() => {
              return setActiveTab(i);
            }}
            className={`hover:cursor-pointer  rounded-md px-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50  mx-1 transition-all duration-100 ${
              activeTab === i ? " bg-white dark:bg-zinc-900" : ""
            }`}
          >
            {panel.name}
          </button>
        ))}
      </div>
      <TabPanelBody activeTab={activeTab} />
    </section>
  );
};

export default TabPanel;
