"use client";

import { Button } from "@/components/shared/Button";
import React from "react";
import styles from "./Terminal.module.scss";
import { TerminalOutput, TerminalProps } from "./TerminalOutput";

export type Versions = {
  nodeVersion: string;
  nextVersion: string;
  tailwindVersion: string;
};

export function TerminalWindow({ commands }: TerminalProps) {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isMinimized, setIsMinimized] = React.useState(false);
  const [isZoomed, setIsZoomed] = React.useState(false);

  return (
    <>
      <Button
        label="About this site"
        icon="terminal"
        iconSize="2xl"
        method={open}
      />
      {isOpen && (
        <div
          className={`${styles.terminal} ${
            isMinimized ? styles.minimized : ""
          }`}
        >
          <div className={styles.bar}>
            <div className={styles.buttons}>
              <div
                className={`${styles.button} ${styles.close}`}
                onClick={() => setIsOpen(false)}
              ></div>
              <div
                className={`${styles.button} ${styles.minimize}`}
                onClick={() => minimize()}
              ></div>
              <div
                className={`${styles.button} ${styles.zoom}`}
                onClick={() => setIsZoomed(!isZoomed)}
              ></div>
            </div>
          </div>
          <div
            className={styles.window}
            style={{
              minHeight: isZoomed ? "80vh" : "40vh",
            }}
          >
            <TerminalOutput commands={commands} />
          </div>
        </div>
      )}
    </>
  );

  function open() {
    setIsOpen(true);
    if (isMinimized) {
      setIsMinimized(false);
    }
  }

  function minimize() {
    setIsMinimized(true);
  }
}
