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
  EditDeleteButton,
 
} from "./EditDeleteSingleCard.style";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import AirlineStopsRoundedIcon from "@mui/icons-material/AirlineStopsRounded";

function EditDeleteSingleCard({
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
    <Card>
      <PrimaLinie>
        <ImageContainer>
          <Image src={imagine_pachet}></Image>
        </ImageContainer>
        <DetaliiPrimaLinie>
          <OrasSiTara>
            {oras}, {tara}
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
      </PrimaLinie>
      <ADouaLinie>
        <SosirePlecare>
          <AnteteSosirePlecare>Check in:</AnteteSosirePlecare>
          <div>{zi_check_in}</div>
          <AnteteSosirePlecare>Check out:</AnteteSosirePlecare>
          <div>{zi_check_out}</div>
        </SosirePlecare>
        <div>
          <EditDeleteButton to={`/edit-or-delete/package/${id}`}>
            Edit / Delete
          </EditDeleteButton>
        </div>
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

export default EditDeleteSingleCard;
