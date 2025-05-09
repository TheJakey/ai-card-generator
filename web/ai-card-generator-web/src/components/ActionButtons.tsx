interface ActionButtonsProps {
  clearable: boolean;
  onAction: (action: string) => void;
}

const ActionButtons = ({ onAction, clearable }: ActionButtonsProps) => {
  return (
    <div className="flex justify-center items-center gap-4 mx-auto w-3xl">
      <button
        className="btn primary-button"
        onClick={() => onAction("download")}
      >
        Download
      </button>
      <button
        className="btn secondary-button"
        onClick={() => onAction("customize")}
      >
        Customize
      </button>
      {clearable && (
        <button
          className="btn secondary-button"
          onClick={() => onAction("clear")}
        >
          Clear
        </button>
      )}
    </div>
  );
};

export default ActionButtons;
