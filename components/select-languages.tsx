"use client";

import { Fragment, useEffect, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import fetchData from "@/config/config";

interface Runtime {
  language: string;
  version: string;
}

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

function capitalizeFirstLetter(string: string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export default function SelectLanguages() {
  const [runtimes, setRuntimes] = useState<Runtime[]>([]);
  const [selected, setSelected] = useState<Runtime | null>(null);

  useEffect(() => {
    async function fetchDataAndUpdateState() {
      try {
        // const runtimesData = await fetchData();
        const runtimesData: Runtime[] = await fetchData();
        setRuntimes(runtimesData);

        // Set default language to "JavaScript"
        const defaultLanguage = runtimesData.find(
          (runtime: any) => runtime.language.toLowerCase() === "javascript"
        );
        setSelected(defaultLanguage || null);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchDataAndUpdateState();
  }, []);

  return (
    <Listbox value={selected} onChange={setSelected}>
      {({ open }) => (
        <>
          <div className="relative">
            <Listbox.Button className="relative w-full cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6">
              <span className="flex items-center">
                <span className="ml-3 block truncate">
                  {selected
                    ? capitalizeFirstLetter(selected.language)
                    : "Select a language"}
                </span>
              </span>
              <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                <ChevronUpDownIcon
                  className="h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
              </span>
            </Listbox.Button>

            <Transition
              show={open}
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                {runtimes.map((runtime) => (
                  <Listbox.Option
                    key={runtime.version}
                    className={({ active }) =>
                      classNames(
                        active ? "bg-indigo-600 text-white" : "text-gray-900",
                        "relative cursor-default select-none py-2 pl-3 pr-9"
                      )
                    }
                    value={runtime}
                  >
                    {({ selected, active }) => (
                      <>
                        <div className="flex items-center">
                          <span
                            className={classNames(
                              selected ? "font-semibold" : "font-normal",
                              "ml-3 block truncate"
                            )}
                          >
                            {capitalizeFirstLetter(runtime.language)} (
                            {runtime.version})
                          </span>
                        </div>

                        {selected ? (
                          <span
                            className={classNames(
                              active ? "text-white" : "text-indigo-600",
                              "absolute inset-y-0 right-0 flex items-center pr-4"
                            )}
                          >
                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </>
      )}
    </Listbox>
  );
}
