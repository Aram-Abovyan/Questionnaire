export const Svg = ({ svgComponent }) => {
    return (
        <div className="handle">
            <img
                style={{
                    pointerEvents: 'none'
                }}
                className="drag-box" src={svgComponent} />
        </div>
    );
};