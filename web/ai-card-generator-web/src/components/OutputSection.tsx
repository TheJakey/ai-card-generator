import { Options, WhoAmICardOptionType } from "@/types";
import { WhoAmICard, WhoAmICardBack } from "./templates/who-am-i/WhoAmICard";

interface OutputSectionProps {
  output: WhoAmICardOptionType[];
}

const OutputSection = ({ output }: OutputSectionProps) => {
  return (
    <div className="p-5 mb-5 border-dotted border-2 border-gray-400 rounded-2xl">
      {output ? (
        <>
          {/* <p>{JSON.stringify(output)}</p> */}

          <div className="flex flex-wrap">
            {output.map((item) =>
              item.data.map((option: Options) => (
                <WhoAmICard
                  key={item.category + option}
                  options={option}
                  category={item.category}
                  color={item.color}
                />
              ))
            )}
          </div>
          <div className="flex-container">
            {output.map((item) =>
              item.data.map((option: Options) => (
                <WhoAmICardBack
                  key={item.category + option}
                  category={item.category}
                  color={item.color}
                />
              ))
            )}
          </div>
        </>
      ) : (
        <div className="flex justify-center items-center text-gray-400 h-40 border-dotted border-2 border-gray-400 rounded-2xl">
          <p>Generated output will appear here</p>
        </div>
      )}
    </div>
  );
};

export default OutputSection;
