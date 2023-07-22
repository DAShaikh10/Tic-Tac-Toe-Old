import { IconType } from "react-icons/lib";
import { FiFigma } from "react-icons/fi";
import { AiFillGithub } from "react-icons/ai";
import { GoStar, GoEye } from "react-icons/go";

type buttonDataType = {
  href: string;
  text: string;
  ariaLabel: string;
  Icon: IconType;
  iconProps: { color: string; size: string };
};

export const buttonData: buttonDataType[] = [
  {
    href: "https://github.com/DAShaikh10/Tic-Tac-Toe",
    text: "Star",
    ariaLabel: "Star DAShaikh10/Tic-Tac-Toe on GitHub",
    Icon: GoStar,
    iconProps: { color: "#24292f", size: "1.5em" },
  },
  {
    href: "https://github.com/DAShaikh10/Tic-Tac-Toe/subscription",
    text: "Watch",
    ariaLabel: "Watch DAShaikh10/Tic-Tac-Toe on GitHub",
    Icon: GoEye,
    iconProps: { color: "#24292f", size: "1.5em" },
  },
  {
    href: "https://github.com/DAShaikh10",
    text: "Follow @DAShaikh10",
    ariaLabel: "Follow @DAShaikh10 on GitHub",
    Icon: AiFillGithub,
    iconProps: { color: "#24292f", size: "1.5em" },
  },
  {
    href: "https://www.figma.com/community/file/1254192154560627135",
    text: "Figma by @anuj_uchil",
    ariaLabel: "Figma by @anuj_uchil",
    Icon: FiFigma,
    iconProps: { color: "#24292f", size: "1.5em" },
  },
];

export function isWinner(board: string[]): boolean {
  return (board[0] === board[1] && board[1] === board[2] && board[0] !== "") ||
    (board[3] === board[4] && board[4] === board[5] && board[3] !== "") ||
    (board[6] === board[7] && board[7] === board[8] && board[6] !== "") ||
    (board[0] === board[3] && board[3] === board[6] && board[0] !== "") ||
    (board[1] === board[4] && board[4] === board[7] && board[1] !== "") ||
    (board[2] === board[5] && board[5] === board[8] && board[2] !== "") ||
    (board[0] === board[4] && board[4] === board[8] && board[0] !== "") ||
    (board[2] === board[4] && board[4] === board[6] && board[2] !== "")
    ? true
    : false;
}

export function isTie(board: string[]): boolean {
  for (let i = 0; i < board.length; i++) if (board[i] === "") return false;
  return true;
}
