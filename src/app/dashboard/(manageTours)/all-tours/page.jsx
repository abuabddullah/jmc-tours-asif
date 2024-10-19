// "use client";
// import React, { useState } from "react";
// import {
//   ColumnDef,
//   ColumnFiltersState,
//   SortingState,
//   VisibilityState,
//   flexRender,
//   getCoreRowModel,
//   getFilteredRowModel,
//   getPaginationRowModel,
//   getSortedRowModel,
//   useReactTable,
// } from "@tanstack/react-table";
// import { Input } from "@/components/ui/input";
// import {
//   DropdownMenu,
//   DropdownMenuCheckboxItem,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuLabel,
//   DropdownMenuSeparator,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu";
// import { Button } from "@/components/ui/button";
// import { ChevronDownIcon } from "lucide-react";
// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableHead,
//   TableHeader,
//   TableRow,
// } from "@/components/ui/table";
// import { Checkbox } from "@/components/ui/checkbox";
// import { RxCaretSort, RxDotsHorizontal } from "react-icons/rx";
// import useTours, { deleteTours } from "@/utils/customHooks/useTours";
// import { SkeletonCard } from "@/components/shared/loadingComponents/Skeleton";
// import { useRouter } from "next/navigation";
// import { SkeletonListTable } from "@/components/shared/LoadingSkeletons";

// const AllToursDashboardTable = () => {
//   const router = useRouter();
//   const { isLoading, error, tours, success, refetchTours } = useTours();
//   const [sorting, setSorting] = useState([]);
//   const [columnFilters, setColumnFilters] = useState([]);
//   const [columnVisibility, setColumnVisibility] = useState({});
//   const [rowSelection, setRowSelection] = useState({});

//   //   define columns
//   const columns = [
//     {
//       id: "select",
//       header: ({ table }) => (
//         <Checkbox
//           checked={
//             table.getIsAllPageRowsSelected() ||
//             (table.getIsSomePageRowsSelected() && "indeterminate")
//           }
//           onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
//           aria-label="Select all"
//         />
//       ),
//       cell: ({ row }) => (
//         <Checkbox
//           checked={row.getIsSelected()}
//           onCheckedChange={(value) => row.toggleSelected(!!value)}
//           aria-label="Select row"
//         />
//       ),
//       enableSorting: false,
//       enableHiding: false,
//     },
//     {
//       accessorKey: "title",
//       header: ({ column }) => (
//         <Button
//           variant="ghost"
//           onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
//         >
//           Title
//           <RxCaretSort className="ml-2 h-4 w-4" />
//         </Button>
//       ),
//       cell: ({ row }) => <div>{row.getValue("title")}</div>,
//     },
//     {
//       accessorKey: "location",
//       header: "Location",
//       cell: ({ row }) => <div>{row.getValue("location")}</div>,
//     },
//     {
//       accessorKey: "cost",
//       header: () => <div className="text-right">Cost</div>,
//       cell: ({ row }) => {
//         const cost = parseFloat(row.getValue("cost"));

//         // Format the cost as a dollar amount
//         const formatted = new Intl.NumberFormat("en-US", {
//           style: "currency",
//           currency: "USD",
//         }).format(cost);

//         return <div className="text-right font-medium">{formatted}</div>;
//       },
//     },
//     {
//       id: "actions",
//       enableHiding: false,
//       cell: ({ row }) => {
//         const tour = row.original;

//         return (
//           <DropdownMenu>
//             <DropdownMenuTrigger asChild>
//               <Button variant="ghost" className="h-8 w-8 p-0">
//                 <span className="sr-only">Open menu</span>
//                 <RxDotsHorizontal className="h-4 w-4" />
//               </Button>
//             </DropdownMenuTrigger>
//             <DropdownMenuContent align="end" className="bg-white">
//               <DropdownMenuLabel>Actions</DropdownMenuLabel>
//               <DropdownMenuItem
//                 onClick={() => {
//                   alert(`Viewing details for ${tour.title}`);
//                   router.replace(`/tours/id`);
//                 }}
//               >
//                 View Details
//               </DropdownMenuItem>
//               <DropdownMenuSeparator />
//               <DropdownMenuItem onClick={() => alert(`Editing ${tour.title}`)}>
//                 Edit
//               </DropdownMenuItem>
//               <DropdownMenuItem
//                 onClick={async () => {
//                   const isConfirmDeleteTour = confirm(
//                     `Delete tour: ${tour?.title}`
//                   );
//                   if (isConfirmDeleteTour) {
//                     try {
//                       const res = await deleteTours(tour?._id);
//                       if (res.status) {
//                         refetchTours();
//                         alert("tour deleting success");
//                       }
//                     } catch (error) {
//                       // handle error
//                       console.error("Error deleting tour:", error);
//                       alert("tour deleting failed");
//                     }
//                   }
//                 }}
//               >
//                 Delete
//               </DropdownMenuItem>
//             </DropdownMenuContent>
//           </DropdownMenu>
//         );
//       },
//     },
//   ];

