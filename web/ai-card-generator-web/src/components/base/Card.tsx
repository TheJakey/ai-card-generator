import "./Card.css";

export const BaseCard = ({
  header,
  body,
  footer,
  orientation,
}: {
  header: React.ReactNode;
  body: React.ReactNode;
  footer: React.ReactNode;
  orientation: "horizontal" | "vertical";
}) => {
  return (
    <div className={`card card-${orientation}`}>
      <div className="card-container">
        <div className="card-header">{header}</div>
        <div className="card-body">{body}</div>
        <div className="card-footer">{footer}</div>
      </div>
    </div>
  );
};
