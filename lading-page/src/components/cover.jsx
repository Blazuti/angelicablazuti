import React from "react";
import Video from "./media/video_cover.mp4"

export default function cover(){
    return(
        <section className="cover">
            <video src={Video} autoPlay muted playsInline loop></video>
        </section>
    )
}