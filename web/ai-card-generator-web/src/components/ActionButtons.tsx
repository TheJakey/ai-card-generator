interface ActionButtonsProps {
  onAction: (action: string) => void;
}

const ActionButtons = ({ onAction }: ActionButtonsProps) => {
  return (
    <div className="flex justify-center items-center gap-4">
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
    </div>
  );
};

export default ActionButtons;
