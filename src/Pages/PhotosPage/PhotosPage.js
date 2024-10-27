import React from "react";
import CardComp from "../../Components/CardComponent/CardComp";
import Thumbnail1 from "../../assets/images/event1_thumbnail.png";
import Thumbnail2 from "../../assets/images/event2_thumbnail.png";
import Thumbnail3 from "../../assets/images/event3_thumbnail.png";
import Thumbnail4 from "../../assets/images/event4_thumbnail.png";
import Thumbnail5 from "../../assets/images/event5_thumbnail.png";
import Thumbnail6 from "../../assets/images/event6_thumbnail.png";
import { useTranslation } from "react-i18next";
import "./PhotosPage.css";

const PhotosPage = () => {
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
        cardImg={Thumbnail1}
        cardTitle={t("event1")}
        cardDate={t("date1")}
        linkUrl={`/qurtuba-complex/boys/international/events-photo/${events.event1}`}
        linkName={t("photoAction")}
      />
      <CardComp
        cardImg={Thumbnail2}
        cardTitle={t("event2")}
        cardDate={t("date1")}
        linkUrl={`/qurtuba-complex/boys/international/events-photo/${events.event2}`}
        linkName={t("photoAction")}
      />
      <CardComp
        cardImg={Thumbnail3}
        cardTitle={t("event3")}
        cardDate={t("date1")}
        linkUrl={`/qurtuba-complex/boys/international/events-photo/${events.event3}`}
        linkName={t("photoAction")}
      />
      <CardComp
        cardImg={Thumbnail4}
        cardTitle={t("event4")}
        cardDate={t("date1")}
        linkUrl={`/qurtuba-complex/boys/international/events-photo/${events.event4}`}
        linkName={t("photoAction")}
      />
      <CardComp
        cardImg={Thumbnail5}
        cardTitle={t("event5")}
        cardDate={t("date1")}
        linkUrl={`/qurtuba-complex/boys/international/events-photo/${events.event5}`}
        linkName={t("photoAction")}
      />
      <CardComp
        cardImg={Thumbnail6}
        cardTitle={t("event6")}
        cardDate={t("date1")}
        linkUrl={`/qurtuba-complex/boys/international/events-photo/${events.event6}`}
        linkName={t("photoAction")}
      />
    </div>
  );
};

export default PhotosPage;
