// "use client";

// import { Button } from "@/components/ui/button";
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuLabel,
//   DropdownMenuSeparator,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu";
// import { Input } from "@/components/ui/input";
// import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
// import { Bell, CircleUser, Home, Menu, Search } from "lucide-react";
// import Link from "next/link";
// import React, { useEffect } from "react";
// import DashNavPC from "./dashBoardComponents/DashNavPC";
// import { useAuthState, useSignOut } from "react-firebase-hooks/auth";
// import { auth } from "../../../firebase.config";
// import robots from "../robots";

// const DashboardLayout = ({ children }) => {
//   // sign out
//   const [user, loading, error] = useAuthState(auth);
//   const [signOut, loadingSignOut, errorSignOut] = useSignOut(auth);
//   const handleSignOut = async () => {
//     const success = await signOut();
//     if (success) {
//       // and remove token from the local storage
//       localStorage.removeItem("token");
//       alert("You are sign out");
//     }
//   };

//   if (loading) {
//     return <div>Loading User ...</div>;
//   }

//   // if (!user) return null; // Optionally render a loader or nothing while redirecting

//   return (
//     <section>
//       <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
//         {/* <DashBoardSideBar starts /> */}
//         <div className="hidden border-r bg-muted/40 md:block">
//           <div className="flex h-full max-h-screen flex-col gap-2">
//             <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
//               <Link href="/" className="flex items-center gap-2 font-semibold">
//                 <Home className="h-6 w-6" />
//                 <span className="">Back To Home</span>
//               </Link>
//               <Button variant="outline" size="icon" className="ml-auto h-8 w-8">
//                 <Bell className="h-4 w-4" />
//                 <span className="sr-only">Toggle notifications</span>
//               </Button>
//             </div>
//             <div className="flex-1">
//               <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
//                 <DashNavPC />
//               </nav>
//             </div>
//             <div className="mt-auto p-4">
//               <Card x-chunk="dashboard-02-chunk-0">
//                 <CardHeader className="p-2 pt-0 md:p-4">
//                   <CardTitle>Upgrade to Pro</CardTitle>
//                   <CardDescription>
//                     Unlock all features and get unlimited access to our support
//                     team.
//                   </CardDescription>
//                 </CardHeader>
//                 <CardContent className="p-2 pt-0 md:p-4 md:pt-0">
//                   <Button size="sm" className="w-full">
//                     Upgrade
//                   </Button>
//                 </CardContent>
//               </Card>
//             </div>
//           </div>
//         </div>
//         {/* <DashBoardSideBar ends /> */}

//         {/* <DashBoardManiContents starts /> */}
//         <section className="flex flex-col">
//           <header className="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6">
//             <Sheet>
//               <SheetTrigger asChild>
//                 <Button
//                   variant="outline"
//                   size="icon"
//                   className="shrink-0 md:hidden"
//                 >
//                   <Menu className="h-5 w-5" />
//                   <span className="sr-only">Toggle navigation menu</span>
//                 </Button>
//               </SheetTrigger>
//               <SheetContent side="left" className="flex flex-col  bg-white">
//                 {/* <DashNavSideBar /> */}
//                 <nav className="grid gap-2 text-lg font-medium">
//                   <DashNavPC />
//                 </nav>
//                 {/* <DashNavSideBar /> */}

//                 <div className="mt-auto">
//                   <Card>
//                     <CardHeader>
//                       <CardTitle>Upgrade to Pro</CardTitle>
//                       <CardDescription>
//                         Unlock all features and get unlimited access to our
//                         support team.
//                       </CardDescription>
//                     </CardHeader>
//                     <CardContent>
//                       <Button size="sm" className="w-full">
//                         Upgrade
//                       </Button>
//                     </CardContent>
//                   </Card>
//                 </div>
//               </SheetContent>
//             </Sheet>
//             <div className="w-full flex-1">
//               <form>
//                 <div className="relative">
//                   <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
//                   <Input
//                     type="search"
//                     placeholder="Search products..."
//                     className="w-full appearance-none bg-background pl-8 shadow-none md:w-2/3 lg:w-1/3"
//                   />
//                 </div>
//               </form>
//             </div>
//             <DropdownMenu>
//               <DropdownMenuTrigger asChild>
//                 <Button
//                   variant="secondary"
//                   size="icon"
//                   className="rounded-full"
//                 >
//                   <CircleUser className="h-5 w-5" />
//                   <span className="sr-only">Toggle user menu</span>
//                 </Button>
//               </DropdownMenuTrigger>
//               <DropdownMenuContent align="end">
//                 <DropdownMenuLabel>My Account</DropdownMenuLabel>
//                 <DropdownMenuSeparator />
//                 <DropdownMenuItem>Settings</DropdownMenuItem>
//                 <DropdownMenuItem>Support</DropdownMenuItem>
//                 <DropdownMenuSeparator />
//                 {user && (
//                   <DropdownMenuItem onClick={handleSignOut}>
//                     <span className="cursor-pointer">Logout</span>
//                   </DropdownMenuItem>
//                 )}
//               </DropdownMenuContent>
//             </DropdownMenu>
//           </header>
//           <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
//             <div className="flex items-center">
//               <h1 className="text-lg font-semibold md:text-2xl">Dashboard</h1>
//             </div>
//             <div
//               className="flex flex-1 items-center justify-center rounded-lg lg:border border-dashed shadow-sm py-6"
//               x-chunk="dashboard-02-chunk-1"
//             >
//               {children}
//             </div>
//           </main>
//         </section>
//         {/* <DashBoardManiContents ends /> */}
//       </div>
//     </section>
//   );
// };

