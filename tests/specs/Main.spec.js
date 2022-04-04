import React from "react";
import chai, { expect } from "chai";
import chaiEnzyme from "chai-enzyme";
import { shallow } from "enzyme";
import FullHeader from "../../src/Main";

chai.use(chaiEnzyme());

describe("<FullHeader />", () => {
    it("it should have header when mount", () => {
        const wrapper = shallow(<FullHeader />);
        expect(wrapper.find("header")).to.have.length(1);
    });

    context("title", () => {
        it("it should have h1 when text is passed", () => {
            const wrapper = shallow(<FullHeader title="Testing" />);
            expect(wrapper.find("h1")).to.have.length(1);
        });

        it("it should not have h1 when text is not passed", () => {
            const wrapper = shallow(<FullHeader />);
            expect(wrapper.find("h1")).to.have.length(0);
        });

        it("it should have the passed title", () => {
            const title = "testing title";
            const wrapper = shallow(<FullHeader title={title} />);
            expect(wrapper.find("h1").props().children).to.be.equal(title);
        });
    });

    context("subtitle", () => {
        const subtitleTag = "h2";

        it("it should have p when subtitle is passed", () => {
            const wrapper = shallow(<FullHeader subtitle="Subtitle" />);
            expect(wrapper.find(subtitleTag)).to.have.length(1);
        });

        it("it should NOT have p when subtitle is NOT passed", () => {
            const wrapper = shallow(<FullHeader />);
            expect(wrapper.find(subtitleTag)).to.have.length(0);
        });

        it("it should match the passed subtitle", () => {
            const subtitle = "Subtitle";
            const wrapper = shallow(<FullHeader subtitle={subtitle} />);
            expect(wrapper.find(subtitleTag).props().children).to.be.equal(
                subtitle
            );
        });
    });

    context("bgColor", () => {
        it("should have bgColor equal to #ccc when none is passed", () => {
            const wrapper = shallow(<FullHeader />);
            expect(wrapper).to.have.style("background-color").equal("#ccc");
        });
    });
});
