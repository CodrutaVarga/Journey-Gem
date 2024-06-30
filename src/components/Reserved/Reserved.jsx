import { useEffect } from "react";
import useFetchPackages from "../../hooks/useFetchPackage";
import { SortingBarContainer, PackageContainer ,
  SortingBarInput,
  SortingBarDropdown,
  SortingBarDropdownContainer,
  SortingBarDropdownItems,
  NoMatchMessage,
  ClearSortBarButton,
  ComponentsContainer,
  LoadingMessage,
  ErrorMessage,
  ContainerShowHideSortbarButton,
  ShowHideSortbarButton  } from "./Reserved.style";
import ReservedCard from "./ReservedCard/ReservedCard";
import { useState } from "react";

function Reserved() {
  const { packages, error, loading } = useFetchPackages();
  const [filteredPackages, setFilteredPackages] = useState([]);
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [priceRange, setPriceRange] = useState("");
  const [currency, setCurrency] = useState("");
  const [currencies, setCurrencies] = useState([]);
  const [showSortBar , setShowSortBar] = useState(false);

  const handleClearSortingBar = () => {
    setCountry("");
    setCity("");
    setPriceRange("");
    setCurrency("");
  };
  const handleShowHideSortBar = ()=>{
   showSortBar===false ? setShowSortBar(true) : setShowSortBar(false)
  }

  useEffect(() => {
    if (!localStorage.getItem("reloaded")) {
      localStorage.setItem("reloaded", "true");
      window.location.reload();
    } else {
      localStorage.removeItem("reloaded");
    }
  }, []);

  const reservedPackages = packages?.filter(
    (my_package) => my_package.este_rezervat === 1
  );
  useEffect(() => {
    if (packages) {
      const uniqueCurrencies = [
        ...new Set(packages.map((pkg) => pkg.moneda_sejur)),
      ];
      setCurrencies(uniqueCurrencies);
    }
  }, [packages]);

  useEffect(() => {
    let filtered = packages;
  
    filtered = filtered.filter((pkg) => pkg.este_rezervat === 1);
  
    if (country) {
      filtered = filtered.filter((pkg) =>
        pkg.tara.toLowerCase().includes(country.toLowerCase())
      );
    }
    if (city) {
      filtered = filtered.filter((pkg) =>
        pkg.oras.toLowerCase().includes(city.toLowerCase())
      );
    }
    if (currency) {
      filtered = filtered.filter(
        (pkg) => pkg.moneda_sejur.toLowerCase() === currency.toLowerCase()
      );
    }
    if (priceRange) {
      const [minPriceStr, maxPriceStr] = priceRange.split("-");
      let minPrice = parseFloat(minPriceStr);
      let maxPrice = maxPriceStr ? parseFloat(maxPriceStr) : Infinity;
      if (maxPriceStr === "+") {
        minPrice = 5000;
        maxPrice = Infinity;
      }
      filtered = filtered.filter((pkg) => {
        const price = parseFloat(pkg.pret_sejur);
        return price >= minPrice && price <= maxPrice;
      });
    }
  
    setFilteredPackages(filtered);
  }, [country, city, priceRange, currency, packages]);


  return (
    <ComponentsContainer $loc="ComponentsContainer">
    <ContainerShowHideSortbarButton>
      <ShowHideSortbarButton onClick={handleShowHideSortBar}>
        {showSortBar === true ? "Hide" : "Search package"}
      </ShowHideSortbarButton>
    </ContainerShowHideSortbarButton>
    {showSortBar && (
      <SortingBarContainer $loc="SortingBarContainer">
        <ClearSortBarButton onClick={handleClearSortingBar}>
          Clear
        </ClearSortBarButton>
        <SortingBarInput
          type="text"
          placeholder="Filter by Country"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
        />
        <SortingBarInput
          type="text"
          placeholder="Filter by City"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <SortingBarDropdownContainer $loc="SortingBarDropdownContainer">
          <SortingBarDropdown
            $loc="SortingBarDropdown"
            value={currency}
            onChange={(e) => setCurrency(e.target.value)}
          >
            <SortingBarDropdownItems value="">
              Select Currency
            </SortingBarDropdownItems>
            {currencies.map((currency, index) => (
              <SortingBarDropdownItems key={index} value={currency}>
                {currency}
              </SortingBarDropdownItems>
            ))}
          </SortingBarDropdown>
          <SortingBarDropdown
            value={priceRange}
            onChange={(e) => setPriceRange(e.target.value)}
          >
            <SortingBarDropdownItems value="">
              Filter by Price
            </SortingBarDropdownItems>
            <SortingBarDropdownItems value="0-500">
              0-500
            </SortingBarDropdownItems>
            <SortingBarDropdownItems value="500-1000">
              500-1000
            </SortingBarDropdownItems>
            <SortingBarDropdownItems value="1000-2000">
              1000-2000
            </SortingBarDropdownItems>
            <SortingBarDropdownItems value="2000-3000">
              2000-3000
            </SortingBarDropdownItems>
            <SortingBarDropdownItems value="3000-4000">
              3000-4000
            </SortingBarDropdownItems>
            <SortingBarDropdownItems value="4000-5000">
              4000-5000
            </SortingBarDropdownItems>
            <SortingBarDropdownItems value="5000+">
              5000+
            </SortingBarDropdownItems>
          </SortingBarDropdown>
        </SortingBarDropdownContainer>
      </SortingBarContainer>
    )}
    <PackageContainer $loc="PackageContainer">
        {loading && <LoadingMessage>Loading...</LoadingMessage>}
        {error && (
          <ErrorMessage>
            {error} Error on getting data, server is down.
          </ErrorMessage>
        )}
        {!loading && !error && filteredPackages.length === 0 && (
          <NoMatchMessage>Sorry, no match for your search</NoMatchMessage>
        )}
        {filteredPackages.length > 0 &&
          filteredPackages.map((my_package) => (
            <ReservedCard key={my_package.tara} {...my_package} />
          ))}
      </PackageContainer>
    </ComponentsContainer>
  );
}

export default Reserved;