//   const table = useReactTable({
//     data: tours || {},
//     columns,
//     onSortingChange: setSorting,
//     onColumnFiltersChange: setColumnFilters,
//     getCoreRowModel: getCoreRowModel(),
//     getPaginationRowModel: getPaginationRowModel(),
//     getSortedRowModel: getSortedRowModel(),
//     getFilteredRowModel: getFilteredRowModel(),
//     onColumnVisibilityChange: setColumnVisibility,
//     onRowSelectionChange: setRowSelection,
//     state: {
//       sorting,
//       columnFilters,
//       columnVisibility,
//       rowSelection,
//     },
//   });

//   if (isLoading) return <SkeletonListTable />;

//   if (error) return <div>An error has occurred: {error.message}</div>;
//   return (
//     <div className="w-72 lg:w-full lg:m-8">
//       <div className="flex items-center py-4">
//         <Input
//           placeholder="Filter titles..."
//           value={table.getColumn("title")?.getFilterValue() ?? ""}
//           onChange={(event) =>
//             table.getColumn("title")?.setFilterValue(event.target.value)
//           }
//           className="max-w-sm"
//         />
//         <DropdownMenu>
//           <DropdownMenuTrigger asChild>
//             <Button variant="outline" className="ml-auto">
//               Columns <ChevronDownIcon className="ml-2 h-4 w-4" />
//             </Button>
//           </DropdownMenuTrigger>
//           <DropdownMenuContent align="end">
//             {table
//               .getAllColumns()
//               .filter((column) => column.getCanHide())
//               .map((column) => (
//                 <DropdownMenuCheckboxItem
//                   key={column.id}
//                   className="capitalize"
//                   checked={column.getIsVisible()}
//                   onCheckedChange={(value) => column.toggleVisibility(!!value)}
//                 >
//                   {column.id}
//                 </DropdownMenuCheckboxItem>
//               ))}
//           </DropdownMenuContent>
//         </DropdownMenu>
//       </div>
//       <div className="rounded-md border">
//         <Table>
//           <TableHeader>
//             {table.getHeaderGroups().map((headerGroup) => (
//               <TableRow key={headerGroup.id}>
//                 {headerGroup.headers.map((header) => (
//                   <TableHead key={header.id}>
//                     {header.isPlaceholder
//                       ? null
//                       : flexRender(
//                           header.column.columnDef.header,
//                           header.getContext()
//                         )}
//                   </TableHead>
//                 ))}
//               </TableRow>
//             ))}
//           </TableHeader>
//           <TableBody>
//             {table.getRowModel().rows?.length ? (
//               table.getRowModel().rows.map((row) => (
//                 <TableRow
//                   key={row.id}
//                   data-state={row.getIsSelected() && "selected"}
//                 >
//                   {row.getVisibleCells().map((cell) => (
//                     <TableCell key={cell.id}>
//                       {flexRender(
//                         cell.column.columnDef.cell,
//                         cell.getContext()
//                       )}
//                     </TableCell>
//                   ))}
//                 </TableRow>
//               ))
//             ) : (
//               <TableRow>
//                 <TableCell
//                   colSpan={columns.length}
//                   className="h-24 text-center"
//                 >
//                   No results.
//                 </TableCell>
//               </TableRow>
//             )}
//           </TableBody>
//         </Table>
//       </div>
//       <div className="flex items-center justify-end space-x-2 py-4">
//         <div className="flex-1 text-sm text-muted-foreground">
//           {table.getFilteredSelectedRowModel().rows.length} of{" "}
//           {table.getFilteredRowModel().rows.length} row(s) selected.
//         </div>
//         <div className="space-x-2">
//           <Button
//             variant="outline"
//             size="sm"
//             onClick={() => table.previousPage()}
//             disabled={!table.getCanPreviousPage()}
//           >
//             Previous
//           </Button>
//           <Button
//             variant="outline"
//             size="sm"
//             onClick={() => table.nextPage()}
//             disabled={!table.getCanNextPage()}
//           >
//             Next
//           </Button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AllToursDashboardTable;

"use client";
import React, { useEffect, useState } from "react";
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { ChevronDownIcon } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Checkbox } from "@/components/ui/checkbox";
import { RxCaretSort, RxDotsHorizontal } from "react-icons/rx";
import useTours, { deleteTours } from "@/utils/customHooks/useTours";
import { SkeletonCard } from "@/components/shared/loadingComponents/Skeleton";
import { useRouter } from "next/navigation";
import { SkeletonListTable } from "@/components/shared/LoadingSkeletons";
import { toursDEMO } from "@/components/shared/ToursCardsSection";

