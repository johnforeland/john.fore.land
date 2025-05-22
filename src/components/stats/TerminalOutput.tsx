"use client";

import React, { JSX } from "react";
import styles from "./Terminal.module.scss";

export type CommandsProps = {
  cmd: string;
  response: string | JSX.Element;
};

export type TerminalProps = {
  commands: CommandsProps[];
};

export function TerminalOutput({ commands }: TerminalProps) {
  return (
    <>
      {commands.map(({ cmd, response }, index) => (
        <React.Fragment key={index}>
          <p
            className={`${styles.text} ${styles.cmd} ${
              styles["cmd" + (index + 1)]
            }`}
          >
            <br />
            {"> " + cmd}
            <span
              className={`${styles.cursor} ${styles["cursor" + (index + 1)]}`}
            >
              _
            </span>
          </p>
          <div
            className={`${styles.text} ${styles.response} ${
              styles["response" + (index + 1)]
            }`}
          >
            {response}
          </div>
        </React.Fragment>
      ))}

      <p className={`${styles.text} ${styles.cmd} ${styles.cmd4}`}>
        <br />
        {"> "}
        <span className={`${styles.cursor} ${styles.cursor4}`}>_</span>
      </p>
    </>
  );
}
