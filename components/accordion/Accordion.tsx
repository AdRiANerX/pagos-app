import { FC, Fragment } from "react";
import NewPayment from "../forms/NewPayment";
interface Props {
  display: boolean;
  data: any;
}

const Accordion: FC<Props> = ({ display, data }) => {
  return (
    <Fragment>
      <div className={`${display ? "block" : "hidden"} font-medium text-base`}>
        <div className="p-2">
          <ul className="">
            <li>
              · Fecha de Nac:{" "}
              <span className="font-semibold">15/Junio/1992</span>
            </li>
            {/* <li>
              · Calle y No.: <span className="font-semibold">Cholula 25</span>
            </li> */}
            <li>
              · Teléfono: <span className="font-semibold">2223762256</span>
            </li>
            <li>
              · Estado Civil: <span className="font-semibold">Unión Libre</span>
            </li>
          </ul>
          <p className="my-2 font-bold">Abonos</p>
          <ul className="">
            <li className="my-1 font-bold">· TOTAL - $300</li>
            <li>· 1/Enero/2024 - $150 | Silvio Rodriguez</li>
            <li>· 5/Enero/2024 - $150 | Geremias Sprinfield</li>
          </ul>
          <div className="pt-3">
            <p className="my-2 font-bold">Agregar un abono</p>
            <NewPayment />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Accordion;
