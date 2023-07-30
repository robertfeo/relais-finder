"use client"

import { Button } from "@/components/ui/button"
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
} from "@/components/ui/command"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { cn } from "@/lib/utils"
import { CaretSortIcon, CheckIcon } from "@radix-ui/react-icons"
import { useState } from "react"

const suchkriterien = [
    {
        value: "typ",
        label: "Typ",
    },
    {
        value: "rel-bezeichnung",
        label: "Rel-Bezeichnung",
    },
    {
        value: "grundstellung",
        label: "Grundstellung",
    },
    {
        value: "windungen",
        label: "Windungen",
    },
    {
        value: "widerstand",
        label: "Widerstand",
    },
    {
        value: "kontakt",
        label: "Kontakt",
    },
    {
        value: "sachnummer",
        label: "Sachnummer",
    },
    {
        value: "sina",
        label: "SiNa",
    },
]

export default function SelectSearchCriteria({ onSearchCriteriaChange }) {
    const [open, setOpen] = useState(false)
    const [value, setValue] = useState("")

    return (
        <Popover open={open} onOpenChange={setOpen} className="font-primary">
            <PopoverTrigger asChild>
                <Button
                    variant="outline"
                    role="combobox"
                    aria-expanded={open}
                    className="w-[300px] justify-between font-primary"
                >
                    {value
                        ? suchkriterien.find((suchkriterium) => suchkriterium.value === value)?.label
                        : "Suchkriterium auswählen..."}
                    <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-[300px] p-0">
                <Command>
                    <CommandInput placeholder="Suchkriterium..." className="h-9 font-primary" />
                    <CommandEmpty className="font-primary">Suchkriterium nicht gefunden.</CommandEmpty>
                    <CommandGroup>
                        {suchkriterien.map((suchkriterium) => (
                            <CommandItem className="font-primary"
                                key={suchkriterium.value}
                                onSelect={() => {
                                    setValue(suchkriterium.value)
                                    onSearchCriteriaChange(suchkriterium.value)
                                    setOpen(false)
                                }}
                            >
                                {suchkriterium.label}
                                <CheckIcon
                                    className={cn(
                                        "ml-auto h-4 w-4",
                                        value === suchkriterium.value ? "opacity-100" : "opacity-0"
                                    )}
                                />
                            </CommandItem>
                        ))}
                    </CommandGroup>
                </Command>
            </PopoverContent>
        </Popover>
    )
}
