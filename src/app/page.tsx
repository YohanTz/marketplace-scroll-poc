"use client";

import { useEffect, useState } from "react";
import { Button } from "~/components/ui/button";
import { cn } from "~/lib/utils";

function Banner() {
  return <div className="h-[16.5rem] bg-slate-700" />;
}

function CollectionInfos() {
  const [hasScrolled, setHasScrolled] = useState(false);
  const [showMoreInfo, setShowMoreInfo] = useState(false);
  const shouldShowMoreInfo = showMoreInfo && !hasScrolled;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 264) {
        setHasScrolled(true);
      } else {
        setHasScrolled(false);
      }
    };
    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="border-b border-border px-5 pt-5 ">
      <div className={cn("mb-5 flex items-center justify-between")}>
        <div className="flex flex-shrink-0 items-center gap-4">
          <div
            className={cn(
              "aspect-square flex-shrink-0 rounded-xl bg-slate-700 transition-[height]",
              hasScrolled ? "h-[4.5rem]" : "h-[6rem]",
            )}
          />
          <div className="flex flex-shrink-0 flex-col items-start justify-between">
            <p className="text-lg">Collection name</p>
            <p className="text-sm">Created Mar 2022</p>
            <Button
              variant="link"
              className={cn(
                "overflow-hidden px-0 text-sm text-muted-foreground transition-[max-height_opacity]",
                hasScrolled ? "max-h-0 opacity-0" : "max-h-9 opacity-100",
              )}
              size="sm"
              onClick={() => setShowMoreInfo(!showMoreInfo)}
            >
              {showMoreInfo ? "Less Info" : "More info"}
            </Button>
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
      <p
        className={cn(
          "max-w-2xl overflow-hidden transition-[max-height]",
          shouldShowMoreInfo ? "max-h-28 pb-5" : "max-h-0",
        )}
      >
        Everai is a pioneering web3 brand set to expand its universe powered by
        the collective creativity of its artistic partners and vibrant
        community. In the Everai Universe, the Everais stand as the mightiest
        heroes of Shodai&apos;s civilization… Get yours now to join us in this
        collaborative journey to shape the Everai Universe!
      </p>
    </div>
  );
}

interface FiltersBar {
  toggleFilters: () => void;
  showFilters: boolean;
}
function FiltersBar({ showFilters, toggleFilters }: FiltersBar) {
  return (
    <div
      className={cn(
        "bg-background px-5 pb-5 pt-6",
        showFilters ? "border-l border-border" : "",
      )}
    >
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
        "sticky top-[18rem] h-[calc(100vh-7rem-5.5rem-5.5rem)] flex-shrink-0 overflow-x-hidden overflow-y-scroll transition-[width]",
        show ? "w-64" : "w-0",
      )}
    >
      <div
        className={cn(
          "w-64 px-5 pb-5 transition-opacity",
          show ? "opacity-100" : "opacity-0",
        )}
      >
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

function FiltersHeader({ show }: FiltersContentProps) {
  return (
    <div
      className={cn(
        "overflow-x-hidden transition-[width]",
        show ? "w-64" : "w-0",
      )}
    >
      <p className="bg-background px-5 pb-10 pt-5 text-lg">Status</p>
    </div>
  );
}

export default function HomePage() {
  const [showFilter, setShowFilter] = useState(false);
  return (
    <main>
      <Banner />
      <div className="sticky top-[5.5rem] z-10 flex flex-col bg-background">
        <CollectionInfos />
        <div className="flex">
          <FiltersHeader show={showFilter} />
          <FiltersBar
            toggleFilters={() => setShowFilter(!showFilter)}
            showFilters={showFilter}
          />
        </div>
      </div>
      <div className="flex">
        <FiltersContent show={showFilter} />
        <div
          className={cn("w-full", showFilter ? "border-l border-border" : "")}
        >
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
