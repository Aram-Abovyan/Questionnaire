export const Svg = ({ svgComponent }) => {
  return (
    <div>
        <img
          className="catch-area"
          style={{
              pointerEvents: 'none'
          }}
          className="drag-box" src={svgComponent} />
    </div>
  );
};