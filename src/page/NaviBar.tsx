import React, {Fragment} from "react";
import { useNavigate } from "react-router-dom";
export const NaviBar = () => {
    const menuNameList = ["Home", "SnapScroll"];
    let navigate = useNavigate();
    return (
        <div className="fixed flex flex-col ">
            {menuNameList.map((ele, menuIdx) => (
                <button
                    className={`${ele} border `}
                    key={`${ele}`}
                    onClick={() => {
                        navigate(`/${ele}`);
                    }}
                >
                    {ele}
                </button>
            ))}
        </div>
    );
};
