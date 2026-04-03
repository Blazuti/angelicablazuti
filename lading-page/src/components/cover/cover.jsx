import React, {useState}from "react";
import VideoMobile from "../media/video_cover.mp4"
import VideoDesktop from "../media/videoCover_desktop.mp4"
import style from './cover.module.css'

export default function cover(){
    const [video, setVideo] = useState(window.innerWidth < 768 ? VideoMobile : VideoDesktop);
    window.addEventListener('resize', () => {
        setVideo(window.innerWidth < 768 ? VideoMobile : VideoDesktop);
    });

    return(
        <section className={style.cover}>
            <video src={window.innerWidth < 768 ? VideoMobile : VideoDesktop} autoPlay muted playsInline loop></video>
        </section>
    )
}