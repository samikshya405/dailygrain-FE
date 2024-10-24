import React from "react";

const MenuCard = ({img,title}) => {
  return (
    <div style={{ height: "80%" }}>
      <img
        src={img}
        width={"100%"}
        height={"100%"}
        style={{ objectFit: "cover" }}
      />
      <div
        style={{
          height: "20%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color:"var(--text-color)"
        }}
      >
        <div className="fw-bolder ">{title}</div>
      </div>
    </div>
  );
};

export default MenuCard;
