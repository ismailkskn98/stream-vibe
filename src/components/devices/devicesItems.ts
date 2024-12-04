import { RiSmartphoneFill } from "react-icons/ri";
import { FaTablet } from "react-icons/fa6";
import { IoTvSharp } from "react-icons/io5";
import { BsLaptopFill } from "react-icons/bs";
import { IoGameController } from "react-icons/io5";
import { BsHeadsetVr } from "react-icons/bs";
import type { DeviceType } from "@/types";

export const devices: DeviceType[] = [
  {
    title: "Akıllı Telefonlar",
    description: "StreamVibe, hem Android hem de iOS akıllı telefonlar için optimize edilmiştir. Uygulamamızı Google Play Store veya Apple App Store'dan indirin",
    Icon: RiSmartphoneFill,
  },
  {
    title: "Tablet",
    description: "StreamVibe, hem Android hem de iOS tabletler için optimize edilmiştir. Uygulamamızı Google Play Store veya Apple App Store'dan indirin",
    Icon: FaTablet,
  },
  {
    title: "Akıllı TV",
    description: "StreamVibe, akıllı TV'ler için optimize edilmiştir. Uygulamamızı Google Play Store veya Apple App Store'dan indirin",
    Icon: IoTvSharp,
  },
  {
    title: "Dizüstü Bilgisayarlar",
    description: "StreamVibe, dizüstü bilgisayarlar için optimize edilmiştir. Uygulamamızı Google Play Store veya Apple App Store'dan indirin",
    Icon: BsLaptopFill,
  },
  {
    title: "Oyun Konsolları",
    description: "StreamVibe, oyun konsolları için optimize edilmiştir. Uygulamamızı Google Play Store veya Apple App Store'dan indirin",
    Icon: IoGameController,
  },
  {
    title: "VR Başlıkları",
    description: "StreamVibe, VR başlıkları için optimize edilmiştir. Uygulamamızı Google Play Store veya Apple App Store'dan indirin",
    Icon: BsHeadsetVr,
  },
];
