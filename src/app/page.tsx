import Image from "next/image";
import classes from "./page.module.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Answwr",
  description:
    "Answwr is a cool and modern decision maker, so cool that you&rsquo;d think there is an AI managing the thing.",
};

export default function Home() {
  return (
    <main className={classes.content}>
      <a
        className={classes.storeLink}
        href="https://play.google.com/store/apps/details?id=com.answwr.android"
        rel="noopener noreferrer"
        target="_blank"
      >
        <div className={classes.storeLinkContent}>
          <h1 className={classes.storeLinkTitle}>
            answ<span className={classes.storeLinkWr}>wr</span>
          </h1>
          <div>You&rsquo;d think there is an IA in there,</div>
          <div>but really, there is not.</div>
          <div className={classes.storeLinkBackground}></div>
        </div>
      </a>
      <p className={classes.paragraph}>
        <span className={classes.paragraphAnswwr}>
          Answ<span className={classes.paragraphWr}>wr</span>
        </span>{" "}
        is a cool and modern decision maker, so cool that you&rsquo;d think
        there is an AI managing the thing.
      </p>
      <p className={classes.paragraph}>
        With{" "}
        <span className={classes.paragraphAnswwr}>
          Answ<span className={classes.paragraphWr}>wr</span>
        </span>{" "}
        you&rsquo;ll be able to decide between choices in the most elegant ways,
        meaning you&rsquo;ll have to fill a bunch of forms, hit a green button
        and generate a totally fair and unbiased random result.
      </p>
      <p className={classes.paragraph}>
        It&rsquo;s important to precise the result will be totally fair and
        unbiased, that&rsquo;s why we made the Redo button.
      </p>
      <a
        className={classes.googlePlay}
        href="https://play.google.com/store/apps/details?id=com.answwr.android&utm_source=brunosabot-website&pcampaignid=MKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1"
        rel="noopener noreferrer"
        target="_blank"
      >
        <Image
          alt="Get it on Google Play"
          className={classes.googlePlayImage}
          src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
          height="77"
          width="200"
        />
      </a>
    </main>
  );
}
