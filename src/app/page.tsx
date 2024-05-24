"use client";

import { useEffect, useState } from "react";
import { Button } from "~/components/ui/button";
import { cn } from "~/lib/utils";

function Banner() {
  return <div className="h-[16.5rem] bg-slate-700" />;
}

function CollectionInfos() {
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 264) {
        setHasScrolled(true);
      } else {
        setHasScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={cn(
        "relative z-10 flex items-center justify-between border-b border-border p-5 transition-[height]",
        hasScrolled ? "h-[7rem]" : "h-[8.5rem]",
      )}
    >
      <div className="flex h-full items-center gap-4">
        <div className="aspect-square h-full flex-shrink-0 rounded-xl bg-slate-700" />
        <div className="flex h-full flex-col justify-between">
          <p className="text-lg">Collection name</p>
          <p className="text-sm">Created Mar 2022</p>
          <p className="text-sm text-muted-foreground">More info</p>
        </div>
      </div>
      <div className="flex items-center gap-10">
        <p className="text-slate-400">Floor</p>
        <p className="text-slate-400">Total Volume</p>
        <p className="text-slate-400">7D Volume</p>
        <p className="text-slate-400">Items</p>
        <p className="text-slate-400">Owner</p>
        <p className="text-slate-400">Listed</p>
      </div>
    </div>
  );
}

interface FiltersBar {
  toggleFilters: () => void;
}
function FiltersBar({ toggleFilters }: FiltersBar) {
  return (
    <div className="sticky top-[12.5rem] bg-background px-5 pb-5 pt-6">
      <Button onClick={toggleFilters}>Filters</Button>
    </div>
  );
}

interface FiltersContentProps {
  show: boolean;
}
function FiltersContent({ show }: FiltersContentProps) {
  return (
    <div
      className={cn(
        "sticky top-[12.5rem] h-[calc(100vh-7rem-5.5rem)] flex-shrink-0 overflow-x-hidden overflow-y-scroll transition-[width]",
        show ? "w-64 border-r border-border" : "w-0",
      )}
    >
      <div className="w-64 px-5 pb-5">
        <p className="sticky top-0 bg-background pb-10 pt-5 text-lg">Status</p>
        <div className="flex flex-col gap-6">
          {[
            0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,
            19, 20,
          ].map((filter) => {
            return (
              <p key={filter} className="text-sm text-muted-foreground">
                Filter #{filter}
              </p>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default function HomePage() {
  const [showFilter, setShowFilter] = useState(false);
  return (
    <main>
      <Banner />
      <div className="sticky top-[5.5rem] flex flex-col bg-background">
        <CollectionInfos />
      </div>
      <div className="flex">
        <FiltersContent show={showFilter} />
        <div className="w-full">
          <FiltersBar toggleFilters={() => setShowFilter(!showFilter)} />
          <div className="grid grid-cols-4 gap-4 px-5 pb-6">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16].map(
              (gridItem) => {
                return (
                  <div
                    key={gridItem}
                    className="w-full overflow-hidden rounded-[0.375rem] border border-border"
                  >
                    <div className="aspect-square w-full bg-slate-700" />
                    <div className="p-3">
                      <p className="text-lg">Everai #{gridItem}</p>
                      <p className="mt-4 text-muted-foreground">
                        Last sale 0,08ETH
                      </p>
                    </div>
                  </div>
                );
              },
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
