import { workExperience } from "./TabPanelData";

interface TabPanelBodyProps {
  activeTab: number;
}

const TabPanelBody = ({ activeTab }: TabPanelBodyProps) => {
  return (
    <div role="tabpanel" aria-orientation="horizontal" className="rounded-lg p-4 shadow-xl dark:bg-zinc-900 bg-white mt-2">
      <div className={`${activeTab === 0 ? "flex" : "hidden"}`}>
        <div className="w-full  not-prose">
          <ul className="flex flex-col gap-4">
            {workExperience.map((entry, i) => {
              console.log(entry.logo);
              return (
                <li className="flex w-full gap-4" key={i}>
                  <span className="rounded-full max-w-20 max-h-20 overflow-hidden relative flex size-12 shrink-0 ring-2">
                    <img src={entry.logo} className=" rounded-full w-max h-max aspect-square object-contain" alt={entry.companyName} />
                  </span>
                  <div className="flex flex-col grow">
                    <h3>{entry.companyName}</h3>
                    <span>{entry.jobTitle}</span>
                    <span>
                      {entry.startDate.toLocaleString()}
                      {entry.endDate ? ` - ${entry.endDate.toLocaleString()}` : "Present"}
                    </span>
                    <ul>
                      {entry.details.map((detail, i) => (
                        <li key={i} className="list-disc">
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div className={`${activeTab === 1 ? "flex" : "hidden"}`}>Education</div>
    </div>
  );
};
export default TabPanelBody;
