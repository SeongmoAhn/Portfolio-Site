-- Archive: 글/답변 수정·삭제 RPC
--
-- Supabase 대시보드 > SQL Editor 에서 이 파일 전체를 실행하세요.
--
-- ⚠️ 실행 전에 아래 '__ARCHIVE_PASSWORD__' 를
--    .env.local 의 VITE_ARCHIVE_PASSWORD 값과 정확히 동일한 문자열로 바꿔주세요.
-- ⚠️ 테이블/컬럼명은 archive_posts_public / archive_answers_public 뷰를 기준으로
--    archive_posts(id, title, body, code, code_language, tags, resolved, created_at),
--    archive_answers(id, post_id, body, created_at) 라고 가정했습니다.
--    실제 테이블명·컬럼명이 다르면 맞게 수정한 뒤 실행해주세요.

create or replace function archive_check_password(p_password text)
returns void
language plpgsql
security definer
set search_path = public
as $$
begin
  if p_password is null or p_password <> '__ARCHIVE_PASSWORD__' then
    raise exception 'invalid password' using errcode = '28000';
  end if;
end;
$$;

create or replace function update_post(
  p_id uuid,
  p_password text,
  p_title text,
  p_body text,
  p_code text,
  p_code_language text,
  p_tags text[]
)
returns void
language plpgsql
security definer
set search_path = public
as $$
begin
  perform archive_check_password(p_password);

  update archive_posts
     set title = p_title,
         body = p_body,
         code = p_code,
         code_language = p_code_language,
         tags = p_tags
   where id = p_id;

  if not found then
    raise exception 'post not found';
  end if;
end;
$$;

create or replace function delete_post(
  p_id uuid,
  p_password text
)
returns void
language plpgsql
security definer
set search_path = public
as $$
begin
  perform archive_check_password(p_password);

  delete from archive_answers where post_id = p_id;
  delete from archive_posts where id = p_id;
end;
$$;

create or replace function update_answer(
  p_id uuid,
  p_password text,
  p_body text
)
returns void
language plpgsql
security definer
set search_path = public
as $$
begin
  perform archive_check_password(p_password);

  update archive_answers
     set body = p_body
   where id = p_id;

  if not found then
    raise exception 'answer not found';
  end if;
end;
$$;

create or replace function delete_answer(
  p_id uuid,
  p_password text
)
returns void
language plpgsql
security definer
set search_path = public
as $$
begin
  perform archive_check_password(p_password);

  delete from archive_answers where id = p_id;
end;
$$;

grant execute on function update_post(uuid, text, text, text, text, text, text[]) to anon, authenticated;
grant execute on function delete_post(uuid, text) to anon, authenticated;
grant execute on function update_answer(uuid, text, text) to anon, authenticated;
grant execute on function delete_answer(uuid, text) to anon, authenticated;
