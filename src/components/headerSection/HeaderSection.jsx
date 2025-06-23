const HeaderSection = ({ title, rightContent }) => {
    return (
        <div className="header-section">
            <h2 className="header-title">{title}</h2>
            <div className="header-right">{rightContent}</div>
        </div>
    );
};

export default HeaderSection;
