import React from "react"

export interface ButtonType {
    type:"button" | "reset" | "submit"
    variant:"default" | "destructive" | "outline" | "secondary" | "ghost" | "link"
    onChange?:React.ChangeEventHandler<HTMLButtonElement>
    children:string | React.ReactNode,
    className?:string
}