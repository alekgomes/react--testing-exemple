import React from "react";
import FullHeader from "../src/Main"; // This is our component
import { storiesOf } from "@storybook/react";

storiesOf("Component", module)
    .add("first testing", () => <FullHeader name="TDD" />)
    .add("with title and subtitle", () => (
        <FullHeader
            title="Component"
            subtitle="with test may never break"
        ></FullHeader>
    ))
    .add("with title, subtitle and bgcolor", () => (
        <FullHeader
            title="Title"
            subtitle="subTitle"
            bgColor="red"
        ></FullHeader>
    ))
    .add("with title, subtitle, bgcolor and textColor", () => (
        <FullHeader
            title="Title"
            subtitle="subTitle"
            bgColor="red"
            textColor="blue"
        ></FullHeader>
    ))
    .add("with title, subtitle, bgcolor, textColor, fontStyle", () => (
        <FullHeader
            title="Title"
            subtitle="subTitle"
            bgColor="red"
            textColor="blue"
            font="cursive"
        ></FullHeader>
    ))
    .add("with title, subtitle and bgImage", () => (
        <FullHeader
            title="Title"
            subtitle="subTitle"
            bgColor="red"
            textColor="blue"
            font="cursive"
        ></FullHeader>
    ))
    .add("with title, subtitle and video", () => (
        <FullHeader
            title="Title"
            subtitle="subTitle"
            bgColor="red"
            textColor="blue"
            font="cursive"
        ></FullHeader>
    ));
