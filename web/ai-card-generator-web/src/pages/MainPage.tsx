import { useState } from "react";
import ExampleOutput from "@/components/ExampleOutput";
import UserInput from "@/components/UserInput";
import ActionButtons from "@/components/ActionButtons";
import OutputSection from "@/components/OutputSection";
import promptService from "@/services/promptService";

const MainPage = () => {
  const [userInput, setUserInput] = useState("");
  const [output, setOutput] = useState("");

  const handleInputChange = (value: string) => {
    setUserInput(value);
  };

  const handleAction = (action: string) => {
    console.log("Action:", action);
  };

  const sendPrompt = async (value: string) => {
    console.log("Sending prompt:", value);
    const response = await promptService.sendPrompt({ prompt: value });
    console.log("Response:", response);
  };

  return (
    <div className="grid grid-cols-1 gap-8 max-w-3xl mx-auto">
      <ExampleOutput />
      <UserInput
        value={userInput}
        onSubmit={sendPrompt}
        onChange={handleInputChange}
      />
      <ActionButtons onAction={handleAction} />
      <OutputSection output={output} />
    </div>
  );
};

export default MainPage;
