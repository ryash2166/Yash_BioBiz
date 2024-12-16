import React from "react";
import Card from "../Common/Card";
import opportunities from '../../assets/opportunities.png'
import consulting from '../../assets/consulting.png'
import insight from '../../assets/insight.png'
import innovation from '../../assets/innovation.png'
import biomass from '../../assets/biomass.png'

const MainSection = () => {
  return (
    <div className="lg:w-[64.83%] max-lg:w-full lg:mr-[5.5%] ">
      <div className="lg:py-[4%]">
        <div className="lg:w-full">
          <div className="text-left mb-[27px] text-[18px] font-[Poppins] font-medium">
            <p className="pb-4">
              At BioBiz, we are keen to capitalize on India's rich biodiversity
              and the availability of large amounts of biomass residues to
              develop a sustainable bio-economy and attractive business
              opportunities for diverse stakeholders - farmers, rural
              stakeholders, end-use industries, entrepreneurs / startups, and
              financial investors.
            </p>
            <p>
              As part of a leading climate tech consulting firm, we will provide
              critical assistance with market intelligence, data-driven
              analyses, professional networking, and opportunities for relevant
              stakeholders to get effective visibility.
            </p>
          </div>
          <div className="text-[32px] font-[Poppins] text-center font-semibold ">
            <h2>Main Sections</h2>
          </div>
        </div>
        <div className="py-[4%] flex max-lg:block">
          <Card image={opportunities} title="Opportunities" className="lg:w-3/12 " />
          <Card image={consulting} title="Consulting" className="lg:w-3/12 " />
          <Card image={insight} title="Insights" className="lg:w-3/12" />
        </div>
        <div className="py-[4%] flex max-lg:block ">
          <Card image={innovation} title="Innovation Insights" className="lg:w-[45.75%]" />
          <Card image={biomass} title="Biomass Residue Intelligence" className="lg:w-[45.75%]" />
        </div>
      </div>
    </div>
  );
};

export default MainSection;
