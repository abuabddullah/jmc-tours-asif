"use client";

import React, { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const LocationPacakgePageAccordion = ({ tourPlan }) => {
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
        {tourPlan &&
          Object.entries(tourPlan).map(([day, description], index) => (
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
