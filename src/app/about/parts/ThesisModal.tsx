"use client";

import { Dialog, Button, Column } from "@/once-ui/components";
import React from "react";

export default function ThesisModal({
  name,
  url,
}: {
  name: string;
  url: string;
}) {
  const [isOpen, setIsOpen] = React.useState(false);

  if (!name) return;

  return (
    <>
      <Button
        variant="primary"
        size="m"
        onClick={() => setIsOpen(!isOpen)}
        label="View Thesis"
      ></Button>

      <Dialog
        fillWidth
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title="Thesis"
      >
        <object
          data={url}
          title={name}
          width="100%"
          height="800"
          style={{ border: "none" }}
        ></object>
      </Dialog>
    </>
  );
}
