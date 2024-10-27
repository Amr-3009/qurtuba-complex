import React from "react";
import CardComp from "../../Components/CardComponent/CardComp";
import { Trans, useTranslation } from "react-i18next";
import BoysInt from "../../assets/images/boysInt.png";
import BoysNat from "../../assets/images/boysNat.png";
import "./BoysPage.css";

const BoysPage = () => {
  const { t } = useTranslation();
  return (
    <div className="boys__container">
      <CardComp
        cardTitle={t("international")}
        cardImg={BoysInt}
        linkUrl={"/qurtuba-complex/boys/international"}
        linkName={t("cardLink")}
      />
      <CardComp
        cardTitle={t("national")}
        cardImg={BoysNat}
        linkUrl={"/qurtuba-complex/boys/national"}
        linkName={t("cardLink")}
      />
    </div>
  );
};

export default BoysPage;
