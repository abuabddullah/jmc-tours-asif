import ActiveLink from "@/components/shared/ActiveLink";
import { Home, Plus, User, Users } from "lucide-react";
import Link from "next/link";
import { GiCampingTent, GiForestCamp } from "react-icons/gi";
import { TfiWrite } from "react-icons/tfi";
const DashNavPC = () => {
  return (
    <>
      <Link
        href="/"
        className="md:hidden flex items-center gap-2 font-semibold"
      >
        <Home className="h-6 w-6" />
        <span className="">Back To Home</span>
      </Link>
      <ActiveLink
        href="/dashboard"
        className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
      >
        <Home className={"h-4 w-4"} />
        Dashboard
      </ActiveLink>

      {/* profile route */}
      <>
        <ActiveLink
          href="/dashboard/profile"
          className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
        >
          <User className="h-4 w-4" />
          Profile
        </ActiveLink>
        <ActiveLink
          href="/dashboard/my-bookings"
          className="ms-4 flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
        >
          <Plus className="h-4 w-4" />
          My bookings
        </ActiveLink>
        <ActiveLink
          href="/dashboard/my-wishlist"
          className="ms-4 flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
        >
          <Plus className="h-4 w-4" />
          My Wishlist
        </ActiveLink>
      </>

      {/* manage tours  */}
      <>
        <ActiveLink
          href="/dashboard/all-tours"
          className="flex items-center gap-3 rounded-lg bg-muted px-3 py-2 text-primary transition-all hover:text-primary"
        >
          {/* <Package className="h-4 w-4" /> */}
          <GiCampingTent />
          All Tours Package{" "}
          {/* <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
            6
          </Badge> */}
        </ActiveLink>
        <ActiveLink
          href="/dashboard/add-tours"
          className="ms-4 flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
        >
          <Plus className="h-4 w-4" />
          Add tours Package
        </ActiveLink>
      </>

      {/* manage blogs  */}
      <>
        <ActiveLink
          href="/dashboard/all-blogs"
          className="flex items-center gap-3 rounded-lg bg-muted px-3 py-2 text-primary transition-all hover:text-primary"
        >
          {/* <Package className="h-4 w-4" /> */}
          <TfiWrite />
          All Blogs{" "}
          {/* <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
            6
          </Badge> */}
        </ActiveLink>
        <ActiveLink
          href="/dashboard/add-blogs"
          className="ms-4 flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
        >
          <Plus className="h-4 w-4" />
          Add Blogs
        </ActiveLink>
      </>

      {/* manage tour spots  */}
      <>
        <ActiveLink
          href="/dashboard/all-locations"
          className="flex items-center gap-3 rounded-lg bg-muted px-3 py-2 text-primary transition-all hover:text-primary"
        >
          {/* <Package className="h-4 w-4" /> */}
          <GiForestCamp />
          All Locations{" "}
          {/* <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
            6
          </Badge> */}
        </ActiveLink>
        <ActiveLink
          href="/dashboard/add-locations"
          className="ms-4 flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
        >
          <Plus className="h-4 w-4" />
          Add Location
        </ActiveLink>
      </>

      {/* <>
        <ActiveLink
          href="/dashboard/all-users"
          className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
        >
          <Users className="h-4 w-4" />
          Users
        </ActiveLink>
      </> */}

      {/* routes for dynamic meta data for static pages */}
      {/* <>
        <ActiveLink
          href="/dashboard/metaData"
          className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
        >
          <DatabaseIcon className="h-4 w-4" />
          Meta Data
        </ActiveLink>
      </> */}

      {/* ActiveLink route */}
      {/* <ActiveLink
        href="/dashboard/analytics"
        className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
      >
        <LineChart className="h-4 w-4" />
        Analytics
      </ActiveLink> */}
    </>
  );
};

export default DashNavPC;
