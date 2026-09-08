import {useEffect, useState} from "react";
import {Link, useNavigate, useParams} from "react-router-dom";
import styles from "./ArchiveDetail.module.css";
import Modal from "../../components/common/Modal/Modal";
import {
  createAnswer,
  deleteAnswer,
  deletePost,
  fetchAnswers,
  fetchPost,
  setPostResolved,
  updateAnswer,
} from "../../lib/archive";
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

  const [showStatusModal, setShowStatusModal] = useState(false);
  const [statusPassword, setStatusPassword] = useState("");
  const [statusPasswordError, setStatusPasswordError] = useState(false);
  const [changingStatus, setChangingStatus] = useState(false);

  const [showDeletePostConfirm, setShowDeletePostConfirm] = useState(false);
  const [deletePostPassword, setDeletePostPassword] = useState("");
  const [deletePostError, setDeletePostError] = useState(false);
  const [deletingPost, setDeletingPost] = useState(false);

  const [editingAnswerId, setEditingAnswerId] = useState<string | null>(null);
  const [editingAnswerBody, setEditingAnswerBody] = useState("");
  const [editingAnswerPassword, setEditingAnswerPassword] = useState("");
  const [editingAnswerError, setEditingAnswerError] = useState(false);
  const [savingAnswer, setSavingAnswer] = useState(false);

  const [answerDeleteTarget, setAnswerDeleteTarget] = useState<ArchiveAnswer | null>(null);
  const [deleteAnswerPassword, setDeleteAnswerPassword] = useState("");
  const [deleteAnswerError, setDeleteAnswerError] = useState(false);
  const [deletingAnswer, setDeletingAnswer] = useState(false);

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

  const closeStatusModal = () => {
    setShowStatusModal(false);
    setStatusPassword("");
    setStatusPasswordError(false);
  };

  const blockedByNoAnswer = showStatusModal && !post?.resolved && answers.length === 0;

  const handleConfirmStatusChange = async () => {
    if (!post || blockedByNoAnswer) return;

    if (statusPassword !== ARCHIVE_PASSWORD) {
      setStatusPasswordError(true);
      return;
    }

    setChangingStatus(true);
    try {
      const nextResolved = !post.resolved;
      await setPostResolved(post.id, nextResolved);
      setPost({...post, resolved: nextResolved});
      closeStatusModal();
    } finally {
      setChangingStatus(false);
    }
  };

  const closeDeletePostModal = () => {
    setShowDeletePostConfirm(false);
    setDeletePostPassword("");
    setDeletePostError(false);
  };

  const handleConfirmDeletePost = async () => {
    if (!post) return;
    if (deletePostPassword !== ARCHIVE_PASSWORD) {
      setDeletePostError(true);
      return;
    }

    setDeletingPost(true);
    try {
      await deletePost(post.id, ARCHIVE_PASSWORD);
      navigate("/archive");
    } finally {
      setDeletingPost(false);
    }
  };

  const startEditAnswer = (answer: ArchiveAnswer) => {
    setEditingAnswerId(answer.id);
    setEditingAnswerBody(answer.body);
    setEditingAnswerPassword("");
    setEditingAnswerError(false);
  };

  const cancelEditAnswer = () => {
    setEditingAnswerId(null);
    setEditingAnswerBody("");
    setEditingAnswerPassword("");
    setEditingAnswerError(false);
  };

  const handleSaveAnswer = async () => {
    if (!id || !editingAnswerId || !editingAnswerBody.trim() || !editingAnswerPassword.trim()) return;

    if (editingAnswerPassword !== ARCHIVE_PASSWORD) {
      setEditingAnswerError(true);
      return;
    }

    setSavingAnswer(true);
    try {
      await updateAnswer(editingAnswerId, editingAnswerBody.trim(), ARCHIVE_PASSWORD);
      setAnswers(await fetchAnswers(id));
      cancelEditAnswer();
    } finally {
      setSavingAnswer(false);
    }
  };

  const closeDeleteAnswerModal = () => {
    setAnswerDeleteTarget(null);
    setDeleteAnswerPassword("");
    setDeleteAnswerError(false);
  };

  const handleConfirmDeleteAnswer = async () => {
    if (!id || !answerDeleteTarget) return;
    if (deleteAnswerPassword !== ARCHIVE_PASSWORD) {
      setDeleteAnswerError(true);
      return;
    }

    setDeletingAnswer(true);
    try {
      await deleteAnswer(answerDeleteTarget.id, ARCHIVE_PASSWORD);
      setAnswers(await fetchAnswers(id));
      closeDeleteAnswerModal();
    } finally {
      setDeletingAnswer(false);
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
      <div className={styles.pageToolbar}>
        <Link to="/archive" className={styles.backButton}>목록으로</Link>
        <div className={styles.postActions}>
          <Link to={`/archive/${post.id}/edit`} className={styles.editButton}>수정</Link>
          <button
            type="button"
            className={styles.deleteButton}
            onClick={() => setShowDeletePostConfirm(true)}
          >
            삭제
          </button>
        </div>
      </div>

      <div className={styles.postBox}>
        <div className={styles.postHeader}>
          <div>
            <h1 className={styles.postTitle}>{post.title}</h1>
            <span className={styles.answerCount}>답변 {answers.length}</span>
          </div>
          <button type="button" className={styles.statusBadge} onClick={() => setShowStatusModal(true)}>
            <span className={`${styles.statusCircle} ${post.resolved ? styles.statusCircleDone : ""}`}>
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 13l4 4L19 7"/>
              </svg>
            </span>
            <span className={`${styles.statusLabel} ${post.resolved ? styles.statusLabelDone : ""}`}>
              {post.resolved ? "해결완료" : "미해결"}
            </span>
          </button>
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
            {editingAnswerId === answer.id ? (
              <div className={styles.answerEditForm}>
                <input
                  type="text"
                  value={editingAnswerBody}
                  onChange={(e) => setEditingAnswerBody(e.target.value)}
                  className={styles.answerInput}
                />
                <input
                  type="password"
                  value={editingAnswerPassword}
                  onChange={(e) => {
                    setEditingAnswerPassword(e.target.value);
                    setEditingAnswerError(false);
                  }}
                  placeholder="비밀번호"
                  className={styles.passwordInput}
                />
                <div className={styles.answerEditActions}>
                  <button type="button" className={styles.cancelButton} onClick={cancelEditAnswer}>취소</button>
                  <button
                    type="button"
                    className={styles.saveButton}
                    onClick={handleSaveAnswer}
                    disabled={savingAnswer || !editingAnswerBody.trim() || !editingAnswerPassword.trim()}
                  >
                    저장
                  </button>
                </div>
                {editingAnswerError && <span className={styles.passwordError}>비밀번호가 일치하지 않습니다.</span>}
              </div>
            ) : (
              <>
                <div className={styles.answerItemHeader}>
                  <span className={styles.answerDate}>{formatDate(answer.created_at)}</span>
                  <div className={styles.answerActions}>
                    <button type="button" className={styles.editButton} onClick={() => startEditAnswer(answer)}>수정</button>
                    <button
                      type="button"
                      className={styles.deleteButton}
                      onClick={() => setAnswerDeleteTarget(answer)}
                    >
                      삭제
                    </button>
                  </div>
                </div>
                <p className={styles.answerBody}>{answer.body}</p>
              </>
            )}
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

      {showStatusModal && (
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
                {post.resolved ? "미해결" : "해결완료"} 처리하시겠습니까?
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
                <button type="button" className={styles.saveButton} onClick={handleConfirmStatusChange} disabled={changingStatus}>저장</button>
              </div>
            </>
          )}
        </Modal>
      )}

      {showDeletePostConfirm && (
        <Modal title="글 삭제" onClose={closeDeletePostModal} maxWidth={480}>
          <p className={styles.confirmText}>이 글을 삭제하시겠습니까?</p>
          <p className={styles.confirmSubtext}>삭제한 글은 복구할 수 없습니다.</p>
          <input
            type="password"
            value={deletePostPassword}
            onChange={(e) => {
              setDeletePostPassword(e.target.value);
              setDeletePostError(false);
            }}
            placeholder="비밀번호"
            className={styles.confirmPasswordInput}
          />
          {deletePostError && <span className={styles.passwordError}>비밀번호가 일치하지 않습니다.</span>}
          <div className={styles.confirmActions}>
            <button type="button" className={styles.cancelButton} onClick={closeDeletePostModal}>취소</button>
            <button type="button" className={styles.deleteConfirmButton} onClick={handleConfirmDeletePost} disabled={deletingPost}>삭제</button>
          </div>
        </Modal>
      )}

      {answerDeleteTarget && (
        <Modal title="답변 삭제" onClose={closeDeleteAnswerModal} maxWidth={480}>
          <p className={styles.confirmText}>이 답변을 삭제하시겠습니까?</p>
          <p className={styles.confirmSubtext}>삭제한 답변은 복구할 수 없습니다.</p>
          <input
            type="password"
            value={deleteAnswerPassword}
            onChange={(e) => {
              setDeleteAnswerPassword(e.target.value);
              setDeleteAnswerError(false);
            }}
            placeholder="비밀번호"
            className={styles.confirmPasswordInput}
          />
          {deleteAnswerError && <span className={styles.passwordError}>비밀번호가 일치하지 않습니다.</span>}
          <div className={styles.confirmActions}>
            <button type="button" className={styles.cancelButton} onClick={closeDeleteAnswerModal}>취소</button>
            <button type="button" className={styles.deleteConfirmButton} onClick={handleConfirmDeleteAnswer} disabled={deletingAnswer}>삭제</button>
          </div>
        </Modal>
      )}
    </div>
  );
}
