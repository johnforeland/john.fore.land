"use client";

import { Button } from "@/components/shared/Button";
import React from "react";
import styles from "./Terminal.module.scss";
import { CommandsProps, TerminalOutput } from "./TerminalOutput";

export type Versions = {
  nodeVersion: string;
  nextVersion: string;
};

export function Terminal(props: Versions) {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isMinimized, setIsMinimized] = React.useState(false);
  const [isZoomed, setIsZoomed] = React.useState(false);

  const azureOutput = `{
    "customDomain": "john.fore.land",
    "defaultHostname": "calm-glacier-0030b2c03.6.azurestaticapps.net",
    "location": "West Europe",
    "repositoryUrl": "https://github.com/johnforeland/john.fore.land",
    "resourceGroup": "rg-john.fore.land"
  }`;

  const commands = [
    {
      cmd: "node -v",
      response: props.nodeVersion,
    },
    {
      cmd: "next -v",
      response: props.nextVersion.replace(/next-server \(v([\d.]+)\)/, "v$1"),
    },
    {
      cmd: "az staticwebapp -n john.fore.land",
      response: formatJson(azureOutput),
    },
  ] as CommandsProps[];

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

function formatJson(azureOutput: string) {
  return (
    <pre>
      <span style={{ color: "cyan" }}>
        {"{"}
        <br />
      </span>
      {Object.entries(JSON.parse(azureOutput)).map(([key, value]) => (
        <div key={key} style={{ marginLeft: "20px" }}>
          <span style={{ color: "cyan" }}>{'"' + key + '"'}</span>:{" "}
          <span style={{ color: "orange" }}>
            {JSON.stringify(value, null, 2)}
          </span>
        </div>
      ))}
      <span style={{ color: "cyan" }}>
        {"}"}
        <br />
      </span>
    </pre>
  );
}
