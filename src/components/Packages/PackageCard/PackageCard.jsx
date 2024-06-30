import {
  Card,
  PrimaLinie,
  ImageContainer,
  Image,
  DetaliiPrimaLinie,
  OrasSiTara,
  DetaliiGrupate,
  ZileConcediu,
  NrPers,
  ModTransport,
  ADouaLinie,
  SosirePlecare,
  AnteteSosirePlecare,
  PretMoneda,
  PretMonedaValori,
  ItsReservedDiv,
  ClickForReserveP ,
  ItsReservedP
} from "./PackageCard.style";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import AirlineStopsRoundedIcon from "@mui/icons-material/AirlineStopsRounded";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CircleNotificationsRoundedIcon from "@mui/icons-material/CircleNotificationsRounded";

export const itsReserved = (este_rezervat) => {
  if (este_rezervat === 0) {
    return (
      <ClickForReserveP>
        <CircleNotificationsRoundedIcon /> Click for details and reserve! 
      </ClickForReserveP>
    );
  } else {
    return (
      <ItsReservedP>
        <CheckCircleIcon /> Reserved!
      </ItsReservedP>
    );
  }
};

function PackageCard({
  id,
  tara,
  oras,
  imagine_pachet,
  nr_zile_concediu,
  zi_check_in,
  zi_check_out,
  nr_pers,
  mod_transport,
  pret_sejur,
  moneda_sejur,
  este_rezervat,
}) {
  return (
    <Card to={`/package/${id}`}>
      <PrimaLinie>
        <ImageContainer>
          <Image src={imagine_pachet}></Image>
        </ImageContainer>
        <DetaliiPrimaLinie>
          <OrasSiTara>
            <div>
              {oras}, {tara}
            </div>
          </OrasSiTara>
          <DetaliiGrupate>
            <ZileConcediu>
              <CalendarMonthIcon />
              {nr_zile_concediu} Days
            </ZileConcediu>
            <NrPers>
              <PeopleAltOutlinedIcon />
              {nr_pers} People
            </NrPers>
            <ModTransport>
              <AirlineStopsRoundedIcon />
              {mod_transport}
            </ModTransport>
          </DetaliiGrupate>
        </DetaliiPrimaLinie>
        <ItsReservedDiv>{itsReserved(este_rezervat)}</ItsReservedDiv>
      </PrimaLinie>
      <ADouaLinie>
        <SosirePlecare>
          <AnteteSosirePlecare>Check in:</AnteteSosirePlecare>
          <div>{zi_check_in}</div>
          <AnteteSosirePlecare>Check out:</AnteteSosirePlecare>
          <div>{zi_check_out}</div>
        </SosirePlecare>
        <PretMoneda>
          <div>Total vacation cost:</div>
          <PretMonedaValori>
            <div>{pret_sejur}</div>
            <div>{moneda_sejur}</div>
          </PretMonedaValori>
        </PretMoneda>
      </ADouaLinie>
    </Card>
  );
}

export default PackageCard;
