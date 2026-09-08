import {supabase} from "./supabaseClient";
import type {ArchiveAnswer, ArchivePost} from "../types";

export async function fetchPosts(): Promise<ArchivePost[]> {
  const {data, error} = await supabase
    .from("archive_posts_public")
    .select("*")
    .order("created_at", {ascending: false});

  if (error) throw error;
  return data as ArchivePost[];
}

export async function fetchPost(id: string): Promise<ArchivePost | null> {
  const {data, error} = await supabase
    .from("archive_posts_public")
    .select("*")
    .eq("id", id)
    .maybeSingle();

  if (error) throw error;
  return data as ArchivePost | null;
}

export async function fetchAnswers(postId: string): Promise<ArchiveAnswer[]> {
  const {data, error} = await supabase
    .from("archive_answers_public")
    .select("*")
    .eq("post_id", postId)
    .order("created_at", {ascending: false});

  if (error) throw error;
  return data as ArchiveAnswer[];
}

interface CreatePostInput {
  title: string;
  body: string;
  code: string;
  codeLanguage: string;
  tags: string[];
  password: string;
}

export async function createPost(input: CreatePostInput): Promise<string> {
  const {data, error} = await supabase.rpc("create_post", {
    p_title: input.title,
    p_body: input.body,
    p_code: input.code || null,
    p_code_language: input.codeLanguage || null,
    p_tags: input.tags,
    p_password: input.password,
  });

  if (error) throw error;
  return data as string;
}

export async function setPostResolved(id: string, resolved: boolean): Promise<void> {
  const {error} = await supabase.rpc("set_post_resolved", {
    p_id: id,
    p_resolved: resolved,
  });

  if (error) throw error;
}

export async function createAnswer(postId: string, body: string, password: string): Promise<void> {
  const {error} = await supabase.rpc("create_answer", {
    p_post_id: postId,
    p_body: body,
    p_password: password,
  });

  if (error) throw error;
}

interface UpdatePostInput {
  title: string;
  body: string;
  code: string;
  codeLanguage: string;
  tags: string[];
  password: string;
}

export async function updatePost(id: string, input: UpdatePostInput): Promise<void> {
  const {error} = await supabase.rpc("update_post", {
    p_id: id,
    p_title: input.title,
    p_body: input.body,
    p_code: input.code || null,
    p_code_language: input.codeLanguage || null,
    p_tags: input.tags,
    p_password: input.password,
  });

  if (error) throw error;
}

export async function deletePost(id: string, password: string): Promise<void> {
  const {error} = await supabase.rpc("delete_post", {
    p_id: id,
    p_password: password,
  });

  if (error) throw error;
}

export async function updateAnswer(id: string, body: string, password: string): Promise<void> {
  const {error} = await supabase.rpc("update_answer", {
    p_id: id,
    p_body: body,
    p_password: password,
  });

  if (error) throw error;
}

export async function deleteAnswer(id: string, password: string): Promise<void> {
  const {error} = await supabase.rpc("delete_answer", {
    p_id: id,
    p_password: password,
  });

  if (error) throw error;
}
