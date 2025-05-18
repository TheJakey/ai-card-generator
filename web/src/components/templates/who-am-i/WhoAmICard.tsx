import { Options } from "@/types";
import "./WhoAmICard.css";

export const WhoAmICard = ({
  options,
  category,
  color,
}: {
  options: Options;
  category: string;
  color: string;
}) => {
  return (
    <div className="card">
      <div className="card-container">
        <div className="card-header" style={{ backgroundColor: color }}>
          <div className="category-name">{category}</div>
        </div>
        <div className="card-body">
          {options.map((option) => (
            <div className="option" key={option}>
              {option}
            </div>
          ))}
        </div>
        <div className="card-footer"></div>
      </div>
    </div>
  );
};

export const WhoAmICardBack = ({
  category,
  color,
}: {
  category: string;
  color: string;
}) => {
  return (
    <div className="card">
      <div className="back" style={{ backgroundColor: color }}>
        <div className="category-name">{category}</div>
      </div>
    </div>
  );
};
