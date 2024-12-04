import React from "react";
import DeviceTitle from "./title";
import { devices } from "./devicesItems";
import DeviceCard from "./card";
import styles from "./styles.module.css";

export default function Devices() {
  return (
    <section className={styles.devicesSection}>
      <DeviceTitle />
      <main className={styles.devicesMain}>
        {devices?.map((device, index) => (
          <DeviceCard key={index} {...device} />
        ))}
      </main>
    </section>
  );
}
