"use client";

import React, { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const dummyTourPlan = {
  "day 1": "Arrival at the destination, airport transfer to hotel, check-in, and a welcome dinner with your travel group.",
  "day 2": "Guided city tour covering historical landmarks, museums, and vibrant markets. Enjoy a local cuisine tasting lunch.",
  "day 3": "Day trip to a nearby natural attraction—hiking, boat ride, or wildlife exploration depending on location.",
  "day 4": "Free morning to relax or explore independently. Optional excursions available in the afternoon (spa, cultural site, etc.).",
  "day 5": "Hands-on cultural activity such as a traditional cooking class or handicraft workshop. Evening folk music performance.",
  "day 6": "Explore scenic viewpoints and hidden gems with a local guide. Wrap up the day with a farewell group dinner.",
  "day 7": "Final breakfast and hotel check-out. Transfer to the airport or continue to your next travel destination."
};


const LocationPacakgePageAccordion = ({ dummyTourPlan }) => {
  // State to keep track of the currently selected item
  const initialSelectedItem = "item-1";
  const [selectedItem, setSelectedItem] = useState(initialSelectedItem);

  return (
    <div className="p-6">
      <h3 className="text-xl font-bold mb-4">Tour Plan</h3>
      <Accordion
        type="single"
        collapsible
        className="w-full"
        value={selectedItem}
      >
        {dummyTourPlan &&
          Object.entries(dummyTourPlan).map(([day, description], index) => (
            <AccordionItem
              key={day}
              value={`item-${index + 1}`}
              className={`px-4 mb-4 border-b-0 ${
                selectedItem === `item-${index + 1}`
                  ? "bg-white rounded-xl border"
                  : "bg-[#faf3ee]"
              }`}
            >
              <AccordionTrigger
                onClick={() =>
                  setSelectedItem(
                    selectedItem === `item-${index + 1}`
                      ? null
                      : `item-${index + 1}`
                  )
                }
              >
                {day.charAt(0).toUpperCase() + day.slice(1)}{" "}
                {/* Capitalize Day */}
              </AccordionTrigger>
              <AccordionContent className="text-gray-500 text-wrap w-full">
                {description || `Plan - ${index + 1}`}
              </AccordionContent>
            </AccordionItem>
          ))}
      </Accordion>
    </div>
  );
};

export default LocationPacakgePageAccordion;
