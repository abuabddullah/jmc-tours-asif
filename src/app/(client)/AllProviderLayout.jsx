"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import WhatsAppChat from "@/components/shared/WhatsAppChat";
import UserInfoContext from "@/utils/contextAPIs/UserInfoContext";

const queryClient = new QueryClient();
const AllProviderLayout = ({ children }) => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <>
      <UserInfoContext>
        <QueryClientProvider client={queryClient}>
          {children}
          <WhatsAppChat />
        </QueryClientProvider>
      </UserInfoContext>
    </>
  );
};

export default AllProviderLayout;
