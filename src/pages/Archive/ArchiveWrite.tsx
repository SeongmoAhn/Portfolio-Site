import {useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import styles from "./ArchiveWrite.module.css";
import {createPost, fetchPost, updatePost} from "../../lib/archive";
import {ARCHIVE_PASSWORD} from "../../lib/archivePassword";

const languages = [
  "JavaScript", "TypeScript", "Java", "Kotlin", "Python",
  "HTML", "CSS", "SQL", "Bash", "JSON", "YAML",
];

export default function ArchiveWrite() {
  const navigate = useNavigate();
  const {id} = useParams<{ id: string }>();
  const isEdit = Boolean(id);

  const [title, setTitle] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState(false);
  const [body, setBody] = useState("");
  const [codeLanguage, setCodeLanguage] = useState("");
  const [code, setCode] = useState("");
  const [tagInput, setTagInput] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [loading, setLoading] = useState(isEdit);

  useEffect(() => {
    if (!id) return;
    fetchPost(id)
      .then((post) => {
        if (!post) {
          navigate("/archive");
          return;
        }
        setTitle(post.title);
        setBody(post.body);
        setCode(post.code ?? "");
        setCodeLanguage(post.code_language ?? "");
        setTagInput(post.tags.join(", "));
      })
      .finally(() => setLoading(false));
  }, [id, navigate]);

  const canSave = title.trim() && body.trim() && password.trim();

  const handleSave = async () => {
    if (!canSave) return;

    if (password !== ARCHIVE_PASSWORD) {
      setPasswordError(true);
      return;
    }
    setPasswordError(false);

    setSubmitting(true);
    try {
      const tags = tagInput
        .split(",")
        .map((tag) => tag.trim())
        .filter(Boolean);

      if (isEdit && id) {
        await updatePost(id, {
          title: title.trim(),
          body: body.trim(),
          code,
          codeLanguage,
          tags,
          password: ARCHIVE_PASSWORD,
        });
        navigate(`/archive/${id}`);
        return;
      }

      const newId = await createPost({
        title: title.trim(),
        body: body.trim(),
        code,
        codeLanguage,
        tags,
        password: ARCHIVE_PASSWORD,
      });

      navigate(`/archive/${newId}`);
    } finally {
      setSubmitting(false);
    }
  };

  if (loading) {
    return (
      <div className={`${styles.section} section container`}>
        <p className={styles.message}>불러오는 중...</p>
      </div>
    );
  }

  return (
    <div className={`${styles.section} section container`}>
      <div className={styles.field}>
        <div className={styles.fieldHeader}>
          <label className={styles.label}>제목</label>
          <div className={styles.passwordGroup}>
            <input
              type="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setPasswordError(false);
              }}
              placeholder="비밀번호"
              className={styles.passwordInput}
            />
            {passwordError && <span className={styles.passwordError}>비밀번호가 일치하지 않습니다.</span>}
          </div>
        </div>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="제목을 작성해주세요."
          className={styles.textInput}
        />
      </div>

      <div className={styles.field}>
        <label className={styles.label}>본문</label>
        <textarea
          value={body}
          onChange={(e) => setBody(e.target.value)}
          placeholder="문제 사항을 작성해주세요."
          className={styles.textarea}
          rows={4}
        />
      </div>

      <div className={styles.field}>
        <div className={styles.fieldHeader}>
          <label className={styles.label}>코드</label>
          <select
            value={codeLanguage}
            onChange={(e) => setCodeLanguage(e.target.value)}
            className={styles.languageSelect}
          >
            <option value="">언어 선택</option>
            {languages.map((lang) => (
              <option key={lang} value={lang}>{lang}</option>
            ))}
          </select>
        </div>
        <textarea
          value={code}
          onChange={(e) => setCode(e.target.value)}
          placeholder="코드를 작성해주세요."
          className={`${styles.textarea} ${styles.codeTextarea}`}
          rows={5}
        />
      </div>

      <div className={styles.footer}>
        <input
          type="text"
          value={tagInput}
          onChange={(e) => setTagInput(e.target.value)}
          placeholder="해시태그를 작성해주세요 (ex. Spring Boot, Redis, 캐시)"
          className={styles.tagInput}
        />
        <div className={styles.actions}>
          <button
            type="button"
            className={styles.cancelButton}
            onClick={() => navigate(isEdit && id ? `/archive/${id}` : "/archive")}
          >
            취소
          </button>
          <button
            type="button"
            className={styles.saveButton}
            onClick={handleSave}
            disabled={!canSave || submitting}
          >
            저장
          </button>
        </div>
      </div>
    </div>
  );
}
