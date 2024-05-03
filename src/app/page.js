'use client'
import Image from "next/image";
import { SessionProvider, signIn, signOut, useSession } from 'next-auth/react';

export default function Home() {
  return (
    <SessionProvider>
      <Content />
    </SessionProvider>
  );
}
function Content() {
  const { data: session } = useSession();

  return (
    <div>
      {!session ? (
        <button onClick={() => signIn()}>Sign in with Keycloak</button>
      ) : (
        <div>
          <p>Signed in as {session.user.name}</p>
          <button onClick={() => signOut()}>Sign out</button>
        </div>
      )}
    </div>
  );
}