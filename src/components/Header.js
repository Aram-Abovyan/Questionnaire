export const Header = ({ left, middle, right }) => {
    return (
        <div className="header">
            <div className="header-left">
                {left}
            </div>
            <div className="header-middle">
                {middle}
            </div>
            <div className="header-right">
                {right}
            </div>
        </div>
    );
}