const AllToursDashboardTable = () => {
  const router = useRouter();
  const [isLoadingDEMO, setIsLoadingDEMO] = useState(false);
  const [errorDEMO, setErrorDEMO] = useState(false);
  const { isLoading, error, tours, success, refetchTours } = useTours();
  const [sorting, setSorting] = useState([]);
  const [columnFilters, setColumnFilters] = useState([]);
  const [columnVisibility, setColumnVisibility] = useState({});
  const [rowSelection, setRowSelection] = useState({});

  useEffect(() => {
    setIsLoadingDEMO(true);
    setTimeout(() => {
      setIsLoadingDEMO(false);
    }, 3000);
  }, []);

  //   define columns
  const columns = [
    {
      id: "select",
      header: ({ table }) => (
        <Checkbox
          checked={
            table.getIsAllPageRowsSelected() ||
            (table.getIsSomePageRowsSelected() && "indeterminate")
          }
          onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
          aria-label="Select all"
        />
      ),
      cell: ({ row }) => (
        <Checkbox
          checked={row.getIsSelected()}
          onCheckedChange={(value) => row.toggleSelected(!!value)}
          aria-label="Select row"
        />
      ),
      enableSorting: false,
      enableHiding: false,
    },
    {
      accessorKey: "title",
      header: ({ column }) => (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Title
          <RxCaretSort className="ml-2 h-4 w-4" />
        </Button>
      ),
      cell: ({ row }) => <div>{row.getValue("title")}</div>,
    },
    {
      accessorKey: "location",
      header: "Location",
      cell: ({ row }) => <div>{row.getValue("location")}</div>,
    },
    {
      accessorKey: "cost",
      header: () => <div className="text-right">Cost</div>,
      cell: ({ row }) => {
        const cost = parseFloat(row.getValue("cost"));

        // Format the cost as a dollar amount
        const formatted = new Intl.NumberFormat("en-US", {
          style: "currency",
          currency: "USD",
        }).format(cost);

        return <div className="text-right font-medium">{formatted}</div>;
      },
    },
    {
      id: "actions",
      enableHiding: false,
      cell: ({ row }) => {
        const tour = row.original;

        return (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="h-8 w-8 p-0">
                <span className="sr-only">Open menu</span>
                <RxDotsHorizontal className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="bg-white">
              <DropdownMenuLabel>Actions</DropdownMenuLabel>
              <DropdownMenuItem
                onClick={() => {
                  alert(`Viewing details for ${tour.title}`);
                  router.replace(`/tours/id`);
                }}
              >
                View Details
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={() => alert(`Editing ${tour.title}`)}>
                Edit
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={async () => {
                  const isConfirmDeleteTour = confirm(
                    `Delete tour: ${tour?.title}`
                  );
                  if (isConfirmDeleteTour) {
                    try {
                      const res = await deleteTours(tour?._id);
                      if (res.status) {
                        refetchTours();
                        alert("tour deleting success");
                      }
                    } catch (error) {
                      // handle error
                      console.error("Error deleting tour:", error);
                      alert("tour deleting failed");
                    }
                  }
                }}
              >
                Delete
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        );
      },
    },
  ];

  const table = useReactTable({
    data: toursDEMO || {},
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  });

  if (isLoadingDEMO) return <SkeletonListTable />;

  if (errorDEMO) return <div>An error has occurred: {errorDEMO.message}</div>;
  return (
    <div className="w-72 lg:w-full lg:m-8">
      <div className="flex items-center py-4">
        <Input
          placeholder="Filter titles..."
          value={table.getColumn("title")?.getFilterValue() ?? ""}
          onChange={(event) =>
            table.getColumn("title")?.setFilterValue(event.target.value)
          }
          className="max-w-sm"
        />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="ml-auto">
              Columns <ChevronDownIcon className="ml-2 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {table
              .getAllColumns()
              .filter((column) => column.getCanHide())
              .map((column) => (
                <DropdownMenuCheckboxItem
                  key={column.id}
                  className="capitalize"
                  checked={column.getIsVisible()}
                  onCheckedChange={(value) => column.toggleVisibility(!!value)}
                >
                  {column.id}
                </DropdownMenuCheckboxItem>
              ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <TableHead key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-end space-x-2 py-4">
        <div className="flex-1 text-sm text-muted-foreground">
          {table.getFilteredSelectedRowModel().rows.length} of{" "}
          {table.getFilteredRowModel().rows.length} row(s) selected.
        </div>
        <div className="space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            Previous
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AllToursDashboardTable;
