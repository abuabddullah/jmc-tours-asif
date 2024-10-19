"use client";
import TicketBookingPageComponent from "@/components/ticketBookingPage/TicketBookingPageComponent";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../../../firebase.config";

const TicketBookingPage = () => {
  const { user, isLoading } = useAuthState(auth);

  if (isLoading) {
    return <LoginSkeleton />;
  }
  return (
    <section>
      <TicketBookingPageComponent />
    </section>
  );
};

export default TicketBookingPage;
