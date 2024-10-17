// import React from "react";

// const MyBookingsPage = () => {
//   return <section></section>;
// };

// export default MyBookingsPage;

"use client";
import React, { useState, useMemo } from "react";
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
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
import { SkeletonListTable } from "@/components/shared/LoadingSkeletons";
import { useRouter } from "next/navigation";
import {
  deletePackageBooking,
  usePackageBookings,
} from "@/utils/customHooks/usePackageBookings";

const MyBookings = () => {
  const router = useRouter();
  const { isLoading, error, packageBookings, refetchBookings } =
    usePackageBookings(); // Use your bookings hook
  const [sorting, setSorting] = useState([]);
  const [columnFilters, setColumnFilters] = useState([]);
  const [columnVisibility, setColumnVisibility] = useState({});
  const [rowSelection, setRowSelection] = useState({});
  const [emailFilter, setEmailFilter] = useState(""); // State for email filter

  // Define columns
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
      accessorKey: "fullName",
      header: "Full Name",
      cell: ({ row }) => <div>{row.getValue("fullName")}</div>,
    },
    {
      accessorKey: "email",
      header: () => (
        <div className="flex items-center">
          <span>Email</span>
          <Input
            placeholder="Filter by email..."
            value={emailFilter}
            onChange={(event) => setEmailFilter(event.target.value)}
            className="ml-2 max-w-xs"
          />
        </div>
      ),
      cell: ({ row }) => <div>{row.getValue("email")}</div>,
    },
    {
      accessorKey: "tourPackageName",
      header: "Tour Package",
      cell: ({ row }) => <div>{row.getValue("tourPackageName")}</div>,
    },
    {
      id: "actions",
      enableHiding: false,
      cell: ({ row }) => {
        const booking = row.original;

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
                onClick={() => router.push(`/edit-my-bookings/${booking._id}`)}
              >
                <span className="cursor-pointer">View Details</span>
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => router.push(`/edit-my-bookings/${booking._id}`)}
              >
                <span className="cursor-pointer">Edit</span>
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={async () => {
                  const isConfirmDeleteBooking = confirm(
                    `Delete booking: ${booking.tourPackageName}`
                  );
                  if (isConfirmDeleteBooking) {
                    await deletePackageBooking(booking._id);
                  }
                }}
              >
                <span className="cursor-pointer text-red-600">Delete</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        );
      },
    },
  ];

  // Memoized column filtering logic
  const filteredBookings = useMemo(() => {
    if (!emailFilter) return packageBookings;
    return packageBookings.filter((booking) =>
      booking.email.toLowerCase().includes(emailFilter.toLowerCase())
    );
  }, [packageBookings, emailFilter]);

  const table = useReactTable({
    data: filteredBookings || [],
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  });

  if (isLoading) return <SkeletonListTable />;

  if (error) return <div>An error has occurred: {error.message}</div>;

  return (
    <div className="w-64 lg:w-full lg:m-8">
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
            {table.getRowModel().rows.length ? (
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

export default MyBookings;
