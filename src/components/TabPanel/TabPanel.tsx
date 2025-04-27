import { useState } from "react";
import TabPanelBody from "./TabPanelBody";

const TabPanel = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="rounded-md inset-shadow-2xl w-full">
      <div role="tablist" aria-orientation="horizontal" className={`grid grid-cols-2 grid-rows-1 w-full rounded-lg px-1 py-1.5 bg-zinc-100 dark:bg-zinc-700`}>
        <button
          type="button"
          role="tab"
          key={0}
          onClick={() => {
            return setActiveTab(0);
          }}
          className={`hover:cursor-pointer  rounded-md px-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50  mx-1 ${
            activeTab === 0 ? " bg-zinc-300 dark:bg-zinc-900" : ""
          }`}
        >
          Work Experience
        </button>
        <button
          type="button"
          role="tab"
          key={1}
          onClick={() => {
            return setActiveTab(1);
          }}
          className={`hover:cursor-pointer  rounded-md px-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50  mx-1 ${
            activeTab === 1 ? " bg-zinc-300 dark:bg-zinc-900" : ""
          }`}
        >
          Education
        </button>
      </div>
      <TabPanelBody activeTab={activeTab} />
    </section>
  );
};

export default TabPanel;
