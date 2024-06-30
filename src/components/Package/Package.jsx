import { useParams } from "react-router-dom";
import {
  PackageContainer,
  PackageDetailsImageContainer,
  PackageDetailsImage,
  PackageAllDetails,
  PackageAllDetailsLinieDetaliu,
  PackageAllDetailsAntet,
  PackageAllDetailsValoare,
  ReserveButton,
  ReservedText,
} from "./Package.style";
import useFetchPackages from "../../hooks/useFetchPackage";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

export const handleReservePackage = (pachetul_meu) => {
  let pachet_modificat = {
    ...pachetul_meu,
    este_rezervat: 1,
  };

  fetch(`http://localhost:3001/pachete/${pachet_modificat.id}`, {
    method: "PUT",
    body: JSON.stringify(pachet_modificat),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then(async (response) => {
      if (response.ok) {
        await response.json();
        toast("You have successfully booked the desired package!", {
          autoClose: 2500,
          onClose: () => {
            window.location.href = "/reserved-packages";
          },
        });
      } else {
        throw new Error("Network response was not ok");
      }
    })
    .catch((error) => {
      console.error("An error occurred:", error);
      toast.error("Error when booking the package!");
    });
};

export const isThisSpecificPackageReserved = (pachetul_meu) => {
  if (pachetul_meu.este_rezervat === 0) {
    return (
      <ReserveButton onClick={() => handleReservePackage(pachetul_meu)}>
        Reserve package!
      </ReserveButton>
    );
  } else {
    return (
      <ReservedText>
        <CheckCircleIcon />
        Reserved!
      </ReservedText>
    );
  }
};

function Package() {
  const { id } = useParams();
  const { packages: my_package, error, loading } = useFetchPackages("/" + id);

  return (
    <PackageContainer>
      <ToastContainer />
      {loading && !error && <div>Loading...</div>}
      {error && <div>Error on getting data, Server is down :( </div>}
      {my_package && (
        <>
          <PackageDetailsImageContainer>
            <PackageDetailsImage src={my_package.imagine_pachet} />
          </PackageDetailsImageContainer>
          <PackageAllDetails>
            <PackageAllDetailsLinieDetaliu>
              <PackageAllDetailsAntet>Country: </PackageAllDetailsAntet>{" "}
              <PackageAllDetailsValoare>
                {my_package.tara}
              </PackageAllDetailsValoare>
            </PackageAllDetailsLinieDetaliu>
            <PackageAllDetailsLinieDetaliu>
              <PackageAllDetailsAntet>City: </PackageAllDetailsAntet>{" "}
              <PackageAllDetailsValoare>
                {my_package.oras}
              </PackageAllDetailsValoare>
            </PackageAllDetailsLinieDetaliu>
            <PackageAllDetailsLinieDetaliu>
              <PackageAllDetailsAntet>
                Number of vacation days:{" "}
              </PackageAllDetailsAntet>
              <PackageAllDetailsValoare>
                {my_package.nr_zile_concediu}
              </PackageAllDetailsValoare>
            </PackageAllDetailsLinieDetaliu>
            <PackageAllDetailsLinieDetaliu>
              <PackageAllDetailsAntet>Day check in: </PackageAllDetailsAntet>
              <PackageAllDetailsValoare>
                {my_package.zi_check_in}
              </PackageAllDetailsValoare>
            </PackageAllDetailsLinieDetaliu>
            <PackageAllDetailsLinieDetaliu>
              <PackageAllDetailsAntet>Day check out: </PackageAllDetailsAntet>
              <PackageAllDetailsValoare>
                {my_package.zi_check_out}
              </PackageAllDetailsValoare>
            </PackageAllDetailsLinieDetaliu>
            <PackageAllDetailsLinieDetaliu>
              <PackageAllDetailsAntet>Number of people: </PackageAllDetailsAntet>
              <PackageAllDetailsValoare>
                {my_package.nr_pers}
              </PackageAllDetailsValoare>
            </PackageAllDetailsLinieDetaliu>
            <PackageAllDetailsLinieDetaliu>
              <PackageAllDetailsAntet>Transport mode: </PackageAllDetailsAntet>
              <PackageAllDetailsValoare>
                {my_package.mod_transport}
              </PackageAllDetailsValoare>
            </PackageAllDetailsLinieDetaliu>
            <PackageAllDetailsLinieDetaliu>
              <PackageAllDetailsAntet>Stay price: </PackageAllDetailsAntet>
              <PackageAllDetailsValoare>
                {my_package.pret_sejur}
              </PackageAllDetailsValoare>
            </PackageAllDetailsLinieDetaliu>
            <PackageAllDetailsLinieDetaliu>
              <PackageAllDetailsAntet>Stay currency: </PackageAllDetailsAntet>
              <PackageAllDetailsValoare>
                {my_package.moneda_sejur}
              </PackageAllDetailsValoare>
            </PackageAllDetailsLinieDetaliu>
          </PackageAllDetails>
          <div>{isThisSpecificPackageReserved(my_package)}</div>
        </>
      )}
    </PackageContainer>
  );
}

export default Package;
