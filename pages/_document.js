import { Html, Head, Main, NextScript } from "next/document";
import {
  SafeAuthKit,
  SafeAuthProviderType,
  SafeAuthEvents,
} from "@safe-global/auth-kit";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
