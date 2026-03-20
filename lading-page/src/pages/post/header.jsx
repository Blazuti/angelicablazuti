import React from "react";
import My_photo from "../../components/gif/my_photo_home.gif"

export default function header(){
    return(
        <header>
            <div className="my_photo">
                <img src={My_photo} alt="my photo home" />
            </div>
        </header>
    )
}