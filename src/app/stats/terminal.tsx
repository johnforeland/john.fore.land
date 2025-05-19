"use client";

import React from "react";
import styles from "./terminal.module.scss";

type TerminalProps = {
  nodeVersion: string;
  nextVersion: string;
};

export function Terminal(props: TerminalProps) {
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
      response: props.nextVersion,
    },
    {
      cmd: "az staticwebapp -n john.fore.land",
      response: (
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
      ),
    },
  ];

  return (
    <>
      <div className={styles.bar}>
        <div className={`${styles.buttons} ${styles.close}`}></div>
        <div className={`${styles.buttons} ${styles.minimize}`}></div>
        <div className={`${styles.buttons} ${styles.zoom}`}></div>
      </div>
      <div className={styles.window}>
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
      </div>
    </>
  );
}
