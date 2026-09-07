import {useEffect, useState} from "react";
import {Link, useNavigate, useParams} from "react-router-dom";
import styles from "./ArchiveDetail.module.css";
import Modal from "../../components/common/Modal/Modal";
import {createAnswer, fetchAnswers, fetchPost, setPostResolved} from "../../lib/archive";
import {formatDate} from "../../lib/format";
import {ARCHIVE_PASSWORD} from "../../lib/archivePassword";
import type {ArchiveAnswer, ArchivePost} from "../../types";

export default function ArchiveDetail() {
  const {id} = useParams<{ id: string }>();
  const navigate = useNavigate();

  const [post, setPost] = useState<ArchivePost | null>(null);
  const [answers, setAnswers] = useState<ArchiveAnswer[]>([]);
  const [loading, setLoading] = useState(true);

  const [answerBody, setAnswerBody] = useState("");
  const [answerPassword, setAnswerPassword] = useState("");
  const [passwordError, setPasswordError] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [showResolvePrompt, setShowResolvePrompt] = useState(false);
  const [resolving, setResolving] = useState(false);

  useEffect(() => {
    if (!id) return;
    setLoading(true);
    Promise.all([fetchPost(id), fetchAnswers(id)])
      .then(([postData, answerData]) => {
        if (!postData) {
          navigate("/archive");
          return;
        }
        setPost(postData);
        setAnswers(answerData);
      })
      .finally(() => setLoading(false));
  }, [id, navigate]);

  const handleSubmitAnswer = async () => {
    if (!id || !answerBody.trim() || !answerPassword.trim()) return;

    if (answerPassword !== ARCHIVE_PASSWORD) {
      setPasswordError(true);
      return;
    }
    setPasswordError(false);

    setSubmitting(true);
    try {
      await createAnswer(id, answerBody.trim(), ARCHIVE_PASSWORD);
      setAnswers(await fetchAnswers(id));
      setAnswerBody("");
      setAnswerPassword("");
      if (post && !post.resolved) setShowResolvePrompt(true);
    } finally {
      setSubmitting(false);
    }
  };

  const handleConfirmResolve = async () => {
    if (!post) return;
    setResolving(true);
    try {
      await setPostResolved(post.id, true);
      setPost({...post, resolved: true});
    } finally {
      setResolving(false);
      setShowResolvePrompt(false);
    }
  };

  if (loading) {
    return (
      <div className={`${styles.section} section container`}>
        <p className={styles.message}>불러오는 중...</p>
      </div>
    );
  }

  if (!post) return null;

  return (
    <div className={`${styles.section} section container`}>
      <Link to="/archive" className={styles.backButton}>목록으로</Link>

      <div className={styles.postBox}>
        <div className={styles.postHeader}>
          <div>
            <h1 className={styles.postTitle}>{post.title}</h1>
            <span className={styles.answerCount}>답변 {answers.length}</span>
          </div>
          <div className={styles.statusBadge}>
            <span className={`${styles.statusCircle} ${post.resolved ? styles.statusCircleDone : ""}`}>
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 13l4 4L19 7"/>
              </svg>
            </span>
            <span className={`${styles.statusLabel} ${post.resolved ? styles.statusLabelDone : ""}`}>
              {post.resolved ? "해결완료" : "미해결"}
            </span>
          </div>
        </div>

        <p className={styles.postBody}>{post.body}</p>

        {post.code && (
          <pre className={styles.codeBlock}>
            <code>{post.code}</code>
          </pre>
        )}

        <div className={styles.postFooter}>
          <div className={styles.tags}>
            {post.tags.map((tag) => (
              <span key={tag} className={styles.tag}>#{tag}</span>
            ))}
          </div>
          <span className={styles.date}>작성일 {formatDate(post.created_at)}</span>
        </div>
      </div>

      <h2 className={styles.answersTitle}>답변</h2>

      <div className={styles.answerForm}>
        <div className={styles.answerFormRow}>
          <input
            type="text"
            value={answerBody}
            onChange={(e) => setAnswerBody(e.target.value)}
            placeholder="답변을 작성해주세요."
            className={styles.answerInput}
          />
          <input
            type="password"
            value={answerPassword}
            onChange={(e) => {
              setAnswerPassword(e.target.value);
              setPasswordError(false);
            }}
            placeholder="비밀번호"
            className={styles.passwordInput}
          />
          <button
            type="button"
            onClick={handleSubmitAnswer}
            disabled={submitting || !answerBody.trim() || !answerPassword.trim()}
            className={styles.submitButton}
          >
            저장
          </button>
        </div>
        {passwordError && <span className={styles.passwordError}>비밀번호가 일치하지 않습니다.</span>}
      </div>

      <div className={styles.answerList}>
        {answers.map((answer) => (
          <div key={answer.id} className={styles.answerItem}>
            <span className={styles.answerDate}>{formatDate(answer.created_at)}</span>
            <p className={styles.answerBody}>{answer.body}</p>
          </div>
        ))}
      </div>

      {showResolvePrompt && (
        <Modal title="상태 변경" onClose={() => setShowResolvePrompt(false)} maxWidth={480}>
          <p className={styles.confirmText}>이 글을 해결완료로 변경하시겠습니까?</p>
          <p className={styles.confirmSubtext}>언제든 다시 변경할 수 있습니다.</p>
          <div className={styles.confirmActions}>
            <button type="button" className={styles.cancelButton} onClick={() => setShowResolvePrompt(false)}>아니요</button>
            <button type="button" className={styles.saveButton} onClick={handleConfirmResolve} disabled={resolving}>해결완료로 변경</button>
          </div>
        </Modal>
      )}
    </div>
  );
}
