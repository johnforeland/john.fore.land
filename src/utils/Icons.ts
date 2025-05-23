import { IconType } from "react-icons";

import {
  HiArrowUpRight,
  HiCalendar,
  HiCheck,
  HiCheckCircle,
  HiChevronDown,
  HiChevronLeft,
  HiChevronRight,
  HiChevronUp,
  HiExclamationCircle,
  HiExclamationTriangle,
  HiEyeDropper,
  HiInformationCircle,
  HiMiniMinus,
  HiMiniPlus,
  HiMiniQuestionMarkCircle,
  HiMiniXMark,
  HiOutlineArrowPath,
  HiOutlineClipboard,
  HiOutlineComputerDesktop,
  HiOutlineEye,
  HiOutlineEyeSlash,
  HiOutlineLink,
  HiOutlineMagnifyingGlass,
  HiOutlineMoon,
  HiOutlineShieldCheck,
  HiOutlineSparkles,
  HiOutlineSun,
} from "react-icons/hi2";

import { IoTerminal } from "react-icons/io5";

import {
  PiHouseDuotone,
  PiImageDuotone,
  PiUserCircleDuotone,
} from "react-icons/pi";

import { RiVisaLine } from "react-icons/ri";

import { GoRepoForked } from "react-icons/go";

import { FaDiscord, FaGithub, FaGoogle, FaLinkedin } from "react-icons/fa6";

import { LuChevronsLeftRight } from "react-icons/lu";

import { PiProjectorScreenChart } from "react-icons/pi";

export const iconLibrary: Record<string, IconType> = {
  chevronUp: HiChevronUp,
  chevronDown: HiChevronDown,
  chevronRight: HiChevronRight,
  chevronLeft: HiChevronLeft,
  chevronsLeftRight: LuChevronsLeftRight,
  refresh: HiOutlineArrowPath,
  check: HiCheck,
  light: HiOutlineSun,
  dark: HiOutlineMoon,
  helpCircle: HiMiniQuestionMarkCircle,
  infoCircle: HiInformationCircle,
  warningTriangle: HiExclamationTriangle,
  errorCircle: HiExclamationCircle,
  checkCircle: HiCheckCircle,
  person: PiUserCircleDuotone,
  terminal: IoTerminal,
  work: PiProjectorScreenChart,
  eyeDropper: HiEyeDropper,
  clipboard: HiOutlineClipboard,
  close: HiMiniXMark,
  openLink: HiOutlineLink,
  discord: FaDiscord,
  sourceCode: GoRepoForked,
  linkedin: FaLinkedin,
  home: PiHouseDuotone,
  gallery: PiImageDuotone,
  google: FaGoogle,
  github: FaGithub,
  arrowUpRight: HiArrowUpRight,
  minus: HiMiniMinus,
  plus: HiMiniPlus,
  calendar: HiCalendar,
  eye: HiOutlineEye,
  eyeOff: HiOutlineEyeSlash,
  search: HiOutlineMagnifyingGlass,
  visa: RiVisaLine,
  security: HiOutlineShieldCheck,
  sparkle: HiOutlineSparkles,
  computer: HiOutlineComputerDesktop,
};

export type IconLibrary = typeof iconLibrary;
export type IconName = keyof IconLibrary;
