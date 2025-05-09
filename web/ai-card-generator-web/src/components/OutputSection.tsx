interface OutputSectionProps {
  output: string;
}

const OutputSection = ({ output }: OutputSectionProps) => {
  return (
    <div className="flex justify-center items-center text-gray-400 h-40 border-dotted border-2 border-gray-400 rounded-2xl">
      {output ? <pre>{output}</pre> : <p>Generated output will appear here</p>}
    </div>
  );
};

export default OutputSection;
