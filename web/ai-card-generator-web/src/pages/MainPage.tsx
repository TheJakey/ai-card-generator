import { useState } from "react";
import ExampleOutput from "@/components/ExampleOutput";
import UserInput from "@/components/UserInput";
import ActionButtons from "@/components/ActionButtons";
import OutputSection from "@/components/OutputSection";
import promptService from "@/services/promptService";
import { WhoAmICardOptionType } from "@/types";
import { gameData } from "@/assets/data";

const MainPage = () => {
  const [userInput, setUserInput] = useState("");
  const [output, setOutput] = useState<WhoAmICardOptionType[]>([]);

  const handleInputChange = (value: string) => {
    setUserInput(value);
  };

  const handleAction = (action: string) => {
    console.log("Action:", action);

    if (action === "clear") {
      setOutput([]);
    }
  };

  const sendPrompt = async (value: string) => {
    setOutput(gameData);
    console.log("Sending prompt:", value);
    const response = await promptService.sendPrompt({ prompt: value });
    console.log("Response:", response);
    // setOutput(response);
  };

  return (
    <div className="grid grid-cols-1 gap-8 scroll-y-auto">
      <ExampleOutput />
      <UserInput
        value={userInput}
        onSubmit={sendPrompt}
        onChange={handleInputChange}
      />
      <ActionButtons onAction={handleAction} clearable={output.length > 0} />
      <OutputSection output={output} />
    </div>
  );
};

export default MainPage;
