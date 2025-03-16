import { CarCart, CustomFilter, Hero, SearchBar } from "@/components";
import { fuels, yearsOfProduction, manufacturers } from "@/constants";
import { fetchCars } from "@/utils";
import Image from "next/image";

export default async function Home({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const resolvedSearchParams = await searchParams; // ✅ Await the searchParams
  const manufacturer = resolvedSearchParams.manufacturer?.toString() || "";
  const year = parseInt(resolvedSearchParams.year?.toString() || "2022"); // Default 2022
  const fuel = resolvedSearchParams.fuel?.toString() || "";
  const limit = parseInt(resolvedSearchParams.limit?.toString() || "10"); // Default 10
  const model = resolvedSearchParams.model?.toString() || "";

  const allCars = await fetchCars({ manufacturer, year, fuel, limit, model });
  const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;
  console.log(allCars);
  return (
    <main className="overflow-hidden">
      <Hero />

      <div className="mt-12 padding-x padding-y max-width" id="discover">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">Car Catalogue</h1>
          <p>Explore the cars you might like</p>
        </div>

        <div className="home__filter">
          <SearchBar />

          <div className="home__filter-container">
            <CustomFilter options={fuels} title="fuel" />
            <CustomFilter options={yearsOfProduction} title="year" />
          </div>

          {!isDataEmpty ? (
            <section>
              <div className="home__cars-wrappper">
                {allCars?.map((car) => (
                  <CarCart car={car} key={car.model} />
                ))}
              </div>
            </section>
          ) : (
            <div className="home__error-container">
              <h2 className="text-black text-xl font-bold">Oops, no results</h2>
              <p>{allCars?.message}</p>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
