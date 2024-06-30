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
  ItsReservedP,
  ItsReservedDiv
} from "./ReservedCard.style";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import AirlineStopsRoundedIcon from "@mui/icons-material/AirlineStopsRounded";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

function ReservedCard({
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
}) {
  return (
    <Card to={`/package-reserved/${id}`}>
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
        <ItsReservedDiv>
               <ItsReservedP><CheckCircleIcon />Reserved!</ItsReservedP>
            </ItsReservedDiv>
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

export default ReservedCard;
