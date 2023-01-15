import React from "react";
import Button from "./Button";

const ItemCard = ({ name, image, days, amount, index }) => {
    return (
        <div className="subscription-card transition ease-in-out ss:hover:scale-110 hover:scale-105 flex justify-between items-center flex-col px-5 min-w-[325px] min-h-[404px] py-5 rounded-[20px] max-w-[325px] my-2">
            <img src={image} alt="image" className="h-[212px]" />
            <p className="font-poppins font-bold text-[16px]">{name}</p>
            <p className="font-poppins mt-[5px] font-bold text-textGreen text-[25px]">
                {amount}
            </p>
            <div className="mt-[15px]">
                <Button styles="bg-lightRed py-3" content="Subscribe" />
            </div>
            <a href='know_more' className="mt-[15px]" >
                <p className="font-poppins font-normal text-[12px]  ">
                    Know more
                </p>
            </a>
        </div>
    );
};

export default ItemCard;
