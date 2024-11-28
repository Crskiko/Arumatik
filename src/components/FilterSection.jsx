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
 * @param {Function} props.setCategory - Callback function that set selected category.
 * @param {Array} props.series - Array that contains series names.
 * @param {string|null} props.selectedSeries - The name of the selected product series.
 * @param {Function} props.setSeries - Callback function that set selected series.
 * @param {boolean} props.isMobile - Boolean that determines section size.
 * @returns {JSX.Element} The rendered filter section.
 */
function FilterSection({
  categories,
  selectedCategory,
  setCategory,
  series,
  selectedSeries,
  setSeries,
  isMobile
}) {
  return (
    <section className="h-fit">
      <div className={`${isMobile ? "pb-10" : "pb-16"} pt-32 bg-blue w-full flex justify-center`}>
        <Heading
          text="Browse Our Products"
          desc="Discover our selection of essential industrial products, designed to 
          streamline and enhance your operations."
          primary={false}
          isMobile={isMobile}
        ></Heading>
      </div>

      <div 
        className={`flex ${isMobile ? "flex-col my-5 px-5 gap-5" : "flex-row my-10 xl:px-24 px-12"} 
        justify-between items-center w-full`}
      >
        <div className={`flex items-center ${isMobile ? "sm:gap-5 gap-3" : "xl:gap-8 gap-6"}`}>
          {categories.map(value => (
            <div key={value}>
              <Tab
                name={value}
                isActive={value === selectedCategory}
                onClick={() => setCategory(value)}
                isMobile={isMobile}
              ></Tab>
            </div>
          ))}
        </div>

        {selectedCategory === "Plastic Pallet" && (
          <Dropdown
            selected={selectedSeries}
            options={series}
            setSeries={setSeries}
            isMobile={isMobile}
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
  setSeries: PropTypes.func.isRequired,
  isMobile: PropTypes.bool.isRequired,
};

export default FilterSection;
