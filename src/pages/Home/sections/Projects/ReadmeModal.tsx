import {useEffect, useState} from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import Modal from "../../../../components/common/Modal/Modal";
import type {Project} from "../../../../types";
import styles from "./ReadmeModal.module.css";

interface ReadmeModalProps {
  project: Project;
  onClose: () => void;
}

export default function ReadmeModal({project, onClose}: ReadmeModalProps) {
  const [content, setContent] = useState("");
  const [status, setStatus] = useState<"loading" | "done" | "error">("loading");

  useEffect(() => {
    const readmePath = project.readmePath;
    if (!readmePath) {
      setStatus("error");
      return;
    }

    let cancelled = false;
    setStatus("loading");

    fetch(readmePath)
      .then((res) => {
        if (!res.ok) throw new Error("README를 불러오지 못했습니다.");
        return res.text();
      })
      .then((text) => {
        if (cancelled) return;
        setContent(text);
        setStatus("done");
      })
      .catch(() => {
        if (cancelled) return;
        setStatus("error");
      });

    return () => {
      cancelled = true;
    };
  }, [project.readmePath]);

  return (
    <Modal title={project.name} onClose={onClose}>
      {status === "loading" && <p className={styles.message}>불러오는 중...</p>}
      {status === "error" && <p className={styles.message}>README를 불러오지 못했습니다.</p>}
      {status === "done" && (
        <div className={styles.markdown}>
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
        </div>
      )}
    </Modal>
  );
}
