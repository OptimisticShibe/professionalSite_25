import { eduWorkData } from "./TabPanelData";

interface TabPanelBodyProps {
  activeTab: number;
}

const convertToDateDisplay = (date: Date): string => {
  return date.toLocaleDateString("en-US", { month: "long", year: "numeric" });
};

const TabPanelBody = ({ activeTab }: TabPanelBodyProps) => {
  return (
    <div role="tabpanel" className="rounded-lg  shadow-md dark:bg-zinc-900 bg-white mt-2 ">
      {eduWorkData.map((panelContent, i) => (
        <div className={`${activeTab === i ? "flex" : "hidden"}`} key={i}>
          <div className="w-full not-prose">
            <ul className="ml-10 border-l">
              {panelContent.data.map((panelEntry, i) => {
                return (
                  <li className="relative ml-10 py-4" key={i}>
                    <div className={`rounded-full overflow-hidden absolute -left-16 top-4 flex size-12 shrink-0 ring-2 ${panelEntry.logo.bgColor}`}>
                      <img src={panelEntry.logo.img} className={` rounded-full w-max h-max aspect-square object-contain }`} alt={panelEntry.name} />
                    </div>
                    <div className="flex flex-col flex-1 justify-start gap-1 mr-4">
                      <h3 className="text-[var(--tw-prose-headings)] text-xl xs:text-2xl">{panelEntry.name}</h3>
                      <span className="text-xs xs:text-sm italic -mt-2">
                        {convertToDateDisplay(panelEntry.startDate)}
                        {panelEntry.endDate ? ` - ${convertToDateDisplay(panelEntry.endDate)}` : " - Present"}
                      </span>
                      <span className="font-semibold">{panelEntry.detail}</span>
                      <ul className="list-inside">
                        {panelEntry.info?.map((info, i) => (
                          <li key={i} className="list-disc">
                            {info}
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
      ))}
    </div>
  );
};
export default TabPanelBody;
