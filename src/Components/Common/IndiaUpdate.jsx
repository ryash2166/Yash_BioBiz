import React from "react";

const IndiaUpdate = () => {
  return (
    <div className="lg:w-[29.66%] h-fit mt-[2.85%] ">
      <div className="relative py-[20px] bg-[#1FE089]">
        <h2
          className="font-semibold text-center text-[#12876F] text-[36px] pb-2 font-[Poppins]"
          style={{ fontVariantCaps: "small-caps" }}
        >
          India updates
        </h2>
      </div>
      {/* Scrollable Container */}
      <div className="overflow-hidden text-left pb-[30px] px-[20px] bg-[#1FE089]">
        <div className="containerScrolling">
          <ul className="data-list-Scrolling bg-[#1FE089] hide-scrollbar overflow-y-hidden font-medium">
            <li>
              Biochar Use in Steelmaking Explored as IIT (ISM) Dhanbad Partners
              with sentra.world.
            </li>
            <li>Ethanol Plant by Kisan Cooperative Sugar Mill in Pilibhit. </li>
            <li>
              World's Largest Sustainable Aviation Fuel Plants By TruAlt.{" "}
            </li>
            <li>
              Biofuel production from Seaweed Biomass: HPCL partners with Sea6
              Energy.
            </li>
            <li>
              Green Hydrogen Plant in Baddi: Oil India and Himachal Pradesh
              Power Corporation partner.
            </li>
            <li>
              Bio-CNG Plants in 2 Cow Shelters by Greater Noida Authority.
            </li>
            <li>
              Biogas Plant to Be Revived by Faridabad Municipal Corporation.
            </li>
            <li>Straw-Based Biogas Plant Commercialization. </li>
            <li>
              Biofuel from Carbon Dioxide: New Tech Developed by IIT Guwahati.
            </li>
            <li>
              Biodiesel Deliveries: Aemetis India Completes $103 Million to
              OMCs.
            </li>
            <li>Green Hydrogen: TKIL Partners with Sohhytec. </li>
            <li>
              Biobutanol Production: Godavari Biorefineries Partners with
              Catalyxx.
            </li>
            <li>Compressed Biogas Plants Using Cow Dung in Uttar Pradesh. </li>
            <li>
              Steelmaking with Green Hydrogen: SAIL and John Cockerill India
              Collaborate.
            </li>
            <li>
              Sustainable Aviation Fuel Facility: BPCL to Launch India's First
              by 2027.
            </li>
            <li>Green Hydrogen Solutions: NHPC Partners with GGGI </li>
            <li>
              India's First Green Hydrogen Fuel Station Built by Amara Raja
              Infra in Leh.
            </li>
            <li>Waste Disposal Plant in Rudrapur to Generate Biogas. </li>
            <li>
              Biochar Integration by Tata Steel in India to Reduce Emissions.
            </li>
            <li>
              India's First Cowshed with Integrated CBG Plant Opens in Gwalior.
            </li>
          </ul>
        </div>
      </div>
      <div className="text-right mt-[20px]">
        <p className="text-[#12876f] inline-block relative text-[20px] font-medium bg-transparent border-[2px] leading-7 border-[#12876f] rounded-[3px] py-2 px-4">View all</p>
      </div>
    </div>
  );
};

export default IndiaUpdate;
