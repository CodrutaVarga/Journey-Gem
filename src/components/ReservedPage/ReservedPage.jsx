import { useParams } from "react-router-dom";
import {
  PackageContainer,
  PackageDetailsImageContainer,
  PackageDetailsImage,
  PackageAllDetails,
  PackageAllDetailsLinieDetaliu,
  PackageAllDetailsAntet,
  PackageAllDetailsValoare,
  ReservedPageReservedText,
  ReserveButton,
} from "./ReservedPage.style";
import useFetchPackages from "../../hooks/useFetchPackage";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

function ReservedPage() {
  const { id } = useParams();
  const { packages: my_package, error, loading } = useFetchPackages("/" + id);

  return (
    <PackageContainer>
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
              <PackageAllDetailsAntet>Stay currencie: </PackageAllDetailsAntet>
              <PackageAllDetailsValoare>
                {my_package.moneda_sejur}
              </PackageAllDetailsValoare>
            </PackageAllDetailsLinieDetaliu>
          </PackageAllDetails>
          <div>
            <ReservedPageReservedText>
              <CheckCircleIcon /> Reserved!
            </ReservedPageReservedText>
          </div>
        </>
      )}
    </PackageContainer>
  );
}

export default ReservedPage;
