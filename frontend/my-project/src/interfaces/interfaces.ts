import { ReactElement } from "react";

export interface Category {
    title: string,
    image: string, 
}

export interface Banner {
    title: string,
    subtitle: string,
    discount: string,
    buttonText: string,
    image: string, 
    bgColorFrom: string,
    bgColorTo: string,
}

export interface BigZone {
    title: string,
    subtitle: string,
    discount: string,
    image: string,
    bgColor: string,
}

export interface CategoriesBoth {
    name: string,
    image: string,
}

export interface AboutUs {
    title: string,
    subTitle: string,
    icon: ReactElement<any, any>,
}