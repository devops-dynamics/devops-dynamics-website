import React from "react";

const Header = ({ label }: { label: string }) => {
    return (
        <div className="pt-6">
            <hr />
            <h1 className="p-6 text-center text-3xl font-bold">{label}</h1>
        </div>
    );
};

export default Header;
