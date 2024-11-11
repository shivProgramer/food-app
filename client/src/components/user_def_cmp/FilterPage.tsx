
import { Label } from "@radix-ui/react-label";
import { Button } from "../ui/button";
import { Checkbox } from "../ui/checkbox";

export type FilterOptionsState = {
  id: string;
  label: string;
};

// agar applied filter k andr ye item exixt krta hia toh iska mtlb checked hai
const filterOptions:FilterOptionsState[] = [
  { id: "burger", label: "Burger" },
  { id: "thali", label: "Thali" },
  { id: "biryani", label: "Biryani" },
  { id: "momos", label: "Momos" },
];

const FilterPage = () => {
  // const { setAppliedFilter, appliedFilter, resetAppliedFilter } = useRestaurantStore();
  const appliedFilterHandler = (value: string) => {
   alert(value)
  };
  return (
    <>
    <div className="md:w-72">
      <div className="flex items-center justify-between">
        <h1 className="font-medium text-lg"> Filter By Cuisines </h1>
        <Button variant={`link`}> Reset</Button>
      </div>
      {filterOptions.map((option)=>(
        <div key={option.id} className="flex items-center space-x-2 my-5">
         <Checkbox
            id={option.id}
            // checked={appliedFilter.includes(option.label)}
            onClick={() => appliedFilterHandler(option.label)}
          />
         <Label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
            {option.label}
          </Label>
        </div>
      )) }
    </div>
    </>
  );
};

export default FilterPage;
