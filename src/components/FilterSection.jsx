import Heading from "./Heading";
import Tab from "./Tab";
import Dropdown from "./Dropdown";
import PropTypes from "prop-types";

/**
 * Component that displays filters in product list page.
 *
 * @param {object} props - Props for the card.
 * @param {Array} props.categories - Array that contains category names.
 * @param {string} props.selectedCategory - The name of the selected product category.
 * @param {() => void} props.setCategory - Callback function that set selected category.
 * @param {Array} props.series - Array that contains series names.
 * @param {string|null} props.selectedSeries - The name of the selected product series.
 * @param {() => void} props.setSeries - Callback function that set selected series.
 * @returns {JSX.Element} The rendered filter section.
 */
function FilterSection({
  categories,
  selectedCategory,
  setCategory,
  series,
  selectedSeries,
  setSeries,
}) {
  return (
    <section className="h-fit pt-32">
      <Heading
        text="Browse Our Products"
        desc="Discover our selection of essential industrial products, designed to 
          streamline and enhance your operations."
      ></Heading>

      <div className="flex justify-between w-full mt-16 mb-10 px-24">
        <div className="flex items-center gap-8">
          {categories.map((value, index) => (
            <div key={index}>
              <Tab
                name={value}
                isActive={value === selectedCategory ? true : false}
                onClick={() => setCategory(value)}
              ></Tab>
            </div>
          ))}
        </div>

        {selectedCategory === "Plastic Pallet" && (
          <Dropdown
            selected={selectedSeries}
            options={series}
            setSeries={setSeries}
          ></Dropdown>
        )}
      </div>
    </section>
  );
}

FilterSection.propTypes = {
  categories: PropTypes.array.isRequired,
  selectedCategory: PropTypes.string.isRequired,
  setCategory: PropTypes.func.isRequired,
  series: PropTypes.array.isRequired,
  selectedSeries: PropTypes.string,
  setSeries: PropTypes.func.isRequired
}

export default FilterSection;
