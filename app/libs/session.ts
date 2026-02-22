import { createCookieSessionStorage } from "react-router";

type SessionData = {
  token: string;
};

type FlashData = {
  message?: string;
};

export const { getSession, commitSession, destroySession } =
  createCookieSessionStorage<SessionData, FlashData>({
    cookie: {
      // ini yang wajib
      name: "userSession",

      // sisanya ini opsional
      httpOnly: true,
      path: "/",
      sameSite: "lax",
      secure: process.env.BUN_ENV === "production",
      maxAge: 60 * 60 * 24 * 7,
    },
  });
