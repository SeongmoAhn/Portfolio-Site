import {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import styles from "./ArchiveList.module.css";
import Modal from "../../components/common/Modal/Modal";
import {fetchPosts, setPostResolved} from "../../lib/archive";
import {formatDate} from "../../lib/format";
import {ARCHIVE_PASSWORD} from "../../lib/archivePassword";
import type {ArchivePost} from "../../types";

export default function ArchiveList() {
  const [posts, setPosts] = useState<ArchivePost[]>([]);
  const [loading, setLoading] = useState(true);
  const [showResolved, setShowResolved] = useState(false);
  const [showUnresolved, setShowUnresolved] = useState(false);
  const [statusTarget, setStatusTarget] = useState<ArchivePost | null>(null);
  const [statusPassword, setStatusPassword] = useState("");
  const [statusPasswordError, setStatusPasswordError] = useState(false);

  useEffect(() => {
    fetchPosts()
      .then(setPosts)
      .finally(() => setLoading(false));
  }, []);

  const noFilter = !showResolved && !showUnresolved;
  const visiblePosts = posts.filter((post) =>
    noFilter || (post.resolved ? showResolved : showUnresolved)
  );

  const closeStatusModal = () => {
    setStatusTarget(null);
    setStatusPassword("");
    setStatusPasswordError(false);
  };

  const blockedByNoAnswer = statusTarget !== null
    && !statusTarget.resolved
    && statusTarget.answer_count === 0;

  const handleConfirmStatus = async () => {
    if (!statusTarget || blockedByNoAnswer) return;

    if (statusPassword !== ARCHIVE_PASSWORD) {
      setStatusPasswordError(true);
      return;
    }

    const nextResolved = !statusTarget.resolved;
    await setPostResolved(statusTarget.id, nextResolved);
    setPosts((prev) =>
      prev.map((post) =>
        post.id === statusTarget.id ? {...post, resolved: nextResolved} : post
      )
    );
    closeStatusModal();
  };

  return (
    <div className={`${styles.section} section container`}>
      <h2 className={styles.title}>ARCHIVE</h2>

      <div className={styles.toolbar}>
        <div className={styles.filters}>
          <button
            type="button"
            className={`${styles.filterChip} ${showResolved ? styles.filterChipActive : ""}`}
            onClick={() => setShowResolved((v) => {
              const next = !v;
              if (next) setShowUnresolved(false);
              return next;
            })}
          >
            해결완료
          </button>
          <button
            type="button"
            className={`${styles.filterChip} ${showUnresolved ? styles.filterChipActive : ""}`}
            onClick={() => setShowUnresolved((v) => {
              const next = !v;
              if (next) setShowResolved(false);
              return next;
            })}
          >
            미해결
          </button>
        </div>

        <Link to="/archive/new" className={styles.writeButton}>새 글 작성</Link>
      </div>

      {loading && <p className={styles.message}>불러오는 중...</p>}
      {!loading && visiblePosts.length === 0 && (
        <p className={styles.message}>표시할 글이 없어요.</p>
      )}

      <div className={styles.list}>
        {visiblePosts.map((post) => (
          <div key={post.id} className={styles.card}>
            <Link to={`/archive/${post.id}`} className={styles.cardMain}>
              <div className={styles.cardHeader}>
                <div>
                  <h3 className={styles.cardTitle}>{post.title}</h3>
                  <span className={styles.answerCount}>답변 {post.answer_count}</span>
                </div>
              </div>

              <p className={styles.cardBody}>{post.body}</p>

              <div className={styles.cardFooter}>
                <div className={styles.tags}>
                  {post.tags.map((tag) => (
                    <span key={tag} className={styles.tag}>#{tag}</span>
                  ))}
                </div>
                <span className={styles.date}>작성일 {formatDate(post.created_at)}</span>
              </div>
            </Link>

            <button
              type="button"
              className={styles.statusButton}
              onClick={() => {
                setStatusTarget(post);
                setStatusPassword("");
                setStatusPasswordError(false);
              }}
            >
              <span className={`${styles.statusCircle} ${post.resolved ? styles.statusCircleDone : ""}`}>
                <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 13l4 4L19 7"/>
                </svg>
              </span>
              <span className={`${styles.statusLabel} ${post.resolved ? styles.statusLabelDone : ""}`}>
                {post.resolved ? "해결완료" : "미해결"}
              </span>
            </button>
          </div>
        ))}
      </div>

      {statusTarget && (
        <Modal title="상태 변경" onClose={closeStatusModal} maxWidth={480}>
          {blockedByNoAnswer ? (
            <>
              <p className={styles.confirmText}>답변이 1개 이상 있어야 해결완료로 변경할 수 있어요.</p>
              <div className={styles.confirmActions}>
                <button type="button" className={styles.saveButton} onClick={closeStatusModal}>확인</button>
              </div>
            </>
          ) : (
            <>
              <p className={styles.confirmText}>
                {statusTarget.resolved ? "미해결" : "해결완료"} 처리하시겠습니까?
              </p>
              <p className={styles.confirmSubtext}>언제든 다시 변경할 수 있습니다.</p>
              <input
                type="password"
                value={statusPassword}
                onChange={(e) => {
                  setStatusPassword(e.target.value);
                  setStatusPasswordError(false);
                }}
                placeholder="비밀번호"
                className={styles.confirmPasswordInput}
              />
              {statusPasswordError && <span className={styles.passwordError}>비밀번호가 일치하지 않습니다.</span>}
              <div className={styles.confirmActions}>
                <button type="button" className={styles.cancelButton} onClick={closeStatusModal}>취소</button>
                <button type="button" className={styles.saveButton} onClick={handleConfirmStatus}>저장</button>
              </div>
            </>
          )}
        </Modal>
      )}
    </div>
  );
}