// export default DashboardLayout;

/* ********************** */
/* v-2 */
"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Bell, CircleUser, Home, Menu, Search } from "lucide-react";
import Link from "next/link";
import DashNavPC from "./dashBoardComponents/DashNavPC";
import { useRouter } from "next/navigation";
import { logout } from "@/utils/authUtils/authenticateNAccessToken";
import { useContext } from "react";
import { UserContext } from "@/utils/contextAPIs/UserInfoContext";

const DashboardLayout = ({ children }) => {
  const router = useRouter();
  const { user, loading, error, setUserState } = useContext(UserContext);
  const handleLogout = (e) => {
    logout();
    setUserState({
      user: null,
      loading: false,
      error: null,
    });
    router.replace("/");
  };

  return (
    <section>
      <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
        {/* <DashBoardSideBar starts /> */}
        <div className="hidden border-r bg-muted/40 md:block">
          <div className="flex h-full max-h-screen flex-col gap-2">
            <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
              <Link href="/" className="flex items-center gap-2 font-semibold">
                <Home className="h-6 w-6" />
                <span className="">Back To Home</span>
              </Link>
              <Button variant="outline" size="icon" className="ml-auto h-8 w-8">
                <Bell className="h-4 w-4" />
                <span className="sr-only">Toggle notifications</span>
              </Button>
            </div>
            <div className="flex-1">
              <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
                <DashNavPC />
              </nav>
            </div>
            <div className="mt-auto p-4">
              <Card x-chunk="dashboard-02-chunk-0">
                <CardHeader className="p-2 pt-0 md:p-4">
                  <CardTitle>Upgrade to Pro</CardTitle>
                  <CardDescription>
                    Unlock all features and get unlimited access to our support
                    team.
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-2 pt-0 md:p-4 md:pt-0">
                  <Button size="sm" className="w-full">
                    Upgrade
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
        {/* <DashBoardSideBar ends /> */}

        {/* <DashBoardManiContents starts /> */}
        <section className="flex flex-col">
          <header className="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6">
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="outline"
                  size="icon"
                  className="shrink-0 md:hidden"
                >
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle navigation menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="flex flex-col  bg-white">
                {/* <DashNavSideBar /> */}
                <nav className="grid gap-2 text-lg font-medium">
                  <DashNavPC />
                </nav>
                {/* <DashNavSideBar /> */}

                <div className="mt-auto">
                  <Card>
                    <CardHeader>
                      <CardTitle>Upgrade to Pro</CardTitle>
                      <CardDescription>
                        Unlock all features and get unlimited access to our
                        support team.
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Button size="sm" className="w-full">
                        Upgrade
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </SheetContent>
            </Sheet>
            <div className="w-full flex-1">
              <form>
                <div className="relative">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input
                    type="search"
                    placeholder="Search products..."
                    className="w-full appearance-none bg-background pl-8 shadow-none md:w-2/3 lg:w-1/3"
                  />
                </div>
              </form>
            </div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="secondary"
                  size="icon"
                  className="rounded-full"
                >
                  <CircleUser className="h-5 w-5" />
                  <span className="sr-only">Toggle user menu</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Settings</DropdownMenuItem>
                <DropdownMenuItem onClick={handleLogout}>
                  Logout
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                {/* {user && (
                  <DropdownMenuItem onClick={handleLogout}>
                    <span className="cursor-pointer">Logout</span>
                  </DropdownMenuItem>
                )} */}
              </DropdownMenuContent>
            </DropdownMenu>
          </header>
          <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
            <div className="flex items-center">
              <h1 className="text-lg font-semibold md:text-2xl">Dashboard</h1>
            </div>
            <div
              className="flex flex-1 items-center justify-center rounded-lg lg:border border-dashed shadow-sm py-6"
              x-chunk="dashboard-02-chunk-1"
            >
              {children}
            </div>
          </main>
        </section>
        {/* <DashBoardManiContents ends /> */}
      </div>
    </section>
  );
};

export default DashboardLayout;
