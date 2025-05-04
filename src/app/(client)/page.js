import BookingPlatform from "@/components/homepage/BookingPlatform";
import ChooseJMC from "@/components/homepage/ChooseJMC";
import GetToKNow from "@/components/homepage/GetToKNow";
import GoExotic from "@/components/homepage/GoExotic";
import HomeCarousel from "@/components/homepage/HomeCarousel";
import OurPartner from "@/components/homepage/OurPartner";
import PopularTours from "@/components/homepage/PopularTours";

export default function Home() {
  return (
    <main className="">
      <HomeCarousel />
      <GoExotic />
      <GetToKNow />
      <PopularTours />
      <BookingPlatform />
      {/* <OurPartner /> */}
      <ChooseJMC />
    </main>
  );
}
