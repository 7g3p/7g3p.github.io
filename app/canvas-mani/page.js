'use client'
import React, {useRef, useState, useEffect} from "react"
import Canvas from "@/components/Canvas";

export default function CanvasPage(){
    const canvasResolution = {pxWidth: 1000, pxHeight: 700, scale: 4};
    const [canvasObj, setCanvasObj] = useState(null);

    return(
        <div className="flex w-full h-full flex-col items-center">
            <h1>THIS IS THE CANVAS MANIPULATION PAGE</h1>
            <br/>
            <Canvas 
                size={{width: 400, height: 300}}
                resolution={{xLim: 1000, yLim: 700, scale: 4}}
                styles={{fillStyle: "blue", strokeStyle: "black", lineWidth: 4}}
            />
        </div>
    )
}

