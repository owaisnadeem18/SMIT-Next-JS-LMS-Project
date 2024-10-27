"use client";

import * as React from "react";

import { cn } from "@/lib/utils";
// import { useMediaQuery } from "@/hooks/use-media-query";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// Mock data for Trainers
const trainers = [
  { id: "trainer1", name: "Sir Inzamam" },
  { id: "trainer2", name: "Sir Bilal Ahmed" },
  { id: "trainer3", name: "Sir Hammad Nadeem" },
];

// Mock data for Courses
const courses = [
  { id: "course1", name: "Web and App Development" },
  { id: "course2", name: "App Development" },
  { id: "course3", name: "Python Development" },
];

export function BatchDialog() {
  const [open, setOpen] = useState(false);
  const isDesktop = true;

  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button variant="outline">Add Batch</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Add Batch</DialogTitle>
            {/* <DialogDescription>You can add course here...</DialogDescription> */}
          </DialogHeader>
          <BatchForm />
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button variant="outline">Add Batch</Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader className="text-left">
          <DrawerTitle>Add Batches</DrawerTitle>
          <DrawerDescription>You can add course here...</DrawerDescription>
        </DrawerHeader>
        <BatchForm className="px-4" />
        <DrawerFooter className="pt-2">
          <DrawerClose asChild>
            <Button variant="outline">Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}

function BatchForm() {
  return (
    <form className={cn("grid items-start gap-4")}>
      <div className="grid gap-2">
        <Label htmlFor="BatchName">Batch Name</Label>
        <Input required type="text" id="BatchName" defaultValue="" />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="CourseName">Course Name</Label>

        <Select required>
          <SelectTrigger>
            <SelectValue placeholder="Offered Courses are..." />
          </SelectTrigger>
          <SelectContent>
            {courses.map((item, indx) => (
              <SelectItem key={indx} value={item}>
                {item.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div className="grid gap-2">
        <Label htmlFor="status">Course Status</Label>

        <Select required>
          <SelectTrigger>
            <SelectValue placeholder="Pending, Completed, Ongoing, Merged" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="pending">Pending</SelectItem>
            <SelectItem value="completed">Completed</SelectItem>
            <SelectItem value="ongoing">Ongoing</SelectItem>
            <SelectItem value="merged">Merged</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="grid gap-2">
        <Label htmlFor="trainer">Trainer</Label>
        <Select required>
          <SelectTrigger>
            <SelectValue placeholder="Available Trainers are..." />
          </SelectTrigger>
          <SelectContent>
            {trainers.map((item) => (
              <SelectItem value={item}> {item.name} </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <Button type="submit" className="mt-1">
        Add Course
      </Button>
    </form>
  );
}
