import React from "react";
import CardComp from "../../Components/CardComponent/CardComp";
import Thumbnail1 from "../../assets/images/event1_thumbnail.png";
import Thumbnail2 from "../../assets/images/event2_thumbnail.png";
import Thumbnail3 from "../../assets/images/event3_thumbnail.png";
import Thumbnail4 from "../../assets/images/event4_thumbnail.png";
import Thumbnail5 from "../../assets/images/event5_thumbnail.png";
import Thumbnail6 from "../../assets/images/event6_thumbnail.png";
import { useTranslation } from "react-i18next";
import "./VideosPage.css";

const VideosPage = () => {
  const events = {
    event1: "parent-meeting-1",
    event2: "equestrian-club-trip",
    event3: "football-oylmpics",
    event4: "cultural-day",
    event5: "honoring-ceremony",
    event6: "teachers-training",
  };
  const { t } = useTranslation();
  return (
    <div className="events__container">
      <CardComp
        cardImg={Thumbnail2}
        cardTitle={t("event2")}
        cardDate={t("date1")}
        linkUrl={`/qurtuba-complex/boys/international/events-video/${events.event2}`}
        linkName={t("videoAction")}
      />
      <CardComp
        cardImg={Thumbnail3}
        cardTitle={t("event3")}
        cardDate={t("date1")}
        linkUrl={`/qurtuba-complex/boys/international/events-video/${events.event3}`}
        linkName={t("videoAction")}
      />
      <CardComp
        cardImg={Thumbnail6}
        cardTitle={t("event6")}
        cardDate={t("date1")}
        linkUrl={`/qurtuba-complex/boys/international/events-video/${events.event6}`}
        linkName={t("videoAction")}
      />
    </div>
  );
};

export default VideosPage;
